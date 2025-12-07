<script>
  let showCoverage = false;
  let showHighlights = false;
  let showResources = false;
  let showWho = false;
</script>

<main class="p-6 max-w-4xl mx-auto">
  <h1 class="text-4xl font-bold text-center mb-4">NCERT SUDHARSHAN CHAKRA BATCH – ALPINE IAS</h1>
  <p class="text-center mb-6">Build Your Base, Start Your Journey Right | Duration: 8 Months | Mode: Offline | Online | Hybrid</p>

  <section class="mb-6">
    <p class="font-semibold">Ideal for Beginners – Especially 12th Pass-Outs & Early College-Goers</p>
    <h2 class="text-2xl font-bold mt-4">Why Choose ALPINE IAS NCERT Course?</h2>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Thematic & Conceptual Teaching of NCERTs</li>
      <li>Structured Progression from Basic to UPSC-Level Thinking</li>
      <li>Ideal for School Students, Freshers & Beginners</li>
      <li>Faculty from IITs, NITs & DU</li>
      <li>Focus on Concept Clarity, Not Just Completion</li>
      <li>Personal Mentorship + Doubt Support</li>
      <li>Transition Support into GS Foundation Batch</li>
    </ul>
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showCoverage = !showCoverage}>
      {showCoverage ? 'Hide' : 'Show'} NCERT Subjects Covered
    </button>
    {#if showCoverage}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>History – Ancient, Medieval, Modern India</li>
        <li>Geography – Physical, Indian, Human</li>
        <li>Polity – Basics of Indian Constitution & Governance</li>
        <li>Economy – Understanding Economic Terms & Fundamentals</li>
        <li>Science – Environment, Biology, Physics, Chemistry (Relevant Portions)</li>
        <li>Art & Culture – Class 11 Fine Arts NCERT</li>
        <li>Sociology & Society – Class 11 & 12 Sociology</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showHighlights = !showHighlights}>
      {showHighlights ? 'Hide' : 'Show'} Course Highlights
    </button>
    {#if showHighlights}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>Daily 2-Hour Classes (Offline + Online)</li>
        <li>Weekly Concept Quizzes</li>
        <li>Full-Length NCERT Tests</li>
        <li>PDF Notes & Concept Handouts</li>
        <li>Telegram Channel for Materials</li>
        <li>Mentor Support & Progress Review</li>
        <li>NCERT Mapping with UPSC Syllabus</li>
        <li>Bridge to GS Foundation Course</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showResources = !showResources}>
      {showResources ? 'Hide' : 'Show'} Study Material & Resources
    </button>
    {#if showResources}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>NCERT Summary Notes</li>
        <li>Concept Handouts</li>
        <li>Notes Soft and Hard Copy</li>
        <li>PYQ Analysis from NCERT Concepts</li>
        <li>Test Discussions with Model Answers</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showWho = !showWho}>
      {showWho ? 'Hide' : 'Show'} Who Should Join?
    </button>
    {#if showWho}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>Students who have just passed Class 12</li>
        <li>College students wanting to build strong fundamentals</li>
        <li>Working professionals restarting UPSC prep</li>
        <li>Aspirants confused about how to begin their UPSC journey</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <h2 class="text-2xl font-bold">Duration & Batch Size</h2>
    <p class="mt-2">Duration: 8 Months</p>
    <p>Batch Size: 50 Students</p>
  </section>

  <div class="flex gap-4 mt-6">
    <a href="https://api.whatsapp.com/send?phone=919749033332&text=Hi,%20enquiry%20from%20AlpineIAS%20website%20for%20NCERT%20course" class="text-white px-4 py-2 rounded transition" style="background-color: #016630; hover:background-color: #014d26">Apply Now</a>
    <a href="/contact-us" class="text-white px-4 py-2 rounded transition" style="background-color: #016630; hover:background-color: #014d26">Contact Now</a>
  </div>
</main>
