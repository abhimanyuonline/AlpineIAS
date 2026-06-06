<script>
  import { slide } from 'svelte/transition';
  let show = $state(false);
  function toggle() {
    show = !show;
  }
</script>

<svelte:head>
  <title>BUDGET (Free Download) – Alpine IAS</title>
  <meta name="description" content="Download Union Budget of India PDFs for UPSC prep free. Essential for GS‑III, Essays & Interview." />
</svelte:head>

<div class="bg-gray-50 min-h-screen pt-8 pb-16 relative overflow-hidden">
  <!-- Decorative Ambient Blobs -->
  <div class="absolute top-[10%] left-[-5%] w-[35vw] h-[35vw] bg-emerald-200/10 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute top-[40%] right-[-5%] w-[40vw] h-[40vw] bg-teal-200/10 rounded-full blur-3xl pointer-events-none"></div>

  <main class="max-w-6xl mx-auto px-4 relative z-10">
    <!-- Breadcrumb -->
    <div class="mb-6">
      <a href="/study-material" class="text-sm font-bold text-emerald-700 hover:text-emerald-800 transition flex items-center gap-1">
        ← All Study Materials
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
        Free PDF Download
      </span>
      <h1 class="text-3xl md:text-5xl font-black mb-4 tracking-tight leading-tight uppercase">Union Budget of India</h1>
      <p class="text-lg md:text-xl text-emerald-100/90 font-medium max-w-3xl mb-6 leading-relaxed">
        For UPSC Aspirants | Free Download | Data-Rich & Analytical PDF
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      <!-- Left Column: Details & Accordions -->
      <div class="lg:col-span-8 space-y-6">
        
        <!-- Objective/Intro Section -->
        <div class="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm">
          <h2 class="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight">What is the Union Budget?</h2>
          <p class="text-gray-700 text-sm leading-relaxed mb-6">
            The Union Budget—called the “Annual Financial Statement” in Article 112 of the Indian Constitution—is India’s yearly economic roadmap. It’s presented by the Finance Minister every year on 1st February and includes estimates of revenue and expenditure for the upcoming financial year.
          </p>

          <h2 class="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight">Highlights of Budget 2025–26</h2>
          <ul class="list-disc pl-5 mb-6 space-y-2 text-gray-700 text-sm">
            <li>Theme: <strong>“Sabka Vikas”</strong> – Inclusive Development</li>
            <li>New tax regime raised the threshold to ₹12.75 L</li>
            <li>Fiscal deficit target: <strong>4.4%</strong>, down from 4.8%</li>
            <li>Focused on MSMEs, rural growth, and middle-class consumption</li>
            <li>Moderate capital expenditure to maintain growth without overheating</li>
          </ul>

          <h2 class="text-xl font-bold text-gray-900 mb-3 uppercase tracking-tight">Why It Matters for UPSC?</h2>
          <ul class="list-disc pl-5 space-y-2 text-gray-700 text-sm">
            <li>Key source for <strong>GS-III: Economy</strong> section</li>
            <li>Provides facts and data points for Essays & Mains</li>
            <li>Important for <strong>interview questions</strong> on fiscal strategy & reforms</li>
          </ul>
        </div>

        <!-- Downloads Accordion -->
        <div class="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden transition-all">
          <button 
            class="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50/50 transition font-bold text-gray-900"
            onclick={toggle}
          >
            <span class="flex items-center gap-2">
              📂 Individual PDF Download Links
            </span>
            <svg 
              class="transform transition-transform duration-200 text-gray-505" 
              class:rotate-180={show}
              width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            >
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          
          {#if show}
            <div transition:slide class="px-6 pb-6 pt-2 border-t border-gray-50 bg-gray-50/20">
              <ul class="space-y-3 mt-2">
                <li>
                  <a href="https://drive.google.com/drive/folders/1ZISLsJZh_5YsI_XAejB9uWasZMCKRVog?usp=sharing" target="_blank" class="block p-3.5 rounded-xl bg-white border border-gray-100 hover:border-emerald-300 hover:shadow-sm transition text-emerald-800 text-sm font-semibold flex items-center justify-between">
                    <span>Budget 2025–26 – Full PDF</span>
                    <span class="text-xs text-gray-400 font-medium flex items-center gap-1">Google Drive <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></span>
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/drive/folders/1ZISLsJZh_5YsI_XAejB9uWasZMCKRVog?usp=sharing" target="_blank" class="block p-3.5 rounded-xl bg-white border border-gray-100 hover:border-emerald-300 hover:shadow-sm transition text-emerald-800 text-sm font-semibold flex items-center justify-between">
                    <span>Budget 2024–25 – PDF + Summary</span>
                    <span class="text-xs text-gray-400 font-medium flex items-center gap-1">Google Drive <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></span>
                  </a>
                </li>
                <li>
                  <a href="https://drive.google.com/drive/folders/1ZISLsJZh_5YsI_XAejB9uWasZMCKRVog?usp=sharing" target="_blank" class="block p-3.5 rounded-xl bg-white border border-gray-100 hover:border-emerald-300 hover:shadow-sm transition text-emerald-800 text-sm font-semibold flex items-center justify-between">
                    <span>Budget Notes for UPSC (Alpine IAS)</span>
                    <span class="text-xs text-gray-400 font-medium flex items-center gap-1">Google Drive <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></span>
                  </a>
                </li>
              </ul>
            </div>
          {/if}
        </div>
      </div>

      <!-- Right Column: Quick Stats Card & CTAs -->
      <div class="lg:col-span-4 space-y-6 lg:sticky lg:top-6">
        <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
          <div class="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
          <h3 class="text-lg font-extrabold text-gray-900 mb-4 uppercase tracking-wider">Document Details</h3>
          
          <div class="space-y-4 mb-6">
            <div class="flex items-center justify-between pb-3 border-b border-gray-50">
              <span class="text-gray-500 text-sm">Category</span>
              <span class="font-bold text-emerald-800 text-sm">Government Budget</span>
            </div>
            <div class="flex items-center justify-between pb-3 border-b border-gray-50">
              <span class="text-gray-500 text-sm">Access</span>
              <span class="font-bold text-emerald-800 text-sm">Free PDF Download</span>
            </div>
            <div class="flex items-center justify-between">
              <span class="text-gray-500 text-sm">Recommended for</span>
              <span class="font-bold text-emerald-800 text-sm">GS-III & Essays</span>
            </div>
          </div>

          <a 
            href="https://drive.google.com/drive/folders/1ZISLsJZh_5YsI_XAejB9uWasZMCKRVog?usp=sharing" 
            class="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl py-3.5 px-4 text-center font-bold transition duration-300 block shadow-md shadow-emerald-600/10 text-sm uppercase tracking-wider"
            target="_blank"
            rel="noopener noreferrer"
          >
            📥 Download All Budget PDFs
          </a>
        </div>
      </div>
    </div>
  </main>
</div>
