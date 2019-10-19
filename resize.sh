#!/bin/bash

for size in 16 32 48 128
do
  sips -Z ${size} resources/icon.png --out src/images/icon${size}.png
done
