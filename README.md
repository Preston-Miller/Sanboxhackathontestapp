# VibeSec Test App

**This repo is a test fixture for the VibeSec security scanner.** It intentionally contains security findings so you can verify your workflow.

## What's in here (for scanner testing)

### 1. Hardcoded secrets
- **config.js** – OpenAI key (`sk-`), AWS keys (`AKIA`), Stripe (`sk_live_` / `pk_live_`), GitHub token (`ghp_`), and generic `password=`, `secret=`, `api_key=` style values (all fake).
- **app.py** – Same patterns in Python.

### 2. .env exposure
- **.env** – Committed and **not** in `.gitignore`, with real-looking values.
- **.env.example** – Contains real-looking credential placeholders (scanner checks for this).

### 3. Vulnerable dependencies
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
