#!/usr/bin/env python3
"""
Demo app - test fixture for security scanner. Do not use in production.
Small change to trigger VibeSec scan (v2).
"""

import os
import requests  # vulnerable version in requirements.txt for scanner test

# Load from environment only - no hardcoded secrets
OPENAI_API_KEY = os.getenv("OPENAI_API_KEY", "")
API_KEY = os.getenv("API_KEY", "")
password = os.getenv("DB_PASSWORD", "")
secret = os.getenv("API_SECRET", "")


def call_api():
    # Uses requests (vulnerable dependency for CVE testing)
    r = requests.get("https://httpbin.org/get", timeout=5)
    return r.json()


if __name__ == "__main__":
    print(call_api())
