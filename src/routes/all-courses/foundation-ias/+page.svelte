<script>
  let showDetails = false;
  let showFeatures = false;
  let showMentorshipTools = false;
  let showSelectionProcess = false;
  let showFeeDetails = false;
</script>

<main class="p-6 max-w-4xl mx-auto">
  <h1 class="text-4xl font-bold text-center mb-4">HITS THE BULL’S EYE BATCH – ALPINE IAS</h1>
  <p class="text-center mb-6">One-to-One Mentorship | Strategic Preparation | Guaranteed Precision</p>

  <section class="mb-6">
    <p class="font-semibold">Only for Serious UPSC Aspirants | Limited Intake | Result-Oriented Approach</p>
    <h2 class="text-2xl font-bold mt-4">What Is the ‘Hits the Bull’s Eye’ Batch?</h2>
    <p class="mt-2">This is ALPINE IAS’s most premium and selective UPSC preparation program, built around personalized one-on-one mentorship, laser-sharp planning, and complete syllabus execution under expert supervision.</p>
    <p class="mt-2">This batch is not for everyone—it’s for those who want to break the cycle of uncertainty, avoid time wastage, and get direct, accountable guidance every step of the way.</p>
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showDetails = !showDetails}>
      {showDetails ? 'Hide' : 'Show'} Key Highlights
    </button>
    {#if showDetails}
      <ul class="list-disc pl-5 mt-3 space-y-2">
        <li><strong>One-to-One Personal Mentorship:</strong> Dedicated mentor (4+ UPSC interviews), weekly audits, emotional guidance.</li>
        <li><strong>Customized Study Plan:</strong> Tailored to background, weaknesses, daily/weekly tracking.</li>
        <li><strong>Daily Answer Writing + Review:</strong> Personalized feedback, essay writing every fortnight.</li>
        <li><strong>Integrated Prep:</strong> GS, CSAT, Optional, Ethics, Essay, Current Affairs.</li>
        <li><strong>Limited Students:</strong> 15–20 students per batch for maximum focus.</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <h2 class="text-2xl font-bold">Who Should Join?</h2>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>UPSC aspirants needing structured feedback</li>
      <li>Beginners wanting elite mentorship</li>
      <li>Working professionals needing flexibility</li>
      <li>College students with 1–2 year timeline</li>
    </ul>
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showFeatures = !showFeatures}>
      {showFeatures ? 'Hide' : 'Show'} Features at a Glance
    </button>
    {#if showFeatures}
      <table class="w-full table-auto mt-3 border border-gray-300">
        <thead>
          <tr class="bg-gray-100">
            <th class="border border-gray-300 px-2 py-1 text-left">Feature</th>
            <th class="border border-gray-300 px-2 py-1 text-center">Included</th>
          </tr>
        </thead>
        <tbody>
          {#each [
            'One-on-One Weekly Mentorship Call',
            'Personalized Study Plan',
            'Daily Target Monitoring',
            'Answer Writing Practice (Daily)',
            'Mains Test Series with Evaluation',
            'CSAT Practice (Weekly)',
            'Essay Writing & Feedback',
            'Daily Current Affairs with Analysis',
            'Prelims PYQs Practice & Review',
            'Stress Management & Strategy Calls'] as feature}
            <tr>
              <td class="border border-gray-300 px-2 py-1">{feature}</td>
              <td class="border border-gray-300 px-2 py-1 text-center">Yes</td>
            </tr>
          {/each}
        </tbody>
      </table>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showMentorshipTools = !showMentorshipTools}>
      {showMentorshipTools ? 'Hide' : 'Show'} Mentorship Tools
    </button>
    {#if showMentorshipTools}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li>Dashboard Access for progress tracking and feedback</li>
        <li>Telegram-based academic doubt solving</li>
        <li>Fortnightly Zoom mentorship reviews</li>
        <li>Study Planner with auto-alerts for missed targets</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <h2 class="text-2xl font-bold">Duration & Format</h2>
    <ul class="list-disc pl-5 mt-2 space-y-1">
      <li>10–12 Months (Full GS + Optional add-on)</li>
      <li>Available Offline (Dehradun), Online & Hybrid</li>
    </ul>
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showSelectionProcess = !showSelectionProcess}>
      {showSelectionProcess ? 'Hide' : 'Show'} Selection Process
    </button>
    {#if showSelectionProcess}
      <ol class="list-decimal pl-5 mt-3 space-y-1">
        <li>Mentorship Application Form</li>
        <li>Telephonic Interaction with Faculty</li>
        <li>Mini Diagnostic Test (Pre + Mains)</li>
        <li>Final Selection & Admission</li>
      </ol>
    {/if}
  </section>

  <section class="mb-6">
    <button class="underline" style="color: #016630" on:click={() => showFeeDetails = !showFeeDetails}>
      {showFeeDetails ? 'Hide' : 'Show'} Fee Details
    </button>
    {#if showFeeDetails}
      <ul class="list-disc pl-5 mt-3 space-y-1">
        <li><strong>Premium Batch Fee:</strong> [Insert Amount]</li>
        <li>Includes: GS + Prelims + Mains + CSAT + Mentorship + Test Series</li>
        <li>Scholarships available for merit-based candidates</li>
      </ul>
    {/if}
  </section>

  <section class="mb-6">
    <h2 class="text-2xl font-bold">Why This Batch Works</h2>
    <p class="italic mt-2">“Generic plans don’t crack UPSC. Personalized strategy does.”</p>
    <p class="mt-2">This batch is where strategy meets execution, where feedback meets improvement, and where mentorship becomes transformation. If you want to stop “studying everything” and start “studying what matters most,” this is your moment.</p>
    <p class="font-semibold mt-2">Hit the Bull’s Eye. Don’t Miss Your Chance.</p>
    <p class="mt-1">Seats are limited. Selection is strict. Results are real.</p>
  </section>

  <div class="flex gap-4 mt-6">
    <a href="https://api.whatsapp.com/send?phone=919749033332&text=Hi,%20enquiry%20from%20AlpineIAS%20website%20for%20Hit%20the%20bulls%eye%20batch" class="text-white px-4 py-2 rounded transition" style="background-color: #016630; hover:background-color: #014d26">Apply Now</a>
    <a href="/contact-us" class="text-white px-4 py-2 rounded transition" style="background-color: #016630; hover:background-color: #014d26">Contact Now</a>
  </div>
</main>
