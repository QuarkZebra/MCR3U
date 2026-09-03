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

   To Save Time:

   git add . && git commit -m "Test content added" && git push origin main
   ═══════════════════════════════════════════════════════════ */

const D = id => `https://drive.google.com/file/d/${id}/view`;

const COURSE = {
  code: "MCR3U",
  title: "Functions",
  sub: "Grade 11 · University Preparation",
  units: [

  /* ── UNIT 1 ─────────────────────────────────────────────── */
  {name:"Intro to Functions", days:[
    {d:1, iso:"2026-09-01", topic:"Course Intro & Diagnostic", note:"", ans:"", extras:[
      ["Course Outline","https://docs.google.com/document/d/1Cm6Lv9G2oagRwM2XqHnEbIvHnvqNS621GmoQ6gVOZgw/edit?usp=sharing","doc"],
      ["Textbook","http://mrkennedy.pbworks.com/w/file/fetch/139473597/Nelson%20Functions%2011%20Textbook%281%29%281%29.pdf","doc"],
      ["Textbook Solutions","http://mrkennedy.pbworks.com/w/page/73303748/MCR3U%20Textbook%20Solutions","doc"],
      ["TVO Mathify (Resources & Free Tutoring)","https://mathify.tvolearn.com/","doc"],
    ]},
    {d:2, iso:"2026-09-02", topic:"Relations & Functions", num:"1.1",
      note:D("1DyMx3Mt-intXnPiuuNKxSrTkiwA_JAga"),
      ans:D("1hztDASoA-AkJ2ZrgK1YS-wITpXBiNf_6"), /* key: D("1hztDASoA-AkJ2ZrgK1YS-wITpXBiNf_6") */ extras:[
      ["Ms Havrot 1.1: Relations & Functions","https://www.youtube.com/watch?v=8ndTq9VM6KM","vid"],
      ["Khan: What is a function?","https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-functions-and-function-notation/v/what-is-a-function","vid"],
    ]},
    {d:3, iso:"2026-09-03", topic:"Function Notation", num:"1.2",
      note:D("1cDt0K06FDEvX1VDqRa1Oruc6txdEbsLV"),
      ans:"", /* key: D("1ikU0c2hfGY6TTePhBwgQreoEvs3quuGd") */ extras:[
      ["Ms Havrot 1.2: Function Notation","https://www.youtube.com/watch?v=3_WTOAB4n-s","vid"],
      ["Khan: Function Notation Example","https://www.khanacademy.org/math/cc-eighth-grade-math/cc-8th-linear-equations-functions/8th-functions-and-function-notation/v/understanding-function-notation-example-3","vid"],
      ["Function Notation Worksheet",D("1DeWzXMrOjoYrm9eEE3GwuGi3x_E6lqyx"),"doc"],
      ["Answers",D("1Da0GC2Xdq6qZXJqh7NV_PkMnxGqsu58G"),"ans"],
      ["JensenMath: Function Notation Worksheet",D("1go9Zq5Vtqu5ISiI0WqXXzrJQQKTUmcIw"),"doc"],
      ["Answers",D("1Zw-elTXJiayXJHbO8IRtlTkNSHD7U3VK"),"ans"],
    ]},
    {d:4, iso:"2026-09-04", topic:"Parent Functions", num:"1.3",
      note:D("1aeMN_K8e478CCmjmkObs7n6gaKrU2Qzj"),
      ans:"", /* key: D("15KItU9C_wm5Al7u5v2M-hQyjTlxmpsuY") */ extras:[
      ["Ms Havrot 1.3: Parent Functions","https://www.youtube.com/watch?v=A2Xp6aaFYnw","vid"],
      ["Ms Havrot 1.3: Finite Differences, Increasing & Decreasing","https://www.youtube.com/watch?v=ov9jc09ynuA","vid"],
    ]},
    {d:5, iso:"2026-09-08", topic:"Domain & Range", num:"1.4",
      note:D("1Dxq-RRiKrkftTmvw73PfY0Jnklxr7UqV"),
      ans:"", /* key: D("1oH-sSyLUw1qVIvMA227dcY4egS8z8l5k") */ extras:[
      ["Ms Havrot 1.4: Domain and Range","https://www.youtube.com/watch?v=FLGpA8QFYBw","vid"],
      ["Domain & Range in Set Notation","https://www.youtube.com/watch?v=vNqhnWrkPyY","vid"],
      ["Domain & Range from Graphs","https://www.youtube.com/watch?v=YjVc9ookvRs","vid"],
      ["Domain & Range Worksheet",D("1Je-Ro7TbySwsX_JPPSyFB-dES81E8qFh"),"doc"],
      ["Answers",D("1JckcwEumoPyuo4cje5ljzFxfEimowdoD"),"ans"],
      ["JensenMath: Domain & Range Worksheet",D("1YugW3BmOL5c3fpLiQG7ZiPSYdawrE0q9"),"doc"],
      ["Answers",D("1qYfXfEKLvm5toHxBe1ZoBZDfyzmSsYsp"),"ans"],
    ]},
    {d:6, iso:"2026-09-09", topic:"Current Topic + Factoring + Other Old Topic", flag:"pquiz", 
      noteLabel:"Mid-Unit Review",
      note:D("1Oege2mtMUyAHR1S9eaX8vQtJjrOMNpQ2"), ans:"" /* key: D("1y8H6_qm0qW80hEfmSYM21ybrq6GiTF3K") */, extras:[
      ["Solving Equations Practice",D("1r2EgNo747L2W40tlw6vGsaHWBfr8oK5o"),"doc"],
      ["Solving Equations with Fractions",D("1r5bw02uu2eHIz_rk118mip60raP2Lvop"),"doc"],
      ["Solve for x Practice",D("1r1sLdQ9atHYauiBJ9l-KKeh96aOoNPtS"),"doc"],
      ["Answers",D("1uMdptSAiTKu9ZUAxwaymfHeH9WH5STfb"),"ans"],
    ]},
    {d:7, iso:"2026-09-10", topic:"Inverse Functions", num:"1.5",
      note:D("14W1OuG_C-1YT4xoB4zJiqLpC2Rrv-xw9"),
      ans:"", /* key: D("1M2WyLKfQI-Oo0NyZ5Mq2sh__40hgRz1A") */ extras:[
      ["Ms Havrot 1.5: Inverse Functions","https://www.youtube.com/watch?v=vfxoaiCaqk8","vid"],
      ["Inverse Functions Worksheet",D("1MIxluvaZYlVKiLwB7e7pTI-dZvCUj-SA"),"doc"],
      ["Answers",D("1MIvL0ozQ1bDWve90b7VXskJS9qKIB-HT"),"ans"],
      ["JensenMath: Inverse of a Function Worksheet",D("12grzL9G9gl7_Putl9tJ9biKOn6FQAIrE"),"doc"],
      ["Answers",D("1hm_8DTcPQTPwWA8u4xB4VzEgqmDrLnl5"),"ans"],
    ]},
    {d:8, iso:"2026-09-11", topic:"Exploring Transformations", num:"1.6",
      note:"https://drive.google.com/file/d/1xnvNo2G8tHekZwPu_Uhm-peb_WGmlA15/view",
      ans:"", /* key: D("16MxaIbaCmrnf6ohMrUt6Hjyn-CFNLren") */ extras:[
      ["Ms Havrot 1.6: Vertical & Horizontal Translations","https://www.youtube.com/watch?v=dRIwgEtUYA0","vid"],
      ["Ms Havrot 1.6: Reflections in the x- and y-axis","https://www.youtube.com/watch?v=j4N18JHLHoo","vid"],
      ["Ms Havrot 1.7: Stretches & Compressions","https://www.youtube.com/watch?v=tF4P2Y47Odk","vid"],
      ["Khan: Shifting & Reflecting Functions","https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:transformations/x2ec2f6f830c9fb89:trans-all-together/v/shifting-and-reflecting-functions","vid"],
      ["Transformations Practice",D("1EF3dOifMlb8tx4sJnqbEYyFmVWJKp-bq"),"doc"],
      ["Answers",D("1EKk68UssXgufFJSap4stJKQFPVxpjZ6L"),"ans"],
      ["JensenMath: Intro to Transformations Worksheet",D("1RGMEK5Tf01DPZg3LdFxo6u1KUVundQcL"),"doc"],
      ["Answers",D("10f1AOaIQIOI8CPpUtKzGiLBXU16mocGP"),"ans"],
    ]},
    {d:9, iso:"2026-09-14", topic:"Combining Transformations", num:"1.7",
      note:D("12_AHWxKw9tQY2Q_pGqJNEmGMND0IKJSb"),
      ans:"", /* key: D("1mfbZjF0M7avSMRbo07FbkmVzUn04Eusi") */ extras:[
      ["Ms Havrot 1.7: Why the x-changes Feel Backwards","https://www.youtube.com/watch?v=H-IdTIi7Xr8","vid"],
      ["Ms Havrot 1.8: Mapping Rules","https://www.youtube.com/watch?v=Wkf24MjBC-U","vid"],
      ["All Types of Horizontal Transformations",D("1IRSqmlv38BnELA7tpwDTrk7rl6acdEwi"),"doc"],
      ["Answers",D("1IlAQgAHuUkKfW4x7KYdsdin8n68Wbe78"),"ans"],
      ["Transformations Challenge","https://docs.google.com/document/d/1IJCmHTifhUXx7_Llb9X43T2PMtbRPIlY/edit","doc"],
      ["Answers",D("1IlfaLVsQYJTys939SPVf41bvtZfg1PH3"),"ans"],
      ["JensenMath: Transforming y = x^2 Worksheet",D("1_rAFIe43sFKrDX3ex8eSIcE7x1fTgbCA"),"doc"],
      ["Answers",D("1F4OFvNH_JhB8N3NeZSPw2nikVroqzJAW"),"ans"],
      ["JensenMath: Transforming y = 1/x Worksheet",D("1lNeQQRSBkWik8APwGy-jdW3lH5BBbbwF"),"doc"],
      ["Answers",D("1-wvF71NaXvYAV4XO6LLuh8-o5XzlNVV7"),"ans"],
    ]},
    {d:10, iso:"2026-09-15", topic:"Current Topics + Factoring + Other Old Topic", flag:"quiz",
      note:"", ans:"", extras:[
      ["Ms Havrot: Determining an Equation from a Graph","https://www.youtube.com/watch?v=IW_bzVgPhJk","vid"],
      ["Check That You Get It",D("1JIfQqQd2HOrHuLZLbA8pjvSPcuCp0OD0"),"doc"],
      ["Answers",D("1JLWAg8PsAWuiwFzyF22xJccLtZ334R_O"),"ans"],
    ]},
    {d:11, iso:"2026-09-16", topic:"Review", 
      noteLabel:"Practice Test", ansLabel:"Answers", note:"", ans:"", extras:[
      ["Ms Havrot: Chapter 1 Practice Test","https://www.youtube.com/watch?v=pJPaVZTtiGE","vid"],
      ["Transforming Domain & Range Practice",D("1Ke1I4WAOhmPcGB51oyfMLzMELB-BwZg9"),"doc"],
      ["Answers",D("1KeNWvjLYCUn0dkP7uMbBigagw8xYzFn-"),"ans"],
      ["JensenMath: Transformations Unit Review",D("1BvOVjgeC1AzvJL3Lvw1m0tEdb8ZQ8zTc"),"doc"],
      ["Answers",D("1kkV8mkGVllblqQ-c0UXt6Ui4MbxNs_hB"),"ans"],
    ]},
    {d:12, iso:"2026-09-17", topic:"Unit 1", flag:"test", extras:[]},
  ]},

  /* ── UNIT 2 ─────────────────────────────────────────────── */
  {name:"Equivalent Expressions", days:[
    {d:13, iso:"2026-09-18", topic:"Operations with Polynomials", num:"2.1",
      note:D("1yp1psWtyLzOer2kV6zgv5N5dg-jpQgDo"),
      ans:"", /* key: D("1tH5DsMPuAxNX-MpFBoxbpgbTLknXJoYR") */ extras:[
      ["Ms Havrot 2.1: Adding & Subtracting Polynomials","https://www.youtube.com/watch?v=3EKx3zeC8OU","vid"],
      ["Ms Havrot 2.2: Multiplying Polynomials","https://www.youtube.com/watch?v=dGQ6a3jiLbI","vid"],
      ["Order of Operations Practice",D("16aQAGMlrrvb-JdnI-lnbBjPpQvac1HU7"),"doc"],
      ["Simplifying Expressions Practice",D("16b7CTGGvJBBG5l60vpW7NHul2TWPfwpo"),"doc"],
    ]},
    {d:14, iso:"2026-09-21", topic:"Factoring I", num:"2.2",
      note:D("1h-zlXBBuHL45eO588zOUL1G6cYuLWRii"),
      ans:"", /* key: D("1IJrh56tEfyb4PC3CzBJPaa94TNZ9vBHO") */ extras:[
      ["Ms Havrot 2.3: Common Factoring & Grouping","https://www.youtube.com/watch?v=a9zVcmKx-Lc","vid"],
      ["Ms Havrot 2.3: Simple Trinomials","https://www.youtube.com/watch?v=a_B_Fbck5l8","vid"],
      ["Khan: Taking Common Factors","https://www.khanacademy.org/gclassroom/math/algebra2/x2ec2f6f830c9fb89:poly-factor/x2ec2f6f830c9fb89:common-factor/a/taking-common-factors","vid"],
      ["Factoring Worksheet",D("1QqmFJUPOjP8l8zZJEqO9PU6M-SNcXsNN"),"doc"],
    ]},
    {d:15, iso:"2026-09-22", topic:"Factoring II", num:"2.3",
      note:D("1-IdxYp6KOP-B2OfjyRb7B8SvUS8A0HLW"),
      ans:"", /* key: D("18BbT74x5M3yyQ3h_yhUHuWl0gCY3ngwj") */ extras:[
      ["Ms Havrot 2.3: Complex Trinomials","https://www.youtube.com/watch?v=ZyVwwCxDxt0","vid"],
      ["Ms Havrot 2.3: Difference of Squares & Perfect Squares","https://www.youtube.com/watch?v=NVo_jE2LawY","vid"],
      ["Every Factoring Type, Worked","https://www.youtube.com/watch?v=blIh776gVsQ","vid"],
      ["Worksheet for the Video Above",D("11wPHf6NJ0i8p5KgBgOhujANNeS-zQJIj"),"doc"],
      ["More Factoring Practice",D("16wBxYMkSBnxSJ7isUZbQuxvfOxisBUyy"),"doc"],
    ]},
    {d:16, iso:"2026-09-23", topic:"Operations with Radicals", flag:"pquiz",
      num:"2.4",
      note:D("1FhmUKKhbYLkpX1UpBbOI4oSXK2SSLeN7"),
      ans:"", /* key: D("1WfRDRcf8qTSD3WDLlBQjrspddgpIQ_Bc") */ extras:[
      ["Ms Havrot 3.4: Operations with Radicals","https://www.youtube.com/watch?v=bn0_s7Ug0UY","vid"],
      ["Simplifying Square Roots","https://www.youtube.com/watch?v=74iuGIaBgRc","vid"],
      ["Adding Radicals, Quick and Simple","https://www.youtube.com/watch?v=o9onBMWckDc","vid"],
      ["Operations with Radicals Worksheet",D("17wzwWrpp3LLB8Tr0wW7yHVHvK_8NuqgM"),"doc"],
      ["JensenMath: Radicals Worksheet",D("1WB7hModR5sU8SDJZlMh8l8S7_U4yHwOC"),"doc"],
      ["Answers",D("1ZomLLGRyjfDMXiFjdc0mL2pKlaCWBWI9"),"ans"],
    ]},
    {d:17, iso:"2026-09-24", topic:"Simplifying Rational Expressions", num:"2.5",
      note:D("1SBvNw7eNT9NcuqnubM9HyMdhC8yvt2zH"),
      ans:"", /* key: D("1Q3RlHBq-Y-TJi8u4ozhJ1dChaiW5R6qY") */ extras:[
      ["Ms Havrot 2.4: Simplifying Rational Expressions","https://www.youtube.com/watch?v=V-HXjfE2SOg","vid"],
      ["Ms Havrot 2.5: There is a Hole in the Graph","https://www.youtube.com/watch?v=HG1CBlGMFuc","vid"],
      ["Khan: Simplifying Rational Expressions","https://www.khanacademy.org/math/algebra2/x2ec2f6f830c9fb89:rational/x2ec2f6f830c9fb89:cancel-common-factor/v/simplifying-rational-expressions-introduction","vid"],
      ["Simplify & State Restrictions",D("19n3xokMaxMtq6kpZBkaUgVeeiK3wQWQ0"),"doc"],
      ["Answers",D("1AoleyL3muRxdmbd2JeJ6L_GSTNtGQS3C"),"ans"],
      ["JensenMath: Simplifying Rational Expressions Worksheet",D("15AFsmbrSRCM7_0lM4IjSE24I3Yki91O9"),"doc"],
      ["Answers",D("1fbQbUmtVi4HzWQ0cwvwPyPyGf75OEr9Y"),"ans"],
    ]},
    {d:18, iso:"2026-09-25", topic:"Multiplying & Dividing Rational Expressions", flag:"pquiz", num:"2.6",
      note:D("1eC8nybUa_MxNJJNBs1Hiovpn2Q7SZ2mx"),
      ans:"", /* key: D("18FDCj062GFTFuJqIMzz0bcAmI0fvz_UF") */ extras:[
      ["Ms Havrot 2.6: Multiplying & Dividing Rational Expressions","https://www.youtube.com/watch?v=Znsdg2NXOfQ","vid"],
      ["Multiply & Divide Worksheet",D("19vmowHQjkmaGZ-D4hmK84-ugEdDIYE4R"),"doc"],
      ["Answers",D("1AA4cWKRnuoVkFbi1nebq2cxiUusmhVil"),"ans"],
      ["More Multiplying & Dividing",D("1A-5ZsyAOz_QxrcN6k23zQxBb_T1q-pWm"),"doc"],
      ["Even More Practice (answers included)",D("1Ae_mSPO3XJtH-A9vXsD3pH_JERvgjaw6"),"doc"],
      ["JensenMath: Multiplying & Dividing Worksheet",D("1wMBUhE0P5PbH0B5nfCAzb5O6u1Ruv21t"),"doc"],
      ["Answers",D("1sMx9RTyvqWXTQ1L2GECGW-swx2HUZB11"),"ans"],
    ]},
    {d:19, iso:"2026-09-28", topic:"Adding & Subtracting Rational Expressions", num:"2.7",
      note:D("1WF9YkAGvvwMwVKauJcaWzQzDz10H-FTU"),
      ans:"", /* key: D("10SlQXpVxVsXiPdViOdBRZV5uQyQvxLRp") */ extras:[
      ["Ms Havrot 2.7: Adding & Subtracting Rational Expressions","https://www.youtube.com/watch?v=TGdEY0DPmnI","vid"],
      ["Adding Rational Expressions","https://www.youtube.com/watch?v=Wk8ZZhE9ZjI","vid"],
      ["Subtracting Rational Expressions","https://www.youtube.com/watch?v=c-8xQyU0ch0","vid"],
      ["Add & Subtract Worksheet (answers included)",D("1BMGiEEP3kWE-QUUFTvx602OPmioA9WD-"),"doc"],
      ["JensenMath: Adding & Subtracting Worksheet",D("1dOCRkzseYiV3I_cujmbPsRWYuhlXOYGH"),"doc"],
      ["Answers",D("1guhzQCUlG45rHEq7sj_SwqCrXm60ExNf"),"ans"],
    ]},
    {d:20, iso:"2026-09-29", topic:"Current Topics & Function Notation + Other Old Topic", flag:"quiz",
       note:"", ans:"", extras:[
      ["Order of Operations with Rational Expressions",D("1AzD-0XfsUG8NloThMnDJrNIOD-QIBNmG"),"doc"],
      ["Answers",D("1WwmFDonBoze4TegiPoUW9kUVSMV6hANV"),"ans"],
      ["Extra Practice (answers included)",D("1BfAiNvvv4h2i9jYehHXdm7HHfhtnWP-o"),"doc"],
    ]},
    {d:21, iso:"2026-09-30", topic:"Review", 
      noteLabel:"Practice Test", ansLabel:"Answers", note:"", ans:"", extras:[
      ["Ms Havrot: Chapter 2 Practice Test","https://www.youtube.com/watch?v=xz-uUAnH8Wk","vid"],
      ["Review Questions",D("1CwCDD87KecF4N4PrKHVar_y8MyAMqTEk"),"doc"],
      ["Answers",D("1DID_X4PiHBjTXL7MmK7vzCWc0sdG5YZT"),"ans"],
      ["JensenMath: Rational Expressions Unit Review",D("113p5NHWfrg6DRo0pxPBoEqBBQPiZZbJ-"),"doc"],
      ["Answers",D("1r3F9-xob0cZ9YuRB7_c0_o6gZ2qWhNQx"),"ans"],
    ]},
    {d:22, iso:"2026-10-01", topic:"Unit 2 + Solving Quadratics", flag:"test", extras:[]},
  ]},

  /* ── UNIT 3 ─────────────────────────────────────────────── */
  {name:"Quadratic Functions", days:[
    {d:23, iso:"2026-10-05", topic:"Properties of Quadratic Functions", num:"3.1",
      note:D("1ec0lsmRI1tGqCPd-cfLCEigshD4x349j"),
      ans:"", /* key: D("1NoyP-5JafrlV9q8LkWrYQcBtbjTd4PJl") */ extras:[
      ["Ms Havrot 3.1: Properties of Quadratic Functions","https://www.youtube.com/watch?v=MOT2XGonThs","vid"],
      ["Ms Havrot 3.1: Homework Examples","https://www.youtube.com/watch?v=pvAfEvuikTM","vid"],
      ["Properties Worksheet",D("1RepawH2pm059Xdi_AkO5_pThhxCON4ZO"),"doc"],
      ["Answers",D("1RjwW3BGKwSuQXRobcRskDDwZZSny5vW5"),"ans"],
    ]},
    {d:24, iso:"2026-10-06", topic:"Max/Min I: Completing the Square", num:"3.2",
      noteLabel:"Max/Min I Blank Note & Practice Problems",
      note:D("1HK-9OBuf6DsBtG5RX31HxsxlPEoHfzTH"),
      ans:"", /* key: D("1CTpoyug75BFjRGNpoiCaV6xdY02ACB_J") */ extras:[
      ["Ms Havrot 3.2: Max & Min Values, the Easiest Way","https://www.youtube.com/watch?v=7m3J7vmmD3o","vid"],
      ["Standard to Vertex Form Practice",D("13EysFDIUFt251ktqcsLzGxCd8E4nB7nz"),"doc"],
      ["How to Solve Quadratics (reference note)",D("1370rile9QT6u63jms7Brm9L1Edhqu-JM"),"doc"],
      ["JensenMath: Max/Min of a Quadratic Worksheet",D("1XukDpjHeCKfK4FXy8O9Wa4WsByjwQa8M"),"doc"],
      ["Answers",D("1BFlwfpdJDu9BvHJa8R2HRAkulDnW-zoE"),"ans"],
    ]},
    {d:25, iso:"2026-10-07", topic:"Max/Min II: Partial Factoring & Choosing a Method", num:"3.2",
      noteLabel:"Max/Min II Blank Note & Practice Problems",
      note:D("1-BD-OM_KRYaeDQaAWUN6KQjVIhTyY7zx"),
      ans:"", /* key: D("1vzodBY8YKrRzsgO86C934KEJN3p3dEQ3") */ extras:[
      ["Ms Havrot 3.2: Max & Min Values, the Easiest Way","https://www.youtube.com/watch?v=7m3J7vmmD3o","vid"],
      ["How to Solve Quadratics (reference note)",D("1370rile9QT6u63jms7Brm9L1Edhqu-JM"),"doc"],
    ]},
    {d:26, iso:"2026-10-08", topic:"Inverse of a Quadratic", flag:"pquiz", num:"3.3",
      note:D("1WCtkSfdTdUAJ7ndtTTFe3oreiBkw9I_s"),
      ans:"", /* key: D("1kRk65_YpM98tuqaa0nAxevu4ETJnTWdA") */ extras:[
      ["Ms Havrot 3.3: Inverse of a Quadratic Function","https://www.youtube.com/watch?v=9ras8m0rNmY","vid"],
      ["Khan: Flipping & Shifting Radical Functions","https://www.khanacademy.org/math/algebra-home/alg-radical-eq-func/alg-graphs-of-radical-functions/v/flipping-shifting-radical-functions","vid"],
      ["Square Root Function Practice",D("1MJEsyIZUyOq1L6Y6yOrwHPDn9qciOTJh"),"doc"],
      ["Answers",D("1MM75mgF10sChJ2TNNk50c-MVgVlTsB6Y"),"ans"],
      ["JensenMath: Transforming y = root x Worksheet",D("1_icrizhj22813JwDbCSHEnTzl32QOKcG"),"doc"],
      ["Answers",D("13Y7ZOpE4FTmzFMwv-npfmuL6XeA1KzgN"),"ans"],
    ]},
    {d:27, iso:"2026-10-09", topic:"Solving Quadratic Equations", flag:"pquiz", num:"3.5",
      note:D("1mZonA8_Qjh2etiS0DxprxcPa6NDQGohf"),
      ans:"", /* key: D("1Fc98G0ZRBU2WBVVHSN5YPmobF7LAjOw8") */ extras:[
      ["Ms Havrot 3.5: Solving Quadratic Equations","https://www.youtube.com/watch?v=gFnXJaS93mY","vid"],
      ["Where the Quadratic Formula Comes From","https://www.mathsisfun.com/algebra/quadratic-equation-derivation.html","doc"],
      ["JensenMath: Solving by Factoring Worksheet",D("1ikeR9ZuwzySkvSPdcYo90nJCt5NzzW0S"),"doc"],
      ["Answers",D("1K33HQjLsDOgyDkU8_j9L1oeBRZMP__K1"),"ans"],
    ]},
    {d:28, iso:"2026-10-13", topic:"Zeros & the Discriminant", num:"3.6",
      note:D("1Lpjj4fsd6mYoBpwbldbnTM0PUBUb-3kf"),
      ans:"", /* key: D("1qiU6ZmPYBAsuD0rybUSJKosgL2hzWIoC") */ extras:[
      ["Ms Havrot 3.6: Zeros of a Quadratic (Discriminant)","https://www.youtube.com/watch?v=xDhSMwBS4JY","vid"],
      ["JensenMath: Quadratic Formula Worksheet",D("1DUALyVJcSZYkwXj8_cKKGUpsSEUMTw6y"),"doc"],
      ["Answers",D("18wT6cU2qcO4T4KzGW1GjU08p2_MfVeKl"),"ans"],
    ]},
    {d:29, iso:"2026-10-14", topic:"Current Topics & Factoring + Other Old Topic", flag:"quiz",
      noteLabel:"Practice Quiz", ansLabel:"Answers", note:"", ans:"", extras:[
      ["Extra Practice Quiz",D("13zU8Yv85XPAI0zFf0DOiLvWKYfnHku-U"),"doc"],
    ]},
    {d:30, iso:"2026-10-15", topic:"Families of Quadratic Functions", num:"3.7",
      note:D("1BqFevvF_iH4EHJ74reSfkF-0SK81ZvEp"),
      ans:"", /* key: D("16X0Vu7M7k8IPuw98otp0mKdL0K3wIlok") */ extras:[
      ["Ms Havrot 3.7: Families of Quadratic Functions","https://www.youtube.com/watch?v=L5vpJ3jcWYc","vid"],
    ]},
    {d:31, iso:"2026-10-16", topic:"Linear–Quadratic Systems",
      noteLabel:"Blank Note & Practice Problems",
      note:D("1uP90ryBN8O1Ebpiwq_ZWRLMcXUL0Opsz"),
      ans:"", /* key: D("1QJlU5CfqAA9mff5l28IfxgFWFcDnrx8G") */ extras:[
      ["Ms Havrot 3.8: Linear-Quadratic Systems","https://www.youtube.com/watch?v=1QuXn3hoRAU","vid"],
      ["Solving Linear Systems","https://www.youtube.com/watch?v=Ft2_QtXAnh8","vid"],
      ["JensenMath: Linear-Quadratic Systems Worksheet",D("1MkoIOvQqeNCJzT3JkCNBlesAKnvNJmA7"),"doc"],
      ["Answers",D("1TYd848WgUU9Tf0Vb4T4DlF9kgMK3_FhI"),"ans"],
    ]},
    {d:32, iso:"2026-10-19", topic:"Quadratic Applications & Modelling", flag:"pquiz",
      noteLabel:"Blank Note & Practice Problems",
      note:D("1uvhBtUCe4Pty-sS0Z9KqwDJAFTmhMLcg"),
      ans:"", /* key: D("1jpQ4SAPsumwV7-mzfk19E3VY93A0c15Z") */ extras:[
      ["Modelling Problems",D("15nQQbG7CiecLaTs7PfTcIXTQreCeHUxy"),"doc"],
      ["Answers",D("160Id0p6LbqrqAPsZIJlOdjrP-6AomcFn"),"ans"],
      ["Extra Modelling Question",D("18tgNL0nXk_qFXyeNyHq4yaDw4HibmHu5"),"doc"],
      ["Answers",D("18u6p95YNoy5yr_h3NmPJblB2CZTLe66w"),"ans"],
    ]},
    {d:33, iso:"2026-10-20", topic:"Review", note:"", ans:"", extras:[
      ["Ms Havrot: Chapter 3 Practice Test (Part 1)","https://www.youtube.com/watch?v=Php2E7O9tAQ","vid"],
      ["Ms Havrot: Chapter 3 Practice Test (Part 2)","https://www.youtube.com/watch?v=XHgoHFdrp2k","vid"],
      ["JensenMath: Quadratics Unit Review",D("1y0dTdbIT-EJoYSFguwLSZEruKOOQj2ax"),"doc"],
      ["Answers",D("1vLJ2L5ksHGWtCqU2CeC4PVC6sxAfsR9i"),"ans"],
    ]},
    {d:34, iso:"2026-10-21", topic:"Unit 3 + Radicals & Exponent Laws", flag:"test", extras:[]},
  ]},

  /* ── UNIT 4 ─────────────────────────────────────────────── */
  {name:"Exponential Functions", days:[
    {d:35, iso:"2026-10-22", topic:"Integer Exponents", num:"4.2",
      note:D("1debMv_rGlsySZMCJq2F5L-AGdEw2vgJo"),
      ans:"", /* key: D("1kVQlVBiVZ5Qf9awFBhM15hWiUsBYqYhT") */ extras:[
      ["Ms Havrot 4.2: Integer Exponents","https://www.youtube.com/watch?v=FDjUeC3WJWU","vid"],
      ["Zero, Negative & Fractional Exponents","https://www.youtube.com/watch?v=tOuCdKqO6-s","vid"],
      ["Exponent Law Practice",D("1hsNHVnExBiUJ5tECuL25-6n2BRxNUTVm"),"doc"],
      ["Answers",D("1hwYedhAdoiwIlvCeZGJDPWSir5yXpexC"),"ans"],
      ["JensenMath: Exponent Rules Worksheet",D("1icHNp3iTPz0pukFtX3dL6_5hhNZL-nqU"),"doc"],
      ["Answers",D("1d4UAXb4V-zb5tgIx5HLHy_Dy9Mp8aFvw"),"ans"],
    ]},
    {d:36, iso:"2026-10-23", topic:"Rational Exponents", num:"4.3",
      note:D("1mSVRt7DOKDPQqwATdmwwATKiD9sZ1-lO"),
      ans:"", /* key: D("1zr4WHpM8IIkfgJalxWHb9HLzPEsnI2rd") */ extras:[
      ["Ms Havrot 4.3: Rational Exponents","https://www.youtube.com/watch?v=R0lhsIEBC6k","vid"],
      ["Simplifying Rational Exponents","https://www.youtube.com/watch?v=S34NM0Po0eA","vid"],
      ["Rational Exponents Practice",D("182zS4hOiXNe8B6RxQf09IoOOmXEmqjiG"),"doc"],
      ["Answers",D("180cwK_JBCWNLol-6HXiQTAg7ReKHI53P"),"ans"],
      ["More Practice (answers included)",D("1Aa4iRdz76tgOwCU0k_ENM3BYZqoBvZhw"),"doc"],
      ["JensenMath: Rational Exponents Worksheet",D("1ePJMFvVhAm5qSRhmnfgUVQD1qCO3R-cZ"),"doc"],
      ["Answers",D("1yWOf6bz6Oxj8tF3oJhFK0OOa3ELTIse0"),"ans"],
    ]},
    {d:37, iso:"2026-10-26", topic:"Simplifying Expressions with Exponents", num:"4.4",
      note:D("1lUxGr_jL-u8A1GgyktCtzrZnXClH7FCk"),
      ans:"", /* key: D("1H0P03PwhteSGjCq5IKqxdGY_vVbcb1zp") */ extras:[
      ["Ms Havrot 4.4: Simplifying Expressions with Exponents","https://www.youtube.com/watch?v=5xA4yb9HuvU","vid"],
      ["Exponent Worksheet",D("18OkSTlX0wHwBtbrPsPz8bW6ABk8ZgI-q"),"doc"],
      ["Challenging Exponent Law Practice",D("1i5T_lW37ljSpdkk88FAGv-Vw4QLGCreM"),"doc"],
      ["Answers",D("1hyWwmCQThFgAOUBk4B338ivEeBmKDE3s"),"ans"],
    ]},
    {d:38, iso:"2026-10-27", topic:"Properties of Exponential Functions", flag:"pquiz", num:"4.5",
      note:D("1jwNg2L39_9B8Q-dvTpMIt-VsOCz19iVq"),
      ans:"", /* key: D("1iRLeHh85YyGHQvbgSuItbhXbBZdt_nDN") */ extras:[
      ["Ms Havrot 4.5: Graphing Exponential Functions","https://www.youtube.com/watch?v=C0EsktjZIxE","vid"],
      ["Analysing Exponential Graphs","https://www.youtube.com/watch?v=fe1Hsqyetzk","vid"],
      ["Exponential Graph Analysis",D("1hN_LwGeCyfv3sA9Z4_8-PLEl63bIvZ_Q"),"doc"],
      ["Answers",D("1hazYKdkVz7j8LzxBnfQxMHyBsH5VhXTU"),"ans"],
      ["JensenMath: Properties of Exponential Functions Worksheet",D("1KKN3lPnKTrQzmwX-T3frrPo2-SgGK2X0"),"doc"],
      ["Answers",D("1IhNv4rdQg5FjO3lYvRRKbdF6GAxod2FC"),"ans"],
    ]},
    {d:39, iso:"2026-10-28", topic:"Transformations of Exponential Functions", num:"4.6",
      note:D("1sISi9NWWo76FwiXG-aa5Fu4JWCZCIyes"),
      ans:"", /* key: D("1r1vTPJiULMHrXdctrm9yBDKNezT1rtYw") */ extras:[
      ["Ms Havrot 4.6: Transformations of Exponential Functions","https://www.youtube.com/watch?v=3hafG0rPiYg","vid"],
      ["Graphing Using Transformations","https://www.youtube.com/watch?v=3sCF7c6G3Y8","vid"],
      ["JensenMath: Transformations Worksheet",D("1skYJ0XjVorYpTvrW_SncLN3Rx6tTXAFN"),"doc"],
      ["Answers",D("1jDDKWM7WgJZXqoC-NJ5AzgQnTXHtSvSP"),"ans"],
    ]},
    /* d6 handout deliberately NOT posted — group investigation, no reading ahead.
       Handout: D("16ObTGxzWqr7xAFMW3ioiZJt-l1KKcmR9") */
    {d:40, iso:"2026-10-29", topic:"Modelling Investigation", flag:"pquiz",
      noteLabel:"Investigation Handout", note:"", ans:"", extras:[]},
    {d:41, iso:"2026-10-30", topic:"Applications: Growth & Decay", num:"4.7",
      note:D("1Bltk9GFdpJMoE68tflyyxm0AbkI-JLfQ"),
      ans:"", /* key: D("1Ag-CTCxd7JZhg_LMG0NsZAKsYcwfVrna") */ extras:[
      ["Ms Havrot 4.7: Growth, Decay & Applications","https://www.youtube.com/watch?v=K4J1N1mx1ts","vid"],
      ["Exponential Models Practice",D("1iOUDIFhIdVBoeVBCh8W5WEjZZbsAzLEw"),"doc"],
      ["Equation from a Table of Values",D("1hcaeMgf-KO6BZk2HGCZ6OFfV6alVPG0a"),"doc"],
      ["Answers (partial)",D("1hcsdlKAfPLwqjVVpErkihxJqb1TU4hoN"),"ans"],
      ["JensenMath: Exponential Growth Worksheet",D("1jrrPXqlKoXSKA0FSwwRbT0jOU-YB9waN"),"doc"],
      ["Answers",D("1PcyOiQFkYVJNktVP9vYXR8cMk5CmkgED"),"ans"],
      ["JensenMath: Exponential Decay Worksheet",D("1Rxw6F3_sDKqrS5hvbKlLgcLs_elmXjNK"),"doc"],
      ["Answers",D("1foRlhzQe9ZpzgYBf2N2HFR94NPVdKWzI"),"ans"],
    ]},
    {d:42, iso:"2026-11-02", topic:"Current Topics & Transformations + Other Old Topic", flag:"quiz",
      noteLabel:"Practice Quiz", ansLabel:"Answers", note:"", ans:"", extras:[
      ["Ms Havrot: Chapter 4 Practice Test (Part A)","https://www.youtube.com/watch?v=ydSEGYXAD3s","vid"],
      ["More Graphs & Table of Values Practice",D("1iI86VKLlfMICXCVHyUf4LuErZT7c3SMZ"),"doc"],
    ]},
    {d:43, iso:"2026-11-03", topic:"Review", note:"", ans:"", extras:[
      ["Ms Havrot: Chapter 4 Practice Test (Part B)","https://www.youtube.com/watch?v=hNfJdisuCaQ","vid"],
      ["Review Questions",D("1iHVFMs2eDE0w-e4U_vxM1yoODDl7wuMx"),"doc"],
      ["Answers",D("1i7mrSmWO20Ers4DjTypBjGM9Iszyr6-s"),"ans"],
      ["JensenMath: Exponential Functions Unit Review",D("1uzSnbjZ-hTT543MD--tEZ3b56HmuOIHa"),"doc"],
      ["Answers",D("1IZKfrWV-SvOE2YyKHpu2N7fm4tmTp8Mi"),"ans"],
    ]},
    {d:44, iso:"2026-11-04", topic:"Unit 4 + Trigonometry", flag:"test", extras:[]},
  ]},

  /* ── UNIT 5 ─────────────────────────────────────────────── */
  {name:"Trig Ratios", days:[
    {d:45, iso:"2026-11-05", topic:"Trig Ratios of Acute Angles", num:"5.1",
      note:D("1_vWtR_Uz2jkG6hU4XVw7xPhdutM4tZhp"),
      ans:"", /* key: D("1tZVW8AoyRSDMEUeXbh8RQ3__Os77W6fj") */ extras:[
      ["Ms Havrot 5.1: Primary & Reciprocal Trig Ratios","https://www.youtube.com/watch?v=YM2TLmh4QAE","vid"],
      ["SOH CAH TOA Explained","https://www.youtube.com/watch?v=5tp74g4N8EY","vid"],
      ["Trig Ratios Practice",D("1TGppnz1JBxMeghzxpxnU-gJTYQTVD5--"),"doc"],
      ["Trig Ratios Challenge",D("1TGv5VpRb33BXm-N1hd8GhgAJo8hZ9OFd"),"doc"],
      ["JensenMath: Reciprocal Trig Ratios Worksheet",D("1KzrnrotMtxG85w01pMk8l6ihufpzy0DQ"),"doc"],
      ["Answers",D("12Sn8WcQj-pFaycNqwRgcRqIua6ghchjr"),"ans"],
    ]},
    {d:46, iso:"2026-11-06", topic:"Special Angles", num:"5.2",
      note:D("1K_NRqUJimp-XPG0h_GGSkUG7jsx2-WSM"),
      ans:"", /* key: D("1QEmlHCmLItpgeO6YxjgNYpPJkA0VCxRX") */ extras:[
      ["Ms Havrot 5.2: Exact Values with Special Triangles","https://www.youtube.com/watch?v=oABJcKscW08","vid"],
      ["Special Triangle Practice",D("1VqVdKfrZEG7ypRrR87jrzLtY9UkpllSa"),"doc"],
      ["Answers",D("1VpHalqIgobhpCmHbMe8h1TLHXwy_i6ek"),"ans"],
      ["More Special Triangle Practice",D("1W5Ku_HGXoCd_JIhU5FcaMLBWymK7qG9w"),"doc"],
      ["JensenMath: Special Angles Worksheet",D("10ktr9GOvECIkWI0DYVp-w5SsYjGv0iIE"),"doc"],
      ["Answers",D("18n76CGAAN6vEevXSz42puBYaFpYOId7p"),"ans"],
    ]},
    {d:47, iso:"2026-11-09", topic:"Angles Beyond 90°", num:"5.3",
      note:D("1c6ajJ0q2IAgaqUwK2QsVc4waz_B1hBzP"),
      ans:"", /* key: D("1RrQnEIFZabl9rck_nAmq_-eXbamHWleK") */ extras:[
      ["Ms Havrot 5.3: Trig Ratios for Angles Greater than 90 degrees","https://www.youtube.com/watch?v=H9dSvqUkDnE","vid"],
      ["Unit Circle Simulation (PhET)","https://phet.colorado.edu/sims/html/trig-tour/latest/trig-tour_en.html","doc"],
      ["CAST Rule Practice",D("1XcA6A0MfLydHePZPzM7qLAZe2ehbD8YH"),"doc"],
      ["Answers",D("1XdDDTdSoYBmw6ONjy5CDPO120cxMByU4"),"ans"],
      ["JensenMath: Ratios for Angles Greater than 90 Worksheet",D("1_-Z0DccKoK22iTFf8-WlQZTjlbjpnYLd"),"doc"],
      ["Answers",D("10zQR6nvkG8WVnqNYHbLB3A208-5cbM5W"),"ans"],
    ]},
    {d:48, iso:"2026-11-10", topic:"Trig Ratios for Any Angle", flag:"pquiz", num:"5.4",
      note:D("1-luPpRhDQNfP91DofFLVBB5YVCSSMe-S"),
      ans:"", /* key: D("15ICBZzKaFyF035RTsFO44EQ9u-vX4EKv") */ extras:[
      ["Ms Havrot 5.4: Trig Ratios Between 0 and 360 degrees","https://www.youtube.com/watch?v=KCu9zQ36kEk","vid"],
      ["Unit Circle Practice",D("1W9_vIVdn6b28G0y2V3f0Gon4wPrV4Ac_"),"doc"],
      ["JensenMath: Solving Trig Equations Worksheet",D("1DwRcb4cVGADrXKoaHJCB6nULAkDrRSgB"),"doc"],
      ["Answers",D("1si7w_98MmbBl-Lzr_QKSBONMGx4jFfft"),"ans"],
    ]},
    {d:49, iso:"2026-11-11", topic:"Trig Identities", num:"5.5",
      note:D("13o-EtHxGXVAhepHVOgr8F69W1cni52oL"),
      ans:"", /* key: D("1mpIndCEUYAk3MOn7nSwhxdXMfYQgMl7V") */ extras:[
      ["Ms Havrot 5.5: Trigonometric Identities Explained","https://www.youtube.com/watch?v=GCEBhegMMM0","vid"],
      ["Ms Havrot: Trig Identities Made Easy","https://www.youtube.com/watch?v=c0wsJWgACoI","vid"],
      ["Khan: Using Pythagorean Identities","https://www.khanacademy.org/math/precalculus/x9e81a4f98389efdf:trig/x9e81a4f98389efdf:using-trig-id/v/examples-using-pythagorean-identities-to-simplify-trigonometric-expressions","vid"],
      ["Trig Identities Practice",D("1dn4u0Chha46aV7XtXkQ9W11hVrh2rkJo"),"doc"],
      ["Answers",D("1dg_STc7-DB_aGZS1tuEIx1OwGje0X9rP"),"ans"],
      ["JensenMath: Trig Identities Worksheet 1",D("1btkUk39OIRFrLasp7nY-lx5O39eQFfDP"),"doc"],
      ["Answers",D("11t3dZDTblw1j75Go67FRoU2iXrcU_itJ"),"ans"],
    ]},
    {d:50, iso:"2026-11-12", topic:"Current Topics & Solving Quadratics + Other Old Topic", flag:"quiz", note:"", ans:"", extras:[
      ["Trig Ratio Problems",D("1UtuXf8SIydqxyEhRXWh8gJYygxAFJq9u"),"doc"],
      ["Answers",D("1V23DG9-vyNdrYrbfM0w_eU7Gr0e5-gDj"),"ans"],
      ["More Trig Identities Practice",D("1dnBfuyWuYkf607lsodaeGRQwxKUEPLu9"),"doc"],
      ["JensenMath: Trig Identities Worksheet 2",D("1_Zq7YLZjGikXs_2bWfJZ_aLD9HRfVSqc"),"doc"],
      ["Answers",D("1Ym7fZDItaqnbJZB0MpVCjQFjoyZf0369"),"ans"],
    ]},
    {d:51, iso:"2026-11-13", topic:"Sine Law", num:"5.6",
      noteLabel:"Sine Law Blank Note & Practice Problems",
      note:D("1kmcnSOOZE49F0Eh7vxxoH4IH4pqlpCh4"),
      ans:"", /* key: D("1kC4N34yMs0L_hS70D407E7MTUPODJWVb") */ extras:[
      ["Ms Havrot 5.6: The Sine Law","https://www.youtube.com/watch?v=goHdnHnW0sk","vid"],
      ["Sine & Cosine Law Practice",D("1WJqAjD2TKD4-8wVt3T7t3-G5s1ZiNFMs"),"doc"],
      ["Answers",D("1WO82PSsNxXRU0Ot3rT0bOmUuwQLhJZR1"),"ans"],
    ]},
    {d:52, iso:"2026-11-16", topic:"The Ambiguous Case", num:"5.6",
      noteLabel:"Ambiguous Case Blank Note & Practice Problems",
      note:D("1Wl5M1cZZhd8iXy2aA0On6IaNcFqVGPuW"),
      ans:"", /* key: D("13chXM-KgNriX7tjDKpR1nI53OHckjT7D") */ extras:[
      ["The Ambiguous Case, Worked","https://www.youtube.com/watch?v=RCyjglaJo5w","vid"],
      ["Ambiguous Case Worksheet",D("1d1rFfGRTuhshg9Ez2ENU_KYoqNQOKKoL"),"doc"],
      ["Answers",D("1d3Fs6z9s3zVJfZvwXZAN_vyLw56QaUfo"),"ans"],
      ["Real-World Sine Law Problems",D("1dEUeIvhTuaWPobA-IKqOFq-66IGgrD-J"),"doc"],
      ["JensenMath: Ambiguous Case Worksheet",D("1S_3Gu-SP1BkosVbrPacB5yemOugFe7ph"),"doc"],
      ["Answers",D("1ENBbUlYSjSiHU-64eMWL6-_FxFrGLHR2"),"ans"],
    ]},
    {d:53, iso:"2026-11-17", topic:"Cosine Law", flag:"pquiz", num:"5.7",
      note:D("1H7wBP1bgGdNlU0x27DbTH_CjpO_Z8rDB"),
      ans:"", /* key: D("1B4c57Ch6TdROzg1FAtuPg90vCwMScvBq") */ extras:[
      ["Ms Havrot 5.7: The Cosine Law","https://www.youtube.com/watch?v=YR8xjSBBJaM","vid"],
    ]},
    {d:54, iso:"2026-11-18", topic:"Trig in Three Dimensions", num:"5.8",
      note:D("1Lm2q_8kSlzWmP4gLes0VGumfxYNj18FK"),
      ans:"", /* key: D("14w96g6jLAE1RVDo-CK4hKI0wkCi7-LZs") */ extras:[
      ["Ms Havrot 5.8: 3-D Problems with Bearings","https://www.youtube.com/watch?v=V0kKrpqNBoE","vid"],
      ["JensenMath: Problems in 2-D and 3-D Worksheet",D("1rN-r8CkEAE7w8BCeih7BhJtY9AmcdHx_"),"doc"],
      ["Answers",D("14arJWRhR5WsXbhaYvXNw9IvVRTTyN-x0"),"ans"],
    ]},
    {d:55, iso:"2026-11-19", topic:"Review", note:"", ans:"", extras:[
      ["Ms Havrot: Unit 5 Review & Practice Test","https://www.youtube.com/watch?v=-WxwPhTrcZQ","vid"],
      ["JensenMath: Trig Geometry Unit Review",D("1e2Yfwaqq8CdB-aGG1mA1RarEB0_YMXMt"),"doc"],
      ["Answers",D("1bUOX200fks4m3DeC3dmU-dlkUbKe1TDK"),"ans"],
    ]},
    {d:56, iso:"2026-11-20", topic:"Unit 5 + Transformations of Functions", flag:"test", extras:[]},
  ]},

  /* ── UNIT 6 ─────────────────────────────────────────────── */
  {name:"Sinusoidal Functions", days:[
    {d:57, iso:"2026-11-24", topic:"Periodic Functions & Their Properties", num:"6.1",
      note:D("1hhz84UQgPyBifCy6oGUGOrPbrCsRlsHo"),
      ans:"", /* key: D("1Wkixpm1SsP6160sgRJvKm9OKsLQpqoMY") */ extras:[
      ["Ms Havrot 6.1: Periodic Functions","https://www.youtube.com/watch?v=xDSoGT-PESk","vid"],
      ["JensenMath: Periodic Behaviour Worksheet",D("1FGd-zFEkhf1Hi1AUOi8PXPeTMV2xprwc"),"doc"],
      ["Answers",D("18TMmbexjshqO8bC2gFQ1Ep0JYArikrK6"),"ans"],
    ]},
    {d:58, iso:"2026-11-25", topic:"Properties of Sinusoidal Functions", num:"6.2",
      note:D("1v2gLoEu8tPO0Mz9aZRzzVnAO0cD6Q0ud"),
      ans:"", /* key: D("1s4dxDOnl7H_pqvDgVUJfq0FEnRtWijLw") */ extras:[
      ["Ms Havrot 6.2: y = sin x and y = cos x","https://www.youtube.com/watch?v=ki4wmo_j8ls","vid"],
      ["sin x and cos x Practice",D("1YeaqyyNrpd97Nw-oKzvB8_-k_4ZWzGFB"),"doc"],
      ["More Practice (answers included)",D("1YrlsHpqROhZnNa4j203XfwLXgX_7QyyZ"),"doc"],
      ["JensenMath: Graphing Sine & Cosine Worksheet",D("1I9lIdbNpw55CX-l7iUzLm7QCEJTQOLey"),"doc"],
      ["Answers",D("1dDoiPHhMdrkX7l6zr7u9i7YqKp8Wa35j"),"ans"],
    ]},
    {d:59, iso:"2026-11-26", topic:"Interpreting Sinusoidal Functions", num:"6.3",
      note:D("1NBHij19eME0Wajs60bfg43PiEt0eF-ZV"),
      ans:"", /* key: D("16wPzQ09Iw1yKDypip29zc0TlgoShvEyJ") */ extras:[
      ["Ms Havrot 6.3: Interpreting Sinusoidal Functions","https://www.youtube.com/watch?v=-LGqUsObWrw","vid"],
      ["Analysing Graphs Worksheet",D("1a9Gpby6yNzrEUGZKUvFp2Wwsc_H7sKaJ"),"doc"],
      ["Answers",D("1aTt5_xunUNjKr-ILTwixvnvUvjclNjNO"),"ans"],
    ]},
    {d:60, iso:"2026-11-27", topic:"Exploring Transformations", flag:"pquiz", num:"6.4",
      note:D("12BLJg_twdcynJa3b9xpwdl3FrkwfKYHz"),
      ans:"", /* key: D("1bsIGdWRx54oJf4lNkBjqp9eHaJmS7tgH") */ extras:[
      ["Ms Havrot 6.4: Transformations of Sinusoidal Functions","https://www.youtube.com/watch?v=bRPBImnpr1Y","vid"],
      ["Transformation Investigation",D("1_HHLDNsm1ZMnPgSspkeB6qa8wPcVhCYS"),"doc"],
      ["Answers",D("1_o0AhFRC_BxzmKyPv9hKThQSRQCE8Zxy"),"ans"],
    ]},
    {d:61, iso:"2026-11-30", topic:"Graphing Sinusoidal Functions", num:"6.5",
      note:D("1lnWLQtPaDderivvW9rFTvCKbKS2coIbB"),
      ans:"", /* key: D("1VNLqhVyKFOHONKmKvDoUWuHw9Q1avCpD") */ extras:[
      ["Ms Havrot 6.5: Sketching with Transformations","https://www.youtube.com/watch?v=emoBZSxrphw","vid"],
      ["Trig Function Practice",D("1ZcaRWQE6K9NHLvckYBoodakrbqTIZrBO"),"doc"],
      ["Answers",D("1Ztp1kxG_UjfbDekxu_DTYHV2kUrgCeyK"),"ans"],
      ["JensenMath: Graph from Equation Worksheet",D("1iSPxROxe20QJugUVmkPcGcfccmUG2HVF"),"doc"],
      ["Answers",D("1vHnbBjer9Rc6z6_G1E0lMWJtuOZwYecD"),"ans"],
    ]},
    {d:62, iso:"2026-12-01", topic:"Equations from Graphs", num:"6.5",
      noteLabel:"Equations from Graphs Blank Note & Practice Problems",
      note:D("17NMuA6ynW8ZVMwWXfOrRN0J4Xgf7sCy8"),
      ans:"", /* key: D("1fwPkd9l9Pk23WXmN4PHbfLS3zSrR6Atp") */ extras:[
      ["Ms Havrot 6.6: Equations from Graphs","https://www.youtube.com/watch?v=cpHiZ-8mxmc","vid"],
      ["Ms Havrot 6.6: Equations from Graphs (homework)","https://www.youtube.com/watch?v=VNjUNCUoxxo","vid"],
      ["JensenMath: Equation from Graph Worksheet",D("1L5_Cz5vFBBT_mAa-zbr3Z7U7JhWSBLJ1"),"doc"],
      ["Answers",D("1uh6FFljvAUX30YPq5eLtsV9Ka7roVs08"),"ans"],
    ]},
    {d:63, iso:"2026-12-02", topic:"Current Topics & Sine Law + Other Old Topic", flag:"quiz",
      noteLabel:"Practice Quiz", ansLabel:"Answers", note:"", ans:"", extras:[
      ["Ms Havrot: Trig Function Practice Quiz","https://www.youtube.com/watch?v=DGqkffa6RCM","vid"],
    ]},
    /* d8 handout deliberately NOT posted — group investigation, no reading ahead.
       Handout: D("16qpkhwJzZM2KG0rRbg-ArrKlwQwkysm_") */
    {d:64, iso:"2026-12-03", topic:"Modelling Investigation",
      noteLabel:"Investigation Handout", note:"", ans:"", extras:[]},
    {d:65, iso:"2026-12-04", topic:"Solving Problems with Sinusoidal Models", num:"6.7",
      note:D("164tuZ7p9urzrLM2oGZO-CVZbBGZDzwt5"),
      ans:"", /* key: D("1xrFjPCTYSPJ857ViHSrHaJw5XfmQYlqH") */ extras:[
      ["Ms Havrot 6.7: Trigonometric Models","https://www.youtube.com/watch?v=E_f1OhciJ3M","vid"],
      ["Solving Trig Functions",D("1ayY1R-2SAPkPKBD6WC98WDSjffqBeOgw"),"doc"],
      ["JensenMath: Trig Applications Worksheet 1",D("1J5xuTVE4qdpKep6bDSgwEQ3mAW2Mz9rv"),"doc"],
      ["Answers",D("1bvdRZ3Z2L3KMNY7qmdFkj7SOcnuE7wLn"),"ans"],
    ]},
    {d:66, iso:"2026-12-07", topic:"Current Topics & Rational Expressions + Other Old Topic", flag:"quiz", note:"", ans:"", extras:[
      ["Modelling with Sinusoidal Functions",D("1bNktPuqTz_ZMoB5D84iQevnASJgFrRnL"),"doc"],
      ["JensenMath: Trig Applications Worksheet 2",D("1mF_QuMU8CEMOyFf3CJJf37AXcqT2evMg"),"doc"],
      ["Answers",D("1_ue-5SDtC7Ibhz9PZCL6mms1OjkoEWzj"),"ans"],
    ]},
    {d:67, iso:"2026-12-08", topic:"Review", note:"", ans:"", extras:[
      ["Ms Havrot: Unit 6 Practice Test","https://www.youtube.com/watch?v=FUaJhcVd52o","vid"],
      ["JensenMath: Trig Functions Unit Review",D("1-_j8rmJXIIjAsNDAqK_5A_xed03M_no_"),"doc"],
      ["Answers",D("1FkyAkDFksxttmyI3zPEk-6sb_NJ9_ZEr"),"ans"],
    ]},
    {d:68, iso:"2026-12-09", topic:"Unit 6 + Exponential Functions", flag:"test", extras:[]},
  ]},

  /* ── UNIT 7 ─────────────────────────────────────────────── */
  {name:"Discrete Functions", days:[
    {d:69, iso:"2026-12-10", topic:"Arithmetic Sequences", num:"7.1",
      note:D("1YRvgX_8miXnuAUNfoMJ2QvBDmi3hKfj1"),
      ans:"", /* key: D("1Np4YU7KA5zRcmqI3R_HvN2smgjdrRvfA") */ extras:[
      ["Ms Havrot 7.1: Arithmetic Sequences","https://www.youtube.com/watch?v=Kywsd6LKXKg","vid"],
      ["JensenMath: Sequences Worksheet",D("1wLUlIfZJCEIHCRd4TFASrN9_Q71W8TJb"),"doc"],
      ["Answers",D("1qT6npurfV2M4f8fzLQ0lXJcDm9UapJ2W"),"ans"],
    ]},
    {d:70, iso:"2026-12-11", topic:"Arithmetic Series", num:"7.2",
      note:D("1_2G8AIGTT4SdKJhUgTWOA9XgmQyc7TKj"),
      ans:"", /* key: D("14_2JMCadpwKliGWLL_-oANh-xZbFHS3a") */ extras:[
      ["Ms Havrot: Arithmetic Series (Part 1)","https://www.youtube.com/watch?v=1TfHHTSS1jk","vid"],
      ["Ms Havrot: Arithmetic Series (Part 2)","https://www.youtube.com/watch?v=_vsOtJkFLUU","vid"],
      ["JensenMath: Arithmetic & Geometric Series Worksheet",D("1FVM6766JKS5ZX5J_k1GOj6gDWjqFyriB"),"doc"],
      ["Answers",D("19yQ4rDIM2rRuP0cBmkg4rtIdHDxRbr0L"),"ans"],
    ]},
    {d:71, iso:"2026-12-14", topic:"Geometric Sequences", flag:"pquiz", num:"7.3",
      note:D("1Oj210nWTLwvlxo0PkwJpD2aeIRfxqiLo"),
      ans:"", /* key: D("1ewN626og8EpmQRHj-9CDJFsYdpwDDCkO") */ extras:[
      ["Ms Havrot 7.2: Geometric Sequences","https://www.youtube.com/watch?v=jtVesKxLyIA","vid"],
      ["JensenMath: Arithmetic & Geometric Sequences Worksheet",D("1NtPO_KIAtVkTmMjmeyU3uwXUAvH4Zv1_"),"doc"],
      ["Answers",D("12kaKyH4wMjasB1bfmLOUsB2UX-X7mPtF"),"ans"],
    ]},
    {d:72, iso:"2026-12-15", topic:"Geometric Series", num:"7.4",
      note:D("1qIvJJqWc53MxMLaqaIDmPXDEXsE-8N0o"),
      ans:"", /* key: D("1SPxT23KAvfoMKNwMSXkVvAyM4NxpZ3Iz") */ extras:[
      ["Ms Havrot: Sum of a Geometric Series","https://www.youtube.com/watch?v=4iHjc5vi3rQ","vid"],
      ["JensenMath: More Series Problems Worksheet",D("1fS3v_LVXp_DZe0k_FZlxt1ux2pzKJ9fN"),"doc"],
      ["Answers",D("1Kb6TISnZuDFQ8Q71lkZtcjLRqdrTTbz5"),"ans"],
    ]},
    {d:73, iso:"2026-12-16", topic:"Recursive Sequences", flag:"quiz",
      noteLabel:"Blank Note & Practice Problems",
      note:D("1bG1c7fbVWSXhw7akwLuPzughdj3hlFxD"),
      ans:"", /* key: D("10czApFa2sNWXpWtSGaIqludtvrXbH_V0") */ extras:[
      ["Khan: Evaluating Sequences in Recursive Form","https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:sequences/x2f8bb11595b61c86:general-sequences/v/recursive-formulas-for-sequences","vid"],
      ["Khan: Converting Recursive & Explicit Forms","https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:sequences/x2f8bb11595b61c86:constructing-arithmetic-sequences/e/explicit-and-recursive-formulas-of-arithmetic-sequences","doc"],
      ["JensenMath: Recursive Functions Worksheet",D("1MwdS_46NGbwplJvcDKunhiYPuEMEQQ9v"),"doc"],
      ["Answers",D("1DpjetkH8Dy9W4w_sNfuSV4Ym9764ncRl"),"ans"],
    ]},
    {d:74, iso:"2026-12-17", topic:"Pascal's Triangle & Binomial Expansions",
      noteLabel:"Blank Note & Practice Problems",
      note:D("1DrXK8dmMwVsw-0NfTsiA9S1kw6IGo2ws"),
      ans:"", /* key: D("1OI_Zacdg3hA_9cE5fOR-eCPNqAQRQLx3") */ extras:[
      ["Ms Havrot: Pascal's Triangle & Binomial Expansion","https://www.youtube.com/watch?v=_alTrrhD4v8","vid"],
      ["JensenMath: Pascal's Triangle Worksheet 1",D("1Xw-dKfdjPAWtMyXijPfiMHRwAG7UsuRS"),"doc"],
      ["Answers",D("1yjHoXmyqCIwm_rbnJoCEVUcXaWvHgIhO"),"ans"],
      ["JensenMath: Pascal's Triangle Worksheet 2",D("1msPNmLfdKHLGSp4mECsChHs6seIJPMdU"),"doc"],
      ["Answers",D("1gLJN116yneuvct-7Cdocqon-ZvgBzDqn"),"ans"],
    ]},
    {d:75, iso:"2026-12-18", topic:"Problem Day · Work Period", note:"", ans:"", extras:[
      ["Ms Havrot: Extending Question on Geometric Series","https://www.youtube.com/watch?v=pJSkyvtnyYk","vid"],
    ]},
    {d:76, iso:"2027-01-04", topic:"Simple Interest", num:"7.5",
      note:D("1ZZvOMYCneIXDd-70z4eEvYSk80ziA5EE"),
      ans:"", /* key: D("1ceeIg2FrFOTymgKit4uBDzm49kima0Oz") */ extras:[
      ["Ms Havrot: Simple Interest","https://www.youtube.com/watch?v=FDcpl3Zd4oo","vid"],
    ]},
    {d:77, iso:"2027-01-05", topic:"Compound Interest: Future Value", num:"7.6",
      note:D("1m7-mYFBlTh0BdJYlKWghRYoJEG7xIvUv"),
      ans:"", /* key: D("1weMQwJUPm51feuhzYl912CAm8bnWKfuv") */ extras:[
      ["Ms Havrot: Compound Interest, Future Value","https://www.youtube.com/watch?v=epa2huwxGUI","vid"],
      ["JensenMath: Compound Interest Worksheet",D("1rdvBg-AhoTxCA0v1bbeDHDJ2UHP2DEqc"),"doc"],
      ["Answers",D("11FFfITaGCoDEALW4IiUBIBkhpGcj6-nB"),"ans"],
    ]},
    {d:78, iso:"2027-01-06", topic:"Compound Interest: Present Value", num:"7.7",
      note:D("1rjXDSmCA3_u75u3vKkuMcBmSRd7WmiLe"),
      ans:"", /* key: D("1dhL3HwqvwIPkQguZbkPxZZMUJHU0dVoq") */ extras:[
      ["Ms Havrot: Compound Interest, Present Value","https://www.youtube.com/watch?v=r5Ko2URqAI0","vid"],
    ]},
    {d:79, iso:"2027-01-07", topic:"Annuities: Future Value", flag:"pquiz", num:"7.8",
      note:D("1CFMqYpLy6iYnb0F8CkB1OmtSs5Iuyr2b"),
      ans:"", /* key: D("1_uhOql_Xs1QiJ57CKCYxdRDasxTineeD") */ extras:[
      ["Ms Havrot: Future Value of an Annuity","https://www.youtube.com/watch?v=nbTQ-wEHt3g","vid"],
    ]},
    {d:80, iso:"2027-01-08", topic:"Annuities: Present Value", num:"7.9",
      note:D("1TO5uVSs_m0l38x2oedWhPpQ0wNCp0Wn_"),
      ans:"", /* key: D("1xRwJP0G6Kfr8DJDAy8wL9d9Va2S-xSxP") */ extras:[
      ["Ms Havrot: Present Value of an Annuity","https://www.youtube.com/watch?v=7VXv8CShUcA","vid"],
    ]},
    {d:81, iso:"2027-01-11", topic:"Finance Problems: Varying the Conditions",
      noteLabel:"Blank Note & Practice Problems",
      note:D("1ol0tpBbORpVgXkeuDobkzaZfaFx5q9AP"),
      ans:"", /* key: D("125g8tCSJfB-7EwnLGvoh2Nmzd4rJjW6h") */ extras:[
      ["Ms Havrot: Using the TVM Solver","https://www.youtube.com/watch?v=6YnxWi-lGfE","vid"],
    ]},
    {d:82, iso:"2027-01-12", topic:"Current Topics & Geometric Series + Other Old Topic", flag:"quiz",
      noteLabel:"Practice Quiz", ansLabel:"Answers", note:"", ans:"", extras:[
      ["Khan: Word Problems on Compound Interest","https://www.khanacademy.org/math/algebra-2-fl-best/x727ff003d4fc3b92:exponential-functions/x727ff003d4fc3b92:compound-interest/e/word-problems-on-compound-interest","doc"],
      ["Khan: Convert Recursive & Explicit Forms","https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:sequences/x2f8bb11595b61c86:constructing-arithmetic-sequences/e/explicit-and-recursive-formulas-of-arithmetic-sequences","doc"],
    ]},
    {d:83, iso:"2027-01-13", topic:"Review", note:"", ans:"", extras:[
      ["Ms Havrot: Functions 11 (full course playlist)","https://www.youtube.com/playlist?list=PLGinkJ_ZMO2HB1X2BhOiZE6xy99-zE-_b","vid"],
      ["JensenMath: Discrete Functions Unit Review",D("1xqNZggVu-J53CUDbkf7unqvMtKZDeb-G"),"doc"],
      ["Answers",D("12EFq4uelsxk2GsaUmAlfOxRqzWvqJJ5D"),"ans"],
    ]},
    {d:84, iso:"2027-01-14", topic:"Unit 7 + Quadratic Functions", flag:"test", extras:[]},
  ]},

  /* ── EXAM REVIEW ────────────────────────────────────────── */
  {name:"Exam Review", noNumber:true, days:[
    {d:85, iso:"2027-01-15", topic:"Exam Review: Units 1–3", note:"", ans:"", extras:[
      ["Ms Havrot: Exam Practice Part B, #1-9","https://www.youtube.com/watch?v=I58lbxHl43k","vid"],
      ["Exam Review Questions",D("1mZhR-seS36JokQws-jNcHdMnWb3IA8zk"),"doc"],
      ["Answers",D("1m_DXZHC4eq-P6fMxr_L2VPmHACf10CGN"),"ans"],
      ["JensenMath: Exam Review: Functions",D("1EVZljx5pyHFYEybakLAERQT_VQwrBGBi"),"doc"],
      ["Answers",D("1Db4RMfGWaKLWERObfqX3woWz3R3vrgfN"),"ans"],
      ["JensenMath: Exam Review: Rational Expressions",D("18ENkLAbr3cocz5w6RCj6E3Ou7FQMaWPZ"),"doc"],
      ["Answers",D("1aVuqcZGeObRRYjgNuTfzTyNVdZ9lJF7s"),"ans"],
      ["JensenMath: Exam Review: Transformations",D("1DhgpBwYSUlo-lTYkBsnx1ZLuwnOH2djG"),"doc"],
      ["Answers",D("1FTuvQ8rdYFmGfXwnzhU18IGcKUFj-M7O"),"ans"],
    ]},
    {d:86, iso:"2027-01-18", topic:"Exam Review: Units 4–5", note:"", ans:"", extras:[
      ["Ms Havrot: Exam Practice Part B, #10-16","https://www.youtube.com/watch?v=pczHpjaEi0U","vid"],
      ["JensenMath: Exam Review: Exponential Functions",D("1ZzNY3rikCoFK8A1Pvm1_e1WkZ_iAmTlW"),"doc"],
      ["Answers",D("18aYiF313JYYeBr32pxcGg6NgpnJ1Skmv"),"ans"],
      ["JensenMath: Exam Review: Trig Geometry",D("1MicOzIXNNSAlTAYM5oCJUaUYHVluQDgD"),"doc"],
      ["Answers",D("1HKuhnMuGCNEENB_z0_aTsEXgek3efZ7M"),"ans"],
    ]},
    {d:87, iso:"2027-01-19", topic:"Exam Review: Units 6–7", note:"", ans:"", extras:[
      ["Ms Havrot: Exam Review, Last Video","https://www.youtube.com/watch?v=iNbz6EPBWJg","vid"],
      ["JensenMath: Exam Review: Trig Functions",D("1G8GwHQkFjSwNAtAAA7Scjx4SRhPwA81i"),"doc"],
      ["Answers",D("1UieDkI4cbUIrZSGurCa17zcbjjXAd77G"),"ans"],
      ["JensenMath: Exam Review: Discrete Functions",D("1Pg8yhlyojksZLIAxYcvYRnOeV1ipo6lC"),"doc"],
      ["Answers",D("10kri1To8S5VfXH0ITN4CNtw14IUAB76D"),"ans"],
    ]},
    {d:88, iso:"2027-01-20", topic:"Practice Exam", note:"", ans:"", extras:[
      ["Ms Havrot: Practice Exam Part A, Quick Answers","https://www.youtube.com/watch?v=CB7dUYHCm7A","vid"],
      ["JensenMath: Full Course Exam Review",D("1M2D9wtrnnTMR4m18ZiOdAqVHcKI3KzRz"),"doc"],
      ["Answers",D("1loxcwEltG8J4-D0DxOIh-1C0q6TnbUJR"),"ans"],
    ]},
    {d:89, iso:"2027-01-21", topic:"Exam Review: Student Choice", note:"", ans:"", extras:[
      ["Ms Havrot: Functions 11 (full course playlist)","https://www.youtube.com/playlist?list=PLGinkJ_ZMO2HB1X2BhOiZE6xy99-zE-_b","vid"],
    ]},
  ]},
]};
