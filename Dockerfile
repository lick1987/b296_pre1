FROM denoland/deno:alpine

# The deno user already exists in the base image

# Set working directory
WORKDIR /workspace

# Change ownership of workspace
RUN chown -R deno:deno /workspace

# Switch to non-root user
USER deno

# Set default shell
SHELL ["/bin/sh", "-c"]

# The container starts with an interactive shell for development
CMD ["/bin/sh"]