# MITRE ATT&CK: Evidence-Based Technique Mapping

- **Status:** Exercise blueprint — mappings must be justified by observed evidence.
- **Framework:** MITRE ATT&CK Enterprise.

## Objective

Translate observed behaviors from a controlled scenario into ATT&CK tactics and techniques. ATT&CK describes adversary behavior; it is not a severity scale and a technique mapping is not proof that an intrusion occurred.

## Scenario for practice

Use a synthetic scenario in a lab: an unexpected login is followed by execution of an unfamiliar process, creation of a scheduled task, and an outbound connection. These are scenario prompts, not claims that such activity was observed on any real system.

## Evidence-to-technique workflow

1. Record the raw observation and its source (event log, process telemetry, network record).
2. Establish timestamp, host, user context, and collection method.
3. Identify the behavior, not merely a tool name or alert label.
4. Search ATT&CK for the closest technique and sub-technique.
5. Check the technique's required behavior and platform applicability.
6. Record confidence and alternative benign explanations.
7. Identify data sources and defensive opportunities.

## Example mapping hypotheses

| Scenario behavior | Candidate ATT&CK area | Evidence needed before mapping |
|---|---|---|
| Unusual successful remote login | Initial Access / Valid Accounts (T1078) | Authentication event, account context, source context |
| Command or script interpreter execution | Execution / Command and Scripting Interpreter (T1059) | Process command line, parent process, user and timestamp |
| New scheduled task or job | Persistence / Scheduled Task/Job (T1053) | Task definition, creation event, execution evidence |
| Unusual outbound connection | Command and Control (tactic) | Destination, process association, timing, protocol, baseline comparison |

These are candidate mappings only. A single event may be insufficient to support a technique.

## Detection engineering notes

For each behavior, document:
- Relevant telemetry source
- Required fields
- Baseline and known benign behavior
- Detection logic in plain language
- False-positive considerations
- Alert severity rationale
- Triage and response action

## Defensive response

Correlate endpoint, identity, and network telemetry. Validate the account and process context before containment. Preserve relevant evidence and follow the incident response plan.

## References

- [MITRE ATT&CK Enterprise Matrix](https://attack.mitre.org/matrices/enterprise/)
- [ATT&CK technique T1078 — Valid Accounts](https://attack.mitre.org/techniques/T1078/)
- [ATT&CK technique T1059 — Command and Scripting Interpreter](https://attack.mitre.org/techniques/T1059/)
- [ATT&CK technique T1053 — Scheduled Task/Job](https://attack.mitre.org/techniques/T1053/)
