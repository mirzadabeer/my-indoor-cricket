# My Indoor Cricket — Muweilah Friendly XI

Match-day tools for the group playing at Saed Sports, Safari Mall, Muweilah
(Sharjah).

## Pages

- `index.html` — hub / landing page
- `captain-poll.html` — vote for 2 captains from the 14-player squad
- `results.html` — live tally of the captain poll

## Live storage

Votes sync to a Google Sheet via a small Apps Script bridge — see
[`apps-script/README.md`](apps-script/README.md) for the one-time setup.
Until that's configured, the poll still works but only saves each vote
locally on the voter's own device.

## Editing the squad

Player names live in `assets/players.js`. Edit that file and both the poll
and results pages update automatically.
