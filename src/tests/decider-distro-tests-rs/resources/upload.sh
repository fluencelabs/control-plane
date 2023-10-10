#!/usr/bin/env bash
set -o errexit -o nounset

cd $(dirname "$0")

for proj in $(find . -mindepth 1 -type d)
do
	ipfs add --cid-version 1 --hash sha2-256 -r "$proj" --api /ip4/127.0.0.1/tcp/5001
done

echo "DONE"

API=/ip4/127.0.0.1/tcp/5001

ipfs ls bafybeigkrlu4isbagglvc5lhcuxhq6i5o6hjyvnfqcjct72hspbydupxde --api $API --timeout 10s


echo "check uploaded file: cat"
ipfs cat bafkreifolrizgmusl4y7or5e5xmvr623a6i3ca4d5rwv457cezhschqj4m --api /ip4/127.0.0.1/tcp/5001 --timeout 10s

echo -n "\n\ncheck uploaded file: get"

ipfs get -o /tmp/test.json bafkreifolrizgmusl4y7or5e5xmvr623a6i3ca4d5rwv457cezhschqj4m --api /ip4/127.0.0.1/tcp/5001 --timeout 10s

echo -n "\n\ncheck uploaded file: get"

ipfs get -o /tmp/test.wasm bafkreici665k2iypfxyxgc7zh6wyho6gqogyald7zz3k6tsjzxcuhgpx7u --api /ip4/127.0.0.1/tcp/5001 --timeout 60s
