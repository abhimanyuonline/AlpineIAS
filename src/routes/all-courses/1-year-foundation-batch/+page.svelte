<script>
  let showStructure = false;
  let showSubjects = false;
  let showFeatures = false;
  let showSupport = false;
  let showSpecial = false;
</script>

<main class="p-6 max-w-4xl mx-auto">
  <h1 class="text-4xl font-bold text-center mb-4">UPSC IGNITE BATCH 1-Year Foundation Course ALPINE IAS</h1>
  <p class="text-center mb-6">For UPSC 2026 Aspirants | Integrated Prep for Prelims, Mains & Interview</p>

  <section class="mb-6">
    <p class="font-semibold">Comprehensive GS Preparation | Personal Mentorship | Answer Writing Focus</p>
    <h2 class="text-2xl font-bold mt-4">Why Choose ALPINE IAS?</h2>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Top Faculty from IITs, NITs & DU</li>
      <li>UPSC Interview Appeared Mentors</li>
      <li>One-to-One Personal Mentorship</li>
      <li>Holistic, Integrated Approach to GS + CSAT + Essay + Current Affairs</li>
      <li>Answer Writing & Test Series Included</li>
    </ul>
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showStructure = !showStructure}>
      {showStructure ? 'Hide' : 'Show'} Course Structure
    </button>
    {#if showStructure}
      <div class="mt-3">
        <h3 class="text-xl font-semibold">Phase 1: Foundation Building (Month 1–6)</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>History (Ancient, Medieval, Modern, World)</li>
          <li>Geography (Physical, Indian, Human)</li>
          <li>Polity & Constitution</li>
          <li>Indian Economy (Basic to Advanced)</li>
          <li>Environment & Ecology</li>
          <li>Art & Culture</li>
          <li>Weekly current affairs classes and daily notes</li>
          <li>Chapter-wise MCQ solving & Weekly Mini Tests</li>
        </ul>
        <h3 class="text-xl font-semibold mt-4">Phase 2: Integration & Application (Month 6–12)</h3>
        <ul class="list-disc pl-5 mt-2 space-y-1">
          <li>Ethics, Integrity & Aptitude</li>
          <li>Internal Security, Disaster Management</li>
          <li>International Relations</li>
          <li>Science & Tech (Static + Current)</li>
          <li>Essay Writing (Topic-wise Guidance)</li>
          <li>Daily Answer Writing Practice & Monthly Mentor Review</li>
        </ul>
      </div>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showSubjects = !showSubjects}>
      {showSubjects ? 'Hide' : 'Show'} Subjects Covered
    </button>
    {#if showSubjects}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>History, Geography, Polity, Economy</li>
        <li>Environment, Science & Tech, Art & Culture</li>
        <li>Ethics, IR, Governance, Security</li>
        <li>Essay & CSAT (Maths, Reasoning, Comprehension)</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showFeatures = !showFeatures}>
      {showFeatures ? 'Hide' : 'Show'} Key Features
    </button>
    {#if showFeatures}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>Daily 1-to-1 Mentorship & Doubt Solving</li>
        <li>Live + Recorded Lectures</li>
        <li>Weekly MCQ & Monthly Sectional Tests</li>
        <li>Newspaper + PIB Analysis</li>
        <li>GS + Essay Answer Writing Practice</li>
        <li>Performance Reviews & Discipline Tracking</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showSupport = !showSupport}>
      {showSupport ? 'Hide' : 'Show'} Mentorship & Current Affairs Support
    </button>
    {#if showSupport}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>Daily News PDF + Weekly/Monthly Compilations</li>
        <li>e-Newspaper Highlights</li>
        <li>Telegram Channel for Notes</li>
        <li>Personal Mentor for Regular Feedback</li>
        <li>Interview Orientation Sessions (Basic)</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showSpecial = !showSpecial}>
      {showSpecial ? 'Hide' : 'Show'} Special Features
    </button>
    {#if showSpecial}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>Revision Classes from March 2026</li>
        <li>10% Fee Refund on Prelims Qualification</li>
        <li>Free Continuation Till 2027 for Old Students</li>
        <li>Printed + PDF Notes with PYQ Booklets</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <h2 class="text-2xl font-bold">Course Mode</h2>
    <p class="mt-2">Offline, Online, and Hybrid formats available for maximum flexibility.</p>
  </section>

  <div class="flex gap-4 mt-6">
    <!-- edit after text=  use %20 for space -->
    <a href="https://api.whatsapp.com/send?phone=919749033332&text=Hi,%20enquiry%20from%20AlpineIAS%20website%20for%20course%20one%20year" class="text-white px-4 py-2 rounded transition" style="background-color: #016630; hover:background-color: #014d26">Apply Now</a>
    <a href="/contact-us" class="text-white px-4 py-2 rounded transition" style="background-color: #016630; hover:background-color: #014d26">Contact Now</a>
  </div>
</main>