## Docker

- Docker is a platform-as-a-service, which helps consistently build, test and ship applications in a standarized unit called containers.
- These containers contain everything that the software needs to run like libraries, files, environments, etc.
- These containers can be run on any machine where it create an independent environment to run the application.

## Containers vs Virtual Machines

- Containers are isolated environment for running an application whereas virtual machine are abstraction of a machine.
- Virtual machines are slow to start, takes full blown OS, physical memory while Containers are lightweight, share the same OS of the host and hence are much faster.

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

```cpp
// Build Docker Image
docker build -t <image_name> .

// List Docker Images
docker image ls

// Run a Docker Image
docker run <image_name>

// Run a Docker Image in Detached mode
docker run -d <image_name>

// Run a Docker Image with custom container name
docker run -d --name <container_name> <image_name>

// Run a Docker Image with environment variable
docker run -d --e <variable_name>=<variable_value> <image_name>

// Run a Docker Image in a network
docker run -d --net <network_name> <image_name>

// Run a Docker Image with port binding
docker run -p hostPort:containerPort <image_name>

// Run a Docker Image Interactively
docker run -it <image_name> 

// Pull a Docker Image from DockerHub
docker pull <image_name>

// List running containers
docker ps 

// Stop a Running Container
docker stop <container_id>

// Restart a container
docker start <container_id>

// See container logs
docker logs <container_id>

// Going inside the file system of a container
docker exec -it <container_id> <file_path>

// Create a docker network
docker network create <network_name>

// List docker networls
docker network ls

// creating a docker network
docker network create mongo-network

// docker login
docker login

// docker rename image (when pushing to private repositories like AWS ECR (elastic container repository))
docker tag <image_name> <new_image_name>

// docker push image
docker push <image_name>

// starting mongo
docker run -d \        
-p 27017:27017 \
-e MONGO_INITDB_ROOT_USERNAME=admin \
-e MONGO_INITDB_ROOT_PASSWORD=password \
--name mongo \
--net mongo-network \
mongo

// starting mongo-express
docker run -d \        
-p 8081:8081 \
-e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
-e ME_CONFIG_MONGODB_ADMINPASSWORD=password \
-e ME_CONFIG_MONGODB_SERVER=mongodb \
--name mongo-express \
--net mongo-network \
mongo-express

// docker compose (starting and shutting down containers)
docker-compose -f <docker_compose_name.yaml> up
docker-compose -f <docker_compose_name.yaml> down
```

## Docker Volume
Folder in physical host system is mounted into virtual file system of docker
There are 3 ways of creating volume
1. Host Volumes => docker run -v hostFolderLocation:containerFolderLocation
2. Anonymous Volumes => docker run -v containerFolderLocation
3. Named Volumes => docker run -v hostFolderName:containerFolderLocation