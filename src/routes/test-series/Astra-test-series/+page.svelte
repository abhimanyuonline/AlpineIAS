<script>
  let showSchedule = false;
  let showMentorship = false;
  let showFeatures = false;
  let showBenefits = false;
  let showSupport = false;

  function toggleSchedule() {
    showSchedule = !showSchedule;
  }

  function toggleMentorship() {
    showMentorship = !showMentorship;
  }

  function toggleFeatures() {
    showFeatures = !showFeatures;
  }
</script>

<svelte:head>
  <title>ASTRA Mains Test Series</title>
  <meta name="description" content="ASTRA Mains Test Series with Mentorship (2025-26) by Alpine IAS" />
</svelte:head>

<div class="bg-gray-50">
  <main class="p-6 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-center mb-4">ASTRA Mains Test Series with Mentorship (2025-26)</h1>
    <p class="text-center mb-6">By Alpine IAS | Starts 1st July | For the serious aspirant aiming for top 100 ranks</p>

    <section class="mb-6">
      <h2 class="text-2xl font-bold">Objective</h2>
      <p class="mt-2">To equip UPSC aspirants with mastery in answer writing, conceptual clarity, and paper-wise time management through high-quality GS and Essay tests under personalized mentor guidance.</p>
    </section>

    <section class="mb-6">
      <h2 class="text-2xl font-bold">What You Get</h2>
      <ul class="list-disc pl-5 mt-2 space-y-1">
        <li>26 UPSC-Level Tests (GS + Essay)</li>
        <li>Mentor-Based Answer Evaluation</li>
        <li>Model Answers + Detailed Feedback</li>
        <li>Strategy Sessions & Monthly Review Calls</li>
        <li>Access to Alpine IAS Telegram Doubt Group</li>
      </ul>
    </section>

    <section class="mb-6">
      <button class="underline" style="color: #016630" on:click={toggleSchedule}>
        <span>{showSchedule ? 'Hide' : 'Show'}</span> Test Schedule (1st July – 1st Feb)
      </button>
      <p class="text-sm text-gray-600 mt-1">Only GS Papers I–IV and Essay Paper</p>
      
      {#if showSchedule}
        <div class="mt-3">
          <div class="overflow-x-auto">
            <table class="min-w-full border-collapse border border-gray-300">
              <thead class="bg-gray-100">
                <tr>
                  <th class="border border-gray-300 px-3 py-2 text-left">Month</th>
                  <th class="border border-gray-300 px-3 py-2 text-left">Test No.</th>
                  <th class="border border-gray-300 px-3 py-2 text-left">Subject / Paper</th>
                  <th class="border border-gray-300 px-3 py-2 text-left">Date</th>
                  <th class="border border-gray-300 px-3 py-2 text-left">Type</th>
                </tr>
              </thead>
              <tbody>
                <tr><td class="border border-gray-300 px-3 py-2 font-semibold" rowspan="4">July</td><td class="border border-gray-300 px-3 py-2">Test 1</td><td class="border border-gray-300 px-3 py-2">GS Paper 1 – Ancient & Medieval History</td><td class="border border-gray-300 px-3 py-2">1st July</td><td class="border border-gray-300 px-3 py-2">Sectional</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 2</td><td class="border border-gray-300 px-3 py-2">GS Paper 1 – Modern History</td><td class="border border-gray-300 px-3 py-2">10th July</td><td class="border border-gray-300 px-3 py-2">Sectional</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 3</td><td class="border border-gray-300 px-3 py-2">GS Paper 1 – Art & Culture + World History</td><td class="border border-gray-300 px-3 py-2">20th July</td><td class="border border-gray-300 px-3 py-2">Sectional</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 4</td><td class="border border-gray-300 px-3 py-2">GS Paper 1 – Society + Geography</td><td class="border border-gray-300 px-3 py-2">30th July</td><td class="border border-gray-300 px-3 py-2">Sectional</td></tr>
                
                <tr><td class="border border-gray-300 px-3 py-2 font-semibold" rowspan="4">August</td><td class="border border-gray-300 px-3 py-2">Test 5</td><td class="border border-gray-300 px-3 py-2">GS Paper 2 – Polity (Parliament, Constitution)</td><td class="border border-gray-300 px-3 py-2">8th Aug</td><td class="border border-gray-300 px-3 py-2">Sectional</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 6</td><td class="border border-gray-300 px-3 py-2">GS Paper 2 – Governance + Social Justice</td><td class="border border-gray-300 px-3 py-2">18th Aug</td><td class="border border-gray-300 px-3 py-2">Sectional</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 7</td><td class="border border-gray-300 px-3 py-2">GS Paper 2 – International Relations + Current Affairs</td><td class="border border-gray-300 px-3 py-2">28th Aug</td><td class="border border-gray-300 px-3 py-2">Sectional</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 8</td><td class="border border-gray-300 px-3 py-2">GS Paper 3 – Economy (Static + Current)</td><td class="border border-gray-300 px-3 py-2">7th Sept</td><td class="border border-gray-300 px-3 py-2">Sectional</td></tr>
                
                <tr><td class="border border-gray-300 px-3 py-2 font-semibold" rowspan="2">September</td><td class="border border-gray-300 px-3 py-2">Test 9</td><td class="border border-gray-300 px-3 py-2">GS Paper 3 – Agriculture, Food Security</td><td class="border border-gray-300 px-3 py-2">17th Sept</td><td class="border border-gray-300 px-3 py-2">Sectional</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 10</td><td class="border border-gray-300 px-3 py-2">GS Paper 3 – Environment + Disaster Mgmt</td><td class="border border-gray-300 px-3 py-2">27th Sept</td><td class="border border-gray-300 px-3 py-2">Sectional</td></tr>
                
                <tr><td class="border border-gray-300 px-3 py-2 font-semibold" rowspan="6">October</td><td class="border border-gray-300 px-3 py-2">Test 11</td><td class="border border-gray-300 px-3 py-2">GS Paper 3 – Science & Tech + Internal Security</td><td class="border border-gray-300 px-3 py-2">6th Oct</td><td class="border border-gray-300 px-3 py-2">Sectional</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 12</td><td class="border border-gray-300 px-3 py-2">GS Paper 4 – Ethics Theory + Thinkers</td><td class="border border-gray-300 px-3 py-2">16th Oct</td><td class="border border-gray-300 px-3 py-2">Sectional</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 13</td><td class="border border-gray-300 px-3 py-2">GS Paper 4 – Case Studies</td><td class="border border-gray-300 px-3 py-2">26th Oct</td><td class="border border-gray-300 px-3 py-2">Sectional</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 14</td><td class="border border-gray-300 px-3 py-2">Essay Paper – Theme-based (Society/Polity)</td><td class="border border-gray-300 px-3 py-2">5th Nov</td><td class="border border-gray-300 px-3 py-2">Thematic Essay</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 15</td><td class="border border-gray-300 px-3 py-2">GS Paper 1 – Full-Length</td><td class="border border-gray-300 px-3 py-2">15th Nov</td><td class="border border-gray-300 px-3 py-2">Full-Length</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 16</td><td class="border border-gray-300 px-3 py-2">GS Paper 2 – Full-Length</td><td class="border border-gray-300 px-3 py-2">20th Nov</td><td class="border border-gray-300 px-3 py-2">Full-Length</td></tr>
                
                <tr><td class="border border-gray-300 px-3 py-2 font-semibold" rowspan="3">November</td><td class="border border-gray-300 px-3 py-2">Test 17</td><td class="border border-gray-300 px-3 py-2">GS Paper 3 – Full-Length</td><td class="border border-gray-300 px-3 py-2">25th Nov</td><td class="border border-gray-300 px-3 py-2">Full-Length</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 18</td><td class="border border-gray-300 px-3 py-2">GS Paper 4 – Full-Length</td><td class="border border-gray-300 px-3 py-2">30th Nov</td><td class="border border-gray-300 px-3 py-2">Full-Length</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 19</td><td class="border border-gray-300 px-3 py-2">Essay Paper – Abstract & Philosophical</td><td class="border border-gray-300 px-3 py-2">5th Dec</td><td class="border border-gray-300 px-3 py-2">Essay Paper</td></tr>
                
                <tr><td class="border border-gray-300 px-3 py-2 font-semibold" rowspan="6">December</td><td class="border border-gray-300 px-3 py-2">Test 20</td><td class="border border-gray-300 px-3 py-2">GS Paper 1 – Full-Length (Advanced)</td><td class="border border-gray-300 px-3 py-2">15th Dec</td><td class="border border-gray-300 px-3 py-2">Full-Length</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 21</td><td class="border border-gray-300 px-3 py-2">GS Paper 2 – Full-Length (Advanced)</td><td class="border border-gray-300 px-3 py-2">20th Dec</td><td class="border border-gray-300 px-3 py-2">Full-Length</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 22</td><td class="border border-gray-300 px-3 py-2">GS Paper 3 – Full-Length (Advanced)</td><td class="border border-gray-300 px-3 py-2">25th Dec</td><td class="border border-gray-300 px-3 py-2">Full-Length</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 23</td><td class="border border-gray-300 px-3 py-2">GS Paper 4 – Full-Length (Advanced)</td><td class="border border-gray-300 px-3 py-2">30th Dec</td><td class="border border-gray-300 px-3 py-2">Full-Length</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 24</td><td class="border border-gray-300 px-3 py-2">Essay Paper – Final Simulation</td><td class="border border-gray-300 px-3 py-2">5th Jan</td><td class="border border-gray-300 px-3 py-2">Full-Length Essay</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 25</td><td class="border border-gray-300 px-3 py-2">GS Paper 1 – Final Simulation</td><td class="border border-gray-300 px-3 py-2">10th Jan</td><td class="border border-gray-300 px-3 py-2">Full-Length</td></tr>
                
                <tr><td class="border border-gray-300 px-3 py-2 font-semibold" rowspan="3">January</td><td class="border border-gray-300 px-3 py-2">Test 26</td><td class="border border-gray-300 px-3 py-2">GS Paper 2 – Final Simulation</td><td class="border border-gray-300 px-3 py-2">15th Jan</td><td class="border border-gray-300 px-3 py-2">Full-Length</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 27</td><td class="border border-gray-300 px-3 py-2">GS Paper 3 – Final Simulation</td><td class="border border-gray-300 px-3 py-2">20th Jan</td><td class="border border-gray-300 px-3 py-2">Full-Length</td></tr>
                <tr><td class="border border-gray-300 px-3 py-2">Test 28</td><td class="border border-gray-300 px-3 py-2">GS Paper 4 – Final Simulation</td><td class="border border-gray-300 px-3 py-2">25th Jan</td><td class="border border-gray-300 px-3 py-2">Full-Length</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      {/if}
    </section>

    <section class="mb-6">
      <button class="underline" style="color: #016630" on:click={toggleMentorship}>
        <span>{showMentorship ? 'Hide' : 'Show'}</span> Mentorship Support System
      </button>
      
      {#if showMentorship}
        <div class="mt-3">
          <h3 class="text-xl font-semibold">Mentor's Role</h3>
          <ul class="list-disc pl-5 mt-2 space-y-1">
            <li>Personal Answer Copy Evaluation by UPSC experts</li>
            <li>Detailed remarks & marks breakdown on every answer</li>
            <li>Custom improvement plan shared after each test</li>
            <li>Monthly 1-on-1 Strategy Sessions to address weaknesses</li>
            <li>Telegram-based Q&A + Peer Writing Review</li>
          </ul>
        </div>
      {/if}
    </section>

    <section class="mb-6">
      <button class="underline" style="color: #016630" on:click={toggleFeatures}>
        <span>{showFeatures ? 'Hide' : 'Show'}</span> Why Choose ASTRA Test Series?
      </button>
      
      {#if showFeatures}
        <div class="mt-3">
          <div class="grid md:grid-cols-2 gap-4">
            <div>
              <h4 class="font-semibold">UPSC-Simulated Testing</h4>
              <p class="text-sm text-gray-600">Develop precision, speed, and structure</p>
            </div>
            <div>
              <h4 class="font-semibold">Mentor-Led Evaluation</h4>
              <p class="text-sm text-gray-600">Beyond scores—get direction</p>
            </div>
            <div>
              <h4 class="font-semibold">Consistent & Predictable Plan</h4>
              <p class="text-sm text-gray-600">Plan your entire Mains prep in advance</p>
            </div>
            <div>
              <h4 class="font-semibold">Integrated Essay Practice</h4>
              <p class="text-sm text-gray-600">Focused writing on relevant themes</p>
            </div>
            <div>
              <h4 class="font-semibold">Performance Analytics</h4>
              <p class="text-sm text-gray-600">Monthly report cards to track growth</p>
            </div>
          </div>
        </div>
      {/if}
    </section>

    <div class="flex justify-center mt-6">
      <a href="https://api.whatsapp.com/send?phone=919749033332&text=Hi,%20enquiry%20from%20AlpineIAS%20website%20for%20ASTRA%20Mains%20Test%20Series" class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors">Join Now</a>
      <a href="/contact-us" class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors">Contact us</a>
    </div>
  </main>
</div>

<style>
  /* Add any additional custom styles here */
</style>