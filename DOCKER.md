# Running Playwright tests in Docker (project: CPWTS)

This document shows how to build and run the project's Playwright tests inside Docker on Windows (PowerShell). The repository includes a `Dockerfile` based on the Playwright official image so browsers and dependencies are preinstalled.

Prerequisites
- Docker Desktop installed and running.
- At least 4GB RAM for browser containers.

Build the image

Open PowerShell in the project root (`c:\Users\prave\Videos\CyientPW`) and run:

```powershell
docker build -t cpwts-playwright .
```

Run tests (default: all tests)

```powershell
docker run --rm cpwts-playwright
```

Run a single test or a filtered run

You can pass arguments to `npx playwright test` by specifying them as the container command. Example: run the test with title matching "Mock GET API":

```powershell
docker run --rm cpwts-playwright npx playwright test -g "Mock GET API"
```

Open an interactive shell inside the image (for debugging)

```powershell
docker run --rm -it --entrypoint /bin/bash cpwts-playwright
```

Using docker-compose

Build and run using `docker-compose` (if you prefer Compose):

```powershell
# Build
docker-compose build
# Run default command
docker-compose run --rm playwright
```

Notes and tips
- The image is built with everything copied into it. If you change code locally, rebuild the image.
- You can mount the code directory into the container for iterative development, but be careful: mounting may override dependencies installed inside the image. If you do mount, prefer running `npm ci` inside the container or use a development Dockerfile.
- If your CI sets `CI=true` the Playwright tests run in headless mode by default (as expected in containers).

Limitations
- I cannot run Docker commands from this environment; follow the above steps locally on your machine where Docker is available.
