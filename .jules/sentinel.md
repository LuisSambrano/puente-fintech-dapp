## 2026-05-23 - Input Validation in Lookup API
**Vulnerability:** The `/api/lookup` endpoint accepted raw user input (`phoneNumber`) without format validation, potentially exposing downstream services to malformed data.
**Learning:** ODIS and blockchain interactions rely on precise input formats. Assuming client-side validation is insufficient.
**Prevention:** Implemented strict E.164 regex validation (`^\+[1-9]\d{1,14}$`) at the API boundary to reject invalid inputs early.
