<script>
  import { slide } from 'svelte/transition';
  let showHighlights = $state(false);
  let showIncludes = $state(false);
  let showSchedule = $state(false);
  let showPhase2 = $state(false);
  let showMentorRole = $state(false);
  let showReasons = $state(false);
</script>

<svelte:head>
  <title>Catch The Wind Current Affairs – Alpine IAS</title>
  <meta name="description" content="UPSC Current Affairs Course with 1-on-1 Mentorship. Comprehensive analysis of The Hindu, Indian Express, PIB, Yojana, and Kurukshetra." />
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
        Current Affairs Batch 2026
      </span>
      <h1 class="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight uppercase">CATCH THE WIND COURSE</h1>
      <p class="text-lg md:text-xl text-emerald-100/90 font-medium max-w-3xl mb-6 leading-relaxed">
        Current Affairs Mastery with 1-on-1 Mentorship | Comprehensive Syllabus Linkage.
      </p>

      <div class="flex flex-wrap gap-3">
        <span class="bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-white/10">
          🕒 July 2025 – May 2026
        </span>
        <span class="bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-white/10">
          📍 Online / Hybrid
        </span>
        <span class="bg-white/10 text-white text-sm font-semibold px-4 py-1.5 rounded-lg border border-white/10">
          🎓 1:1 Answer Reviews
        </span>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left Column: Details & Accordions -->
      <div class="lg:col-span-8 space-y-6">
        
        <!-- Course Highlights Section -->
        <div class="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
          <p class="font-bold text-lg text-emerald-900 mb-6 border-b border-gray-50 pb-4">
            Static & Dynamic Syllabus Integration | Daily News Mapping | Fortnightly Audits
          </p>
          
          <h2 class="text-2xl font-black text-gray-900 mb-4 flex items-center gap-2 uppercase tracking-tight">
            <span class="w-1.5 h-6 bg-emerald-600 rounded-full inline-block"></span>
            Course Core Highlights
          </h2>
          <ul class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <li class="flex gap-3">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm font-medium">Complete CA coverage from July 2025</span>
            </li>
            <li class="flex gap-3">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm font-medium">Hindu, IE, PIB, Yojana & Kurukshetra</span>
            </li>
            <li class="flex gap-3">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm font-medium">Mentor-Guided Mains Answer Writing</span>
            </li>
            <li class="flex gap-3">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm font-medium">Weekly Current Affairs Tests (MCQs)</span>
            </li>
            <li class="flex gap-3">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm font-medium">GS + Static Subject Integration</span>
            </li>
            <li class="flex gap-3">
              <svg class="text-emerald-600 flex-shrink-0 mt-0.5" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              <span class="text-gray-700 text-sm font-medium">Prelims-Focused Phase (April–May)</span>
            </li>
          </ul>
        </div>

        <!-- Interactive Accordions -->
        <div class="space-y-4">
          <!-- Accordion 1: Highlights toggle (original) -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showHighlights = !showHighlights}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                📋 Detailed Course Highlights
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
                  <li class="text-gray-700 text-sm">• Complete Coverage from 1st July 2025 to 31st March 2026</li>
                  <li class="text-gray-700 text-sm">• Sources: The Hindu, Indian Express, PIB, Down To Earth, Yojana, Kurukshetra</li>
                  <li class="text-gray-700 text-sm">• Mentor-Guided Mains Answer Writing</li>
                  <li class="text-gray-700 text-sm">• Weekly Current Affairs Tests (Pre + Mains)</li>
                  <li class="text-gray-700 text-sm">• GS + Static Subject Integration</li>
                  <li class="text-gray-700 text-sm">• Exclusive Prelims Current Affairs Tests (April–May 2026)</li>
                </ul>
              </div>
            {/if}
          </div>

          <!-- Accordion 2: Includes -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showIncludes = !showIncludes}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                🎁 What the Course Includes
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showIncludes ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {#if showIncludes}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <ul class="space-y-2 pl-2">
                  <li class="text-gray-700 text-sm">• 3–4 Weekly Interactive Classes for Daily/Weekly Current Affairs</li>
                  <li class="text-gray-700 text-sm">• Weekly CA Tests (MCQs + Subjective)</li>
                  <li class="text-gray-700 text-sm">• Mains Answer Writing (Integrated with GS I–IV)</li>
                  <li class="text-gray-700 text-sm">• 1-on-1 Mentorship: Evaluation, Feedback, Strategy Building</li>
                  <li class="text-gray-700 text-sm">• Live Doubt Clearing (Telegram/Calls)</li>
                </ul>
              </div>
            {/if}
          </div>

          <!-- Accordion 3: Phase 1 Schedule -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showSchedule = !showSchedule}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                📅 Phase 1: Current Affairs + Static Integration
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
                <p class="text-gray-700 font-bold text-sm mb-2">Duration: 1st July 2025 – 31st March 2026</p>
                <ul class="space-y-2 pl-2 mb-4">
                  <li class="text-gray-700 text-sm">• Mon–Wed–Fri (or Tues–Thurs–Sat): Live CA Classes</li>
                  <li class="text-gray-700 text-sm">• Sunday: Weekly CA Test + Answer Writing Review</li>
                </ul>
                <h5 class="text-xs font-bold text-emerald-800 uppercase tracking-widest mb-2">Monthly Themes & Linkage:</h5>
                <ul class="grid grid-cols-2 md:grid-cols-3 gap-2 pl-2">
                  <li class="text-gray-700 text-sm">• <strong>July:</strong> Polity, Env, Schemes</li>
                  <li class="text-gray-700 text-sm">• <strong>Aug:</strong> Social Justice, S&T</li>
                  <li class="text-gray-700 text-sm">• <strong>Sep:</strong> Economy, Budget, Indices</li>
                  <li class="text-gray-700 text-sm">• <strong>Oct:</strong> IR, Global Institutions</li>
                  <li class="text-gray-700 text-sm">• <strong>Nov:</strong> Agri, Labour Reforms</li>
                  <li class="text-gray-700 text-sm">• <strong>Dec:</strong> Governance, Ethics, Security</li>
                  <li class="text-gray-700 text-sm">• <strong>Jan:</strong> Infrastructure, Migration</li>
                  <li class="text-gray-700 text-sm">• <strong>Feb:</strong> Economic Survey, Budget</li>
                  <li class="text-gray-700 text-sm">• <strong>Mar:</strong> Mains Practice</li>
                </ul>
              </div>
            {/if}
          </div>

          <!-- Accordion 4: Phase 2 -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showPhase2 = !showPhase2}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                ⚡ Phase 2: Prelims Focused Revision
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showPhase2 ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {#if showPhase2}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <p class="text-gray-700 font-bold text-sm mb-2">Duration: 1st April – 15th May 2026</p>
                <ul class="space-y-2 pl-2">
                  <li class="text-gray-700 text-sm">• Prelims-Oriented CA Classes (2 per week)</li>
                  <li class="text-gray-700 text-sm">• 4 Full-Length Prelims Mock Tests</li>
                  <li class="text-gray-700 text-sm">• MCQs from Jan–Apr 2026 Current Affairs</li>
                  <li class="text-gray-700 text-sm">• Revision of Government Schemes, Policies, Reports</li>
                  <li class="text-gray-700 text-sm">• Focus: Retention + Option Elimination Techniques</li>
                </ul>
              </div>
            {/if}
          </div>

          <!-- Accordion 5: Mentor Role -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showMentorRole = !showMentorRole}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                👨‍🏫 Role of the Mentor
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showMentorRole ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {#if showMentorRole}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <ul class="space-y-2 pl-2">
                  <li class="text-gray-700 text-sm">• Weekly 1-on-1 Mentorship for Answer Writing</li>
                  <li class="text-gray-700 text-sm">• Test Performance Feedback & Essay Review</li>
                  <li class="text-gray-700 text-sm">• Strategy Planning & Progress Tracking</li>
                  <li class="text-gray-700 text-sm">• Custom Study Plan + Psychological & Motivational Support</li>
                  <li class="text-gray-700 text-sm">• Maintaining Daily Coverage and Learning Discipline</li>
                </ul>
              </div>
            {/if}
          </div>

          <!-- Accordion 6: Why Join -->
          <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
            <button 
              class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition"
              onclick={() => showReasons = !showReasons}
            >
              <span class="text-lg font-bold text-gray-900 flex items-center gap-2">
                💡 Why Join Catch The Wind?
              </span>
              <svg 
                class="transform transition-transform duration-200 text-gray-500" 
                style={showReasons ? 'transform: rotate(180deg);' : ''} 
                width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            {#if showReasons}
              <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
                <ul class="space-y-2 pl-2">
                  <li class="text-gray-700 text-sm">• GS I–IV fully integrated with Current Affairs</li>
                  <li class="text-gray-700 text-sm">• Answer Writing + Advanced Analytical Skills</li>
                  <li class="text-gray-700 text-sm">• Focus on Relevance, Depth & Balance</li>
                  <li class="text-gray-700 text-sm">• Tailored Mentorship specific to your needs</li>
                  <li class="text-gray-700 text-sm">• Weekly Test-Driven Progress</li>
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
              <span class="font-bold text-emerald-800 text-sm">Online / Hybrid</span>
            </div>
            <div class="flex items-center justify-between pb-3 border-b border-gray-50">
              <span class="text-gray-500 text-sm">Duration</span>
              <span class="font-bold text-emerald-800 text-sm">approx. 10 Months</span>
            </div>
            <div class="flex items-center justify-between pb-3 border-b border-gray-50">
              <span class="text-gray-500 text-sm">Format</span>
              <span class="font-bold text-emerald-800 text-sm">Classes + 1:1 Mentorship</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-500 text-sm">Target Year</span>
              <span class="font-bold text-emerald-800 text-sm">UPSC CSE 2026</span>
            </div>
          </div>

          <div class="mt-8 space-y-3">
            <a 
              href="https://api.whatsapp.com/send?phone=919749033332&text=Hi,%20enquiry%20from%20AlpineIAS%20website%20for%20Mentorship%20course" 
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
          <h4 class="font-extrabold text-emerald-900 text-sm uppercase tracking-wider mb-2">Mentorship Edge</h4>
          <p class="text-gray-600 text-xs leading-relaxed">
            Current affairs can become overwhelming if you try to read everything. A personal mentor filters the noise, reviews your mains answers daily, and maps current updates back to static topics.
          </p>
        </div>
      </div>
    </div>
  </main>
</div>
