# Bit Wiki svelte.js implementation
## tooling
*Required*
- node for running and compiling svelte/svelte-kit
*Optional*
- nvm for installing and managing node versions
- make for running make file commands

## suggested setup
- ensure make is available on your system (can run `make --version`)
- - if not installed and you are on a linux machine run `sudo apt install make`
- run `make initnvm`
- run `make initnode`
- run `make install`
- run `make run`
- local dev server should now be running

## tutorials
I've added examples of the basics for svelte and svelte-kit under the tutorial route. However it isn't exhaustive and doesn't have the explanations the actual tutorials do. See [svelte](https://svelte.dev/tutorial/basics) and [svelte-kit](https://kit.svelte.dev/docs/introduction). 

## deployment
This project is using vercel and its built in git integrations to deploy. In the github UI there should be elements linking to the "production" url. Any commit to origin/main will cause a deployment to update. Vercel will also create "testing" deployments of other branches that are created. 