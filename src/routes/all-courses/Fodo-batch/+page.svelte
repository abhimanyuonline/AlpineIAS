<script>
  let showKeyFeatures = false;
  let showWhyFodo = false;
  let showFeeDetails = false;
</script>

<main class="p-6 max-w-4xl mx-auto">
  <h1 class="text-4xl font-bold text-center mb-4">FODO Batch – ALPINE IAS</h1>
  <p class="text-center mb-6">Fall Down, Rise Once More | Resilience-Driven UPSC Comeback</p>

  <section class="mb-6">
    <p class="font-semibold">Target Audience: UPSC aspirants with previous attempts</p>
    <h2 class="text-2xl font-bold mt-4">Objective</h2>
    <p class="mt-2">To convert failed attempts into a strong comeback by deeply analyzing individual weaknesses and providing personalized mentorship, strategic content refinement, answer-writing mastery, and consistent performance tracking.</p>
  </section>

  <section class="mb-6">
    <h2 class="text-2xl font-bold">Course Duration</h2>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>6 to 8 Months (July to February)</li>
      <li>Covers Prelims + Mains + Interview prep</li>
      <li>Highly strategic and focused approach</li>
    </ul>
  </section>

  <section class="mb-6">
    <h2 class="text-2xl font-bold">Batch Philosophy</h2>
    <p class="italic mt-2">“You don’t need to study everything again. You need to study the right thing the right way.”</p>
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showKeyFeatures = !showKeyFeatures}>
      {showKeyFeatures ? 'Hide' : 'Show'} Key Features
    </button>
    {#if showKeyFeatures}
      <ul class="list-disc pl-5 mt-3 space-y-3">
        <li>
          <strong>Mistake Diagnosis Module (First 2 Weeks):</strong>
          <ul class="list-disc pl-5 mt-1 space-y-1">
            <li>One-on-One academic counseling for Prelims, Mains & Interview failure types</li>
            <li>SWOT Analysis & Personalized Study Plan</li>
            <li>Mentor Allocation based on assessment</li>
          </ul>
        </li>
        <li>
          <strong>Prelims Rebuilder (July to November):</strong>
          <ul class="list-disc pl-5 mt-1 space-y-1">
            <li>25 Tests (Sectional + Full-Length GS & CSAT)</li>
            <li>1:1 Error Analytics Discussion</li>
            <li>Focus on Elimination, Conceptual Depth, Time Management</li>
            <li>CSAT Drills for Non-Maths Background</li>
          </ul>
        </li>
        <li>
          <strong>Mains Powerpack (August to January):</strong>
          <ul class="list-disc pl-5 mt-1 space-y-1">
            <li>2-Week GS Capsule Modules (GS1 to GS4)</li>
            <li>12 GS Tests + 4 Essay + 4 Optional Tests</li>
            <li>Ethics Case Studies Weekly + 72-Hour Evaluation</li>
          </ul>
        </li>
        <li>
          <strong>Essay + Answer Writing Bootcamp:</strong>
          <ul class="list-disc pl-5 mt-1 space-y-1">
            <li>Weekly Essay Practice + Brainstorming</li>
            <li>Timed GS Answer Writing Daily</li>
            <li>Peer + Faculty Review & Model Booklets</li>
          </ul>
        </li>
        <li>
          <strong>1:1 Mentorship Every 15 Days:</strong>
          <ul class="list-disc pl-5 mt-1 space-y-1">
            <li>Performance Tracking</li>
            <li>Paper-wise Strategy Refinement</li>
            <li>Psychological & Motivational Support</li>
          </ul>
        </li>
        <li>
          <strong>Interview Guidance (January Onwards):</strong>
          <ul class="list-disc pl-5 mt-1 space-y-1">
            <li>DAF Analysis & Mock Interviews</li>
            <li>Feedback-Oriented Personality Development</li>
          </ul>
        </li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showWhyFodo = !showWhyFodo}>
      {showWhyFodo ? 'Hide' : 'Show'} Why ALPINE IAS for FODO?
    </button>
    {#if showWhyFodo}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>Faculty with 4+ UPSC Interviews and IIT/DU/NIT backgrounds</li>
        <li>Small Batch Size for Personalized Guidance</li>
        <li>Mindset Rebuilding & Post-Failure Support</li>
        <li>Integrated Static + Current Affairs Content</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showFeeDetails = !showFeeDetails}>
      {showFeeDetails ? 'Hide' : 'Show'} Fee Structure
    </button>
    {#if showFeeDetails}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li><strong>Total Fee:</strong> ₹45,000/- for 8 Months</li>
        <li>Includes: Prelims + Mains + Interview Guidance</li>
        <li><strong>Scholarship:</strong> Up to 50% for candidates with at least 1 Interview attempt</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <h2 class="text-2xl font-bold">Mode</h2>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>Offline (Dehradun)</li>
      <li>Live & Recorded Online Classes</li>
    </ul>
  </section>

  <section class="mb-6">
    <h2 class="text-2xl font-bold">Final Words</h2>
    <p class="italic mt-2">“Failure is not the end; it’s a foundation for success—when you rebuild with strategy.”</p>
    <p class="mt-2">The FODO Batch is your opportunity to stop repeating mistakes and start designing your breakthrough with expert-led, focused preparation. If you’ve fallen before, it’s time to rise stronger—with ALPINE IAS.</p>
    <p class="font-semibold mt-2">Fall Down. Rise Once More. Enroll Now.</p>
  </section>

  <div class="flex gap-4 mt-6">
    <a href="https://api.whatsapp.com/send?phone=919749033332&text=Hi,%20enquiry%20from%20AlpineIAS%20website%20for%20Fodo%20Batch" class="text-white px-4 py-2 rounded transition"  style="background-color: #016630; hover:background-color: #014d26">Apply Now</a>
    <a href="/contact-us" class="text-white px-4 py-2 rounded transition"  style="background-color: #016630; hover:background-color: #014d26">Contact Now</a>
  </div>
</main>
