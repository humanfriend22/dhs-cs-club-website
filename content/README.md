# Content

Officers edit these two files and commit/push to update the site — no code changes needed. The site rebuilds automatically on push (deploy pipeline dependent).

## events.json

Array of meetings/events, shown in order on the Schedule page. The first entry is also treated as the "next meeting" shown on the homepage and sidebar.

If this file is `[]` (empty array), the Schedule page and the homepage's kickoff tile automatically show a "Schedule to be determined" message instead — nothing else to configure for that.

```json
{
  "date": "TUE 09.08",
  "time": "15:30–16:45",
  "title": "Kickoff meeting",
  "detail": "One sentence about what happens.",
  "where": "D-204",
  "kind": "meeting",
  "datetime": "2026-09-08T15:30:00"
}
```

`kind` is `"meeting"` or `"event"` — controls the badge color on the schedule page.

`datetime` is optional — an ISO timestamp for the first event only. When present, the homepage shows a live countdown to it; when absent, it just shows the date/time text.

## honor-hall.json

Array of members added to the Honor Hall. Officers add an entry when someone ships, mentors, or teaches something worth recognizing.

```json
{
  "name": "Avery Rodriguez",
  "date": "2026-03-10",
  "description": "One or two sentences on what they did.",
  "links": [
    { "label": "GitHub", "url": "https://github.com/..." }
  ]
}
```

`date` is `YYYY-MM-DD`. `links` is optional — omit or leave empty if there's nothing to link.

Entries are sorted newest-first automatically; don't worry about ordering in the file.
