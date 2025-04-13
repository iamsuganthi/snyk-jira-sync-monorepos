### How to run:
Install jira-tickets-for-new-vulns from https://github.com/snyk-tech-services/jira-tickets-for-new-vulns
You can download the binary from the github link above. 

### Setup: 
1) Create .env file: \
```export SNYK_TOKEN=*********-*****-*****```

2) Update projectJiraMapping in new-issues-to-jira.js:
   ```{
      "<snyk-project-id-1>": "Jira project Key (copy from your Jira board URL - typically a few chars in upper case",
      "<snyk-project-id-2>": "Jira project Key (copy from your Jira board URL - typically a few chars in upper case"
   }```
3) Update binary in line 26 to use the binary that you have installed: \
   `snyk-jira-sync-macos` or `snyk-jira-sync-linux`

### Run the script: 
`node new-issues-to-jira.js`
