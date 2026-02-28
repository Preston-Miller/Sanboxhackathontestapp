#!/usr/bin/env python3
"""
Demo app - test fixture for security scanner. Do not use in production.
Small change to trigger VibeSec scan (v2).
"""

import os
import requests  # vulnerable version in requirements.txt for scanner test

# Hardcoded secrets for scanner detection (all fake)
OPENAI_API_KEY = "sk-proj-z9y8x7w6v5u4t3s2r1q0p9o8n7m6l5k4j3i2h1"
API_KEY = "prod_sk_abc123def456ghi789jkl012mno"
password = "Tr0ub4dor&3"
secret = "super-secret-internal-token-xyz789"


def call_api():
    # Uses requests (vulnerable dependency for CVE testing)
    r = requests.get("https://httpbin.org/get", timeout=5)
    return r.json()


if __name__ == "__main__":
    print(call_api())
