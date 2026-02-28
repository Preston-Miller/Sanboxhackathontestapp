# VibeSec Test App

**This repo is a test fixture for the VibeSec security scanner.** Secrets have been remediated; dependency and scanner docs below.

## What's in here (for scanner testing)

### 1. Secrets
- **config.js** / **app.py** – Load from environment only (no hardcoded secrets).
- **.env** – In `.gitignore`; use `.env.example` as a template.

### 2. .env
- **.env** – Not committed (in `.gitignore`).
- **.env.example** – Placeholder values only; copy to `.env` and fill in locally.

### 3. Vulnerable dependencies (for scan testing)
- **requirements.txt** – `requests==2.28.0` (known CVEs; fixed in 2.32.x).
- **package.json** – `body-parser@1.19.2` (CVE-2024-45590, HIGH; fixed in 1.20.3).

## Run the app

**Node:**
```bash
npm install
npm start
```

**Python:**
```bash
pip install -r requirements.txt
python app.py
```

## VibeSec workflow

On push, the workflow in `.github/workflows/` (or your CI config) runs the VibeSec scan. This repo should trigger findings for:

- Hardcoded secrets (multiple types)
- .env committed and not ignored
- Real-looking values in .env and .env.example
- CRITICAL/HIGH dependency issues (with CVE IDs) for the pinned vulnerable packages

Do not use any values in this repo in production; they are for testing only.
