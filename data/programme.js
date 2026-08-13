window.KYOUTH_DATA = {
  meta: {
    title: "MRANTI x GRADUAN K-Youth Development Programme 2026",
    intake: "20 August 2026",
    graduates: 4,
    showcase: "2 October 2026",
    note: "Working programme calendar. Sponsor meeting times can be moved without changing the delivery sequence."
  },

  phases: [
    {id:"prep", no:"01", title:"Programme Readiness", range:"13–19 Aug", outcome:"Challenge areas, sponsors, tools and room ready before intake."},
    {id:"activation", no:"02", title:"Activation Lab", range:"20–21 Aug", outcome:"Every graduate leaves with a live prototype and understands the delivery method."},
    {id:"discovery", no:"03", title:"Division Discovery", range:"24–28 Aug", outcome:"Four real MRANTI problems defined, evidenced and scoped with sponsors."},
    {id:"sprint1", no:"04", title:"Build Sprint 1", range:"1–4 Sep", outcome:"First sponsor-usable version demonstrated."},
    {id:"validate", no:"05", title:"Validate", range:"8–11 Sep", outcome:"Outputs tested with internal users and improvement priorities agreed."},
    {id:"sprint2", no:"06", title:"Build Sprint 2", range:"14–18 Sep", outcome:"Stronger evidence, usability, executive narrative and second demo."},
    {id:"finalbuild", no:"07", title:"Final Build & QA", range:"21–25 Sep", outcome:"Deployment-ready solution, README, sources and handover package."},
    {id:"showcase", no:"08", title:"Showcase & Handover", range:"28 Sep–2 Oct", outcome:"Management showcase, recommendations and ownership handover."}
  ],

  days: [
    {
      id:"2026-08-13", date:"13 Aug", weekday:"Thu", phase:"prep", title:"Lock programme direction", owner:"Programme Lead", duration:"45 min",
      objective:"Align the internal team on the programme outcome, delivery model and what must be ready by 20 August.",
      agenda:[
        {time:"00:00–00:10", title:"Confirm programme outcome", detail:"Agree that the programme is output-led and built around real business problems.", output:"One-sentence programme outcome"},
        {time:"00:10–00:25", title:"Confirm operating model", detail:"Review the six-week flow from activation to sponsor projects and final showcase.", output:"Agreed roadmap"},
        {time:"00:25–00:45", title:"List decisions and owners", detail:"Assign owners for challenge selection, sponsor confirmation, tools, room and materials.", output:"Readiness action list"}
      ],
      materials:[
        {title:"Team & Boss Brief", href:"materials/team-brief.html", type:"Brief", desc:"Use this to explain the programme and management decisions."}
      ],
      prep:["Bring any existing K-Youth/GRADUAN requirements.","Confirm who can approve the challenge areas."],
      outputs:["Programme direction locked","Readiness owners assigned"]
    },
    {
      id:"2026-08-14", date:"14 Aug", weekday:"Fri", phase:"prep", title:"Select challenge areas & sponsors", owner:"Programme Lead + Team", duration:"60–90 min",
      objective:"Identify four business challenges that are small enough to prototype but real enough to create value.",
      agenda:[
        {time:"00:00–00:15", title:"List candidate problems", detail:"Collect issues from startup/ecosystem, commercialisation, operations and stakeholder work.", output:"Candidate list"},
        {time:"00:15–00:45", title:"Score each challenge", detail:"Check user, evidence, feasibility, confidentiality and six-week usefulness.", output:"Ranked shortlist"},
        {time:"00:45–01:10", title:"Assign sponsor/reviewer", detail:"Name the person who can validate the output every week.", output:"Sponsor mapping"},
        {time:"01:10–01:30", title:"Lock first four", detail:"Select the four starting workstreams and note any data/access dependencies.", output:"Approved challenge slate"}
      ],
      materials:[
        {title:"Challenge Selection Sheet", href:"materials/challenge-selection.html", type:"Worksheet", desc:"Screen and select the four workstreams."},
        {title:"Team & Boss Brief", href:"materials/team-brief.html", type:"Brief", desc:"Decision points for management."}
      ],
      prep:["Ask team members to bring 1–2 real pain points.","Avoid projects requiring production-system access in week one."],
      outputs:["4 challenge areas","4 sponsor/reviewer names"]
    },
    {
      id:"2026-08-17", date:"17 Aug", weekday:"Mon", phase:"prep", title:"Prepare tools, accounts & files", owner:"Programme Lead", duration:"60 min",
      objective:"Ensure every graduate can use the full AI → HTML → GitHub Pages workflow without access friction.",
      agenda:[
        {time:"00:00–00:20", title:"Accounts", detail:"Check ChatGPT and GitHub access plan for all four graduates.", output:"Access list"},
        {time:"00:20–00:40", title:"Files", detail:"Prepare the case study, prompt pack, starter repo and Command Centre link.", output:"Material set ready"},
        {time:"00:40–01:00", title:"Fallbacks", detail:"Prepare local copies and a demo repository in case network or account setup fails.", output:"Backup plan"}
      ],
      materials:[
        {title:"Tools, Access & Room Checklist", href:"materials/setup-checklist.html", type:"Checklist", desc:"Accounts, Wi-Fi, devices and backup checks."},
        {title:"AI Prompt Pack", href:"materials/prompt-pack.html", type:"Guide", desc:"Core prompts used throughout the programme."},
        {title:"Starter Prototype Folder", href:"starter_repo/index.html", type:"Starter", desc:"Basic HTML/CSS/JS project for the first build."}
      ],
      prep:["Confirm whether GitHub accounts are personal or programme-provided.","Keep a local copy of the starter repo."],
      outputs:["Tool readiness confirmed","All core materials accessible"]
    },
    {
      id:"2026-08-18", date:"18 Aug", weekday:"Tue", phase:"prep", title:"Dry run the Activation Lab", owner:"Facilitator", duration:"90 min",
      objective:"Run the 20 August workflow end-to-end and remove anything that creates confusion or delay.",
      agenda:[
        {time:"00:00–00:25", title:"Problem → requirements test", detail:"Use the case study and prompts exactly as a graduate would.", output:"Test requirement brief"},
        {time:"00:25–01:00", title:"Build test", detail:"Generate and refine a small HTML/CSS/JS output.", output:"Local prototype"},
        {time:"01:00–01:20", title:"Deploy test", detail:"Upload to GitHub Pages and verify the live link.", output:"Test live link"},
        {time:"01:20–01:30", title:"Timing fixes", detail:"Record where facilitation instructions or materials need to be shortened.", output:"Dry-run fixes"}
      ],
      materials:[
        {title:"Activation Day Case Study", href:"materials/case-study-20aug.html", type:"Case", desc:"Practice scenario used on intake day."},
        {title:"AI Prompt Pack", href:"materials/prompt-pack.html", type:"Guide", desc:"Run the exact prompt chain."},
        {title:"GitHub Pages Quick Guide", href:"materials/github-pages-guide.html", type:"Guide", desc:"Deployment steps and acceptance criteria."}
      ],
      prep:["Use the same laptop/network planned for the actual session."],
      outputs:["End-to-end workflow tested","Timing and material issues fixed"]
    },
    {
      id:"2026-08-19", date:"19 Aug", weekday:"Wed", phase:"prep", title:"Final room & access check", owner:"Programme Lead + Admin / IT", duration:"30 min",
      objective:"Remove logistical blockers one day before intake.",
      agenda:[
        {time:"00:00–00:10", title:"Room", detail:"Check seating, screen, power, Wi-Fi and access.", output:"Room ready"},
        {time:"00:10–00:20", title:"Devices & accounts", detail:"Confirm four graduate laptops can reach required sites.", output:"Access ready"},
        {time:"00:20–00:30", title:"Materials", detail:"Open every material link from the Command Centre and confirm backup copies.", output:"Material QA"}
      ],
      materials:[
        {title:"Tools, Access & Room Checklist", href:"materials/setup-checklist.html", type:"Checklist", desc:"Final readiness checklist."}
      ],
      prep:["Do not leave account creation until 20 August morning."],
      outputs:["Room ready","All links tested","Backup files ready"]
    },
    {
      id:"2026-08-20", date:"20 Aug", weekday:"Thu", phase:"activation", title:"Activation Day — Problem to live prototype", owner:"Facilitator + Graduates", duration:"09:00–16:30",
      objective:"Teach the complete working method in one day: frame a problem, use AI intentionally, build a web output, deploy it and explain the business value.",
      agenda:[
        {time:"09:00–09:20", title:"Opening & programme positioning", detail:"Set expectations: this is a delivery programme, not a lecture. Graduates introduce themselves and write one business problem.", output:"Individual problem note"},
        {time:"09:20–10:10", title:"Business problem discovery lab", detail:"Use the case study to separate symptom, user, root cause, evidence, missing information and success criteria.", output:"Problem statement"},
        {time:"10:10–11:00", title:"AI requirements builder", detail:"Use the prompt pack to turn the problem into a structured web requirement and acceptance criteria.", output:"Requirement brief"},
        {time:"11:00–12:30", title:"Build the first web output", detail:"Generate and refine index.html, styles.css and app.js. Replace generic AI wording with business-specific content.", output:"Local prototype"},
        {time:"12:30–14:00", title:"Lunch", detail:"Keep files saved locally and ready for deployment.", output:"—"},
        {time:"14:00–15:00", title:"Deploy through GitHub Pages", detail:"Create repo, upload files, enable Pages, open the live link and fix broken assets.", output:"Live GitHub Pages link"},
        {time:"15:00–16:00", title:"Mini showcase & feedback", detail:"Each graduate explains the problem, output and business value in two minutes; peers capture improvements.", output:"Feedback backlog"},
        {time:"16:00–16:30", title:"Move into real MRANTI work", detail:"Explain sponsor model, discovery week and what must be ready by 28 August.", output:"Tentative workstream assignment"}
      ],
      materials:[
        {title:"Facilitator Guide", href:"materials/facilitator-guide-20aug.html", type:"Facilitator", desc:"What to emphasise and required outputs."},
        {title:"Graduate Workbook", href:"materials/graduate-workbook-20aug.html", type:"Workbook", desc:"Graduate task sheet for the whole day."},
        {title:"Activation Day Case Study", href:"materials/case-study-20aug.html", type:"Case", desc:"The controlled practice problem."},
        {title:"AI Prompt Pack", href:"materials/prompt-pack.html", type:"Prompts", desc:"Problem → requirements → build → critique → story."},
        {title:"GitHub Pages Quick Guide", href:"materials/github-pages-guide.html", type:"Guide", desc:"Deployment workflow."},
        {title:"Starter Prototype", href:"starter_repo/index.html", type:"Starter", desc:"Fallback starting point for HTML/CSS/JS."}
      ],
      prep:["Open the Command Centre on the projector before graduates arrive.","Keep the test GitHub repo and starter folder ready."],
      outputs:["Problem statement","Requirement brief","Local prototype","Live link","Feedback backlog"]
    },
    {
      id:"2026-08-21", date:"21 Aug", weekday:"Fri", phase:"activation", title:"Prototype Clinic — Improve, debug, explain", owner:"Facilitator", duration:"09:30–12:30",
      objective:"Consolidate the first-day learning and make each graduate independently repeat the build/deploy workflow.",
      agenda:[
        {time:"09:30–10:00", title:"Review yesterday", detail:"Each graduate identifies one thing that worked and one thing they did not understand.", output:"Learning gaps"},
        {time:"10:00–11:15", title:"Improve prototype", detail:"Use executive critique prompt, improve content hierarchy, sources and mobile layout.", output:"Prototype v2"},
        {time:"11:15–12:00", title:"Re-deploy & test", detail:"Commit changes, open live link and test with another graduate.", output:"Updated live link"},
        {time:"12:00–12:30", title:"Two-minute readout", detail:"Deliver the business story without reading from slides.", output:"2-minute pitch"}
      ],
      materials:[
        {title:"AI Prompt Pack", href:"materials/prompt-pack.html", type:"Prompts", desc:"Use the executive critique and storytelling prompts."},
        {title:"GitHub Pages Quick Guide", href:"materials/github-pages-guide.html", type:"Guide", desc:"Repeat the deployment workflow."},
        {title:"Executive Storytelling Guide", href:"materials/executive-story.html", type:"Guide", desc:"Structure the two-minute explanation."}
      ],
      prep:["Bring yesterday's live link and source files."],
      outputs:["Prototype v2","Independent re-deployment","2-minute explanation"]
    },
    {
      id:"2026-08-24", date:"24 Aug", weekday:"Mon", phase:"discovery", title:"Division Discovery Kick-off", owner:"Programme Lead + Sponsors", duration:"10:00–12:00",
      objective:"Move each graduate from the practice case into one real MRANTI business problem.",
      agenda:[
        {time:"10:00–10:20", title:"Assign workstreams", detail:"Confirm graduate ↔ sponsor ↔ challenge mapping.", output:"4 assignments"},
        {time:"10:20–11:20", title:"Sponsor interviews", detail:"Graduates ask structured questions about user, pain, current process, evidence and desired outcome.", output:"Interview notes"},
        {time:"11:20–12:00", title:"Discovery synthesis", detail:"Draft the first version of the problem statement and list missing evidence.", output:"Problem statement v0"}
      ],
      materials:[
        {title:"Division Sponsor Interview Guide", href:"materials/sponsor-interview-guide.html", type:"Interview", desc:"Questions for the first sponsor session."},
        {title:"Problem Statement Canvas", href:"materials/problem-statement-canvas.html", type:"Canvas", desc:"Convert interview notes into a structured problem."}
      ],
      prep:["Sponsors should bring existing files/links/process notes where possible."],
      outputs:["Confirmed assignments","Sponsor interview notes","Problem statement v0"]
    },
    {
      id:"2026-08-26", date:"26 Aug", weekday:"Wed", phase:"discovery", title:"Problem Definition Clinic", owner:"Facilitator + Graduates", duration:"14:00–15:30",
      objective:"Turn messy discovery notes into a precise, evidence-based problem definition.",
      agenda:[
        {time:"14:00–14:30", title:"Problem clinic", detail:"Review user, current state, pain, evidence, missing information and success measure.", output:"Problem statement v1"},
        {time:"14:30–15:00", title:"Evidence review", detail:"Identify what is known, what is assumed and what must be verified.", output:"Evidence gaps"},
        {time:"15:00–15:30", title:"Sponsor questions", detail:"Prepare only the questions needed to lock scope on Friday.", output:"Clarification list"}
      ],
      materials:[
        {title:"Problem Statement Canvas", href:"materials/problem-statement-canvas.html", type:"Canvas", desc:"Problem definition structure."},
        {title:"AI Prompt Pack", href:"materials/prompt-pack.html", type:"Prompts", desc:"Use problem framing prompt to challenge assumptions."},
        {title:"Source & Evidence Checklist", href:"materials/source-quality.html", type:"Checklist", desc:"Separate supported facts from assumptions."}
      ],
      prep:["Bring all sponsor notes and source files."],
      outputs:["Problem statement v1","Evidence gap list","Sponsor clarification list"]
    },
    {
      id:"2026-08-28", date:"28 Aug", weekday:"Fri", phase:"discovery", title:"Scope Lock & Requirements Sign-off", owner:"Graduate + Sponsor", duration:"10:00–11:30",
      objective:"Agree exactly what each graduate will build in Sprint 1 and how usefulness will be judged.",
      agenda:[
        {time:"10:00–10:25", title:"Confirm problem", detail:"Sponsor validates the problem statement and primary user.", output:"Problem statement signed off"},
        {time:"10:25–10:55", title:"Define first-version requirements", detail:"Agree pages/sections, data, user actions and scope boundaries.", output:"Requirement brief"},
        {time:"10:55–11:30", title:"Write acceptance criteria", detail:"Create 5–8 testable statements for the first demo.", output:"Acceptance criteria"}
      ],
      materials:[
        {title:"Requirements & Acceptance Criteria", href:"materials/requirements-acceptance.html", type:"Template", desc:"Scope and first-version success criteria."},
        {title:"Problem Statement Canvas", href:"materials/problem-statement-canvas.html", type:"Canvas", desc:"Final problem statement check."}
      ],
      prep:["Sponsor must attend or approve asynchronously the same day."],
      outputs:["Scope locked","Requirements approved","Acceptance criteria"]
    },
    {
      id:"2026-09-01", date:"1 Sep", weekday:"Tue", phase:"sprint1", title:"Sprint 1 Planning", owner:"Facilitator + Graduates", duration:"09:30–10:30",
      objective:"Translate each requirement brief into a small, visible build backlog for the week.",
      agenda:[
        {time:"09:30–09:50", title:"Prioritise minimum useful version", detail:"Select the smallest set of features/content that can be demoed this week.", output:"MVP definition"},
        {time:"09:50–10:20", title:"Create backlog", detail:"Break the build into clear tasks with definition of done.", output:"Sprint backlog"},
        {time:"10:20–10:30", title:"Confirm demo target", detail:"State what the sponsor should be able to see/do by Friday.", output:"Demo promise"}
      ],
      materials:[
        {title:"Sprint Backlog Template", href:"materials/sprint-backlog.html", type:"Template", desc:"Plan the first build sprint."},
        {title:"AI Prompt Pack", href:"materials/prompt-pack.html", type:"Prompts", desc:"Use requirement and build prompts as needed."}
      ],
      prep:["Bring the signed-off requirement brief."],
      outputs:["Sprint backlog","Friday demo target"]
    },
    {
      id:"2026-09-03", date:"3 Sep", weekday:"Thu", phase:"sprint1", title:"Build Clinic 1", owner:"Facilitator", duration:"14:00–15:30",
      objective:"Unblock build issues and improve the usefulness of the first working version.",
      agenda:[
        {time:"14:00–14:30", title:"Live build review", detail:"Open each prototype and identify the single biggest blocker.", output:"Blocker list"},
        {time:"14:30–15:10", title:"Fix & refine", detail:"Improve hierarchy, content, interactions and source notes.", output:"Working v1"},
        {time:"15:10–15:30", title:"Deployment check", detail:"Confirm each project is ready for Friday sponsor demo.", output:"Demo-ready link"}
      ],
      materials:[
        {title:"GitHub Pages Quick Guide", href:"materials/github-pages-guide.html", type:"Guide", desc:"Deployment support."},
        {title:"Source & Evidence Checklist", href:"materials/source-quality.html", type:"Checklist", desc:"Check evidence quality before sponsor review."}
      ],
      prep:["Graduate must arrive with a working local or deployed version."],
      outputs:["Working v1","Demo-ready link"]
    },
    {
      id:"2026-09-04", date:"4 Sep", weekday:"Fri", phase:"sprint1", title:"Sponsor Demo 1", owner:"Graduate + Sponsor", duration:"30 min / graduate",
      objective:"Put a real working version in front of the sponsor and convert feedback into the next backlog.",
      agenda:[
        {time:"0–2 min", title:"Problem recap", detail:"Restate user and problem.", output:"Shared context"},
        {time:"2–8 min", title:"Live walkthrough", detail:"Show what the current version enables.", output:"Sponsor reaction"},
        {time:"8–15 min", title:"Feedback", detail:"Capture useful, unclear, missing, unsupported and out-of-scope comments.", output:"Feedback list"},
        {time:"15–30 min", title:"Prioritise changes", detail:"Agree what must change before validation.", output:"Next backlog"}
      ],
      materials:[
        {title:"Weekly Demo Feedback Sheet", href:"materials/demo-feedback.html", type:"Scorecard", desc:"Capture sponsor feedback consistently."}
      ],
      prep:["Send live link to sponsor before the session."],
      outputs:["Sponsor feedback","Prioritised changes"]
    },
    {
      id:"2026-09-08", date:"8 Sep", weekday:"Tue", phase:"validate", title:"Validation Planning", owner:"Facilitator + Graduates", duration:"10:00–11:00",
      objective:"Design simple user tests that prove whether the output is actually understandable and useful.",
      agenda:[
        {time:"10:00–10:20", title:"Choose test users", detail:"Identify 1–2 real internal users for each output.", output:"User list"},
        {time:"10:20–10:45", title:"Write tasks", detail:"Create 3–4 real tasks users should be able to complete.", output:"Test script"},
        {time:"10:45–11:00", title:"Define pass conditions", detail:"Decide what successful use looks like.", output:"Pass criteria"}
      ],
      materials:[
        {title:"Internal User Validation Sheet", href:"materials/validation-test.html", type:"Test", desc:"Task-based validation structure."}
      ],
      prep:["Confirm test users for 9–10 September."],
      outputs:["Validation plan","Test users","Pass criteria"]
    },
    {
      id:"2026-09-10", date:"10 Sep", weekday:"Thu", phase:"validate", title:"Internal User Testing", owner:"Graduates + Internal Users", duration:"45 min / project",
      objective:"Observe real users using the output without explaining how it works.",
      agenda:[
        {time:"0–5 min", title:"Set context", detail:"Explain the task, not the interface.", output:"Test started"},
        {time:"5–25 min", title:"Observe tasks", detail:"Watch where users succeed, hesitate or misunderstand.", output:"Observation notes"},
        {time:"25–35 min", title:"Interview", detail:"Ask what was useful, missing or confusing.", output:"User feedback"},
        {time:"35–45 min", title:"Prioritise", detail:"Choose the highest-value changes.", output:"Validation backlog"}
      ],
      materials:[
        {title:"Internal User Validation Sheet", href:"materials/validation-test.html", type:"Test", desc:"Run and record the user test."}
      ],
      prep:["Do not coach the user through the interface."],
      outputs:["User observations","Validation backlog"]
    },
    {
      id:"2026-09-11", date:"11 Sep", weekday:"Fri", phase:"validate", title:"Validation Review", owner:"Facilitator + Graduates", duration:"14:00–15:00",
      objective:"Convert user evidence into clear Sprint 2 priorities.",
      agenda:[
        {time:"14:00–14:20", title:"What did users prove?", detail:"Separate actual observed issues from personal preferences.", output:"Validated findings"},
        {time:"14:20–14:45", title:"Prioritise changes", detail:"Choose changes that materially improve clarity, usefulness or evidence.", output:"Sprint 2 priorities"},
        {time:"14:45–15:00", title:"Sponsor update", detail:"Prepare a short summary for the sponsor.", output:"Validation summary"}
      ],
      materials:[
        {title:"Internal User Validation Sheet", href:"materials/validation-test.html", type:"Test", desc:"Review captured test evidence."},
        {title:"Sprint Backlog Template", href:"materials/sprint-backlog.html", type:"Template", desc:"Turn findings into Sprint 2 backlog."}
      ],
      prep:["Bring completed user-test notes."],
      outputs:["Validated findings","Sprint 2 priorities"]
    },
    {
      id:"2026-09-14", date:"14 Sep", weekday:"Mon", phase:"sprint2", title:"Sprint 2 Planning", owner:"Facilitator + Graduates", duration:"09:30–10:30",
      objective:"Plan the second build around validated user needs, stronger evidence and executive usability.",
      agenda:[
        {time:"09:30–09:50", title:"Review validation", detail:"Choose the changes that matter most.", output:"Priority list"},
        {time:"09:50–10:20", title:"Build backlog", detail:"Add evidence, usability, content and deployment tasks.", output:"Sprint 2 backlog"},
        {time:"10:20–10:30", title:"Set Demo 2 promise", detail:"Define what must be materially better by Friday.", output:"Demo 2 target"}
      ],
      materials:[
        {title:"Sprint Backlog Template", href:"materials/sprint-backlog.html", type:"Template", desc:"Sprint 2 plan."},
        {title:"Source & Evidence Checklist", href:"materials/source-quality.html", type:"Checklist", desc:"Evidence-quality workstream."}
      ],
      prep:["Bring the validation backlog."],
      outputs:["Sprint 2 backlog","Demo 2 target"]
    },
    {
      id:"2026-09-15", date:"15 Sep", weekday:"Tue", phase:"sprint2", title:"Evidence & Content Clinic", owner:"Facilitator", duration:"14:00–15:00",
      objective:"Strengthen source notes, assumptions, labels and business interpretation before management-facing review.",
      agenda:[
        {time:"14:00–14:20", title:"Source audit", detail:"Check every major figure and claim.", output:"Evidence gap list"},
        {time:"14:20–14:45", title:"Content rewrite", detail:"Replace vague or AI-generic language with precise business language.", output:"Improved copy"},
        {time:"14:45–15:00", title:"Assumptions", detail:"Label working estimates, missing data and scope boundaries.", output:"Transparent assumptions"}
      ],
      materials:[
        {title:"Source & Evidence Checklist", href:"materials/source-quality.html", type:"Checklist", desc:"Management-readiness source review."},
        {title:"AI Prompt Pack", href:"materials/prompt-pack.html", type:"Prompts", desc:"Use executive critique to challenge weak copy."}
      ],
      prep:["Bring links/files for every major source used."],
      outputs:["Evidence-clean version","Clear assumptions"]
    },
    {
      id:"2026-09-17", date:"17 Sep", weekday:"Thu", phase:"sprint2", title:"Executive Story Clinic", owner:"Facilitator", duration:"14:00–15:00",
      objective:"Make sure each graduate can explain the business value without turning the showcase into a technical demo.",
      agenda:[
        {time:"14:00–14:20", title:"Story structure", detail:"Problem → evidence → solution → use → impact → next.", output:"Story outline"},
        {time:"14:20–14:40", title:"Two-minute practice", detail:"Deliver once, receive feedback, simplify.", output:"Pitch v1"},
        {time:"14:40–15:00", title:"Link story to live output", detail:"Choose the 2–3 screens/interactions that prove the value.", output:"Demo flow"}
      ],
      materials:[
        {title:"Executive Storytelling Guide", href:"materials/executive-story.html", type:"Guide", desc:"Two-minute business story structure."}
      ],
      prep:["Bring the deployed or local prototype."],
      outputs:["Two-minute pitch","Demo flow"]
    },
    {
      id:"2026-09-18", date:"18 Sep", weekday:"Fri", phase:"sprint2", title:"Sponsor Demo 2", owner:"Graduate + Sponsor", duration:"30 min / graduate",
      objective:"Confirm that the second version is useful enough to move into final QA and handover.",
      agenda:[
        {time:"0–8 min", title:"Live demo", detail:"Show how sponsor and user feedback changed the solution.", output:"Sponsor review"},
        {time:"8–18 min", title:"Business usefulness", detail:"Test whether the output now supports the intended decision/task.", output:"Usefulness decision"},
        {time:"18–30 min", title:"Final change list", detail:"Lock only essential changes for the final week.", output:"Final backlog"}
      ],
      materials:[
        {title:"Weekly Demo Feedback Sheet", href:"materials/demo-feedback.html", type:"Scorecard", desc:"Capture final sponsor changes."},
        {title:"Executive Storytelling Guide", href:"materials/executive-story.html", type:"Guide", desc:"Keep demo business-led."}
      ],
      prep:["Send live link and current limitations to sponsor beforehand."],
      outputs:["Final sponsor feedback","Final backlog"]
    },
    {
      id:"2026-09-21", date:"21 Sep", weekday:"Mon", phase:"finalbuild", title:"Final Build Week Kick-off", owner:"Facilitator + Graduates", duration:"09:30–10:15",
      objective:"Lock the final-week backlog and prevent new scope from entering.",
      agenda:[
        {time:"09:30–09:45", title:"Scope freeze", detail:"Separate must-fix items from nice-to-have requests.", output:"Scope freeze"},
        {time:"09:45–10:05", title:"Final backlog", detail:"Plan build, QA, README, sources and handover tasks.", output:"Final backlog"},
        {time:"10:05–10:15", title:"Ownership", detail:"Confirm who will receive the final solution after showcase.", output:"Handover owner"}
      ],
      materials:[
        {title:"Sprint Backlog Template", href:"materials/sprint-backlog.html", type:"Template", desc:"Final-week backlog."},
        {title:"Final Handover Checklist", href:"materials/final-handover.html", type:"Checklist", desc:"What the final package must contain."}
      ],
      prep:["No new features unless sponsor identifies a critical issue."],
      outputs:["Scope freeze","Final backlog","Handover owner"]
    },
    {
      id:"2026-09-23", date:"23 Sep", weekday:"Wed", phase:"finalbuild", title:"Deployment & QA Clinic", owner:"Facilitator", duration:"14:00–15:30",
      objective:"Make every live solution technically reliable, evidence-safe and easy for the next owner to maintain.",
      agenda:[
        {time:"14:00–14:30", title:"Technical QA", detail:"Check live URL, links, scripts, responsiveness and repository hygiene.", output:"Technical QA results"},
        {time:"14:30–15:00", title:"Business QA", detail:"Check purpose, decision usefulness, sources and assumptions.", output:"Business QA results"},
        {time:"15:00–15:30", title:"Fix critical issues", detail:"Resolve anything that could fail in showcase.", output:"QA-cleared version"}
      ],
      materials:[
        {title:"Deployment QA Checklist", href:"materials/deployment-qa.html", type:"Checklist", desc:"Technical and business QA."},
        {title:"Source & Evidence Checklist", href:"materials/source-quality.html", type:"Checklist", desc:"Final evidence check."},
        {title:"GitHub Pages Quick Guide", href:"materials/github-pages-guide.html", type:"Guide", desc:"Deployment troubleshooting."}
      ],
      prep:["Bring final live link and repository access."],
      outputs:["QA-cleared live version"]
    },
    {
      id:"2026-09-25", date:"25 Sep", weekday:"Fri", phase:"finalbuild", title:"Showcase Rehearsal 1", owner:"Programme Lead + Graduates", duration:"90 min",
      objective:"Run the showcase end-to-end and identify content, timing or technical weaknesses.",
      agenda:[
        {time:"00:00–00:15", title:"Set format", detail:"Confirm time limit, speaking order and transition between projects.", output:"Run order"},
        {time:"00:15–01:05", title:"Full rehearsals", detail:"Each graduate delivers the story and live demo.", output:"Rehearsal feedback"},
        {time:"01:05–01:30", title:"Fix list", detail:"Prioritise what must change before management pre-read.", output:"Final polish list"}
      ],
      materials:[
        {title:"Executive Storytelling Guide", href:"materials/executive-story.html", type:"Guide", desc:"Presentation structure."},
        {title:"Final Showcase Scorecard", href:"materials/showcase-scorecard.html", type:"Scorecard", desc:"Use the same criteria as final showcase."}
      ],
      prep:["Use the actual device and live links planned for showcase."],
      outputs:["Showcase run order","Rehearsal feedback","Final polish list"]
    },
    {
      id:"2026-09-28", date:"28 Sep", weekday:"Mon", phase:"showcase", title:"Final Polish & Management Pre-read", owner:"Programme Lead + Graduates", duration:"60 min",
      objective:"Close final content gaps and prepare a concise pre-read for management.",
      agenda:[
        {time:"00:00–00:30", title:"Final polish", detail:"Apply rehearsal fixes only; no new scope.", output:"Final candidate"},
        {time:"00:30–00:45", title:"Handover check", detail:"Confirm README, sources, limitations and next steps.", output:"Handover pack"},
        {time:"00:45–01:00", title:"Pre-read", detail:"Prepare project title, problem, live link and one-line value statement.", output:"Management pre-read"}
      ],
      materials:[
        {title:"Final Handover Checklist", href:"materials/final-handover.html", type:"Checklist", desc:"Final ownership package."},
        {title:"Deployment QA Checklist", href:"materials/deployment-qa.html", type:"Checklist", desc:"Last technical check."}
      ],
      prep:["Send management pre-read after internal approval."],
      outputs:["Final candidate","Handover pack","Management pre-read"]
    },
    {
      id:"2026-09-30", date:"30 Sep", weekday:"Wed", phase:"showcase", title:"Showcase Rehearsal 2 — Final", owner:"Programme Lead", duration:"60 min",
      objective:"Confirm timing, speaking confidence, live links and management-level clarity.",
      agenda:[
        {time:"00:00–00:45", title:"Timed run", detail:"Run all four presentations without interruption.", output:"Final timed run"},
        {time:"00:45–01:00", title:"Only critical fixes", detail:"Resolve broken links, unclear statements or timing issues.", output:"Showcase-ready package"}
      ],
      materials:[
        {title:"Executive Storytelling Guide", href:"materials/executive-story.html", type:"Guide", desc:"Final storytelling reference."},
        {title:"Final Showcase Scorecard", href:"materials/showcase-scorecard.html", type:"Scorecard", desc:"Final quality check."}
      ],
      prep:["Do not introduce new features after this rehearsal."],
      outputs:["Showcase-ready package"]
    },
    {
      id:"2026-10-02", date:"2 Oct", weekday:"Fri", phase:"showcase", title:"Final Showcase & Handover", owner:"Graduates + Sponsors + Management", duration:"Proposed 90 min",
      objective:"Demonstrate the four live solutions, evidence the learning journey and hand over clear next steps.",
      agenda:[
        {time:"00:00–00:10", title:"Programme opening", detail:"Explain the delivery model and what graduates were asked to produce.", output:"Shared context"},
        {time:"00:10–01:10", title:"4 graduate showcases", detail:"Approximately 12 minutes each: business problem, live solution, evidence, validation, value and next step.", output:"4 live demonstrations"},
        {time:"01:10–01:25", title:"Management feedback", detail:"Capture value, follow-up actions and whether any prototype should progress.", output:"Management actions"},
        {time:"01:25–01:30", title:"Close & handover", detail:"Confirm owner, repository, live link and next-step recommendation for each project.", output:"Formal handover"}
      ],
      materials:[
        {title:"Final Showcase Scorecard", href:"materials/showcase-scorecard.html", type:"Scorecard", desc:"Management evaluation criteria."},
        {title:"Final Handover Checklist", href:"materials/final-handover.html", type:"Checklist", desc:"Repository, links, sources, limitations and owner."},
        {title:"Executive Storytelling Guide", href:"materials/executive-story.html", type:"Guide", desc:"Graduate final presentation structure."}
      ],
      prep:["Confirm audience, room and screen.","Keep local backup of every prototype."],
      outputs:["4 live showcases","Management feedback","Project handovers","Next-step recommendations"]
    }
  ]
};