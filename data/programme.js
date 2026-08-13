window.KYOUTH_DATA = {
  readiness: [
    {date:'Thu 13 Aug', title:'Lock the programme direction', text:'Confirm this is a hands-on activation programme, not lecture-based onboarding. Finalise the business outcome and success definition.', owner:'Programme Lead'},
    {date:'Fri 14 Aug', title:'Approve challenge areas', text:'Shortlist the first 4 MRANTI-style challenge areas and identify division sponsors or internal reviewers.', owner:'Boss / Team'},
    {date:'Mon 17 Aug', title:'Prepare tools and files', text:'Set up GitHub access, sample data, prompt pack, command centre link and briefing deck.', owner:'Programme Lead'},
    {date:'Tue 18 Aug', title:'Dry run the lab', text:'Test the GitHub Pages deployment steps, AI prompt chain, and timing for each hands-on block.', owner:'Facilitator'},
    {date:'Wed 19 Aug', title:'Room and access check', text:'Confirm laptops, Wi-Fi, accounts, projector, GitHub login and backup files.', owner:'Admin / IT'},
    {date:'Thu 20 Aug', title:'Graduate intake day', text:'Run the activation lab: problem framing, AI build workflow, GitHub Pages deployment and mini showcase.', owner:'All'}
  ],
  roadmap: [
    {phase:'20 Aug', title:'Activation Day', text:'Set expectations, teach the operating model, run the first hands-on build and make every graduate produce something tangible.'},
    {phase:'21 Aug', title:'Prototype Sprint', text:'Improve the first prototype, fix gaps, practice GitHub Pages and teach short executive readouts.'},
    {phase:'24–28 Aug', title:'Division Discovery', text:'Graduates meet sponsors, clarify business problems, collect available data and define acceptance criteria.'},
    {phase:'31 Aug–4 Sep', title:'Build Sprint 1', text:'Build first working outputs with weekly review and sponsor feedback.'},
    {phase:'7–11 Sep', title:'Validate Sprint', text:'Test outputs with internal users, improve clarity, source notes and decision usefulness.'},
    {phase:'14–25 Sep', title:'Build Sprint 2', text:'Finalize deployable versions, documentation, and business story.'},
    {phase:'28 Sep–2 Oct', title:'Final Showcase', text:'Graduates present live links, lessons learnt, business value and next-step recommendations.'}
  ],
  runlist: [
    {time:'09:00–09:20', title:'Opening and programme positioning', show:'Use Overview and Calendar views. Explain why this programme is hands-on and output-driven.', do:['Graduates introduce themselves in 60 seconds','Write down one business problem they think MRANTI may face'], output:'Individual problem note'},
    {time:'09:20–10:10', title:'Business problem discovery lab', show:'Present one sample MRANTI-style scenario and demonstrate how to separate symptom, root cause, stakeholder and data need.', do:['Map stakeholders','Define pain point','Identify missing information','Write success criteria'], output:'1-page problem statement'},
    {time:'10:10–11:00', title:'Prompt engineering for real work', show:'Open the prompt chain and demonstrate how AI turns a problem statement into requirements.', do:['Run prompt 1 and 2','Challenge weak AI answers','Rewrite requirements clearly'], output:'Prototype requirement brief'},
    {time:'11:00–12:30', title:'Build the first web output', show:'Explain HTML/CSS/JS package structure using the GasMY-style workflow.', do:['Generate first web package','Check navigation and content','Replace generic wording with business-specific wording'], output:'Local prototype files'},
    {time:'14:00–15:00', title:'GitHub Pages deployment', show:'Use the GitHub Pages view. Walk through repo creation, upload, Pages settings and live link test.', do:['Create or use a repo','Upload files and .nojekyll','Enable Pages','Open live link'], output:'Live GitHub Pages prototype'},
    {time:'15:00–16:00', title:'Mini showcase and feedback', show:'Use the Boss Brief success criteria. Each graduate explains problem, output and business value.', do:['2-minute presentation each','Peer feedback','Capture improvement backlog'], output:'Prototype link + feedback list'},
    {time:'16:00–16:30', title:'Next steps into division projects', show:'Open Division Projects. Explain sponsor model, weekly cadence and final showcase.', do:['Assign tentative workstream','Confirm first sponsor meeting','Define next deliverable'], output:'Assigned project track'}
  ],
  labs: [
    {no:'Lab 01', title:'Problem Framing', text:'Turn a messy situation into a clear business problem, stakeholder map, data need and success measure.'},
    {no:'Lab 02', title:'AI Requirements Builder', text:'Use ChatGPT as a business analyst to convert the problem into a structured product requirement.'},
    {no:'Lab 03', title:'HTML Prototype Build', text:'Generate and refine a clean web command centre or dashboard from the requirement brief.'},
    {no:'Lab 04', title:'GitHub Pages Deploy', text:'Publish the prototype and turn the output into a shareable live link.'},
    {no:'Lab 05', title:'Executive Storytelling', text:'Explain what was built, why it matters, what evidence supports it and what decision it enables.'},
    {no:'Lab 06', title:'Iteration Loop', text:'Use feedback to improve content, navigation, source notes, visuals and actionability.'}
  ],
  projects: [
    {track:'Track A', title:'Startup / Ecosystem Insight', text:'Turn scattered ecosystem information into a clear decision view for management.'},
    {track:'Track B', title:'Commercialisation Pipeline', text:'Map programme/project status and surface where action is required.'},
    {track:'Track C', title:'Operations Data Room', text:'Consolidate internal operational information into a browsable evidence space.'},
    {track:'Track D', title:'Stakeholder Briefing Hub', text:'Create a polished microsite or dashboard for a stakeholder-facing initiative.'}
  ]
};
