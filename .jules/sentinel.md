# Sentinel Journal

## 2024-05-23 - Centralized Input Validation and Secure Env Access
**Vulnerability:** API routes were accepting raw input (e.g., phone numbers) without validation, potentially leading to quota exhaustion or injection. Environment variables were accessed directly via `process.env`, bypassing validation.
**Learning:** Input validation must be performed before any external service calls. Environment variables should be accessed via `getServerEnv()` to ensure they are present and valid, preventing runtime errors or misconfigurations.
**Prevention:** Use `isValidE164PhoneNumber` from `apps/web/src/utils/validation.ts` for all phone number inputs. Access environment variables via `getServerEnv()` from `@/lib/env`.

## 2024-05-24 - PII in Server Logs
**Vulnerability:** Raw phone numbers (PII) were logged directly in `apps/web/src/app/api/lookup/route.ts`, potentially exposing user data to monitoring services.
**Learning:** Server logs are a persistent storage medium and should never contain sensitive data like phone numbers, emails, or keys.
**Prevention:** Use `maskPhoneNumber` from `apps/web/src/utils/format.ts` to redact sensitive parts of phone numbers before logging.
