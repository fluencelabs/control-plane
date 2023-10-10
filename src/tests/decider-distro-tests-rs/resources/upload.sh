#!/usr/bin/env bash
set -o errexit -o nounset

cd $(dirname "$0")

for proj in $(find . -mindepth 1 -type d)
do
	ipfs add --cid-version 1 --hash sha2-256 -r "$proj" --api /ip4/127.0.0.1/tcp/5001
done
