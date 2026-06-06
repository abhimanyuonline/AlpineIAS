<script>
  import { slide } from 'svelte/transition';
  let showDetails = $state(false);
  let showFeatures = $state(false);
  let showMentorshipTools = $state(false);
  let showSelectionProcess = $state(false);
  let showFeeDetails = $state(false);
</script>

<svelte:head>
  <title>Hits The Bull's Eye Batch – Alpine IAS</title>
  <meta name="description" content="ALPINE IAS's elite 1-on-1 mentorship UPSC batch. High-intensity preparation with daily answer reviews and personal progress audits." />
</svelte:head>

<div class="bg-gray-50 min-h-screen pt-8 pb-16 relative overflow-hidden">
  <!-- Decorative Ambient Blobs -->
  <div class="absolute top-[10%] left-[-5%] w-[35vw] h-[35vw] bg-emerald-200/10 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute top-[40%] right-[-5%] w-[40vw] h-[40vw] bg-teal-200/10 rounded-full blur-3xl pointer-events-none"></div>

  <main class="max-w-6xl mx-auto px-4 relative z-10">
    <!-- Breadcrumb -->
    <div class="mb-6">
      <a href="/all-courses" class="text-sm font-bold text-emerald-700 hover:text-emerald-800 transition flex items-center gap-1">
        ← All Courses
      </a>
    </div>

    <!-- Hero Title Card -->
    <div class="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-3xl p-8 md:p-12 shadow-xl mb-10 relative overflow-hidden border border-emerald-800">
      <div class="absolute -right-10 -bottom-10 w-64 h-64 opacity-5 pointer-events-none text-white">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
          <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/>
        </svg>
      </div>

      <span class="bg-emerald-500/25 border border-emerald-500/40 text-emerald-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
        Elite Mentorship Batch
      </span>
      <h1 class="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight uppercase">HITS THE BULL’S EYE BATCH</h1>
      <p class="text-lg md:text-xl text-emerald-100/90 font-medium max-w-3xl mb-6 leading-relaxed">
        One-to-One Mentorship | Strategic Preparation | Guaranteed Precision.
      </p>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-white/10">
          🕒 10 to 12 Months
        </span>
        <span class="bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-white/10">
          📍 Offline / Online / Hybrid
        </span>
        <span class="bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-white/10">
          🎯 Intake: 15-20 Students
        </span>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left Column: Details & Accordions -->
      <div class="lg:col-span-8 space-y-6">
        
        <!-- Description & Philosophy -->
        <div class="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
          <span class="text-xs font-extrabold text-emerald-600 uppercase tracking-widest block mb-1">Target Audience</span>
          <p class="font-bold text-lg text-emerald-950 mb-4 pb-3 border-b border-gray-50 uppercase tracking-tight">
            Only for Serious UPSC Aspirants | Limited Intake | Result-Oriented Approach
          </p>
          
          <h2 class="text-xl font-bold text-gray-900 mb-2 uppercase tracking-tight">What Is the ‘Hits the Bull’s Eye’ Batch?</h2>
          <p class="text-gray-700 text-sm leading-relaxed mb-4">
            This is ALPINE IAS’s most premium and selective UPSC preparation program, built around personalized one-on-one mentorship, laser-sharp planning, and complete syllabus execution under expert supervision.
          </p>
          <p class="text-gray-700 text-sm leading-relaxed">
            This batch is not for everyone—it’s for those who want to break the cycle of uncertainty, avoid time wastage, and get direct, accountable guidance every step of the way.
          </p>
        </div>

        <!-- Interactive Accordions -->
        <div class="space-y-4">
          <!-- Accordion 1: Highlights -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showDetails = !showDetails}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                📋 Key Highlights
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showDetails ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            {#if showDetails}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <ul class="space-y-3 pl-2">
                  <li class="text-gray-700 text-sm">
                    <strong>• One-to-One Personal Mentorship:</strong> Dedicated mentor (4+ UPSC interviews), weekly audits, emotional guidance.
                  </li>
                  <li class="text-gray-700 text-sm">
                    <strong>• Customized Study Plan:</strong> Tailored specifically to your academic background, strengths, and weaknesses with daily progress tracking.
                  </li>
                  <li class="text-gray-700 text-sm">
                    <strong>• Daily Answer Writing + Review:</strong> Fast-turnaround personalized feedback on answers, plus essay writing guidance every fortnight.
                  </li>
                  <li class="text-gray-700 text-sm">
                    <strong>• Integrated Syllabus Coverage:</strong> Full preparation loop covering GS Papers I-IV, CSAT, Essay, Ethics, and Current Affairs.
                  </li>
                  <li class="text-gray-700 text-sm">
                    <strong>• Limited Cohort Size:</strong> strictly capped at 15–20 students per batch to ensure maximum academic focus.
                  </li>
                </ul>
              </div>
            {/if}
          </div>

          <!-- Accordion 2: Features Table -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showFeatures = !showFeatures}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                📊 Features at a Glance
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
                <div class="overflow-x-auto rounded-xl border border-gray-100 shadow-sm mt-2">
                  <table class="w-full border-collapse bg-white text-left text-sm text-gray-500">
                    <thead class="bg-gray-50 text-gray-900">
                      <tr>
                        <th scope="col" class="px-6 py-4 font-bold">Feature Details</th>
                        <th scope="col" class="px-6 py-4 font-bold text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-100 border-t border-gray-100">
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
                        'Stress Management & Strategy Calls'
                      ] as feature}
                        <tr class="hover:bg-gray-50/30">
                          <td class="px-6 py-3.5 font-medium text-gray-700">{feature}</td>
                          <td class="px-6 py-3.5 text-center">
                            <span class="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                              ✓ Included
                            </span>
                          </td>
                        </tr>
                      {/each}
                    </tbody>
                  </table>
                </div>
              </div>
            {/if}
          </div>

          <!-- Accordion 3: Tools -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showMentorshipTools = !showMentorshipTools}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                ⚙️ Mentorship Tools
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showMentorshipTools ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {#if showMentorshipTools}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <ul class="space-y-2 pl-2">
                  <li class="text-gray-700 text-sm">• Custom Student Dashboard access for progress tracking and detailed reviews</li>
                  <li class="text-gray-700 text-sm">• Dedicated Telegram channel for academic query resolution and doubt solving</li>
                  <li class="text-gray-700 text-sm">• Fortnightly Interactive Zoom mentorship review calls</li>
                  <li class="text-gray-700 text-sm">• Dynamic study planner with alerts to maintain consistency and flag missed deadlines</li>
                </ul>
              </div>
            {/if}
          </div>

          <!-- Accordion 4: Selection Process -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showSelectionProcess = !showSelectionProcess}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                🎯 Selection Process
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showSelectionProcess ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {#if showSelectionProcess}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <ol class="space-y-3 pl-2">
                  <li class="text-gray-700 text-sm"><strong>1. Application Form:</strong> Complete the Mentorship Application profile.</li>
                  <li class="text-gray-700 text-sm"><strong>2. Telephonic Interaction:</strong> General strategy and profile review call with our faculty.</li>
                  <li class="text-gray-700 text-sm"><strong>3. Diagnostic Evaluation:</strong> Solve a mini diagnostic assessment (covering both Prelims & Mains segments).</li>
                  <li class="text-gray-700 text-sm"><strong>4. Final Review:</strong> Final selection confirmation and batch enrollment.</li>
                </ol>
              </div>
            {/if}
          </div>

          <!-- Accordion 5: Fees -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showFeeDetails = !showFeeDetails}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                💰 Fee Details
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showFeeDetails ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {#if showFeeDetails}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <ul class="space-y-2 pl-2">
                  <li class="text-gray-700 text-sm">• <strong>Premium Batch Fee:</strong> Contact admin for pricing details</li>
                  <li class="text-gray-700 text-sm">• Includes: Full GS + Prelims + Mains + CSAT + 1-on-1 Mentorship + Test Series</li>
                  <li class="text-gray-700 text-sm">• Scholarships available for merit-based candidates</li>
                </ul>
              </div>
            {/if}
          </div>
        </div>

        <!-- Philosophy Highlight Panel -->
        <div class="bg-gradient-to-br from-emerald-900 to-teal-950 text-white p-8 rounded-2xl shadow-sm border border-emerald-800 space-y-4">
          <p class="italic font-bold text-emerald-200 text-lg">
            “Generic plans don’t crack UPSC. Personalized strategy does.”
          </p>
          <p class="text-emerald-100/90 text-sm leading-relaxed">
            This batch is where strategy meets execution, where feedback meets improvement, and where mentorship becomes transformation. If you want to stop “studying everything” and start “studying what matters most,” this is your moment.
          </p>
          <p class="font-black text-white text-base tracking-wide uppercase pt-2">
            Hit the Bull’s Eye. Don’t Miss Your Chance.
          </p>
          <p class="text-xs text-emerald-200 font-semibold">
            *Seats are strictly limited. Selection criteria applies.
          </p>
        </div>
      </div>

      <!-- Right Column: Quick Info Card & CTAs -->
      <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-6">
        <!-- Quick Stats Card -->
        <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
          <h3 class="text-lg font-extrabold text-gray-900 mb-4 uppercase tracking-wider">Batch Details</h3>
          
          <div class="space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-gray-50">
              <span class="text-gray-500 text-sm">Mode</span>
              <span class="font-bold text-emerald-800 text-sm">Offline / Online / Hybrid</span>
            </div>
            <div class="flex items-center justify-between pb-3 border-b border-gray-50">
              <span class="text-gray-500 text-sm">Duration</span>
              <span class="font-bold text-emerald-800 text-sm">10 to 12 Months</span>
            </div>
            <div class="flex items-center justify-between pb-3 border-b border-gray-50">
              <span class="text-gray-500 text-sm">Cohort Intake</span>
              <span class="font-bold text-emerald-800 text-sm">15-20 Students Only</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-500 text-sm">Mentorship</span>
              <span class="font-bold text-emerald-800 text-sm">1-on-1 Personalized</span>
            </div>
          </div>

          <div class="mt-8 space-y-3">
            <a 
              href="https://api.whatsapp.com/send?phone=919749033332&text=Hi,%20enquiry%20from%20AlpineIAS%20website%20for%20Hit%20the%20bulls%eye%20batch" 
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
          <h4 class="font-extrabold text-emerald-900 text-sm uppercase tracking-wider mb-2">Academic Audit</h4>
          <p class="text-gray-600 text-xs leading-relaxed">
            In standard batches, a student's answer sheets are reviewed by generic examiners. At Hits The Bull's Eye, your papers are audited directly by mentors who have sat for the civil services interviews multiple times.
          </p>
        </div>
      </div>
    </div>
  </main>
</div>
