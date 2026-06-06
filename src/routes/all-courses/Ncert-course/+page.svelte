<script>
  import { slide } from 'svelte/transition';
  let showCoverage = $state(false);
  let showHighlights = $state(false);
  let showResources = $state(false);
  let showWho = $state(false);
</script>

<svelte:head>
  <title>NCERT Sudharshan Chakra – Alpine IAS</title>
  <meta name="description" content="Build your UPSC fundamentals with our 8-month NCERT foundation course. Designed for 12th pass outs and freshers in Dehradun." />
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
        NCERT Special Batch
      </span>
      <h1 class="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight uppercase">NCERT SUDHARSHAN CHAKRA BATCH</h1>
      <p class="text-lg md:text-xl text-emerald-100/90 font-medium max-w-3xl mb-6 leading-relaxed">
        Build Your Base, Start Your Journey Right. Ideal for school pass-outs and early freshers.
      </p>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-white/10">
          🕒 8 Months
        </span>
        <span class="bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-white/10">
          📍 Offline / Online / Hybrid
        </span>
        <span class="bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-white/10">
          🎓 Class 6-12 NCERT Mapping
        </span>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left Column: Details & Accordions -->
      <div class="lg:col-span-8 space-y-6">
        
        <!-- Why Choose NCERT Section -->
        <div class="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
          <span class="text-xs font-extrabold text-emerald-600 uppercase tracking-widest block mb-1">Target Learners</span>
          <p class="font-bold text-lg text-emerald-950 mb-6 border-b border-gray-50 pb-4">
            Ideal for Beginners – Especially 12th Pass-Outs & Early College-Goers
          </p>
          
          <h2 class="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2 uppercase tracking-tight">
            <span class="w-1.5 h-6 bg-emerald-600 rounded-full inline-block"></span>
            Why Choose ALPINE IAS NCERT Course?
          </h2>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <li class="flex gap-3">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm font-medium">Thematic & Conceptual Teaching</span>
            </li>
            <li class="flex gap-3">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm font-medium">Structured UPSC-level progression</span>
            </li>
            <li class="flex gap-3">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm font-medium">Ideal for freshers & beginners</span>
            </li>
            <li class="flex gap-3">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm font-medium">Faculty from IITs, NITs & DU</span>
            </li>
            <li class="flex gap-3">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm font-medium">Focus on concept clarity, not rush</span>
            </li>
            <li class="flex gap-3">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm font-medium">Personal Mentorship + Doubt support</span>
            </li>
            <li class="flex gap-3 md:col-span-2">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm font-medium">Smooth Transition Support into GS Foundation Batch</span>
            </li>
          </ul>
        </div>

        <!-- Interactive Accordions -->
        <div class="space-y-4">
          <!-- Accordion 1: Subjects Covered -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showCoverage = !showCoverage}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                📚 NCERT Subjects Covered
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showCoverage ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {#if showCoverage}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <ul class="grid grid-cols-1 md:grid-cols-2 gap-2 pl-2">
                  <li class="text-gray-700 text-sm">• <strong>History:</strong> Ancient, Medieval, Modern India</li>
                  <li class="text-gray-700 text-sm">• <strong>Geography:</strong> Physical, Indian, Human</li>
                  <li class="text-gray-700 text-sm">• <strong>Polity:</strong> Indian Constitution & Governance basics</li>
                  <li class="text-gray-700 text-sm">• <strong>Economy:</strong> Economic Terms & Fundamentals</li>
                  <li class="text-gray-700 text-sm">• <strong>Science:</strong> Environment, Bio, Physics, Chem (Selected)</li>
                  <li class="text-gray-700 text-sm">• <strong>Art & Culture:</strong> Class 11 Fine Arts NCERT</li>
                  <li class="text-gray-700 text-sm md:col-span-2">• <strong>Sociology & Society:</strong> Class 11 & 12 Sociology</li>
                </ul>
              </div>
            {/if}
          </div>

          <!-- Accordion 2: Highlights -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showHighlights = !showHighlights}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                ✨ Course Highlights
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showHighlights ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {#if showHighlights}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <ul class="space-y-2 pl-2">
                  <li class="text-gray-700 text-sm">• Daily 2-Hour Interactive Classes (Offline + Online)</li>
                  <li class="text-gray-700 text-sm">• Weekly Concept Quizzes to audit retention</li>
                  <li class="text-gray-700 text-sm">• Full-Length NCERT Assessment Tests</li>
                  <li class="text-gray-700 text-sm">• PDF summary notes & key conceptual handouts</li>
                  <li class="text-gray-700 text-sm">• Dedicated Telegram channel for materials</li>
                  <li class="text-gray-700 text-sm">• Weekly mentor reviews & academic progress reports</li>
                  <li class="text-gray-700 text-sm">• Complete NCERT mapping directly with UPSC Syllabus</li>
                  <li class="text-gray-700 text-sm">• Custom bridge module to join GS Foundation Course</li>
                </ul>
              </div>
            {/if}
          </div>

          <!-- Accordion 3: Resources -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showResources = !showResources}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                📖 Study Materials & Resources
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showResources ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {#if showResources}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <ul class="space-y-2 pl-2">
                  <li class="text-gray-700 text-sm">• NCERT Summary Notes (Chapter-wise / Theme-wise)</li>
                  <li class="text-gray-700 text-sm">• High-yield concept handouts</li>
                  <li class="text-gray-700 text-sm">• Notes available in both Soft and Hard copy</li>
                  <li class="text-gray-700 text-sm">• PYQ analysis filtered specifically from NCERT concepts</li>
                  <li class="text-gray-700 text-sm">• Test discussions accompanied by detailed Model Answers</li>
                </ul>
              </div>
            {/if}
          </div>

          <!-- Accordion 4: Who should join -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showWho = !showWho}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                👥 Who Should Join?
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showWho ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {#if showWho}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <ul class="space-y-2 pl-2">
                  <li class="text-gray-700 text-sm">• Students who have just passed Class 12th</li>
                  <li class="text-gray-700 text-sm">• College students wanting to build strong UPSC fundamentals</li>
                  <li class="text-gray-700 text-sm">• Working professionals planning to restart their UPSC prep</li>
                  <li class="text-gray-700 text-sm">• Aspirants seeking structure on how to begin their IAS journey</li>
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
              <span class="font-bold text-emerald-800 text-sm">8 Months</span>
            </div>
            <div class="flex items-center justify-between pb-3 border-b border-gray-50">
              <span class="text-gray-500 text-sm">Batch Size</span>
              <span class="font-bold text-emerald-800 text-sm">50 Students</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-500 text-sm">Focus</span>
              <span class="font-bold text-emerald-800 text-sm">Class 6–12 NCERTs</span>
            </div>
          </div>

          <div class="mt-8 space-y-3">
            <a 
              href="https://api.whatsapp.com/send?phone=919749033332&text=Hi,%20enquiry%20from%20AlpineIAS%20website%20for%20NCERT%20course" 
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
          <h4 class="font-extrabold text-emerald-900 text-sm uppercase tracking-wider mb-2">Base Building</h4>
          <p class="text-gray-600 text-xs leading-relaxed">
            Almost 35-40% of UPSC Prelims questions directly relate to core concepts explained in NCERT textbooks. Taught thematically, this course builds your cognitive thinking before jumping into complex static papers.
          </p>
        </div>
      </div>
    </div>
  </main>
</div>
