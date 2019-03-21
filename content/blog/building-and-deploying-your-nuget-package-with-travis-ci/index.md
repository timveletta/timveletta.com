---
layout: post
title: "Building, Testing and Deploying your Nuget package with Travis CI"
date: 2017-04-03
excerpt_separator:  <!--more-->
tags: 
  - nuget
  - c#
  - travis ci, 
  - bggcsharp
---

<meta property="og:image"
    content="http://timveletta.com/img/travis-ci.png" />

This all came about because I am building a Board Game Geek XML API wrapper in C# and wanted to be able to commit a change, build and upload the new version of the package to Nuget. [You can view the repository here.](https://github.com/Timmahh/BGGCSharp) **If you want to get straight into it without diving indepth, my .travis.yml configuration file is as follows**

```
language: csharp
solution: <Project Name>.sln
install:
  - curl -L -o nuget.exe https://dist.nuget.org/win-x86-commandline/latest/nuget.exe
  - mono nuget.exe restore <Project Name>.sln
  - mono nuget.exe install NUnit.Runners -Version 3.6.1 -OutputDirectory testrunner
script:
  - xbuild /p:Configuration=Release <Project Name>.sln
  - mono ./testrunner/NUnit.ConsoleRunner.3.6.1/tools/nunit3-console.exe ./<Project Name>Test/bin/Release/<Project Name>Test.dll
  - mono nuget.exe pack ./<Project Name>/<Project Name>.nuspec -Version $MAJOR_VERSION_NUMBER.$MINOR_VERSION_NUMBER.$TRAVIS_BUILD_NUMBER
  - mono nuget.exe setApiKey $NUGET_API_KEY -Source https://www.nuget.org -Verbosity quiet
  - mono nuget.exe push <Project Name>.$MAJOR_VERSION_NUMBER.$MINOR_VERSION_NUMBER.$TRAVIS_BUILD_NUMBER.nupkg -Source https://www.nuget.org/api/v2/package  
``` 

**Also it was quite important that my nuspec file had the following lines. [You can view my full nuspec file here.](https://raw.githubusercontent.com/Timmahh/BGGCSharp/master/BGGCSharp/BGGCSharp.nuspec)**

```
<files>
     <file src="bin/Release/<Project Name>.dll" target="lib/<Target runtime>" />
</files>
```

The first 2 lines of the file should be fairly self explanatory and are required for telling Travis about your project. I'll start by going into the **install** section of the file.

```
  - curl -L -o nuget.exe https://dist.nuget.org/win-x86-commandline/latest/nuget.exe
  - mono nuget.exe restore <Project Name>.sln
  - mono nuget.exe install NUnit.Runners -Version 3.6.1 -OutputDirectory testrunner
```
These lines simply set up the necessary dependencies to build your project, namely the latest version of Nuget, any dependencies for your project and the NUnit test runner. I know it may be considered bad practice to bring in the latest version of Nuget for this however until it lets me down, I don't think I'll change it. 

The more interesting part comes in the **script** configuration.

```
  - xbuild /p:Configuration=Release <Project Name>.sln
  - mono ./testrunner/NUnit.ConsoleRunner.3.6.1/tools/nunit3-console.exe ./<Project Name>Test/bin/Release/<Project Name>Test.dll
```

The first two lines simply build the library using xbuild and runs the unit tests for the project. If you have no tests you can simply remove all the lines that reference NUnit. 

**Note about using different versions of NUnit** - You shouldn't have a problem most of the time using a different version however I know between versions 2 and 3, they completely changed the directory structure so it did take a bit of fiddling to find the correct test runner.

```
  - mono nuget.exe pack ./<Project Name>/<Project Name>.nuspec -Version $MAJOR_VERSION_NUMBER.$MINOR_VERSION_NUMBER.$TRAVIS_BUILD_NUMBER
```

This line simply builds the Nuget package based off your nuspec configuration. It is important to note here that you cannot just reference your csproj as you may do when running on Windows since this feature is not supported as of yet on Mono. I have also added environment variables in Travis for MAJOR_VERSION_NUMBER and MINOR_VERSION_NUMBER and then I use the automatically generated TRAVIS_BUILD_NUMBER for generating a full version number.

```
  - mono nuget.exe setApiKey $NUGET_API_KEY -Source https://www.nuget.org -Verbosity quiet
  - mono nuget.exe push <Project Name>.$MAJOR_VERSION_NUMBER.$MINOR_VERSION_NUMBER.$TRAVIS_BUILD_NUMBER.nupkg -Source https://www.nuget.org/api/v2/package  
```

The final 2 lines relate to uploading your package to Nuget. The first requires you to have set your NUGET_API_KEY in the environment variables for Travis. Also if you have a public build it is **very important** that you include the ```-Verbosity quiet``` option in this step since otherwise your API key gets exposed in your build log.

The final line will simply push your Nuget package to the server.

I hope you have enjoyed my quide to building, testing and deploying your Nuget packages with Travis CI and if you have any questions or comments, feel free to let me know below.
