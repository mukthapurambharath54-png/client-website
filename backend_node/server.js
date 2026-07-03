const express = require('express');
const cors = require('cors');
const fs = require('fs');
const { google } = require('googleapis');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '1mb' }));

const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const GOOGLE_SA_FILE = process.env.GOOGLE_SA_FILE;
const GOOGLE_SA_JSON = process.env.GOOGLE_SA_JSON;
const SHEET_NAME = process.env.SHEET_NAME || 'Sheet1';

const HEADER_DEFINITIONS = [
  { key: 'registrationType', label: 'Registration Type' },
  { key: 'submittedAt', label: 'Submitted At' },
  { key: 'name', label: 'Name' },
  { key: 'address', label: 'Address' },
  { key: 'ownerName', label: 'Owner / In-charge Name' },
  { key: 'email', label: 'Email' },
  { key: 'mobile', label: 'Mobile Number' },
  { key: 'companyName', label: 'Company Name' },
  { key: 'doctorName', label: 'Doctor Name' },
  { key: 'qualification', label: 'Qualification' },
  { key: 'kmcRegNumber', label: 'KMC Reg Number' },
  { key: 'kmcUpload', label: 'KMC Upload File' },
  { key: 'diNumber1', label: 'DI Number 1' },
  { key: 'diNumber2', label: 'DI Number 2' },
  { key: 'diNumber3', label: 'DI Number 3' },
  { key: 'validity', label: 'Validity' },
  { key: 'gstNumber', label: 'GST Number' },
  { key: 'patientName', label: 'Patient Name' },
  { key: 'doctorQualification', label: 'Doctor Qualification' },
  { key: 'hospitalName', label: 'Hospital Name' },
  { key: 'prescription', label: 'Prescription File Name' },
];

const HEADER_KEYS = HEADER_DEFINITIONS.map((item) => item.key);
const HEADER_LABELS = HEADER_DEFINITIONS.map((item) => item.label);

const HEADER_GROUPS = [
  { label: 'Common', startIndex: 0, endIndex: 6 },
  { label: 'Company Representative', startIndex: 7, endIndex: 8 },
  { label: 'Doctor', startIndex: 8, endIndex: 12 },
  { label: 'Drug License', startIndex: 12, endIndex: 17 },
  { label: 'Patient', startIndex: 17, endIndex: 21 },
];

let sheetsApi = null;
let lastPayload = null;
let sheetId = null;

async function initSheets() {
  if (!SPREADSHEET_ID) {
    console.warn('SPREADSHEET_ID not set — Google Sheets disabled');
    return;
  }

  let creds = null;
  try {
    if (GOOGLE_SA_FILE) {
      creds = JSON.parse(fs.readFileSync(GOOGLE_SA_FILE, 'utf8'));
    } else if (GOOGLE_SA_JSON) {
      creds = JSON.parse(GOOGLE_SA_JSON);
    } else {
      console.warn('No Google service account credentials provided');
      return;
    }

    const jwtClient = new google.auth.JWT({
      email: creds.client_email,
      key: creds.private_key,
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });
    await jwtClient.authorize();
    sheetsApi = google.sheets({ version: 'v4', auth: jwtClient });

    const info = await sheetsApi.spreadsheets.get({ spreadsheetId: SPREADSHEET_ID });
    const sheet = info.data.sheets.find((sheet) => sheet.properties.title === SHEET_NAME);
    sheetId = sheet ? sheet.properties.sheetId : info.data.sheets[0].properties.sheetId;
    console.log(`Connected to spreadsheet: ${info.data.properties.title} on sheet ${SHEET_NAME} (${sheetId})`);
    await ensureSheetHeaderAndFormat();
  } catch (err) {
    console.error('Google Sheets init error:', err?.message || err);
    sheetsApi = null;
  }
}

function buildHeaderGroupRow() {
  return HEADER_GROUPS.flatMap((group) =>
    HEADER_KEYS.slice(group.startIndex, group.endIndex).map((_, index) => (index === 0 ? group.label : ''))
  );
}

function buildSheetHeaders() {
  return HEADER_LABELS;
}

function buildRowValues(payload) {
  return HEADER_KEYS.map((key) => {
    const value = payload[key];
    return value !== undefined && value !== null ? value : '';
  });
}

