<script>
  import { slide } from 'svelte/transition';
  let showKeyFeatures = $state(false);
  let showWhyFodo = $state(false);
  let showFeeDetails = $state(false);
</script>

<svelte:head>
  <title>UPSC FODO Batch – Alpine IAS</title>
  <meta name="description" content="Fall Down, Rise Once More. Dedicated resilience batch for UPSC repeaters and second-attempt candidates in Dehradun." />
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

      <span class="bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">
        Repeaters Batch
      </span>
      <h1 class="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight uppercase">FODO Batch – ALPINE IAS</h1>
      <p class="text-lg md:text-xl text-emerald-100/90 font-medium max-w-3xl mb-6 leading-relaxed">
        Fall Down, Rise Once More | Resilience-Driven UPSC Comeback.
      </p>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-white/10">
          🕒 6 to 8 Months
        </span>
        <span class="bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-white/10">
          📍 Offline & Online
        </span>
        <span class="bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-white/10">
          🎓 Rebuilding Strategy
        </span>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left Column: Details & Accordions -->
      <div class="lg:col-span-8 space-y-6">
        
        <!-- Objective Section -->
        <div class="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
          <span class="text-xs font-extrabold text-amber-600 uppercase tracking-widest block mb-1">Target Audience</span>
          <p class="font-bold text-lg text-emerald-950 mb-4 pb-3 border-b border-gray-50">
            UPSC aspirants with previous attempts
          </p>
          
          <h2 class="text-xl font-bold text-gray-900 mb-2 uppercase tracking-tight">Objective</h2>
          <p class="text-gray-700 text-sm leading-relaxed mb-6">
            To convert failed attempts into a strong comeback by deeply analyzing individual weaknesses and providing personalized mentorship, strategic content refinement, answer-writing mastery, and consistent performance tracking.
          </p>

          <div class="bg-amber-50/50 border border-amber-100/50 p-4 rounded-xl">
            <span class="text-xs font-bold text-amber-800 uppercase tracking-wide block mb-1">Batch Philosophy</span>
            <p class="italic text-gray-800 font-medium text-sm">
              “You don’t need to study everything again. You need to study the right thing the right way.”
            </p>
          </div>
        </div>

        <!-- Interactive Accordions -->
        <div class="space-y-4">
          <!-- Accordion 1: Key Features -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showKeyFeatures = !showKeyFeatures}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                ✨ Course Key Features & Modules
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showKeyFeatures ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            {#if showKeyFeatures}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20 space-y-4">
                <div>
                  <h4 class="font-bold text-emerald-800 text-sm uppercase tracking-wide mb-1">1. Mistake Diagnosis Module (First 2 Weeks)</h4>
                  <ul class="space-y-1 pl-4 border-l-2 border-emerald-100">
                    <li class="text-gray-700 text-sm">• One-on-One academic counseling for Prelims, Mains & Interview failure types</li>
                    <li class="text-gray-700 text-sm">• SWOT Analysis & Personalized Study Plan</li>
                    <li class="text-gray-700 text-sm">• Mentor Allocation based on assessment</li>
                  </ul>
                </div>
                
                <div>
                  <h4 class="font-bold text-emerald-800 text-sm uppercase tracking-wide mb-1">2. Prelims Rebuilder (July to November)</h4>
                  <ul class="space-y-1 pl-4 border-l-2 border-emerald-100">
                    <li class="text-gray-700 text-sm">• 25 Tests (Sectional + Full-Length GS & CSAT)</li>
                    <li class="text-gray-700 text-sm">• 1:1 Error Analytics Discussion</li>
                    <li class="text-gray-700 text-sm">• Focus on Elimination, Conceptual Depth, Time Management</li>
                    <li class="text-gray-700 text-sm">• CSAT Drills for Non-Maths Background</li>
                  </ul>
                </div>

                <div>
                  <h4 class="font-bold text-emerald-800 text-sm uppercase tracking-wide mb-1">3. Mains Powerpack (August to January)</h4>
                  <ul class="space-y-1 pl-4 border-l-2 border-emerald-100">
                    <li class="text-gray-700 text-sm">• 2-Week GS Capsule Modules (GS1 to GS4)</li>
                    <li class="text-gray-700 text-sm">• 12 GS Tests + 4 Essay + 4 Optional Tests</li>
                    <li class="text-gray-700 text-sm">• Ethics Case Studies Weekly + 72-Hour Evaluation</li>
                  </ul>
                </div>

                <div>
                  <h4 class="font-bold text-emerald-800 text-sm uppercase tracking-wide mb-1">4. Essay + Answer Writing Bootcamp</h4>
                  <ul class="space-y-1 pl-4 border-l-2 border-emerald-100">
                    <li class="text-gray-700 text-sm">• Weekly Essay Practice + Brainstorming</li>
                    <li class="text-gray-700 text-sm">• Timed GS Answer Writing Daily</li>
                    <li class="text-gray-700 text-sm">• Peer + Faculty Review & Model Booklets</li>
                  </ul>
                </div>

                <div>
                  <h4 class="font-bold text-emerald-800 text-sm uppercase tracking-wide mb-1">5. 1:1 Mentorship Every 15 Days</h4>
                  <ul class="space-y-1 pl-4 border-l-2 border-emerald-100">
                    <li class="text-gray-700 text-sm">• Performance Tracking</li>
                    <li class="text-gray-700 text-sm">• Paper-wise Strategy Refinement</li>
                    <li class="text-gray-700 text-sm">• Psychological & Motivational Support</li>
                  </ul>
                </div>

                <div>
                  <h4 class="font-bold text-emerald-800 text-sm uppercase tracking-wide mb-1">6. Interview Guidance (January Onwards)</h4>
                  <ul class="space-y-1 pl-4 border-l-2 border-emerald-100">
                    <li class="text-gray-700 text-sm">• DAF Analysis & Mock Interviews</li>
                    <li class="text-gray-700 text-sm">• Feedback-Oriented Personality Development</li>
                  </ul>
                </div>
              </div>
            {/if}
          </div>

          <!-- Accordion 2: Why Alpine -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showWhyFodo = !showWhyFodo}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                🤝 Why ALPINE IAS for FODO?
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showWhyFodo ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {#if showWhyFodo}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <ul class="space-y-2 pl-2">
                  <li class="text-gray-700 text-sm">• Faculty with 4+ UPSC Interviews and IIT/DU/NIT backgrounds</li>
                  <li class="text-gray-700 text-sm">• Small Batch Size for Personalized Guidance</li>
                  <li class="text-gray-700 text-sm">• Mindset Rebuilding & Post-Failure Support</li>
                  <li class="text-gray-700 text-sm">• Integrated Static + Current Affairs Content</li>
                </ul>
              </div>
            {/if}
          </div>

          <!-- Accordion 3: Fees -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showFeeDetails = !showFeeDetails}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                💰 Fee Structure & Scholarships
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
                  <li class="text-gray-700 text-sm">• <strong>Total Fee:</strong> ₹45,000/- for 8 Months</li>
                  <li class="text-gray-700 text-sm">• Includes: Prelims + Mains + Interview Guidance</li>
                  <li class="text-gray-700 text-sm">• <strong>Scholarship:</strong> Up to 50% for candidates with at least 1 Interview attempt</li>
                </ul>
              </div>
            {/if}
          </div>
        </div>

        <!-- Philosophy Final Words Panel -->
        <div class="bg-gradient-to-br from-emerald-900 to-teal-950 text-white p-8 rounded-2xl shadow-sm border border-emerald-800 space-y-4">
          <p class="italic font-bold text-emerald-200 text-lg">
            “Failure is not the end; it’s a foundation for success—when you rebuild with strategy.”
          </p>
          <p class="text-emerald-100/90 text-sm leading-relaxed">
            The FODO Batch is your opportunity to stop repeating mistakes and start designing your breakthrough with expert-led, focused preparation. If you’ve fallen before, it’s time to rise stronger—with ALPINE IAS.
          </p>
          <p class="font-black text-white text-base tracking-wide uppercase pt-2">
            Fall Down. Rise Once More. Enroll Now.
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
              <span class="font-bold text-emerald-800 text-sm">Offline / Online Classes</span>
            </div>
            <div class="flex items-center justify-between pb-3 border-b border-gray-50">
              <span class="text-gray-500 text-sm">Duration</span>
              <span class="font-bold text-emerald-800 text-sm">6 to 8 Months (July-Feb)</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-500 text-sm">Coverage</span>
              <span class="font-bold text-emerald-800 text-sm">Pre + Mains + Interview</span>
            </div>
          </div>

          <div class="mt-8 space-y-3">
            <a 
              href="https://api.whatsapp.com/send?phone=919749033332&text=Hi,%20enquiry%20from%20AlpineIAS%20website%20for%20Fodo%20Batch" 
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
        <div class="bg-gradient-to-br from-amber-50/50 to-orange-50/30 p-6 rounded-2xl border border-amber-100/50 relative">
          <h4 class="font-extrabold text-amber-900 text-sm uppercase tracking-wider mb-2">Designed for Repeaters</h4>
          <p class="text-gray-600 text-xs leading-relaxed">
            If you have already studied the syllabus but fell short in Prelims or Mains, studying standard books again won't help. FODO focuses on diagnosis, tracking errors, and precise answer-writing alignment to design your breakthrough.
          </p>
        </div>
      </div>
    </div>
  </main>
</div>
