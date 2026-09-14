# Museum of Us

A private, mobile-first digital museum for Jordan and Jirby, designed to be opened from an NFC card.

No build step, no backend, no accounts, no analytics, no external data storage. Three files and a folder of assets.

## What is inside

- Monthly opening window: every 25th and 26th, Philippine time
- First-visit Baguio identity question, with three increasingly unimpressed wrong-attempt messages
- Recognized-device return visits via `localStorage`
- A switchable museum soundtrack that keeps playing as you walk
- 17 chronological exhibits, unlocked in order
- An **admission ticket** issued on entry, stamped once per exhibit, with a serial number for the visit
- **Wall labels** on the artifacts: accession number, date, medium, and credit line, written by the curator
- Six-photo full-screen swipe gallery plus a reserved seventh frame; each photograph tints the wall it hangs on
- Reasons I Love You interactive cards
- Four-question Boyfriend Quiz
- Reopenable Open When envelopes
- Sealed To My Babi letter
- Future Collection, drawn as abstract silhouettes — never invented future photographs
- Classified hold-to-open Secret Exhibit
- Permanent local guestbook entry
- Museum map, visit progress, and reset controls
- Mobile, tablet and desktop; portrait and landscape
- Full `prefers-reduced-motion` support

## Preview locally

The real museum only opens on the 25th and 26th, so add `?preview` while testing:

```text
http://localhost:8080/?preview
```

Serve the folder with any static server:

```bash
python3 -m http.server 8080
# or
npx http-server . -p 8080
```

## Photographs

Source images live in `assets/photos/`. The site serves responsive WebP and JPEG
derivatives from `assets/photos/opt/`, which is what keeps the museum quick on a
phone — a 2480px original is never sent to a 390px screen.

If you add or replace a photograph, regenerate the derivatives:

```bash
pip install pillow
python3 scripts/optimize-photos.py
```

The script is idempotent; commit both the source image and the generated files.

## Deploy

See `DEPLOY_TO_GITHUB.md` for GitHub Pages, and `NFC_SETUP.md` for writing the NTAG215 card.

The NFC card should store the final Pages URL, for example:

```text
https://YOUR-USERNAME.github.io/museum-of-us/
```

Do not write `?preview` to the card.

## Important privacy note

The Baguio question is a romantic gate, not cryptographic security. Because this
is a static site, anyone who deliberately inspects the JavaScript source can
discover the answer and the private text. The guestbook and remembered-device
data are stored only in that browser's `localStorage`.

## A note on the code

`app.js` renders declaratively from a single `state` object, but it **morphs**
the existing DOM instead of replacing `innerHTML`. That matters: the old build
rebuilt the entire page on every tap, which reloaded images and threw away the
photo gallery's scroll position. Anything set imperatively on a node — a class,
an inline style — would now be wiped by the next render, so state belongs in
`state`, not on the DOM.