function rowsDiffer(currentRows, desiredRows) {
  if (!currentRows) return true;
  if (currentRows.length !== desiredRows.length) return true;
  for (let rowIndex = 0; rowIndex < desiredRows.length; rowIndex += 1) {
    const currentRow = currentRows[rowIndex] || [];
    const desiredRow = desiredRows[rowIndex];
    if (currentRow.length !== desiredRow.length) return true;
    for (let colIndex = 0; colIndex < desiredRow.length; colIndex += 1) {
      if ((currentRow[colIndex] || '') !== desiredRow[colIndex]) return true;
    }
  }
  return false;
}

async function ensureSheetHeaderAndFormat() {
  if (!sheetsApi || !sheetId) return;

  const headerRange = `${SHEET_NAME}!1:2`;
  const headerResp = await sheetsApi.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: headerRange });
  const currentRows = headerResp.data.values || [];
  const groupRow = buildHeaderGroupRow();
  const headerRow = buildSheetHeaders();
  const desiredRows = [groupRow, headerRow];

  if (rowsDiffer(currentRows, desiredRows)) {
    await sheetsApi.spreadsheets.values.update({
      spreadsheetId: SPREADSHEET_ID,
      range: headerRange,
      valueInputOption: 'RAW',
      resource: { values: desiredRows },
    });
  }

  await sheetsApi.spreadsheets.batchUpdate({
    spreadsheetId: SPREADSHEET_ID,
    resource: {
      requests: [
        {
          updateSheetProperties: {
            properties: { sheetId, gridProperties: { frozenRowCount: 2 } },
            fields: 'gridProperties.frozenRowCount',
          },
        },
        {
          repeatCell: {
            range: { sheetId, startRowIndex: 0, endRowIndex: 1 },
            cell: {
              userEnteredFormat: {
                textFormat: { bold: true },
                backgroundColor: { red: 0.8, green: 0.9, blue: 1 },
              },
            },
            fields: 'userEnteredFormat(textFormat,backgroundColor)',
          },
        },
        {
          repeatCell: {
            range: { sheetId, startRowIndex: 1, endRowIndex: 2 },
            cell: {
              userEnteredFormat: {
                textFormat: { bold: true },
                backgroundColor: { red: 0.94, green: 0.94, blue: 0.96 },
              },
            },
            fields: 'userEnteredFormat(textFormat,backgroundColor)',
          },
        },
      ],
    },
  });
}

app.post('/api/register', async (req, res) => {
  const payload = req.body || {};
  // log incoming registration for troubleshooting
  try {
    console.log('[/api/register] incoming payload:', JSON.stringify(payload));
  } catch (e) {
    console.log('[/api/register] incoming payload (non-serializable)');
  }
  lastPayload = payload;
  if (!sheetsApi) return res.status(503).json({ error: 'Google Sheets not configured' });

  try {
    const headerRange = `${SHEET_NAME}!1:1`;
    const headerResp = await sheetsApi.spreadsheets.values.get({ spreadsheetId: SPREADSHEET_ID, range: headerRange });
    const currentHeaders = (headerResp.data.values && headerResp.data.values[0]) || [];
    const desiredHeaders = buildSheetHeaders();

    const headersNeedUpdate =
      currentHeaders.length !== desiredHeaders.length ||
      currentHeaders.some((header, index) => header !== desiredHeaders[index]);

    if (headersNeedUpdate) {
      await sheetsApi.spreadsheets.values.update({
        spreadsheetId: SPREADSHEET_ID,
        range: headerRange,
        valueInputOption: 'RAW',
        resource: { values: [desiredHeaders] },
      });
    }

    const row = buildRowValues(payload);
    await sheetsApi.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: SHEET_NAME,
      valueInputOption: 'USER_ENTERED',
      resource: { values: [row] },
    });

    return res.json({ status: 'ok' });
  } catch (err) {
    console.error('Failed to append row:', err?.message || err);
    return res.status(500).json({ error: 'Failed to append to sheet' });
  }
});

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/api/last', (req, res) => {
  if (!lastPayload) return res.status(404).json({ error: 'no payload received yet' });
  return res.json({ lastPayload });
});

const PORT = process.env.PORT || 4000;

initSheets().then(() => {
  app.listen(PORT, () => console.log(`Backend (Node) listening on http://localhost:${PORT}`));
});
