## Current App Structure

The live Growtopper app now runs from the restored old version under `src/legacy`.

Active entry:
- `src/main.jsx`
- `src/legacy/app.js`
- `src/legacy/styles.css`

Archived redesign:
- `src/archive/App.redesign.jsx`
- `src/archive/index.redesign.css`

Why this structure:
- keeps the old version as the real main app
- prevents accidental edits to the inactive redesign
- keeps the project buildable with the normal Vite entry

If future work should change the live product, edit the files in `src/legacy`.
