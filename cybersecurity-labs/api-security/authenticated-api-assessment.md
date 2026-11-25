# API Security: Authenticated API Assessment

- **Status:** Exercise blueprint — use a local demo API or explicitly authorized test environment.
- **Focus:** Authentication, object-level authorization, function-level authorization, input validation, and abuse controls.

## Objective

Evaluate whether an API consistently enforces identity and access policy across authenticated endpoints. Use synthetic users and records.

## Test design

Create two ordinary test users (User A and User B) and, only if in scope, one administrator test identity. Create synthetic records owned by each user. Record the expected access policy before testing.

## Assessment sequence

### 1. Establish the API contract

Document routes, methods, required roles, object ownership rules, request schemas, and expected response codes. Use OpenAPI documentation where available.

### 2. Authentication checks

For each protected route, compare behavior with:
- No Authorization header.
- A malformed or expired test token.
- A valid token for User A.
- A valid token for User B.

Expected outcome: protected operations reject missing or invalid credentials; authentication failures do not disclose secrets or internal implementation details.

### 3. Object-level authorization

Using only synthetic records, have User A request User B's record by changing the object identifier in the request. Repeat for read and write operations only if explicitly in scope.

Expected outcome: the API denies access or returns a non-disclosing not-found response according to the documented policy. A valid login must not imply access to every object.

### 4. Function-level authorization

Attempt administrator-only operations with an ordinary test account, using documented routes and harmless requests.

Expected outcome: server-side role and permission checks deny unauthorized actions. Hiding a UI control is not an authorization control.

### 5. Input validation

Submit boundary and invalid values to documented fields: missing required fields, wrong types, overlong strings, invalid enum values, and malformed JSON. Avoid payloads designed to damage data or exhaust resources.

Expected outcome: deterministic validation errors, no stack traces, and no unintended state changes.

### 6. Abuse and rate controls

In a controlled test window, send a small, pre-agreed number of repeated requests to a harmless endpoint. Observe throttling, lockout policy, and monitoring behavior. Do not perform load or denial-of-service testing.

### 7. Record results

For each test, record:
- Route and HTTP method
- Test identity and role (never include token values)
- Request with secrets removed
- Status code and relevant response fields
- Expected versus actual behavior
- Evidence reference and timestamp

## Finding categories

- Broken object-level authorization (BOLA)
- Broken function-level authorization
- Broken authentication/session handling
- Excessive data exposure
- Missing or inconsistent input validation
- Uncontrolled resource consumption
- Security misconfiguration

Map a finding to an OWASP API Security Top 10 category only after the evidence supports the classification.

## Remediation checklist

- Enforce authorization on the server for every object and operation.
- Derive identity from verified credentials, not client-supplied identity fields.
- Apply deny-by-default access policy.
- Validate schemas and constrain field lengths and accepted values.
- Return minimal response data.
- Apply appropriate rate limits and audit logging.
- Add regression tests for every confirmed authorization defect.

## Completion evidence

Attach sanitized request/response pairs and passing retest results. Never publish bearer tokens, cookies, API keys, customer identifiers, or production endpoint details.
