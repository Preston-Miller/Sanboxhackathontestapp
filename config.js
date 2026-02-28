/**
 * App configuration - DO NOT use in production (test fixture for security scanner)
 */

// OpenAI API key (pattern: sk- + 20+ alphanumeric)
const OPENAI_API_KEY = "sk-proj-a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8";

// AWS credentials (pattern: AKIA + 16 chars)
const AWS_ACCESS_KEY_ID = "AKIAIOSFODNN7EXAMPLE";
const AWS_SECRET_ACCESS_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";

// Stripe keys - use placeholders so GitHub push protection allows; VibeSec can still check .env exposure
const STRIPE_SECRET_KEY = "sk_live_[REPLACE_WITH_YOUR_KEY]";
const STRIPE_PUBLISHABLE_KEY = "pk_live_[REPLACE_WITH_YOUR_KEY]";

// GitHub personal access token (ghp_ + 36 chars)
const GITHUB_TOKEN = "ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

// Generic secrets (non-placeholder values)
const DB_PASSWORD = "P@ssw0rd!SuperSecret2024";
const API_SECRET = "a7f3c9e1b2d4f6a8c0e2";
const JWT_SECRET = "my-super-secret-jwt-signing-key-do-not-share";

module.exports = {
  OPENAI_API_KEY,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  STRIPE_SECRET_KEY,
  STRIPE_PUBLISHABLE_KEY,
  GITHUB_TOKEN,
  DB_PASSWORD,
  API_SECRET,
  JWT_SECRET,
};
