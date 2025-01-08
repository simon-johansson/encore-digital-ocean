#!/bin/sh

curl --request POST \
  --url https://backboard.railway.com/graphql/v2 \
  --header 'Authorization: Bearer 3e392dba-86be-465d-82b1-cffc9a0bf04d' \
  --header 'Content-Type: application/json' \
  --data '{"query":"query { me { name email } }"}'
