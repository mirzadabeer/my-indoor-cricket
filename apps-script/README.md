# Wiring the poll to a live Google Sheet (5 minutes, one-time)

This makes votes from `captain-poll.html` land in a Google Sheet under your
own account (dabeer88@gmail.com), which you can open or export as Excel
anytime.

1. Go to [sheets.google.com](https://sheets.google.com) and create a new
   sheet (or open an existing one), signed in as dabeer88@gmail.com.
2. **Extensions → Apps Script**.
3. Delete the default code and paste in the contents of `Code.gs` from this
   folder.
4. Click **Deploy → New deployment**.
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
5. Click **Deploy**, authorize the script when prompted, then copy the **Web
   app URL** it gives you.
6. Paste that URL into `assets/config.js` in this repo:
   ```js
   const APPS_SCRIPT_URL = "https://script.google.com/macros/s/.../exec";
   ```
7. Commit and push — GitHub Pages will pick it up automatically.

Once set, `captain-poll.html` writes each vote as a new row to a "Captain
Poll" sheet, and `results.html` reads it back live to show the running tally.
No account access or credentials are ever handled by anyone but you.
