#!/bin/bash
NAMESPACE="${1:-codebase_b296_app}"
shift 2>/dev/null || true

DETACH=""
RM_FLAG="--rm"

for arg in "$@"; do
    case "$arg" in
        -d|--detach) DETACH="-d" ;;
        -k|--keep) RM_FLAG="" ;;
    esac
done

# Mount the current directory as /workspace and run interactive shell
docker run $DETACH -it $RM_FLAG -v "$(pwd):/workspace" "$NAMESPACE"