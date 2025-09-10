#!/bin/bash

# Build Docker image
docker build -t poseidon:local ./app

# Load image into kind cluster
kind load docker-image poseidon:local --name dev

# Deploy with Helm
helm upgrade --install poseidon ./poseidon-chart

# Port-forward service
kubectl port-forward svc/poseidon 8080:80
