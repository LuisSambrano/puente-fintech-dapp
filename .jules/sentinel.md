# Sentinel Journal

## 2024-05-23 - Centralized Input Validation and Secure Env Access
**Vulnerability:** API routes were accepting raw input (e.g., phone numbers) without validation, potentially leading to quota exhaustion or injection. Environment variables were accessed directly via `process.env`, bypassing validation.
**Learning:** Input validation must be performed before any external service calls. Environment variables should be accessed via `getServerEnv()` to ensure they are present and valid, preventing runtime errors or misconfigurations.
**Prevention:** Use `isValidE164PhoneNumber` from `apps/web/src/utils/validation.ts` for all phone number inputs. Access environment variables via `getServerEnv()` from `@/lib/env`.

## 2024-05-24 - PII Leakage in Server Logs
**Vulnerability:** The `lookup` API route was logging full phone numbers to stdout, which could expose sensitive user data in server logs (e.g., Vercel, AWS CloudWatch).
**Learning:** Developers often add `console.log` for debugging but forget to remove or sanitize it before production.
**Prevention:** Use `maskPhoneNumber` from `apps/web/src/utils/format.ts` when logging phone numbers. Always review logs for PII during code review.
