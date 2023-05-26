# Yeoman Volto App development

### Defensive settings for make:
#     https://tech.davis-hansson.com/p/make/
SHELL:=bash
.ONESHELL:
.SHELLFLAGS:=-xeu -o pipefail -O inherit_errexit -c
.SILENT:
.DELETE_ON_ERROR:
MAKEFLAGS+=--warn-undefined-variables
MAKEFLAGS+=--no-builtin-rules

# Project settings
DIR=$(shell basename $$(pwd))
ADDON ?= "@interaktiv/volto-download-block"

# Recipe snippets for reuse

# We like colors
# From: https://coderwall.com/p/izxssa/colored-makefile-for-golang-projects
RED=`tput setaf 1`
GREEN=`tput setaf 2`
RESET=`tput sgr0`


.PHONY: project
project:
	npm install -g yo
	npm install -g @plone/generator-volto
	npm install -g mrs-developer
	yo @plone/volto project --addon ${ADDON} --workspace "src/addons/${DIR}" --no-interactive
	ln -sf $$(pwd) project/src/addons/
	cp .project.eslintrc.js .eslintrc.js
	cd project && yarn
	@echo "-------------------"
	@echo "$(GREEN)Volto project is ready!$(RESET)"
	@echo "$(RED)Now run: cd project && yarn start$(RESET)"
