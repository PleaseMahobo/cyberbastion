# Cybersecurity Labs

A structured, evidence-led lab portfolio by **Trust Kashumba** covering Linux investigation, API security, OWASP testing, MITRE ATT&CK mapping, and incident response.

> **Evidence integrity:** These pages define reproducible lab exercises and reporting standards. A lab is not represented as completed until its commands have been run in an authorized environment, evidence has been captured, and the findings and validation sections have been completed. Examples are illustrative and must not be presented as observed results.

## Lab catalogue

| Domain | Exercise | Primary skills | Status |
|---|---|---|---|
| Linux investigation | [Linux host triage](linux-investigation/host-triage.md) | Processes, users, services, logs, persistence review | Exercise blueprint |
| API security | [Authenticated API assessment](api-security/authenticated-api-assessment.md) | AuthN/AuthZ, access control, input validation, rate limits | Exercise blueprint |
| OWASP | [OWASP web application review](owasp/owasp-web-review.md) | OWASP Top 10 risk-based testing | Exercise blueprint |
| Threat mapping | [MITRE ATT&CK mapping](mitre-attack/attack-mapping.md) | TTP analysis, evidence-to-technique mapping | Exercise blueprint |
| Incident response | [Incident response tabletop](incident-response/incident-tabletop.md) | Triage, containment, eradication, recovery, lessons learned | Exercise blueprint |

## How to use this portfolio

1. Use an isolated lab VM, intentionally vulnerable training application, or other system for which you have explicit authorization.
2. Record the environment, date, scope, and tools before testing.
3. Capture sanitized command output, HTTP requests/responses, logs, and screenshots where appropriate.
4. Distinguish observed facts from hypotheses.
5. Document impact, severity rationale, remediation, and retest results.
6. Remove secrets, personal data, public IPs where sensitive, and customer identifiers before publishing.

## Standard evidence structure

Each completed exercise should include:

- **Objective and scope**
- **Environment and prerequisites**
- **Method and commands**
- **Evidence** (sanitized and reproducible)
- **Findings** (observed, not assumed)
- **Risk and impact**
- **Recommended remediation**
- **Retest / validation**
- **Limitations and lessons learned**

Use the [lab report template](templates/lab-report-template.md) for every new exercise.

## Safety and authorization

Only assess systems you own or are explicitly authorized to test. Do not run intrusive tests against production systems, third-party targets, or real user accounts without written authorization and a defined test window. Use synthetic data and local test accounts. Never commit credentials, tokens, session cookies, private keys, customer records, or unredacted logs.

## Framework references

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/)
- [MITRE ATT&CK](https://attack.mitre.org/)
- [NIST SP 800-61 Rev. 2 — Computer Security Incident Handling Guide](https://csrc.nist.gov/pubs/sp/800/61/r2/final)
- [NIST Cybersecurity Framework](https://www.nist.gov/cyberframework)

## Completion standard

A lab moves from **Exercise blueprint** to **Completed** only after the work has been performed and supported by evidence. A finding is not claimed merely because a test case describes how to look for it.
