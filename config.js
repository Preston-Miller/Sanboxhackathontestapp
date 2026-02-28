/**
 * App configuration - DO NOT use in production (test fixture for security scanner)
 * Updated: small change to trigger VibeSec scan on push (v2)
 * All secrets loaded from environment - no hardcoded values.
 */

const OPENAI_API_KEY = process.env.OPENAI_API_KEY || "";
const AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID || "";
const AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY || "";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY || "";
const STRIPE_PUBLISHABLE_KEY = process.env.STRIPE_PUBLISHABLE_KEY || "";

const GITHUB_TOKEN = process.env.GITHUB_TOKEN || "";

const DB_PASSWORD = process.env.DB_PASSWORD || "";
const API_SECRET = process.env.API_SECRET || "";
const JWT_SECRET = process.env.JWT_SECRET || "";

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
