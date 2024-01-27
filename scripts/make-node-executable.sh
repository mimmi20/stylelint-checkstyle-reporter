#!/bin/bash

if [ -z "$1" ]; then
    echo "Usage: $0 <file_path>"
    exit 1
fi

FILE=$1
SHEBANG='#!/usr/bin/env node'

if ! head -n 1 "$FILE" | grep -q "^$SHEBANG"; then
    TEMP_FILE=$(mktemp)
    echo -e "$SHEBANG\n$(cat "$FILE")" >"$TEMP_FILE" && mv "$TEMP_FILE" "$FILE"
fi

chmod +x "$FILE"
