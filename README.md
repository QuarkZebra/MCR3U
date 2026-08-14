# MCR3U — Functions

Course website for MCR3U (2026–27). Live at **https://quarkzebra.github.io/MCR3U/**

## Adding links during the semester

Everything you edit lives in **`data.js`**. Find the day, paste the URL:

```js
{d:2, iso:"2026-09-02", topic:"Relations & Functions", num:"1.1",
 note:"https://drive.google.com/file/d/XXXX/view",   // ← blank note & practice
 ans:"",                                             // ← answers (paste after class)
 extras:[
   ["Extra Practice", D("fileId"), "doc"],
 ]},
```

- **`note`** — the blank note & practice problems. Empty `""` shows a greyed-out
  link with a "Coming soon" hover.
- **`ans`** — the answers. Empty `""` is greyed out, and only appears once the
  day has arrived. Live answers links get the ☠︎ *"Do not look if you haven't
  done the practice"* hover.
- Where a KEY pdf already exists in Drive, its id is stashed in a comment right
  after `ans:""` — after class, move it into the `ans` field.
- **`extras`** — `["Title", "url", "kind"]` where kind is `"doc"` (worksheet /
  handout / anything), `"ans"` (solutions — red with the ☠︎ warning), or
  `"vid"` (video).
- `D("fileId")` is shorthand for a Google Drive link; pasting the full URL
  works just as well.
- Days with no note (tests, work periods) simply have no `num` field.
- `noteLabel` overrides the whole link label for days without a clean section
  number (Factoring I/II, Radicals, investigations, practice quizzes).
- `flag: "quiz" | "review" | "test"` tints the row.

The site works out the rest from the real date: the **Today** card, the
current-unit highlight, the progress bar, and which units show
Done / Current / Up Next.

## Publishing changes

```
git add -A
git commit -m "Add day 2 note"
git push
```

GitHub Pages redeploys automatically within a minute or two.

## Handy tricks

- **Preview a future date**: append `?today=2026-09-10` to the URL to see the
  site as it will appear on that day.
- Theme toggle is remembered per student (localStorage), defaulting to their
  system preference.
- The background is decorative canvas art: young parent functions grow up
  slowly — a few table-of-values points appear first, then the curve gently
  connects them, then it earns its label. Clicking empty space plots a point.
  It disappears for users with reduced-motion enabled.
