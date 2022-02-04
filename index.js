const { executeCommand } = require('@pnp/cli-microsoft365');

executeCommand('status', { output: 'text' })
  .then(res => {
    if (res.stdout === 'Logged out') {
      return Promise.reject('Log in to Microsoft 365');
    }

    return executeCommand('spo site list', { output: 'json' });
  })
  .then(res => {
    const sites = JSON.parse(res.stdout);

    if (sites.length === 0) {
      return Promise.reject('No sites found');
    }

    const siteUrl = sites[0].Url;
    return executeCommand('spo web get', { webUrl: siteUrl, output: 'json' });
  })
  .then(res => {
    console.log(JSON.parse(res.stdout).Title);
  })
  .catch(err => console.error(err));