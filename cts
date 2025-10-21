#!/bin/bash

# Check if a filename was provided
if [ -z "$1" ]; then
  echo "Usage: ./cts <filename>"
  exit 1
fi

# Source file
SOURCE_FILE="$1"

# Destination directory
DEST="/sdcard/Download"

# Check if the file exists
if [ ! -f "$SOURCE_FILE" ]; then
  echo "Error: File '$SOURCE_FILE' does not exist."
  exit 1
fi

# Copy the file
cp "$SOURCE_FILE" "$DEST"

# Check if the copy was successful
if [ $? -eq 0 ]; then
  echo "File copied to $DEST successfully."
else
  echo "Error copying file."
  exit 1
fi
