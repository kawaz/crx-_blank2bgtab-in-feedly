all:
	zip -r ../crx-_blank2bgtab-in-feedly-$(cat manifest.json | jq .version | sed 's/"//g').zip *
