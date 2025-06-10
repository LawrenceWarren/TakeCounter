.PHONY: devbuild
devbuild:
	cd web && npm install
	cd electron && npm install

.PHONY: run
run:
	cd electron && npm start
