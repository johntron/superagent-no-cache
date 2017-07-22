
build: components index.js
	@component build --dev

components: component.json
	@component install --dev

test:
	mocha

clean:
	rm -fr build components template.js

.PHONY: test clean
