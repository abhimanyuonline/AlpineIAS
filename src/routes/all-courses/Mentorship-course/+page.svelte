<script>
  let showHighlights = false;
  let showIncludes = false;
  let showSchedule = false;
  let showPhase2 = false;
  let showMentorRole = false;
  let showReasons = false;
</script>

<main class="p-6 max-w-4xl mx-auto">
  <h1 class="text-4xl font-bold text-center mb-4">Catch The Wind – Current Affairs with 1-on-1 Mentorship</h1>
  <p class="text-center mb-6">Comprehensive Current Affairs Course for UPSC CSE 2026</p>

  <section class="mb-6">
    <p class="font-semibold">Duration: 1st July 2025 – 15th May 2026</p>
    <h2 class="text-2xl font-bold mt-4">Course Highlights</h2>
    <button class="underline" style="color: #016630" on:click={() => showHighlights = !showHighlights}>
      {showHighlights ? 'Hide' : 'Show'} Highlights
    </button>
    {#if showHighlights}
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>Complete Coverage from 1st July 2025 to 31st March 2026</li>
        <li>Sources: The Hindu, Indian Express, PIB, Down To Earth, Yojana, Kurukshetra</li>
        <li>Mentor-Guided Mains Answer Writing</li>
        <li>Weekly Current Affairs Tests</li>
        <li>GS + Static Subject Integration</li>
        <li>Exclusive Prelims Current Affairs Tests (April–May 2026)</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showIncludes = !showIncludes}>
      {showIncludes ? 'Hide' : 'Show'} What the Course Includes
    </button>
    {#if showIncludes}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>3–4 Weekly Interactive Classes for Daily/Weekly Current Affairs</li>
        <li>Weekly CA Tests (MCQs + Subjective)</li>
        <li>Mains Answer Writing (Integrated with GS I–IV)</li>
        <li>1-on-1 Mentorship: Evaluation, Feedback, Strategy Building</li>
        <li>Live Doubt Clearing (Telegram/Calls)</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showSchedule = !showSchedule}>
      {showSchedule ? 'Hide' : 'Show'} Phase 1: Current Affairs + Static Integration
    </button>
    {#if showSchedule}
      <div class="mt-3">
        <p><strong>Duration:</strong> 1st July 2025 – 31st March 2026</p>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Mon–Wed–Fri (or Tues–Thurs–Sat): Live CA Classes</li>
          <li>Sunday: Weekly CA Test + Answer Writing Review</li>
          <li>Monthly Themes:</li>
          <ul class="list-disc pl-10">
            <li>July: Polity, Environment, Schemes</li>
            <li>Aug: Social Justice, Health, S&T</li>
            <li>Sep: Economy, Budget, Indices</li>
            <li>Oct: IR, Global Institutions</li>
            <li>Nov: Agriculture, Labour Reforms</li>
            <li>Dec: Governance, Ethics, Security</li>
            <li>Jan: Infrastructure, Migration</li>
            <li>Feb: Economic Survey, Budget 2026</li>
            <li>Mar: Full-Length Mains Practice</li>
          </ul>
        </ul>
      </div>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showPhase2 = !showPhase2}>
      {showPhase2 ? 'Hide' : 'Show'} Phase 2: Prelims Focused Revision
    </button>
    {#if showPhase2}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>Duration: 1st April – 15th May 2026</li>
        <li>Prelims-Oriented CA Classes (2 per week)</li>
        <li>4 Full-Length Prelims Tests</li>
        <li>MCQs from Jan–Apr 2026 Current Affairs</li>
        <li>Revision of Schemes, Policies, Reports</li>
        <li>Focus: Retention + Elimination Techniques</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showMentorRole = !showMentorRole}>
      {showMentorRole ? 'Hide' : 'Show'} Role of the Mentor
    </button>
    {#if showMentorRole}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>Weekly 1-on-1 Mentorship for Answer Writing</li>
        <li>Test Feedback & Essay Review</li>
        <li>Strategy Planning & Progress Tracking</li>
        <li>Custom Study Plan + Psychological Support</li>
        <li>Maintaining Discipline & Daily Coverage</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showReasons = !showReasons}>
      {showReasons ? 'Hide' : 'Show'} Why Join Catch The Wind?
    </button>
    {#if showReasons}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>GS I–IV Integrated with Current Affairs</li>
        <li>Answer Writing + Analytical Skills</li>
        <li>Focus on Relevance, Depth & Balance</li>
        <li>Tailored Mentorship to Your Needs</li>
        <li>Weekly Test-Driven Progress</li>
      </ul>
    {/if}
  </section>

  <div class="flex gap-4 mt-6">
    <a href="https://api.whatsapp.com/send?phone=919749033332&text=Hi,%20enquiry%20from%20AlpineIAS%20website%20for%20Mentorship%20course" class="text-white px-4 py-2 rounded transition" style="background-color: #016630; hover:background-color: #014d26">Apply Now</a>
    <a href="/contact-us" class="text-white px-4 py-2 rounded transition" style="background-color: #016630; hover:background-color: #014d26">Contact Now</a>
  </div>
</main>
