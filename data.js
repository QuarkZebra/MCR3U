/* ═══════════════════════════════════════════════════════════
   MCR3U COURSE DATA — this is the only file you edit.

   Each day looks like:
     {d:1, iso:"2026-09-01", topic:"Relations & Functions", num:"1.1",
      note:"", ans:"", extras:[]}

   - note: paste the URL of the blank note & practice problems.
           Empty "" shows a greyed-out link with "Coming soon".
   - ans:  paste the URL of the answers. Empty "" is greyed out
           with "Coming soon"; once filled it goes live with the
           ☠︎ "do not look" hover.
   - num:  the note number shown to students ("1.1 Blank Note &
           Practice Problems"). Days with no note (tests, work
           periods) just leave num out. noteLabel overrides the
           whole label when a day has no clean number.
   - flag: "quiz" | "review" | "test" tints the row. Quiz days
           use noteLabel/ansLabel for custom link names.
   - extras: [ ["Title","https://…","kind"], … ]
           kind = "doc" (worksheet/handout), "ans" (solutions,
           shows the ☠︎ warning), "vid" (video).

   D(id) is shorthand for a Google Drive link — paste either a
   full URL or D("fileId"), both work.

   KEYS: where a KEY pdf already exists in Drive, its id is
   stashed in a comment right after ans:"" — after class, move
   it into the ans field.
   ═══════════════════════════════════════════════════════════ */

const D = id => `https://drive.google.com/file/d/${id}/view`;

