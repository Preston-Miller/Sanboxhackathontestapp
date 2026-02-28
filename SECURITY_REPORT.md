# VibeSec Security Report
Repo: Preston-Miller/Sanboxhackathontestapp
Scanned: 2026-02-28 21:48:56 UTC
Issues Found: 35

You are an AI coding agent. Fix each issue below in order.
Do not skip any issues. Do not ask clarifying questions.
Use the fix instructions exactly as written.
After fixing all issues run the verification step for each.

## [SEV-001] CRITICAL -- Generic secret

**File:** .env
**Line:** 5
**Evidence:** `API_KEY=sk-proj-test1234567890abcdefghijklmnopqrstuvwxyz`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-002] CRITICAL -- Generic secret

**File:** .env
**Line:** 9
**Evidence:** `SECRET=jwt-signing-secret-key-32-chars-long!!`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-003] CRITICAL -- Generic secret

**File:** .env
**Line:** 10
**Evidence:** `API_KEY=prod_abcdef1234567890`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-004] CRITICAL -- Generic secret

**File:** .env.example
**Line:** 5
**Evidence:** `API_KEY=sk-proj-your-openai-key-here-20-chars-minimum`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-005] CRITICAL -- AWS Access Key

**File:** .env.example
**Line:** 6
**Evidence:** `AKIAXXXXXXXXXXXXXXXX`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-006] CRITICAL -- Generic secret

**File:** .env.example
**Line:** 9
**Evidence:** `SECRET=your-jwt-secret-at-least-32-characters`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-007] CRITICAL -- Generic secret

**File:** SECURITY_REPORT.md
**Line:** 15
**Evidence:** `API_KEY=sk-proj-test1234567890abcdefghijklmnopqrstuvwxyz``
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-008] CRITICAL -- Generic secret

**File:** SECURITY_REPORT.md
**Line:** 26
**Evidence:** `SECRET=jwt-signing-secret-key-32-chars-long!!``
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-009] CRITICAL -- Generic secret

**File:** SECURITY_REPORT.md
**Line:** 37
**Evidence:** `API_KEY=prod_abcdef1234567890``
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-010] CRITICAL -- Generic secret

**File:** SECURITY_REPORT.md
**Line:** 48
**Evidence:** `API_KEY=sk-proj-your-openai-key-here-20-chars-minimum``
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-011] CRITICAL -- AWS Access Key

**File:** SECURITY_REPORT.md
**Line:** 59
**Evidence:** `AKIAXXXXXXXXXXXXXXXX`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-012] CRITICAL -- Generic secret

**File:** SECURITY_REPORT.md
**Line:** 70
**Evidence:** `SECRET=your-jwt-secret-at-least-32-characters``
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-013] CRITICAL -- Generic secret

**File:** SECURITY_REPORT.md
**Line:** 81
**Evidence:** `API_KEY = "sk-proj-z9y8x7w6v5u4t3s2r1q0p9o8n7m6l5k4j3i2h1"`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-014] CRITICAL -- Generic secret

**File:** SECURITY_REPORT.md
**Line:** 92
**Evidence:** `API_KEY = "prod_sk_abc123def456ghi789jkl012mno"`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-015] CRITICAL -- Generic secret

**File:** SECURITY_REPORT.md
**Line:** 103
**Evidence:** `password = "Tr0ub4dor&3"`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-016] CRITICAL -- Generic secret

**File:** SECURITY_REPORT.md
**Line:** 114
**Evidence:** `secret = "super-secret-internal-token-xyz789"`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-017] CRITICAL -- Generic secret

**File:** SECURITY_REPORT.md
**Line:** 125
**Evidence:** `API_KEY = "sk-proj-a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8"`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-018] CRITICAL -- AWS Access Key

**File:** SECURITY_REPORT.md
**Line:** 136
**Evidence:** `AKIAIOSFODNN7EXAMPLE`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-019] CRITICAL -- GitHub Token

**File:** SECURITY_REPORT.md
**Line:** 147
**Evidence:** `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-020] CRITICAL -- Generic secret

**File:** SECURITY_REPORT.md
**Line:** 158
**Evidence:** `PASSWORD = "P@ssw0rd!SuperSecret2024"`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-021] CRITICAL -- Generic secret

**File:** SECURITY_REPORT.md
**Line:** 169
**Evidence:** `SECRET = "a7f3c9e1b2d4f6a8c0e2"`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-022] CRITICAL -- Generic secret

**File:** SECURITY_REPORT.md
**Line:** 180
**Evidence:** `SECRET = "my-super-secret-jwt-signing-key-do-not-share"`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-023] CRITICAL -- Generic secret

**File:** app.py
**Line:** 11
**Evidence:** `API_KEY = "sk-proj-z9y8x7w6v5u4t3s2r1q0p9o8n7m6l5k4j3i2h1"`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-024] CRITICAL -- Generic secret

**File:** app.py
**Line:** 12
**Evidence:** `API_KEY = "prod_sk_abc123def456ghi789jkl012mno"`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-025] CRITICAL -- Generic secret

**File:** app.py
**Line:** 13
**Evidence:** `password = "Tr0ub4dor&3"`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-026] CRITICAL -- Generic secret

**File:** app.py
**Line:** 14
**Evidence:** `secret = "super-secret-internal-token-xyz789"`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-027] CRITICAL -- Generic secret

**File:** config.js
**Line:** 7
**Evidence:** `API_KEY = "sk-proj-a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8"`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-028] CRITICAL -- AWS Access Key

**File:** config.js
**Line:** 10
**Evidence:** `AKIAIOSFODNN7EXAMPLE`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-029] CRITICAL -- GitHub Token

**File:** config.js
**Line:** 18
**Evidence:** `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-030] CRITICAL -- Generic secret

**File:** config.js
**Line:** 21
**Evidence:** `PASSWORD = "P@ssw0rd!SuperSecret2024"`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-031] CRITICAL -- Generic secret

**File:** config.js
**Line:** 22
**Evidence:** `SECRET = "a7f3c9e1b2d4f6a8c0e2"`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-032] CRITICAL -- Generic secret

**File:** config.js
**Line:** 23
**Evidence:** `SECRET = "my-super-secret-jwt-signing-key-do-not-share"`
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-033] CRITICAL -- .env: dotenv_not_gitignored

**File:** .env
**Detail:** .env is committed and not listed in .gitignore
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-034] CRITICAL -- .env: dotenv_has_real_values

**File:** .env
**Detail:** Key NODE_ENV has a non-placeholder value
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.

## [SEV-035] CRITICAL -- .env: dotenv_example_has_credentials

**File:** .env.example
**Detail:** .env.example contains real-looking value for NODE_ENV
**Risk:** Fix this issue to reduce security risk.

**Fix Steps:**
1. Address the finding as described in the evidence.
**Verify:** Confirm the issue is resolved.
