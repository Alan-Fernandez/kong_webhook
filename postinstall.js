// postinstall.js
function log(...messages) {
  // eslint-disable-next-line no-console
  console.log(...messages);
}

function error(...messages) {
  // eslint-disable-next-line no-console
  console.error(...messages);
}

if (process.env.NODE_ENV === 'production') {
  const { exec } = require('child_process');
  exec('npm run migrations:run', (execError, stdout, stderr) => {
    if (execError) {
      error(`exec error: ${execError}`);
      return;
    }
    log(`stdout: ${stdout}`);
    if (stderr) {
      error(`stderr: ${stderr}`);
    }
  });
}
