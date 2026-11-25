# OWASP Web Application Security Review

- **Status:** Exercise blueprint — perform against a deliberately vulnerable local application or authorized target.
- **Reference:** OWASP Top 10 and OWASP Web Security Testing Guide.

## Objective

Conduct a risk-based review of a web application, recording evidence for security weaknesses rather than treating the OWASP categories as a checklist of confirmed vulnerabilities.

## Scope and preparation

Record application version, environment, test accounts, roles, in-scope hosts, excluded routes, and authorization. Use synthetic data. Establish a baseline and avoid destructive tests.

## Review areas

| Review area | Safe assessment questions | Evidence to capture |
|---|---|---|
| Access control | Can one test user access another user's data? Are admin actions protected server-side? | Role matrix, sanitized requests/responses |
| Cryptography | Is transport protected? Are passwords stored with an appropriate password-hashing scheme? | TLS configuration, design/config evidence |
| Injection | Are inputs parameterized and validated? Are database errors exposed? | Code review, harmless test cases |
| Insecure design | Are trust boundaries, abuse cases, and authorization rules explicit? | Threat model, design notes |
| Security configuration | Are debug pages, default accounts, or unnecessary services exposed? | Configuration review |
| Authentication | Are reset, MFA, session, and login flows consistently enforced? | Test cases and state transitions |
| Integrity failures | Are dependencies, builds, and update mechanisms controlled? | Lockfiles, CI configuration, provenance |
| Logging and monitoring | Are security events recorded without logging secrets? | Sanitized event examples and alert logic |
| SSRF | Are server-side fetches constrained to approved destinations? | Code/config review and controlled local test |
| Exception handling | Do errors avoid leaking stack traces and sensitive internals? | Sanitized error responses |

## Test method

1. Map the application and identify trust boundaries.
2. Build an endpoint and role inventory.
3. Review authentication and authorization separately.
4. Inspect input handling and data access patterns.
5. Review security headers, TLS, cookie attributes, and CORS policy.
6. Review dependency, build, and deployment configuration.
7. Test logging, error handling, and security alert coverage.
8. Record each observation and validate remediation.

## Reporting

For every confirmed issue, include affected component, preconditions, reproducible safe steps, evidence, impact, severity rationale, remediation, and retest result. Separate confirmed vulnerabilities from design recommendations and unverified hypotheses.

## Remediation themes

Use server-side authorization, parameterized data access, secure password hashing, strong session management, least privilege, safe error handling, dependency hygiene, secure defaults, and monitored security events.

## References

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [OWASP Cheat Sheet Series](https://cheatsheetseries.owasp.org/)
