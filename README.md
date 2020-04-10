# Frosty TODO-list
## A local development environment demo

This is a demo of a local development environment setup using:
- kubernetes (using docker-for-mac but minikube could also be used)
  - Ingress
  - nginx-ingress controller
- skaffold

## clone && cd

## install nginx ingress controller on docker-for-mac
https://kubernetes.github.io/ingress-nginx/deploy/#docker-for-mac
```
$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.30.0/deploy/static/mandatory.yaml
$ kubectl apply -f https://raw.githubusercontent.com/kubernetes/ingress-nginx/nginx-0.30.0/deploy/static/provider/cloud-generic.yaml
```

## start
```
$ skaffold dev
```
