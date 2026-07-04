# Here are your Instructions

## Deployment

### Frontend (Vercel)

1. Push the repository to GitHub.
2. In Vercel, create a new project from the frontend folder.
3. Use `npm install` as the install command (Vercel will run this in `frontend`).
4. Use `npm run build` as the build command.
5. Use `build` as the output directory.
6. Vercel will deploy the React app and serve all frontend routes via `frontend/vercel.json`.

### Backend (Render)

1. In Render, create a new Web Service from the repository.
2. Set the root directory to `backend_node`.
3. Use `npm install && npm start` as the build command.
4. Use `npm start` as the start command.
5. Set the service port to `4000` or leave `PORT` unset since the app defaults to `4000`.
6. Add the following environment variables in Render:
   - `SPREADSHEET_ID`
   - `SHEET_NAME`
   - `GOOGLE_SA_JSON`

### Notes

- The backend serves the built frontend from `frontend/build` when deployed together.
- Use `.env.example` as a template for backend environment variables.
