# Deploy Museum of Us to GitHub Pages

## 1. Create the repository

Create a new GitHub repository, for example `museum-of-us`.

## 2. Upload the project

Upload **the contents of this folder** to the repository root. `index.html` must be at the top level of the repository.

## 3. Enable Pages

The project includes `.github/workflows/pages.yml`.

In GitHub:

- Open **Settings → Pages**.
- Under **Build and deployment → Source**, choose **GitHub Actions** if GitHub asks you to select a source.
- Push/upload the files to the `main` branch.
- Open the **Actions** tab and wait for `Deploy Museum of Us to GitHub Pages` to finish.

GitHub will show the public Pages address after deployment.

## 4. Test before the 25th

The real museum stays closed outside the 25th and 26th (Philippine time). For private testing only, append `?preview` to the URL:

`https://YOUR-USERNAME.github.io/museum-of-us/?preview`

Remove `?preview` when writing the URL to the NFC card.

## 5. Reset testing data

During testing, use the hidden **Reset Museum** option in Settings before giving the card to Jirby. That removes your test verification, first-visit date, guestbook entry, and saved history from your test browser.

His own phone will start with clean local storage automatically.
