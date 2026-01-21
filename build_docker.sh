#!/bin/bash
NAMESPACE="${1:-codebase_b296_app}"
docker build -t "$NAMESPACE" .