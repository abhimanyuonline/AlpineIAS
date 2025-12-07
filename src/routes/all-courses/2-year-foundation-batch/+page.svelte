<script>
  let showStructure = false;
  let showSubjects = false;
  let showFeatures = false;
  let showSupport = false;
  let showMaterials = false;
</script>

<main class="p-6 max-w-4xl mx-auto">
  <h1 class="text-4xl font-bold text-center mb-4">UPSC TORTOISE 2-Year Foundation Course  ALPINE IAS</h1>
  <p class="text-center mb-6">From NCERTs to UPSC Mastery | Ideal for College Students & Early Starters</p>

  <section class="mb-6">
    <p class="font-semibold">Start Strong | Build Conceptual Clarity | Transition to GS Excellence</p>
    <h2 class="text-2xl font-bold mt-4">Why Choose ALPINE IAS?</h2>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Expert Faculty from IITs, NITs & DU</li>
      <li>UPSC Interview-Appeared Mentors</li>
      <li>Personal Mentorship and Study Tracking</li>
      <li>Dedicated NCERT-to-GS Transition Model</li>
      <li>Answer Writing + Prelims + Mains Focused Strategy</li>
      <li>Limited Batch Size (Only 50 students) for personal attention</li>
    </ul>
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showStructure = !showStructure}>
      {showStructure ? 'Hide' : 'Show'} Course Structure & Timeline
    </button>
    {#if showStructure}
      <div class="mt-3">
        <h3 class="text-xl font-semibold">Phase 1: NCERT Foundation (Months 1–6)</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Coverage: Class 6th to 12th NCERTs (History, Geography, Polity, Economy, Science, Environment)</li>
          <li>Theme-wise coverage with UPSC relevance</li>
          <li>Weekly NCERT Tests + Full-Length NCERT Evaluation</li>
          <li>Weekly current affairs classes and daily notes</li>
          <li>Class handouts, Telegram Notes, Conceptual PDFs</li>
        </ul>
        <h3 class="text-xl font-semibold mt-4">Phase 2: General Studies Mastery (Months 7–24)</h3>
        <p class="mt-1">Objective: Full UPSC GS syllabus coverage (Prelims + Mains + CSAT)</p>
      </div>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showSubjects = !showSubjects}>
      {showSubjects ? 'Hide' : 'Show'} Subjects Covered
    </button>
    {#if showSubjects}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>History (Ancient, Medieval, Modern)</li>
        <li>Geography (Indian & World)</li>
        <li>Polity & Constitution</li>
        <li>Indian Economy</li>
        <li>Environment & Ecology</li>
        <li>Science & Technology</li>
        <li>Ethics, Integrity & Aptitude</li>
        <li>Internal Security & Disaster Management</li>
        <li>International Relations</li>
        <li>Governance & Society</li>
        <li>Essay Writing</li>
        <li>CSAT (Quantitative Aptitude, Reasoning, Comprehension)</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showFeatures = !showFeatures}>
      {showFeatures ? 'Hide' : 'Show'} Key Features
    </button>
    {#if showFeatures}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>2-Hour Daily Live Classes (Online & Offline)</li>
        <li>Access to Recorded Lectures</li>
        <li>PDF Notes + Printed Material</li>
        <li>Weekly Tests & Quizzes (MCQs + Subjective)</li>
        <li>Daily Current Affairs (PDF + Analysis)</li>
        <li>Newspaper & PIB Discussions</li>
        <li>Monthly Performance Tracking & Feedback</li>
        <li>Regular Doubt Clearing Sessions</li>
        <li>Answer Writing Practice for GS & Essay</li>
        <li>Mains-Oriented Case Study Discussions</li>
        <li>Dedicated Telegram Channel for Notes & Updates</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showSupport = !showSupport}>
      {showSupport ? 'Hide' : 'Show'} Current Affairs & Mentorship Support
    </button>
    {#if showSupport}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>Daily News PDF + Monthly Compilations</li>
        <li>Year-End Booklets + e-Newspaper Highlights</li>
        <li>Regular Discussion Sessions</li>
        <li>Interview Preparation (Basic Orientation in 2nd year)</li>
        <li>Personalized Mentorship by Senior Faculty</li>
        <li>One-on-One Academic Progress Reviews</li>
        <li>Peer Learning via Answer Writing Forums</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showMaterials = !showMaterials}>
      {showMaterials ? 'Hide' : 'Show'} Study Material Details
    </button>
    {#if showMaterials}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>Hard Copy Notes (Couriered to students)</li>
        <li>PDF Notes (Subject-wise & Current Affairs)</li>
        <li>NCERT Handouts</li>
        <li>Yearly Current Affairs Booklets</li>
        <li>Mains Model Answers & PYQs Booklets</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <h2 class="text-2xl font-bold">Course Mode</h2>
    <p class="mt-2">Offline, Online, and Hybrid formats available for maximum flexibility.</p>
  </section>

  <div class="flex gap-4 mt-6">
    <a href="https://api.whatsapp.com/send?phone=919749033332&text=Hi,%20enquiry%20from%20AlpineIAS%20website%20for%20two%20year%20foundation%20course" class="text-white px-4 py-2 rounded transition" style="background-color: #016630; hover:background-color: #014d26">Apply Now</a>
    <a href="/contact-us" class="text-white px-4 py-2 rounded transition" style="background-color: #016630; hover:background-color: #014d26">Contact Now</a>
  </div>
</main>
