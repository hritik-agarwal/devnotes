## Docker

- Docker is a platform-as-a-service, which helps consistently build, test and ship applications in a standarized unit called containers.
- These containers contain everything that the software needs to run like libraries, files, environments, etc.
- These containers can be run on any machine where it create an independent environment to run the application.

## Containers vs Virtual Machines

- Containers are isolated environment for running an application whereas virtual machine are abstraction of a machine.
- Virtual machines are slow to start, takes full blown OS, physical memory while Containers are lightweight, share the same OS of the host and hence are much faster.

## Working of Docker

## Installing Docker

## Development Workfile

Application => Dockerize it
Add a dockerfile which is used by docker to package it into an image.
This image contains everything that our app will need to run.
Eg.
cut-down OS
runtime environment (node)
application files
3rd party libraries
environment vairables
Then docker uses the image to start a container and run the application in it.

## Docker Commands

docker build -t <name> .
docker image ls
docker run <name>
docker run -it <name> // interactive container
docker pull <name>
