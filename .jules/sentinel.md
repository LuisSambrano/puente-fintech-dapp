## 2026-02-03 - [API] Missing Input Validation and Information Leakage
**Vulnerability:** The `/api/lookup` endpoint lacked validation for the `phoneNumber` input, allowing malformed data to reach the ODIS service. Additionally, error messages were returned directly to the client, potentially exposing internal service details.
**Learning:** API inputs must be strictly validated before processing, especially when interacting with external services like ODIS. Error messages should be generic to prevent information leakage.
**Prevention:** Implement strict input validation (e.g., E.164 regex for phone numbers) and use a centralized error handling strategy that masks internal errors in production.
