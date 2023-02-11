install:
		npm ci
lint:
		npx eslint .
gen:
		node bin/gendiff.js
test:
		NODE_OPTIONS=--experimental-vm-modules npx jest
test-coverage:
		NODE_OPTIONS=--experimental-vm-modules npx jest --coverage
