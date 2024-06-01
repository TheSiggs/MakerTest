NVM_DIR := $(HOME)/.nvm

help: # Lists commands
	@awk 'BEGIN { print "Available commands:"; } \
		 /^##/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 3); next; } \
		 /^[a-zA-Z0-9_-]+:/ { \
			 split($$0, parts, /:.*#/); \
			 cmd = parts[1]; \
			 sub(/^[ \t]+/, "", cmd); \
			 desc = substr($$0, index($$0, "#") + 1); \
			 if (desc != "") \
				 printf "\033[36m%-30s\033[0m %s\n", cmd, desc; \
		 }' $(MAKEFILE_LIST)


set-npm: # Sets npm to v20.13.1 using nvm
	if [ -s "$(NVM_DIR)/nvm.sh" ]; then \
		. "$(NVM_DIR)/nvm.sh"; \
		nvm use lts/iron; \
	fi

