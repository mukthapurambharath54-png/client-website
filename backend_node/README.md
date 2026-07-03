Node backend for appending registrations to Google Sheets

Setup

1. Copy `.env.template` to `.env` and fill values (`SPREADSHEET_ID` and credentials).
2. Install dependencies:

```powershell
Set-Location backend_node
npm install
```

3. Start server:

```powershell
npm run start
```

Frontend integration

- Set `REACT_APP_REGISTER_WEBHOOK_URL` in `frontend/.env` to `http://localhost:4000/api/register` and restart the dev server.
