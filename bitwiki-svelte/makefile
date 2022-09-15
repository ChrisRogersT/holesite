initnvm:
	curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

initnode: ~/.nvm
	nvm install 18.7.0

install:
	npm install

clean:
	rm -rf node_modules
	rm -rf .svelte-kit
	rm -rf src/google_credentials_keyfile.json

run: 
	npm run dev