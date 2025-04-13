const { execSync } = require('child_process');
const snykToken = process.env.SNYK_TOKEN;
if (!snykToken) {
    console.error('Missing required environment variables');
    process.exit(1);
}

const projectJiraMapping =
    {
        "project-id-from-snyk": "JIRA board key something like ESTK copy from URL.. field before /boards/124", //package.json
        "another-project-id-from-snyk": "JIRA board key something like ESTK copy from URL.. field before /boards/124" //package.json
    }


// List of target IDs to process
const projectIds = Object.keys(projectJiraMapping);

// Iterate over each Snyk target and create tickets
projectIds.forEach((projectId) => {
    const jiraProjectKey = projectJiraMapping[projectId];

    console.log(`Creating tickets for target ${projectId} in Jira project ${jiraProjectKey}`);
    try {
        //Change the bin file name depending on what you install
        execSync(
            `snyk-jira-sync-macos --orgID=be280693-4468-446d-8bec-74c2d9adf95e --token=${snykToken} --jiraProjectKey=${jiraProjectKey} --jiraTicketType=Task --projectID=${projectId}`,
            { stdio: 'inherit' }
        );
    } catch (err) {
        console.error(`Error creating ticket for target ${projectId}`, err.message);
    }
});
