install: npm install

start:
	npm start

build:
	rm -rf dist
	npm run build

lint:
	npm run eslint

prettier:
	npm run prettier

test:
	npm run cypress

test-dev:
	npm run cypress-dev
