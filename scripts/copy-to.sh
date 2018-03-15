#!/bin/sh
$(npm bin)/mkdirp $1
$(npm bin)/ncp $2 "$1/$(basename $2)"