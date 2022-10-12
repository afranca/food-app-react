# food-app-react


# Build Docker image
docker build -t food-app:1.0 .

# Create Docker container
docker run -p 3000:3000 --name food-app-container food-app:1.0

# Start/Stop Container
docker start [container id]
docker  stop [container id]

# How to remove Image and Container
## list stopped containers
    docker ps -a            
## remove container
    docker rm [image id]
## list local images    
    docker images
## remove image     
    docker rmi [image id]
