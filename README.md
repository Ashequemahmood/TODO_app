download the material as a zip file from this repo and unzip the file
cd ui
npm install
In case you want to be able to code in Svelte 5 do npm install svelte@next to get the latest Svelte 5 preview updates
npm install postgres (for postgres database client)
cd ..
start docker desktop (or make sure your docker engine is running)
docker compose up --build

FOR ARM64 or Apple M1:
(STEP 8 + NEXT)
Needed to get the docer ui container working
FOR ARM64 or Apple M1
Need to do some tricks first on the UI container.
Go to ui folder.
Run the following commands:
docker run -it -v .:/app/ node:lts-iron bash
cd app
npm i @rollup/rollup-linux-arm64-gnu
Now you can go back to main level to run docker compose up --build and all works. Also remember for the api to use the ARM64 lukechannings image and also flyway in yml instead of using the amd image, use image: flyway/flyway and it will select the latest image that will also support arm64

For Mac Os Intel:
(STEP 8 + NEXT)
(if it say: cant not find module: @rollup/rollup-linux-x64-musl)
Need to do some tricks first on the UI container.
Go to ui folder.
Run the following commands:
docker run -it -v .:/app/ node:lts-iron bash
cd app
Npm i @rollup/rollup-linux-x64-musl

(NEXT)
Now delete all containers ( easy to do using desktop)
run docker compose up command again (now the ui container will be fixed and working)
open localhost:5173 using your browser
