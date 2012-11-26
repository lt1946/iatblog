#!/bin/sh -e
git add * && git commit -am "$1" && git push
