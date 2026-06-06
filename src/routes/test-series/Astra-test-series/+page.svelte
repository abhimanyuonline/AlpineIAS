<script>
  import { slide } from 'svelte/transition';
  
  let showSchedule = $state(false);
  let showMentorship = $state(false);
  let showFeatures = $state(false);
</script>

<svelte:head>
  <title>ASTRA Mains Test Series – Alpine IAS</title>
  <meta name="description" content="ASTRA Mains Test Series with Mentorship (2025-26) by Alpine IAS - UPSC CSE Answer Writing Mastery in Dehradun." />
</svelte:head>

<div class="bg-gray-50 min-h-screen pt-8 pb-16 relative overflow-hidden">
  <!-- Decorative Ambient Blobs -->
  <div class="absolute top-[10%] left-[-5%] w-[35vw] h-[35vw] bg-emerald-200/10 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute top-[40%] right-[-5%] w-[40vw] h-[40vw] bg-teal-200/10 rounded-full blur-3xl pointer-events-none"></div>

  <main class="max-w-6xl mx-auto px-4 relative z-10">
    <!-- Breadcrumb -->
    <div class="mb-6">
      <a href="/test-series" class="text-sm font-bold text-emerald-700 hover:text-emerald-800 transition flex items-center gap-1">
        ← All Test Series
      </a>
    </div>

    <!-- Hero Title Card -->
    <div class="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-3xl p-8 md:p-12 shadow-xl mb-10 relative overflow-hidden border border-emerald-800">
      <div class="absolute -right-10 -bottom-10 w-64 h-64 opacity-5 pointer-events-none text-white">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="16" y1="13" x2="8" y2="13"/>
          <line x1="16" y1="17" x2="8" y2="17"/>
        </svg>
      </div>

      <span class="bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
        Mains Batch 2025-26
      </span>
      <h1 class="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight uppercase">ASTRA Mains Test Series</h1>
      <p class="text-lg md:text-xl text-emerald-100/90 font-medium max-w-3xl mb-6 leading-relaxed">
        With Personal Mentorship | Starts 1st July | For the serious aspirant aiming for top 100 ranks.
      </p>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-white/10">
          🕒 1st July – 1st Feb
        </span>
        <span class="bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-white/10">
          📝 26 UPSC-Level Tests
        </span>
        <span class="bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-white/10">
          🎓 Expert evaluation
        </span>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left Column: Details & Accordions -->
      <div class="lg:col-span-8 space-y-6">
        
        <!-- Objective Section -->
        <div class="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h2 class="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight">🎯 Objective</h2>
          <p class="text-gray-700 text-sm leading-relaxed mb-6">
            To equip UPSC aspirants with mastery in answer writing, conceptual clarity, and paper-wise time management through high-quality GS and Essay tests under personalized mentor guidance.
          </p>

          <h2 class="text-xl font-bold text-gray-900 mb-4 uppercase tracking-tight">📚 What You Get</h2>
          <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 pl-1">
            <li class="flex gap-2">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm">26 UPSC-Level Tests (GS + Essay)</span>
            </li>
            <li class="flex gap-2">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm">Mentor-Based Answer Evaluation</span>
            </li>
            <li class="flex gap-2">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm">Model Answers + Detailed Feedback</span>
            </li>
            <li class="flex gap-2">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm">Strategy Sessions & Monthly Reviews</span>
            </li>
            <li class="flex gap-2 sm:col-span-2">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm">Access to Alpine IAS Telegram Doubt Group</span>
            </li>
          </ul>
        </div>

        <!-- Interactive Accordions -->
        <div class="space-y-4">
          <!-- Accordion 1: Test Schedule -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showSchedule = !showSchedule}
            >
              <span class="text-lg font-bold text-gray-900 flex flex-col">
                <span>📋 Test Schedule (1st July – 1st Feb)</span>
                <span class="text-xs text-gray-400 font-semibold mt-0.5 font-sans">Includes GS Papers I–IV and Essay Paper</span>
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showSchedule ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            {#if showSchedule}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <div class="overflow-x-auto rounded-xl border border-gray-150 shadow-inner mt-2">
                  <table class="min-w-full border-collapse bg-white text-left text-xs text-gray-500">
                    <thead class="bg-gray-50 text-gray-900 font-bold">
                      <tr>
                        <th class="px-4 py-3">Month</th>
                        <th class="px-4 py-3">Test No.</th>
                        <th class="px-4 py-3">Subject / Paper</th>
                        <th class="px-4 py-3">Date</th>
                        <th class="px-4 py-3">Type</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
                      <!-- July -->
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-semibold text-emerald-800 bg-emerald-50/20" rowspan="4">July</td>
                        <td class="px-4 py-3 font-bold text-gray-700">Test 1</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 1 – Ancient & Medieval History</td>
                        <td class="px-4 py-3 font-medium text-gray-700">1st July</td>
                        <td class="px-4 py-3"><span class="bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded text-[10px] font-bold border border-yellow-100">Sectional</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 2</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 1 – Modern History</td>
                        <td class="px-4 py-3 font-medium text-gray-700">10th July</td>
                        <td class="px-4 py-3"><span class="bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded text-[10px] font-bold border border-yellow-100">Sectional</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 3</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 1 – Art & Culture + World History</td>
                        <td class="px-4 py-3 font-medium text-gray-700">20th July</td>
                        <td class="px-4 py-3"><span class="bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded text-[10px] font-bold border border-yellow-100">Sectional</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 4</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 1 – Society + Geography</td>
                        <td class="px-4 py-3 font-medium text-gray-700">30th July</td>
                        <td class="px-4 py-3"><span class="bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded text-[10px] font-bold border border-yellow-100">Sectional</span></td>
                      </tr>
                      
                      <!-- August -->
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-semibold text-emerald-800 bg-emerald-50/20" rowspan="4">August</td>
                        <td class="px-4 py-3 font-bold text-gray-700">Test 5</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 2 – Polity (Parliament, Constitution)</td>
                        <td class="px-4 py-3 font-medium text-gray-700">8th Aug</td>
                        <td class="px-4 py-3"><span class="bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded text-[10px] font-bold border border-yellow-100">Sectional</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 6</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 2 – Governance + Social Justice</td>
                        <td class="px-4 py-3 font-medium text-gray-700">18th Aug</td>
                        <td class="px-4 py-3"><span class="bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded text-[10px] font-bold border border-yellow-100">Sectional</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 7</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 2 – International Relations + CA</td>
                        <td class="px-4 py-3 font-medium text-gray-700">28th Aug</td>
                        <td class="px-4 py-3"><span class="bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded text-[10px] font-bold border border-yellow-100">Sectional</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 8</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 3 – Economy (Static + Current)</td>
                        <td class="px-4 py-3 font-medium text-gray-700">7th Sept</td>
                        <td class="px-4 py-3"><span class="bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded text-[10px] font-bold border border-yellow-100">Sectional</span></td>
                      </tr>

                      <!-- September -->
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-semibold text-emerald-800 bg-emerald-50/20" rowspan="2">September</td>
                        <td class="px-4 py-3 font-bold text-gray-700">Test 9</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 3 – Agriculture, Food Security</td>
                        <td class="px-4 py-3 font-medium text-gray-700">17th Sept</td>
                        <td class="px-4 py-3"><span class="bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded text-[10px] font-bold border border-yellow-100">Sectional</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 10</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 3 – Environment + Disaster Mgmt</td>
                        <td class="px-4 py-3 font-medium text-gray-700">27th Sept</td>
                        <td class="px-4 py-3"><span class="bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded text-[10px] font-bold border border-yellow-100">Sectional</span></td>
                      </tr>

                      <!-- October -->
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-semibold text-emerald-800 bg-emerald-50/20" rowspan="6">October</td>
                        <td class="px-4 py-3 font-bold text-gray-700">Test 11</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 3 – Science & Tech + Security</td>
                        <td class="px-4 py-3 font-medium text-gray-700">6th Oct</td>
                        <td class="px-4 py-3"><span class="bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded text-[10px] font-bold border border-yellow-100">Sectional</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 12</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 4 – Ethics Theory + Thinkers</td>
                        <td class="px-4 py-3 font-medium text-gray-700">16th Oct</td>
                        <td class="px-4 py-3"><span class="bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded text-[10px] font-bold border border-yellow-100">Sectional</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 13</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 4 – Case Studies</td>
                        <td class="px-4 py-3 font-medium text-gray-700">26th Oct</td>
                        <td class="px-4 py-3"><span class="bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded text-[10px] font-bold border border-yellow-100">Sectional</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 14</td>
                        <td class="px-4 py-3 text-gray-650">Essay Paper – Theme-based (Society/Polity)</td>
                        <td class="px-4 py-3 font-medium text-gray-700">5th Nov</td>
                        <td class="px-4 py-3"><span class="bg-purple-55 text-purple-700 px-2 py-0.5 rounded text-[10px] font-bold border border-purple-100">Thematic Essay</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 15</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 1 – Full-Length</td>
                        <td class="px-4 py-3 font-medium text-gray-700">15th Nov</td>
                        <td class="px-4 py-3"><span class="bg-green-50 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold border border-green-100">Full-Length</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 16</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 2 – Full-Length</td>
                        <td class="px-4 py-3 font-medium text-gray-700">20th Nov</td>
                        <td class="px-4 py-3"><span class="bg-green-50 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold border border-green-100">Full-Length</span></td>
                      </tr>
                      
                      <!-- November -->
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-semibold text-emerald-800 bg-emerald-50/20" rowspan="3">November</td>
                        <td class="px-4 py-3 font-bold text-gray-700">Test 17</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 3 – Full-Length</td>
                        <td class="px-4 py-3 font-medium text-gray-700">25th Nov</td>
                        <td class="px-4 py-3"><span class="bg-green-50 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold border border-green-100">Full-Length</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 18</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 4 – Full-Length</td>
                        <td class="px-4 py-3 font-medium text-gray-700">30th Nov</td>
                        <td class="px-4 py-3"><span class="bg-green-50 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold border border-green-100">Full-Length</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 19</td>
                        <td class="px-4 py-3 text-gray-650">Essay Paper – Abstract & Philosophical</td>
                        <td class="px-4 py-3 font-medium text-gray-700">5th Dec</td>
                        <td class="px-4 py-3"><span class="bg-purple-55 text-purple-700 px-2 py-0.5 rounded text-[10px] font-bold border border-purple-100">Essay Paper</span></td>
                      </tr>

                      <!-- December -->
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-semibold text-emerald-800 bg-emerald-50/20" rowspan="6">December</td>
                        <td class="px-4 py-3 font-bold text-gray-700">Test 20</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 1 – Full-Length (Advanced)</td>
                        <td class="px-4 py-3 font-medium text-gray-700">15th Dec</td>
                        <td class="px-4 py-3"><span class="bg-green-50 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold border border-green-100">Full-Length</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 21</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 2 – Full-Length (Advanced)</td>
                        <td class="px-4 py-3 font-medium text-gray-700">20th Dec</td>
                        <td class="px-4 py-3"><span class="bg-green-50 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold border border-green-100">Full-Length</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 22</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 3 – Full-Length (Advanced)</td>
                        <td class="px-4 py-3 font-medium text-gray-700">25th Dec</td>
                        <td class="px-4 py-3"><span class="bg-green-50 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold border border-green-100">Full-Length</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 23</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 4 – Full-Length (Advanced)</td>
                        <td class="px-4 py-3 font-medium text-gray-700">30th Dec</td>
                        <td class="px-4 py-3"><span class="bg-green-50 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold border border-green-100">Full-Length</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 24</td>
                        <td class="px-4 py-3 text-gray-650">Essay Paper – Final Simulation</td>
                        <td class="px-4 py-3 font-medium text-gray-700">5th Jan</td>
                        <td class="px-4 py-3"><span class="bg-purple-55 text-purple-700 px-2 py-0.5 rounded text-[10px] font-bold border border-purple-100">Full-Length Essay</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 25</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 1 – Final Simulation</td>
                        <td class="px-4 py-3 font-medium text-gray-700">10th Jan</td>
                        <td class="px-4 py-3"><span class="bg-green-50 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold border border-green-100">Full-Length</span></td>
                      </tr>

                      <!-- January -->
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-semibold text-emerald-800 bg-emerald-50/20" rowspan="3">January</td>
                        <td class="px-4 py-3 font-bold text-gray-700">Test 26</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 2 – Final Simulation</td>
                        <td class="px-4 py-3 font-medium text-gray-700">15th Jan</td>
                        <td class="px-4 py-3"><span class="bg-green-50 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold border border-green-100">Full-Length</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 27</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 3 – Final Simulation</td>
                        <td class="px-4 py-3 font-medium text-gray-700">20th Jan</td>
                        <td class="px-4 py-3"><span class="bg-green-50 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold border border-green-100">Full-Length</span></td>
                      </tr>
                      <tr class="hover:bg-gray-50/30">
                        <td class="px-4 py-3 font-bold text-gray-700">Test 28</td>
                        <td class="px-4 py-3 text-gray-650">GS Paper 4 – Final Simulation</td>
                        <td class="px-4 py-3 font-medium text-gray-700">25th Jan</td>
                        <td class="px-4 py-3"><span class="bg-green-50 text-green-700 px-2 py-0.5 rounded text-[10px] font-bold border border-green-100">Full-Length</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            {/if}
          </div>

          <!-- Accordion 2: Mentorship Role -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showMentorship = !showMentorship}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                🤝 Mentorship Support System
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showMentorship ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {#if showMentorship}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <h4 class="font-bold text-emerald-800 text-sm uppercase tracking-wide mb-3">🎓 Mentor's Role</h4>
                <ul class="space-y-2 pl-2">
                  <li class="text-gray-700 text-sm">• Personal Answer Copy Evaluation by UPSC experts who understand Mains keywords.</li>
                  <li class="text-gray-700 text-sm">• Detailed margins comments and marks breakdown on every answer.</li>
                  <li class="text-gray-750 text-sm">• Custom improvement path and model booklets shared after each test.</li>
                  <li class="text-gray-750 text-sm">• Monthly 1-on-1 strategy sessions to track marks growth and correct layout errors.</li>
                  <li class="text-gray-750 text-sm">• Active Telegram-based doubt group & peer writing reviews.</li>
                </ul>
              </div>
            {/if}
          </div>

          <!-- Accordion 3: Why Choose ASTRA -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showFeatures = !showFeatures}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                💡 Why Choose ASTRA Test Series?
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showFeatures ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {#if showFeatures}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div class="bg-white p-4 rounded-xl border border-gray-150">
                    <h5 class="font-bold text-gray-800 text-sm mb-1">🎯 UPSC-Simulated Testing</h5>
                    <p class="text-gray-500 text-xs">Develop precision, speed, and time structure under exam pressure.</p>
                  </div>
                  <div class="bg-white p-4 rounded-xl border border-gray-150">
                    <h5 class="font-bold text-gray-800 text-sm mb-1">👨‍🏫 Mentor-Led Evaluation</h5>
                    <p class="text-gray-500 text-xs">Go beyond scores—get clear structural direction for answers.</p>
                  </div>
                  <div class="bg-white p-4 rounded-xl border border-gray-150">
                    <h5 class="font-bold text-gray-800 text-sm mb-1">📅 Consistent & Predictable Plan</h5>
                    <p class="text-gray-500 text-xs">Schedule your entire Mains preparation syllabus weeks in advance.</p>
                  </div>
                  <div class="bg-white p-4 rounded-xl border border-gray-150">
                    <h5 class="font-bold text-gray-800 text-sm mb-1">✍️ Integrated Essay Practice</h5>
                    <p class="text-gray-500 text-xs">Practice structured essay writing on high-yield thematic topics.</p>
                  </div>
                  <div class="bg-white p-4 rounded-xl border border-gray-150 md:col-span-2">
                    <h5 class="font-bold text-gray-800 text-sm mb-1">📊 Performance Analytics</h5>
                    <p class="text-gray-500 text-xs">Get detailed monthly report cards to identify recurring weaknesses.</p>
                  </div>
                </div>
              </div>
            {/if}
          </div>
        </div>
      </div>

      <!-- Right Column: Quick Info Card & CTAs -->
      <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-6">
        <!-- Quick Stats Card -->
        <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
          <h3 class="text-lg font-extrabold text-gray-900 mb-4 uppercase tracking-wider">Series Details</h3>
          
          <div class="space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-gray-50">
              <span class="text-gray-500 text-sm">Mode</span>
              <span class="font-bold text-emerald-800 text-sm">Classroom Batch</span>
            </div>
            <div class="flex items-center justify-between pb-3 border-b border-gray-50">
              <span class="text-gray-500 text-sm">Starts</span>
              <span class="font-bold text-emerald-800 text-sm">1st July</span>
            </div>
            <div class="flex items-center justify-between pb-3 border-b border-gray-50">
              <span class="text-gray-500 text-sm">Tests Count</span>
              <span class="font-bold text-emerald-800 text-sm">26 Tests (GS + Essay)</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-500 text-sm">Target Year</span>
              <span class="font-bold text-emerald-800 text-sm">UPSC CSE 2025-26</span>
            </div>
          </div>

          <div class="mt-8 space-y-3">
            <a 
              href="https://api.whatsapp.com/send?phone=919749033332&text=Hi,%20enquiry%20from%20AlpineIAS%20website%20for%20ASTRA%20Mains%20Test%20Series" 
              class="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3 px-4 text-center font-bold transition duration-300 block shadow-md shadow-emerald-600/10"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apply via WhatsApp
            </a>
            <a 
              href="/contact-us" 
              class="w-full bg-white hover:bg-gray-50 text-gray-800 border border-gray-200 rounded-xl py-3 px-4 text-center font-bold transition duration-300 block"
            >
              Contact Us Now
            </a>
          </div>
        </div>

        <!-- Mentorship Promo Card -->
        <div class="bg-gradient-to-br from-emerald-50 to-teal-50/50 p-6 rounded-2xl border border-emerald-100/50 relative">
          <h4 class="font-extrabold text-emerald-900 text-sm uppercase tracking-wider mb-2">Simulated Practice</h4>
          <p class="text-gray-600 text-xs leading-relaxed">
            Writing test papers is crucial for the UPSC Mains stage. Astra provides simulated test setups, and your answer sheets are evaluated by mentors who sat for the civil services interviews.
          </p>
        </div>
      </div>
    </div>
  </main>
</div>