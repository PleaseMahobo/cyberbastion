# Linux Investigation: Host Triage

- **Status:** Exercise blueprint — complete only after running in an authorized lab.
- **Focus:** Establish a baseline, identify suspicious activity, review authentication events, and preserve useful evidence.

## Objective

Perform a read-only first-pass triage of a Linux host. Identify unusual users, processes, listening services, scheduled tasks, and authentication activity without changing the system.

## Lab setup

Use a disposable Linux VM with a snapshot. Record distribution, kernel, hostname, timezone, and collection time. Do not use a production host unless explicitly authorized.

## Procedure

### 1. Establish host context

```bash
date -Is
hostnamectl
uname -a
uptime
who
w
```

### 2. Review identities and privilege configuration

```bash
getent passwd
getent group
sudo -l
sudo awk -F: '$3 == 0 {print $1 ":" $3 ":" $6 ":" $7}' /etc/passwd
```

Review privileged accounts and sudo permissions against the lab's expected baseline. Do not assume an account is malicious solely because it is unfamiliar.

### 3. Review processes and network listeners

```bash
ps auxf
systemctl --type=service --state=running
sudo ss -tulpn
```

Record process owner, executable path, parent process, start time, and associated listening socket where available.

### 4. Review persistence locations

```bash
systemctl list-unit-files --state=enabled
systemctl list-timers --all
sudo find /etc/cron.d /etc/cron.daily /etc/cron.hourly /var/spool/cron -maxdepth 2 -type f -ls 2>/dev/null
```

Inspect user and system startup configuration in context. Do not delete or disable entries during evidence collection.

### 5. Review authentication logs

Depending on distribution, inspect one or more of:

```bash
sudo journalctl --since "24 hours ago" --no-pager
sudo journalctl -u ssh --since "24 hours ago" --no-pager
sudo grep -Ei 'failed|accepted|session opened|sudo' /var/log/auth.log 2>/dev/null
sudo grep -Ei 'failed|accepted|session opened|sudo' /var/log/secure 2>/dev/null
```

Log locations and service names vary. Note missing logs, retention limits, and clock/timezone differences.

### 6. Preserve evidence

Capture command, timestamp, host context, and output. Where formal forensic integrity is required, use an approved acquisition process and calculate hashes of collected files. Do not alter source evidence.

## Analysis questions

- Are there unexpected UID 0 accounts or privileged group memberships?
- Do running services match the approved baseline?
- Are there unusual parent-child process relationships?
- Are new timers, cron entries, or enabled services present?
- Do authentication events show unusual patterns?
- Is there evidence of log gaps or time inconsistencies?

## Deliverables

Complete the lab report template with sanitized evidence, findings, confidence, impact, and recommended containment steps. A suspicious indicator is a lead for investigation, not proof of compromise.

## Defensive outcomes

- Maintain an approved account and service baseline.
- Restrict administrative access and use named accounts.
- Centralize and protect authentication logs.
- Monitor changes to privileged accounts and persistence mechanisms.
- Patch and remove unnecessary services through change control.
