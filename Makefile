install: npm install

start:
	npm start

build:
	rm -rf dist
	npm run build

lint:
	npm run eslint
