#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
OUT_ZIP="${ROOT_DIR}/artifact.zip"
BASE64_FILE="${OUT_ZIP}.base64"

zip -r -q "$OUT_ZIP" . -x "node_modules/*" "dist/*" ".git/*"
base64 "$OUT_ZIP" > "$BASE64_FILE"

echo "Created: $OUT_ZIP"
echo "Base64: $BASE64_FILE"
