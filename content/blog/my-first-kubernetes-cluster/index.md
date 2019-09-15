---
layout: post
title: "My first Kubernetes cluster with minikube"
date: 2019-09-14
excerpt_separator: <!--more-->
tags:
  - devops
  - kubernetes
  - docker
  - minikube
---

<meta property="og:title" content="My first Kubernetes cluster with minikube" />
<meta property="og:type" content="article" />
<meta property="og:image" content="./post.png" />

So I'm in the process of trying to learn more about Docker and Kubernetes since I feel like its something that would be useful in a professional setting. Usually when I work on side projects I'll use serverless due to its ease of setup and use however in a professional setting there are often more considerations that prevent us from going completely serverless.

I feel like Kubernetes is sort of an intermediate step between running your own servers and going completely serverless. It allows you to orchestrate your Docker containers and start to think about segmenting your workloads into narrowly focused chunks. As long as you can run your current workload using Docker, you can leverage Kubernetes to manage it which makes it ideal for those who want some of the benefits of serverless such as lower management overhead but have been spooked by talks of cloud lock-in.

I've put together a bit of [a demo repository](https://github.com/timveletta/demo-web-api) which is a .NET Core web API which I have containerised using Docker and I am orchestrating that container locally using [minikube](https://github.com/kubernetes/minikube). This alone isn't particularly useful since there is no external calls being made to the service but understanding the difference between a cluster, deployment and pod and how to they all to work together is useful.

## Running your local Docker image on minikube

First we need to start (or restart) our local Kubernetes cluster by running

`minikube start`

This command creates and configures a Virtual Machine that runs a single-node Kubernetes cluster.

Next we need to set our environment variables so that we can pull the local images using

`eval $(minikube docker-env)`

This just tells minikube to reuse the existing Docker daemon that we have installed locally.

We then create a Kubernetes deployment using

`kubectl run <deployment name> --image=<image name> --port=<port the image runs on>`

`kubectl` is the command line interface for running commands against Kubernetes clusters. A deployment is a set of configuration which defines what a single set of pods looks like. By default, Kubernetes looks for the image that you set in the `--image` parameter on Docker Hub however we want it to find our local image so we have to then edit our deployment using

`kubectl edit deployment <deployment name>`

Scroll down and find where it says `imagePullPolicy` and set it to `Never`. This tells Kubernetes to only look locally for the image.

To access the Kubernetes deployment we then have to expose it as a service using

`kubectl expose deployment <deployment name> --type=NodePort`

The deployment pod is now exposed but we have to wait for it to show up before we can access it via the service we created. A **[pod](https://kubernetes.io/docs/concepts/workloads/pods/pod/)** is a single, deployable unit of computing that runs our container.

We can view the status of our currently running pods using

`kubectl get pod`

If the status is `ErrImageNeverPull` it just means it can't find our local Docker image so run `docker images` to see if the expected image is in the list and if not you will need to rebuild your image.

Once the service is created we can use `minikube service <deployment name> --url` to get the URL that it is exposed on.

Overall, being able to run our local image isn't that useful but its a good start in understanding Kubernetes so I can start building more useful clusters with it in the future.
