<script>
  import { slide } from 'svelte/transition';
  let showStructure = $state(false);
  let showSubjects = $state(false);
  let showFeatures = $state(false);
  let showSupport = $state(false);
  let showSpecial = $state(false);
</script>

<svelte:head>
  <title>UPSC Ignite 1-Year Foundation – Alpine IAS</title>
  <meta name="description" content="Integrated preparation for UPSC Prelims, Mains and Interview at Dehradun's premier coaching." />
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
        Ignite Batch 2026
      </span>
      <h1 class="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight uppercase">UPSC IGNITE BATCH 1-Year Foundation</h1>
      <p class="text-lg md:text-xl text-emerald-100/90 font-medium max-w-3xl mb-6 leading-relaxed">
        For UPSC 2026 Aspirants | Integrated Prep for Prelims, Mains & Interview.
      </p>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-white/10">
          🕒 1 Year (12 Months)
        </span>
        <span class="bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-white/10">
          📍 Offline / Online / Hybrid
        </span>
        <span class="bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-white/10">
          🎓 Personal Mentorship
        </span>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left Column: Details & Accordions -->
      <div class="lg:col-span-8 space-y-6">
        
        <!-- Description & Why Choose Section -->
        <div class="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
          <p class="font-bold text-lg text-emerald-900 mb-6 border-b border-gray-50 pb-4">
            Comprehensive GS Preparation | Personal Mentorship | Answer Writing Focus
          </p>
          
          <h2 class="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2 uppercase tracking-tight">
            <span class="w-1.5 h-6 bg-emerald-600 rounded-full inline-block"></span>
            Why Choose ALPINE IAS?
          </h2>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <li class="flex gap-3">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm font-medium">Top Faculty from IITs, NITs & DU</span>
            </li>
            <li class="flex gap-3">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm font-medium">UPSC Interview Appeared Mentors</span>
            </li>
            <li class="flex gap-3">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm font-medium">One-to-One Personal Mentorship</span>
            </li>
            <li class="flex gap-3">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm font-medium">GS + CSAT + Essay + Current Affairs</span>
            </li>
            <li class="flex gap-3 md:col-span-2">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm font-medium">Answer Writing & Test Series Included</span>
            </li>
          </ul>
        </div>

        <!-- Interactive Accordions -->
        <div class="space-y-4">
          <!-- Accordion 1: Structure -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showStructure = !showStructure}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                📋 Course Structure & Phases
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showStructure ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            
            {#if showStructure}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20 space-y-4">
                <div>
                  <h4 class="font-bold text-emerald-800 text-sm uppercase tracking-wide mb-2">Phase 1: Foundation Building (Month 1–6)</h4>
                  <ul class="space-y-2 pl-4 border-l-2 border-emerald-100">
                    <li class="text-gray-700 text-sm">• History (Ancient, Medieval, Modern, World)</li>
                    <li class="text-gray-700 text-sm">• Geography (Physical, Indian, Human)</li>
                    <li class="text-gray-700 text-sm">• Polity & Constitution</li>
                    <li class="text-gray-700 text-sm">• Indian Economy (Basic to Advanced)</li>
                    <li class="text-gray-700 text-sm">• Environment & Ecology</li>
                    <li class="text-gray-700 text-sm">• Art & Culture</li>
                    <li class="text-gray-700 text-sm">• Weekly current affairs classes and daily notes</li>
                    <li class="text-gray-700 text-sm">• Chapter-wise MCQ solving & Weekly Mini Tests</li>
                  </ul>
                </div>
                <div class="pt-2">
                  <h4 class="font-bold text-emerald-800 text-sm uppercase tracking-wide mb-2">Phase 2: Integration & Application (Month 6–12)</h4>
                  <ul class="space-y-2 pl-4 border-l-2 border-emerald-100">
                    <li class="text-gray-700 text-sm">• Ethics, Integrity & Aptitude</li>
                    <li class="text-gray-700 text-sm">• Internal Security, Disaster Management</li>
                    <li class="text-gray-700 text-sm">• International Relations</li>
                    <li class="text-gray-700 text-sm">• Science & Tech (Static + Current)</li>
                    <li class="text-gray-700 text-sm">• Essay Writing (Topic-wise Guidance)</li>
                    <li class="text-gray-700 text-sm">• Daily Answer Writing Practice & Monthly Mentor Review</li>
                  </ul>
                </div>
              </div>
            {/if}
          </div>

          <!-- Accordion 2: Subjects -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showSubjects = !showSubjects}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                📚 Subjects Covered
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showSubjects ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {#if showSubjects}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2">
                  <li class="text-gray-700 text-sm">• History, Geography, Polity, Economy</li>
                  <li class="text-gray-700 text-sm">• Environment, Science & Tech, Art & Culture</li>
                  <li class="text-gray-700 text-sm">• Ethics, IR, Governance, Security</li>
                  <li class="text-gray-700 text-sm">• Essay & CSAT (Maths, Reasoning, Comprehension)</li>
                </ul>
              </div>
            {/if}
          </div>

          <!-- Accordion 3: Key Features -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showFeatures = !showFeatures}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                ✨ Key Features
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
                <ul class="space-y-2 pl-2">
                  <li class="text-gray-700 text-sm">• Daily 1-to-1 Mentorship & Doubt Solving</li>
                  <li class="text-gray-700 text-sm">• Live + Recorded Lectures</li>
                  <li class="text-gray-700 text-sm">• Weekly MCQ & Monthly Sectional Tests</li>
                  <li class="text-gray-700 text-sm">• Newspaper + PIB Analysis</li>
                  <li class="text-gray-700 text-sm">• GS + Essay Answer Writing Practice</li>
                  <li class="text-gray-700 text-sm">• Performance Reviews & Discipline Tracking</li>
                </ul>
              </div>
            {/if}
          </div>

          <!-- Accordion 4: Mentorship & Support -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showSupport = !showSupport}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                🤝 Mentorship & Current Affairs Support
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showSupport ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {#if showSupport}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <ul class="space-y-2 pl-2">
                  <li class="text-gray-700 text-sm">• Daily News PDF + Weekly/Monthly Compilations</li>
                  <li class="text-gray-700 text-sm">• e-Newspaper Highlights</li>
                  <li class="text-gray-700 text-sm">• Telegram Channel for Notes</li>
                  <li class="text-gray-700 text-sm">• Personal Mentor for Regular Feedback</li>
                  <li class="text-gray-700 text-sm">• Interview Orientation Sessions (Basic)</li>
                </ul>
              </div>
            {/if}
          </div>

          <!-- Accordion 5: Special Features -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showSpecial = !showSpecial}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                🎁 Special Benefits
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showSpecial ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {#if showSpecial}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <ul class="space-y-2 pl-2">
                  <li class="text-gray-700 text-sm">• Revision Classes from March 2026</li>
                  <li class="text-gray-700 text-sm">• 10% Fee Refund on Prelims Qualification</li>
                  <li class="text-gray-700 text-sm">• Free Continuation Till 2027 for Old Students</li>
                  <li class="text-gray-700 text-sm">• Printed + PDF Notes with PYQ Booklets</li>
                </ul>
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
          <h3 class="text-lg font-extrabold text-gray-900 mb-4 uppercase tracking-wider">Batch Details</h3>
          
          <div class="space-y-4">
            <div class="flex items-center justify-between pb-3 border-b border-gray-50">
              <span class="text-gray-500 text-sm">Mode</span>
              <span class="font-bold text-emerald-800 text-sm">Offline / Online / Hybrid</span>
            </div>
            <div class="flex items-center justify-between pb-3 border-b border-gray-50">
              <span class="text-gray-500 text-sm">Duration</span>
              <span class="font-bold text-emerald-800 text-sm">1 Year (12 Months)</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-500 text-sm">Target Year</span>
              <span class="font-bold text-emerald-800 text-sm">UPSC CSE 2026</span>
            </div>
          </div>

          <div class="mt-8 space-y-3">
            <a 
              href="https://api.whatsapp.com/send?phone=919749033332&text=Hi,%20enquiry%20from%20AlpineIAS%20website%20for%20course%20one%20year" 
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
          <h4 class="font-extrabold text-emerald-900 text-sm uppercase tracking-wider mb-2">1:1 Mentorship Included</h4>
          <p class="text-gray-600 text-xs leading-relaxed">
            Get assigned a personal mentor who has cleared the UPSC Interview stage. Receive regular audits, stress management, and strategy sessions customized to your strengths and weaknesses.
          </p>
        </div>
      </div>
    </div>
  </main>
</div>