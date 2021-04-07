# demoapp-Docker-handson
## Language
NodeJS

## Description
To create containerized NodeJS app

## Usage
To build image and containerize
```
git clone git@github.com//vinaypillai59/samplePOC.git
docker build -t vinayp59/demoapp-vinay "samplePOC"
docker images demoapp-vinay:latest
docker run -p 90:8080 demoapp-vinay:latest
```

To create a service
```
docker swarm init
docker service create --replicas 2 --name serviceapp-vinay -p 80:8080 demoapp-vinay:latest
docker service ls
docker service ps serviceapp-vinay
```

To execute API
```
curl --url localhost:80/info
```



## Contributor

[Vinay Pillai][Vinay]

[Vinay]: mailto:Vinay.Pillai@anz.com
