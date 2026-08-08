# Museum of Us

A private, mobile-first digital museum for Jordan and Jirby, designed to be opened from an NFC card.

## What is included

- Monthly opening window: every 25th and 26th, Philippine time
- First-visit Baguio identity question with three funny wrong-attempt messages
- Recognized-device return visits via `localStorage`
- Site-wide `Those Eyes` soundtrack that pauses for songs in the Our Songs room
- 17 chronological museum exhibits
- Five-photo full-screen swipe gallery + reserved sixth frame
- Reasons I Love You interactive cards
- Four-question Boyfriend Quiz
- Reopenable Open When envelopes
- Sealed To My Babi letter
- Future Collection
- Classified hold-to-open Secret Exhibit
- Permanent local guestbook entry
- First-visit record, current-visit map/progress, reset controls
- Mobile/tablet, portrait/landscape layouts
- No backend, accounts, analytics, or external data storage

## Preview locally

Because the real museum only opens on the 25th and 26th, add `?preview` while testing:

```text
http://localhost:8080/?preview
```

Serve the folder with any static server. For example, if Node is installed:

```bash
npx http-server . -p 8080
```

or with Python:

```bash
python3 -m http.server 8080
```

## Deploy to GitHub Pages

This project is intentionally build-free. Upload the whole folder to a GitHub repository and enable GitHub Pages from the repository root, or use the included Pages workflow.

The NFC card should store the final GitHub Pages URL, for example:

```text
https://YOUR-USERNAME.github.io/museum-of-us/
```

Do not add `?preview` to the NFC URL.

## Important privacy note

The Baguio question is a romantic gate, not cryptographic security. Because this is a static site, someone who deliberately inspects the JavaScript source can discover the answer and private text. The guestbook and remembered-device data are stored only in that browser's `localStorage`.
