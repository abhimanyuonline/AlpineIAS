<script>
  let showSchedule = false;
  let showMentorship = false;
  let showFeatures = false;

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
  <title>ASTRA Mains Test Series with Mentorship (2025-26)</title>
  <meta name="description" content="ASTRA Mains Test Series with Mentorship by Alpine IAS - For serious UPSC aspirants aiming for top 100 ranks" />
</svelte:head>

<div class="bg-gray-50 min-h-screen">
  <main class="p-6 max-w-4xl mx-auto">
    <!-- Header Section -->
    <div class="text-center mb-8">
      <h1 class="text-4xl font-bold text-gray-800 mb-3">Strike Hard Prelims Test Series with Mentorship (2025-26)</h1>
      <p class="text-lg text-gray-600 mb-2">By Alpine IAS | Starts 1st July</p>
      <p class="text-xl font-semibold" style="color: #016630;">For the serious aspirant aiming for top 100 ranks</p>
    </div>

    <!-- Objective Section -->
    <section class="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-3">🎯 Objective</h2>
      <p class="text-gray-700 leading-relaxed">
        To equip UPSC aspirants with mastery in answer writing, conceptual clarity, and paper-wise time management through high-quality GS and Essay tests under personalized mentor guidance.
      </p>
    </section>

    <!-- What You Get Section -->
    <section class="bg-white rounded-lg shadow-md p-6 mb-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-4">📚 What You Get</h2>
      <ul class="space-y-3">
        <li class="flex items-start">
          <span class="text-green-500 font-bold mr-3 mt-1">●</span>
          <span class="text-gray-700">26 UPSC-Level Tests (GS + Essay)</span>
        </li>
        <li class="flex items-start">
          <span class="text-green-500 font-bold mr-3 mt-1">●</span>
          <span class="text-gray-700">Mentor-Based Answer Evaluation</span>
        </li>
        <li class="flex items-start">
          <span class="text-green-500 font-bold mr-3 mt-1">●</span>
          <span class="text-gray-700">Model Answers + Detailed Feedback</span>
        </li>
        <li class="flex items-start">
          <span class="text-green-500 font-bold mr-3 mt-1">●</span>
          <span class="text-gray-700">Strategy Sessions & Monthly Review Calls</span>
        </li>
        <li class="flex items-start">
          <span class="text-green-500 font-bold mr-3 mt-1">●</span>
          <span class="text-gray-700">Access to Alpine IAS Telegram Doubt Group</span>
        </li>
      </ul>
    </section>

    <!-- Test Schedule Section -->
    <section class="bg-white rounded-lg shadow-md p-6 mb-6">
      <button class="underline hover:text-green-800 transition-colors text-lg font-medium" style="color: #016630;" on:click={toggleSchedule}>
        <span>{showSchedule ? 'Hide' : 'Show'}</span> Test Schedule (1st July – 1st Feb)
      </button>
      <p class="text-sm text-gray-600 mt-2">Only GS Papers I–IV and Essay Paper</p>
      
      {#if showSchedule}
        <div class="mt-4">
          <div class="overflow-x-auto">
            <table class="min-w-full border-collapse border border-gray-300 bg-white">
              <thead class="bg-gray-100">
                <tr>
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Month</th>
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Test No.</th>
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Subject / Paper</th>
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Date</th>
                  <th class="border border-gray-300 px-4 py-3 text-left font-semibold text-gray-700">Type</th>
                </tr>
              </thead>
              <tbody class="text-sm">
                <!-- July -->
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-semibold bg-blue-50" rowspan="4">July</td>
                  <td class="border border-gray-300 px-4 py-3">Test 1</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 1 – Ancient & Medieval History</td>
                  <td class="border border-gray-300 px-4 py-3">1st July</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Sectional</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 2</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 1 – Modern History</td>
                  <td class="border border-gray-300 px-4 py-3">10th July</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Sectional</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 3</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 1 – Art & Culture + World History</td>
                  <td class="border border-gray-300 px-4 py-3">20th July</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Sectional</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 4</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 1 – Society + Geography</td>
                  <td class="border border-gray-300 px-4 py-3">30th July</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Sectional</span></td>
                </tr>
                
                <!-- August -->
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-semibold bg-blue-50" rowspan="4">August</td>
                  <td class="border border-gray-300 px-4 py-3">Test 5</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 2 – Polity (Parliament, Constitution)</td>
                  <td class="border border-gray-300 px-4 py-3">8th Aug</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Sectional</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 6</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 2 – Governance + Social Justice</td>
                  <td class="border border-gray-300 px-4 py-3">18th Aug</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Sectional</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 7</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 2 – International Relations + Current Affairs</td>
                  <td class="border border-gray-300 px-4 py-3">28th Aug</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Sectional</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 8</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 3 – Economy (Static + Current)</td>
                  <td class="border border-gray-300 px-4 py-3">7th Sept</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Sectional</span></td>
                </tr>
                
                <!-- September -->
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-semibold bg-blue-50" rowspan="2">September</td>
                  <td class="border border-gray-300 px-4 py-3">Test 9</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 3 – Agriculture, Food Security</td>
                  <td class="border border-gray-300 px-4 py-3">17th Sept</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Sectional</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 10</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 3 – Environment + Disaster Mgmt</td>
                  <td class="border border-gray-300 px-4 py-3">27th Sept</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Sectional</span></td>
                </tr>
                
                <!-- October -->
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-semibold bg-blue-50" rowspan="6">October</td>
                  <td class="border border-gray-300 px-4 py-3">Test 11</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 3 – Science & Tech + Internal Security</td>
                  <td class="border border-gray-300 px-4 py-3">6th Oct</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Sectional</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 12</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 4 – Ethics Theory + Thinkers</td>
                  <td class="border border-gray-300 px-4 py-3">16th Oct</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Sectional</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 13</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 4 – Case Studies</td>
                  <td class="border border-gray-300 px-4 py-3">26th Oct</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-xs">Sectional</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 14</td>
                  <td class="border border-gray-300 px-4 py-3">Essay Paper – Theme-based (Society/Polity)</td>
                  <td class="border border-gray-300 px-4 py-3">5th Nov</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Thematic Essay</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 15</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 1 – Full-Length</td>
                  <td class="border border-gray-300 px-4 py-3">15th Nov</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Full-Length</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 16</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 2 – Full-Length</td>
                  <td class="border border-gray-300 px-4 py-3">20th Nov</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Full-Length</span></td>
                </tr>
                
                <!-- November -->
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-semibold bg-blue-50" rowspan="3">November</td>
                  <td class="border border-gray-300 px-4 py-3">Test 17</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 3 – Full-Length</td>
                  <td class="border border-gray-300 px-4 py-3">25th Nov</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Full-Length</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 18</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 4 – Full-Length</td>
                  <td class="border border-gray-300 px-4 py-3">30th Nov</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Full-Length</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 19</td>
                  <td class="border border-gray-300 px-4 py-3">Essay Paper – Abstract & Philosophical</td>
                  <td class="border border-gray-300 px-4 py-3">5th Dec</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Essay Paper</span></td>
                </tr>
                
                <!-- December -->
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-semibold bg-blue-50" rowspan="6">December</td>
                  <td class="border border-gray-300 px-4 py-3">Test 20</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 1 – Full-Length (Advanced)</td>
                  <td class="border border-gray-300 px-4 py-3">15th Dec</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Full-Length</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 21</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 2 – Full-Length (Advanced)</td>
                  <td class="border border-gray-300 px-4 py-3">20th Dec</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Full-Length</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 22</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 3 – Full-Length (Advanced)</td>
                  <td class="border border-gray-300 px-4 py-3">25th Dec</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Full-Length</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 23</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 4 – Full-Length (Advanced)</td>
                  <td class="border border-gray-300 px-4 py-3">30th Dec</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Full-Length</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 24</td>
                  <td class="border border-gray-300 px-4 py-3">Essay Paper – Final Simulation</td>
                  <td class="border border-gray-300 px-4 py-3">5th Jan</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">Full-Length Essay</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 25</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 1 – Final Simulation</td>
                  <td class="border border-gray-300 px-4 py-3">10th Jan</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Full-Length</span></td>
                </tr>
                
                <!-- January -->
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3 font-semibold bg-blue-50" rowspan="3">January</td>
                  <td class="border border-gray-300 px-4 py-3">Test 26</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 2 – Final Simulation</td>
                  <td class="border border-gray-300 px-4 py-3">15th Jan</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Full-Length</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 27</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 3 – Final Simulation</td>
                  <td class="border border-gray-300 px-4 py-3">20th Jan</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Full-Length</span></td>
                </tr>
                <tr class="hover:bg-gray-50">
                  <td class="border border-gray-300 px-4 py-3">Test 28</td>
                  <td class="border border-gray-300 px-4 py-3">GS Paper 4 – Final Simulation</td>
                  <td class="border border-gray-300 px-4 py-3">25th Jan</td>
                  <td class="border border-gray-300 px-4 py-3"><span class="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Full-Length</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      {/if}
    </section>

    <!-- Mentorship Support Section -->
    <section class="bg-white rounded-lg shadow-md p-6 mb-6">
      <button class="underline hover:text-green-800 transition-colors text-lg font-medium" style="color: #016630;" on:click={toggleMentorship}>
        <span>{showMentorship ? 'Hide' : 'Show'}</span> Mentorship Support System
      </button>
      
      {#if showMentorship}
        <div class="mt-4">
          <h3 class="text-xl font-semibold text-gray-800 mb-3">🎓 Mentor's Role</h3>
          <ul class="space-y-3">
            <li class="flex items-start">
              <span class="font-bold mr-3 mt-1" style="color: #016630;">●</span>
              <span class="text-gray-700">Personal Answer Copy Evaluation by UPSC experts</span>
            </li>
            <li class="flex items-start">
              <span class="font-bold mr-3 mt-1" style="color: #016630;">●</span>
              <span class="text-gray-700">Detailed remarks & marks breakdown on every answer</span>
            </li>
            <li class="flex items-start">
              <span class="font-bold mr-3 mt-1" style="color: #016630;">●</span>
              <span class="text-gray-700">Custom improvement plan shared after each test</span>
            </li>
            <li class="flex items-start">
              <span class="font-bold mr-3 mt-1" style="color: #016630;">●</span>
              <span class="text-gray-700">Monthly 1-on-1 Strategy Sessions to address weaknesses</span>
            </li>
            <li class="flex items-start">
              <span class="font-bold mr-3 mt-1" style="color: #016630;">●</span>
              <span class="text-gray-700">Telegram-based Q&A + Peer Writing Review</span>
            </li>
          </ul>
        </div>
      {/if}
    </section>

    <!-- Why Choose ASTRA Section -->
    <section class="bg-white rounded-lg shadow-md p-6 mb-8">
      <button class="underline hover:text-green-800 transition-colors text-lg font-medium" style="color: #016630;" on:click={toggleFeatures}>
        <span>{showFeatures ? 'Hide' : 'Show'}</span> Why Choose ASTRA Test Series?
      </button>
      
      {#if showFeatures}
        <div class="mt-4">
          <div class="grid md:grid-cols-2 gap-6">
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold text-gray-800 mb-2 flex items-center">
                <span style="color: #016630;" class="mr-2">🎯</span>
                UPSC-Simulated Testing
              </h4>
              <p class="text-sm text-gray-600">Develop precision, speed, and structure</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold text-gray-800 mb-2 flex items-center">
                <span class="text-green-500 mr-2">👨‍🏫</span>
                Mentor-Led Evaluation
              </h4>
              <p class="text-sm text-gray-600">Beyond scores—get direction</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold text-gray-800 mb-2 flex items-center">
                <span class="text-purple-500 mr-2">📅</span>
                Consistent & Predictable Plan
              </h4>
              <p class="text-sm text-gray-600">Plan your entire Mains prep in advance</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg">
              <h4 class="font-semibold text-gray-800 mb-2 flex items-center">
                <span class="text-orange-500 mr-2">✍️</span>
                Integrated Essay Practice
              </h4>
              <p class="text-sm text-gray-600">Focused writing on relevant themes</p>
            </div>
            <div class="bg-gray-50 p-4 rounded-lg md:col-span-2">
              <h4 class="font-semibold text-gray-800 mb-2 flex items-center">
                <span class="text-red-500 mr-2">📊</span>
                Performance Analytics
              </h4>
              <p class="text-sm text-gray-600">Monthly report cards to track growth</p>
            </div>
          </div>
        </div>
      {/if}
    </section>

    <!-- Call to Action -->
    <div class="flex justify-center">
      <a 
        href="https://api.whatsapp.com/send?phone=919749033332&text=Hi,%20enquiry%20from%20AlpineIAS%20website%20for%20ASTRA%20Mains%20Test%20Series" 
        class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        Join Now
      </a>
      <a 
        href="/contact-us" 
        class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
      >
        Contact us
      </a>
    </div>
  </main>
</div>

<style>
  /* Custom scrollbar for table */
  .overflow-x-auto::-webkit-scrollbar {
    height: 8px;
  }
  
  .overflow-x-auto::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 4px;
  }
  
  .overflow-x-auto::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }
  
  .overflow-x-auto::-webkit-scrollbar-thumb:hover {
    background: #a1a1a1;
  }

</style>