const COURSE = {
  code: "MCR3U",
  title: "Functions",
  sub: "Grade 11 · University Preparation",
  units: [

  /* ── UNIT 1 ─────────────────────────────────────────────── */
  {name:"Intro to Functions", days:[
    {d:1, iso:"2026-09-01", topic:"Course Intro & Diagnostic", note:"", ans:"", extras:[]},
    {d:2, iso:"2026-09-02", topic:"Relations & Functions", num:"1.1",
      note:D("1uQzH0OU7Ym7tK1C2WPjXxSqtZIqftsG-"),
      ans:"", /* key: D("1hfLTk46uzC9S57hYCVxFrrPYBQxw8YcO") */ extras:[]},
    {d:3, iso:"2026-09-03", topic:"Function Notation", num:"1.2",
      note:D("1Cp6GDenNG0x_VPkV26QLYlgByMe1p91N"),
      ans:"", /* key: D("1V06pIxQd91EiEmk11MTfDZ__wfnFIPpx") */ extras:[]},
    {d:4, iso:"2026-09-04", topic:"Parent Functions", num:"1.3",
      note:D("1paJr5icAY2_a0m-XBoyS2e80V7sp3az9"),
      ans:"", /* key: D("1MZYafjaHynBGhFwwxd1DEC3sD_IfO5hl") */ extras:[]},
    {d:5, iso:"2026-09-08", topic:"Domain & Range", num:"1.4",
      note:D("12o2bUykuAkDb6RUbZgjfSFq-N0vmrejw"),
      ans:"", /* key: D("1KNTa4itBAyRXa9ycU4x5_eYfm2dgZMf9") */ extras:[]},
    {d:6, iso:"2026-09-09", topic:"Check-In & Practice", note:"", ans:"", extras:[]},
    {d:7, iso:"2026-09-10", topic:"Inverse Functions", num:"1.5",
      note:D("1B1RmcvW6NM4D3G2Om-TrNwPCyYzN-5zn"),
      ans:"", /* key: D("1RxJkvkD2pj1wfP_WeTff0MZJd6BH0X9O") */ extras:[]},
    {d:8, iso:"2026-09-11", topic:"Exploring Transformations", num:"1.6/1.7",
      note:D("1hA6rmMxThD0Xhdr7yLgRkiW-Vk9MLNVS"),
      ans:"", /* key: D("1QVg9nH2lh_GN_8dkWxvx4Rrrs7OjjgUw") */ extras:[]},
    {d:9, iso:"2026-09-14", topic:"Combining Transformations", num:"1.8",
      note:D("1PeHNFfsLZcFexpOZqU96KQp3aYEJXMmx"),
      ans:"", /* key: D("1-wmn1EyyVwNYXAdi6uSHNyPGwCdkcsVm") */ extras:[]},
    {d:10, iso:"2026-09-15", topic:"Graphing Practice · Practice Quiz", flag:"quiz",
      noteLabel:"Practice Quiz", ansLabel:"Answers", note:"", ans:"", extras:[]},
    {d:11, iso:"2026-09-16", topic:"Review", flag:"review", note:"", ans:"", extras:[]},
    {d:12, iso:"2026-09-17", topic:"Unit Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 2 ─────────────────────────────────────────────── */
  {name:"Equivalent Expressions", days:[
    {d:1, iso:"2026-09-18", topic:"Operations with Polynomials", num:"2.1/2.2",
      note:D("19cNQaGU4cXw9SmCYOtt7XmHEgRovTnti"),
      ans:"", /* key: D("1HqMutGUGTmXgJ040NHUNZFshzPffy4is") */ extras:[]},
    {d:2, iso:"2026-09-21", topic:"Factoring I", num:"2.3",
      noteLabel:"Factoring I Blank Note & Practice Problems",
      note:D("1mhVy3zAUCJhm1TqXyy8--7Ae6GFljDsp"),
      ans:"", /* key: D("1__ln6SaM1YWoxkghd-M2AI523DUTH0gM") */ extras:[]},
    {d:3, iso:"2026-09-22", topic:"Factoring II", num:"2.3",
      noteLabel:"Factoring II Blank Note & Practice Problems",
      note:D("1i8yxX4cYiMC2hAK7M6pTOiUd1llnSRUr"),
      ans:"", /* key: D("1o6Nxv9DpOJYBsQJzlVk6tzb6u_flSghi") */ extras:[]},
    {d:4, iso:"2026-09-23", topic:"Operations with Radicals",
      noteLabel:"Radicals Blank Note & Practice Problems",
      note:D("1-bfpUX75S9So8H9teIdEpv1xEdJCSh9M"),
      ans:"", /* key: D("1JZF1wIV3GtVnNHqbBtgkQsehJnVtSTZA") */ extras:[]},
    {d:5, iso:"2026-09-24", topic:"Simplifying Rational Expressions", num:"2.4/2.5",
      note:D("1UT-h80MwT3px23XWSSEbXu-F_wA0g50Y"),
      ans:"", /* key: D("1g2F-G-DwVnppwFQj1tCP5rfCzaErAoYs") */ extras:[]},
    {d:6, iso:"2026-09-25", topic:"Multiplying & Dividing Rational Expressions", num:"2.6",
      note:D("1M8gSGla_kQmyQ6jOs4FuV5fzz8sDQPPa"),
      ans:"", /* key: D("1sqjvy6h9eClitWzXIZhyorvfpG2Wu1V4") */ extras:[]},
    {d:7, iso:"2026-09-28", topic:"Adding & Subtracting Rational Expressions", num:"2.7",
      note:D("1sT96KBcH6bNJo02nLh5R4XkCPMmCMGc2"),
      ans:"", /* key: D("1MBdu-Zl0aVlju3yloRqU2b3W_vZj4wnl") */ extras:[]},
    {d:8, iso:"2026-09-29", topic:"Practice Quiz · Work Period", flag:"quiz",
      noteLabel:"Practice Quiz", ansLabel:"Answers", note:"", ans:"", extras:[]},
    {d:9, iso:"2026-09-30", topic:"Review", flag:"review", note:"", ans:"", extras:[]},
    {d:10, iso:"2026-10-01", topic:"Unit Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 3 ─────────────────────────────────────────────── */
  {name:"Quadratic Functions", days:[
    {d:1, iso:"2026-10-05", topic:"Properties of Quadratic Functions", num:"3.1", note:"", ans:"", extras:[]},
    {d:2, iso:"2026-10-06", topic:"Max/Min I: Completing the Square", num:"3.2",
      noteLabel:"Max/Min I Blank Note & Practice Problems", note:"", ans:"", extras:[]},
    {d:3, iso:"2026-10-07", topic:"Max/Min II: Partial Factoring & Choosing a Method", num:"3.2",
      noteLabel:"Max/Min II Blank Note & Practice Problems", note:"", ans:"", extras:[]},
    {d:4, iso:"2026-10-08", topic:"Inverse of a Quadratic", num:"3.3", note:"", ans:"", extras:[]},
    {d:5, iso:"2026-10-09", topic:"Solving Quadratic Equations", num:"3.5", note:"", ans:"", extras:[]},
    {d:6, iso:"2026-10-13", topic:"Zeros & the Discriminant", num:"3.6", note:"", ans:"", extras:[]},
    {d:7, iso:"2026-10-14", topic:"Practice Quiz · Work Period", flag:"quiz",
      noteLabel:"Practice Quiz", ansLabel:"Answers", note:"", ans:"", extras:[]},
    {d:8, iso:"2026-10-15", topic:"Families of Quadratic Functions", num:"3.7", note:"", ans:"", extras:[]},
    {d:9, iso:"2026-10-16", topic:"Linear–Quadratic Systems",
      noteLabel:"Blank Note & Practice Problems", note:"", ans:"", extras:[]},
    {d:10, iso:"2026-10-19", topic:"Quadratic Applications & Modelling",
      noteLabel:"Blank Note & Practice Problems", note:"", ans:"", extras:[]},
    {d:11, iso:"2026-10-20", topic:"Review", flag:"review", note:"", ans:"", extras:[]},
    {d:12, iso:"2026-10-21", topic:"Unit Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 4 ─────────────────────────────────────────────── */
  {name:"Exponential Functions", days:[
    {d:1, iso:"2026-10-22", topic:"Integer Exponents", num:"4.2", note:"", ans:"", extras:[]},
    {d:2, iso:"2026-10-23", topic:"Rational Exponents", num:"4.3", note:"", ans:"", extras:[]},
    {d:3, iso:"2026-10-26", topic:"Simplifying Expressions with Exponents", num:"4.4", note:"", ans:"", extras:[]},
    {d:4, iso:"2026-10-27", topic:"Properties of Exponential Functions", num:"4.5", note:"", ans:"", extras:[]},
    {d:5, iso:"2026-10-28", topic:"Transformations of Exponential Functions", num:"4.6", note:"", ans:"", extras:[]},
    {d:6, iso:"2026-10-29", topic:"Modelling Investigation",
      noteLabel:"Investigation Handout", note:"", ans:"", extras:[]},
    {d:7, iso:"2026-10-30", topic:"Applications: Growth & Decay", num:"4.7", note:"", ans:"", extras:[]},
    {d:8, iso:"2026-11-02", topic:"Practice Quiz · Work Period", flag:"quiz",
      noteLabel:"Practice Quiz", ansLabel:"Answers", note:"", ans:"", extras:[]},
    {d:9, iso:"2026-11-03", topic:"Review", flag:"review", note:"", ans:"", extras:[]},
    {d:10, iso:"2026-11-04", topic:"Unit Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 5 ─────────────────────────────────────────────── */
  {name:"Trig Ratios", days:[
    {d:1, iso:"2026-11-05", topic:"Trig Ratios of Acute Angles", num:"5.1", note:"", ans:"", extras:[]},
    {d:2, iso:"2026-11-06", topic:"Special Angles", num:"5.2", note:"", ans:"", extras:[]},
    {d:3, iso:"2026-11-09", topic:"Angles Beyond 90°", num:"5.3", note:"", ans:"", extras:[]},
    {d:4, iso:"2026-11-10", topic:"Trig Ratios for Any Angle", num:"5.4", note:"", ans:"", extras:[]},
    {d:5, iso:"2026-11-11", topic:"Trig Identities", num:"5.5", note:"", ans:"", extras:[]},
    {d:6, iso:"2026-11-12", topic:"Check-In & Practice", note:"", ans:"", extras:[]},
    {d:7, iso:"2026-11-13", topic:"Sine Law", num:"5.6",
      noteLabel:"Sine Law Blank Note & Practice Problems", note:"", ans:"", extras:[]},
    {d:8, iso:"2026-11-16", topic:"The Ambiguous Case", num:"5.6",
      noteLabel:"Ambiguous Case Blank Note & Practice Problems", note:"", ans:"", extras:[]},
    {d:9, iso:"2026-11-17", topic:"Cosine Law", num:"5.7", note:"", ans:"", extras:[]},
    {d:10, iso:"2026-11-18", topic:"Trig in Three Dimensions", num:"5.8", note:"", ans:"", extras:[]},
    {d:11, iso:"2026-11-19", topic:"Review", flag:"review", note:"", ans:"", extras:[]},
    {d:12, iso:"2026-11-20", topic:"Unit Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 6 ─────────────────────────────────────────────── */
  {name:"Sinusoidal Functions", days:[
    {d:1, iso:"2026-11-24", topic:"Periodic Functions & Their Properties", num:"6.1", note:"", ans:"", extras:[]},
    {d:2, iso:"2026-11-25", topic:"Properties of Sinusoidal Functions", num:"6.2", note:"", ans:"", extras:[]},
    {d:3, iso:"2026-11-26", topic:"Interpreting Sinusoidal Functions", num:"6.3", note:"", ans:"", extras:[]},
    {d:4, iso:"2026-11-27", topic:"Exploring Transformations", num:"6.4", note:"", ans:"", extras:[]},
    {d:5, iso:"2026-11-30", topic:"Graphing Sinusoidal Functions", num:"6.5", note:"", ans:"", extras:[]},
    {d:6, iso:"2026-12-01", topic:"Graphing Practice", num:"6.5",
      noteLabel:"Graphing Practice Sheet", note:"", ans:"", extras:[]},
    {d:7, iso:"2026-12-02", topic:"Mid-Unit Review · Practice Quiz", flag:"quiz",
      noteLabel:"Practice Quiz", ansLabel:"Answers", note:"", ans:"", extras:[]},
    {d:8, iso:"2026-12-03", topic:"Modelling Investigation",
      noteLabel:"Investigation Handout", note:"", ans:"", extras:[]},
    {d:9, iso:"2026-12-04", topic:"Solving Problems with Sinusoidal Models", num:"6.7", note:"", ans:"", extras:[]},
    {d:10, iso:"2026-12-07", topic:"Applications · Work Period", note:"", ans:"", extras:[]},
    {d:11, iso:"2026-12-08", topic:"Review", flag:"review", note:"", ans:"", extras:[]},
    {d:12, iso:"2026-12-09", topic:"Unit Test", flag:"test", extras:[]},
  ]},

  /* ── UNIT 7 ─────────────────────────────────────────────── */
  {name:"Discrete Functions", days:[
    {d:1, iso:"2026-12-10", topic:"Arithmetic Sequences", num:"7.1", note:"", ans:"", extras:[]},
    {d:2, iso:"2026-12-11", topic:"Arithmetic Series", num:"7.2", note:"", ans:"", extras:[]},
    {d:3, iso:"2026-12-14", topic:"Geometric Sequences", num:"7.3", note:"", ans:"", extras:[]},
    {d:4, iso:"2026-12-15", topic:"Geometric Series", num:"7.4", note:"", ans:"", extras:[]},
    {d:5, iso:"2026-12-16", topic:"Recursive Sequences",
      noteLabel:"Blank Note & Practice Problems", note:"", ans:"", extras:[]},
    {d:6, iso:"2026-12-17", topic:"Pascal's Triangle & Binomial Expansions",
      noteLabel:"Blank Note & Practice Problems", note:"", ans:"", extras:[]},
    {d:7, iso:"2026-12-18", topic:"Problem Day · Work Period", note:"", ans:"", extras:[]},
    {d:8, iso:"2027-01-04", topic:"Simple Interest", num:"7.5", note:"", ans:"", extras:[]},
    {d:9, iso:"2027-01-05", topic:"Compound Interest: Future Value", num:"7.6", note:"", ans:"", extras:[]},
    {d:10, iso:"2027-01-06", topic:"Compound Interest: Present Value", num:"7.7", note:"", ans:"", extras:[]},
    {d:11, iso:"2027-01-07", topic:"Annuities: Future Value", num:"7.8", note:"", ans:"", extras:[]},
    {d:12, iso:"2027-01-08", topic:"Annuities: Present Value", num:"7.9", note:"", ans:"", extras:[]},
    {d:13, iso:"2027-01-11", topic:"Finance Problems: Varying the Conditions",
      noteLabel:"Blank Note & Practice Problems", note:"", ans:"", extras:[]},
    {d:14, iso:"2027-01-12", topic:"Practice Quiz · Work Period", flag:"quiz",
      noteLabel:"Practice Quiz", ansLabel:"Answers", note:"", ans:"", extras:[]},
    {d:15, iso:"2027-01-13", topic:"Review", flag:"review", note:"", ans:"", extras:[]},
    {d:16, iso:"2027-01-14", topic:"Unit Test", flag:"test", extras:[]},
  ]},

  /* ── EXAM REVIEW ────────────────────────────────────────── */
  {name:"Exam Review", noNumber:true, days:[
    {d:1, iso:"2027-01-15", topic:"Exam Review: Units 1–3", note:"", ans:"", extras:[]},
    {d:2, iso:"2027-01-18", topic:"Exam Review: Units 4–5", note:"", ans:"", extras:[]},
    {d:3, iso:"2027-01-19", topic:"Exam Review: Units 6–7", note:"", ans:"", extras:[]},
    {d:4, iso:"2027-01-20", topic:"Practice Exam", note:"", ans:"", extras:[]},
    {d:5, iso:"2027-01-21", topic:"Exam Review: Student Choice", note:"", ans:"", extras:[]},
  ]},
]};
