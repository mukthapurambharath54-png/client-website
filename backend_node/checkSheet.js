const fs = require('fs');
const { google } = require('googleapis');

const env = Object.fromEntries(
  fs.readFileSync('.env', 'utf8')
    .split(/\r?\n/)
    .filter(Boolean)
    .map((line) => {
      const idx = line.indexOf('=');
      return [line.slice(0, idx), line.slice(idx + 1)];
    })
);

const saJsonRaw = env.GOOGLE_SA_JSON.replace(/^'/, '').replace(/'$/, '');
const creds = JSON.parse(saJsonRaw);
const jwtClient = new google.auth.JWT({
  email: creds.client_email,
  key: creds.private_key.replace(/\\n/g, '\n'),
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

(async () => {
  await jwtClient.authorize();
  const sheets = google.sheets({ version: 'v4', auth: jwtClient });
  const resp = await sheets.spreadsheets.values.get({
    spreadsheetId: env.SPREADSHEET_ID,
    range: 'Sheet1!A1:Z20',
  });
  console.log(JSON.stringify(resp.data, null, 2));
})();
