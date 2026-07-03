# Deployment Guide

## Frontend (Netlify)

1. Push the repo to GitHub.
2. Go to Netlify and create a new site from Git.
3. Select this repository.
4. Netlify will detect `netlify.toml` and use:
   - Base directory: `frontend`
   - Publish directory: `build`
   - Build command: `npm run build`
5. Add Netlify environment variable:
   - `REACT_APP_REGISTER_WEBHOOK_URL=https://your-backend-url.com/api/register`
6. Deploy.

## Backend (Any Node host / Docker)

### Option A: Deploy to a Node host (e.g. Render, Railway, Heroku)

1. Use the `backend_node` folder as the backend root.
2. Set the start command to `npm run start`.
3. Add environment variables:
   - `SPREADSHEET_ID`
   - `GOOGLE_SA_FILE` or `GOOGLE_SA_JSON`
   - `SHEET_NAME` (optional)
   - `PORT` (optional, usually 4000)
4. Deploy the service.

### Option B: Deploy with Docker

1. Use `backend_node/Dockerfile`.
2. Build the image:
   ```bash
   docker build -t zenex-backend backend_node
   ```
3. Run the container with env vars:
   ```bash
   docker run -d -p 4000:4000 \
     -e SPREADSHEET_ID=your_sheet_id \
     -e GOOGLE_SA_JSON='...json...'
     -e SHEET_NAME=Sheet1 \
     zenex-backend
   ```

## Full stack setup

1. Deploy backend and copy its public URL.
2. Set frontend env var in Netlify:
   - `REACT_APP_REGISTER_WEBHOOK_URL=https://your-backend-url.com/api/register`
3. Trigger a frontend deploy.
4. Test the register page.
