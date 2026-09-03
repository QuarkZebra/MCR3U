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
- `flag: "pquiz" | "quiz" | "test"` tints the row and puts a flag at the top of
  the day: **PRACTICE QUIZ** / **QUIZ** / **TEST**.
- `covers` is the text written inside that flag, after the colon —
  `covers:"Current Topic + Factoring + Other Old Topic"` renders as
  *PRACTICE QUIZ: Current Topic + Factoring + Other Old Topic*. Leave it `""`
  and the flag is just the word.
- `topic` is the lesson taught that day. On a flagged day it sits below the flag
  with a little space; leave it `""` when nothing new is taught after the
  quiz/test (the flag then stands in as the day's title on the Today card).

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
- The background is decorative canvas art: baby parent functions fade in
  tiny and grow at a steady rate — a slow continuous zoom — until they
  outgrow the page and drift away. No dots, labels, or click effects; curves
  just bend gently away from the cursor. It goes static for users with
  reduced-motion enabled.
- Check-in days are deliberately listed as plain "Practice" — check-ins are a
  surprise.
