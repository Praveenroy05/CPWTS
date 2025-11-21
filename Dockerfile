FROM mcr.microsoft.com/playwright:focal

WORKDIR /usr/src/app

# Copy package manifests and install dependencies first to leverage Docker cache
COPY package*.json ./
RUN npm ci --silent

# Copy project files and set correct ownership for the playwright user in the base image
COPY --chown=pwuser:pwuser . .

# Run as the non-root `pwuser` provided by the Playwright base image
USER pwuser

# Default command: run all tests. Override at runtime to run specific tests.
CMD ["npx", "playwright", "test"]
