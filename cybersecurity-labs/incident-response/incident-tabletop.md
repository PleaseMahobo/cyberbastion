# Incident Response Tabletop: Suspected Account Compromise

- **Status:** Exercise blueprint — tabletop simulation, not a report of a real incident.
- **Reference:** NIST SP 800-61 Rev. 2.

## Scenario

A monitoring alert reports an unusual successful login to a test account, followed by access to an unfamiliar application resource. Participants must investigate using synthetic events and decide whether containment is justified.

## Objectives

- Establish incident scope and decision ownership.
- Validate evidence before declaring compromise.
- Practice containment that preserves evidence.
- Coordinate recovery, communications, and lessons learned.

## Exercise injects

1. **Alert:** Unusual login location/time for a synthetic user.
2. **Context:** The user reports they did not initiate the session.
3. **Activity:** Audit logs show access to a sensitive test resource.
4. **Expansion:** A second session appears from a different client.
5. **Recovery:** Credential reset and session revocation are proposed.

Facilitator should release injects in order and record decisions, rationale, and timestamps.

## Response workflow

### 1. Preparation

Confirm roles, escalation contacts, logging sources, evidence handling, and pre-approved containment authority.

### 2. Detection and analysis

- Validate alert source and event integrity.
- Confirm account, session, device, source, and timeline.
- Compare activity with known baseline.
- Determine affected systems and data.
- Record confidence and unresolved questions.

### 3. Containment

Choose proportionate actions under the organization's authority, such as revoking active sessions, temporarily disabling a test account, or blocking a confirmed malicious indicator. Consider business impact and evidence preservation.

### 4. Eradication

Address the root cause: credential compromise, weak MFA configuration, vulnerable endpoint, or other confirmed entry path. Do not assume the root cause before investigation.

### 5. Recovery

Restore normal access through approved identity verification, rotate affected credentials or secrets, monitor for recurrence, and validate system integrity.

### 6. Post-incident activity

Complete a timeline, impact assessment, lessons-learned review, control improvements, and action register.

## Decision log

| Time | Decision | Evidence available | Rationale | Owner |
|---|---|---|---|---|
| T+00 | Validate alert | Initial alert only | Avoid premature conclusion | Analyst |
| T+10 | Confirm user activity | User response and identity logs | Establish legitimacy | Incident lead |
| T+20 | Scope affected sessions | Session and audit logs | Determine containment scope | Analyst |
| T+30 | Select containment | Confirmed evidence and authority | Reduce risk proportionately | Incident lead |

Times are illustrative; replace them with actual exercise timestamps.

## Success criteria

- Evidence is preserved and timestamps normalized.
- Confirmed facts are distinguished from assumptions.
- Containment is authorized, proportionate, and documented.
- Root cause is addressed before recovery is declared complete.
- Monitoring confirms no recurrence during the agreed observation period.
- Follow-up actions have owners and due dates.

## Deliverables

Publish a sanitized incident timeline, decision log, lessons learned, and action register. Do not include real credentials, personal information, customer data, or confidential incident details.

## Reference

[NIST SP 800-61 Rev. 2 — Computer Security Incident Handling Guide](https://csrc.nist.gov/pubs/sp/800/61/r2/final)
