<script>
  const currentAffairsOptions = [
    {
      id: 1,
      title: "DAILY CURRENT AFFAIRS",
      description: "Stay updated with the latest news and events relevant for the UPSC examination. New content published every day to keep you informed on the go.",
      url: "daily",
      themeColor: "#059669", /* Emerald */
      badge: "LATEST NEWS",
      iconPath: "M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V11m-4 3H9m3-3H9"
    },
    {
      id: 2,
      title: "WEEKLY CURRENT AFFAIRS",
      description: "Comprehensive weekly digest of all important news and events curated specifically for UPSC aspirants. Published every Sunday.",
      url: "weekly",
      themeColor: "#3b82f6", /* Blue */
      badge: "WEEKLY DIGEST",
      iconPath: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    }
  ];
</script>

<svelte:head>
  <title>UPSC Current Affairs – Alpine IAS</title>
  <meta name="description" content="Access daily and weekly current affairs curated by IAS experts for UPSC Civil Services preparation." />
</svelte:head>

<div class="bg-gray-50 min-h-screen pt-12 pb-20 relative overflow-hidden">
  <!-- Decorative Ambient Blobs -->
  <div class="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-emerald-100/20 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-blue-100/20 rounded-full blur-3xl pointer-events-none"></div>

  <main class="max-w-4xl mx-auto px-4 relative z-10">
    <div class="text-center mb-16">
      <span class="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
        STUDY IN FOCUS
      </span>
      <h1 class="text-4xl md:text-5xl font-black text-emerald-950 mb-4 uppercase tracking-tight">Current Affairs</h1>
      <p class="text-gray-500 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
        Stay ahead of the curve. Access our daily news updates and comprehensive weekly current affairs compilations curated by top IAS mentors.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch justify-center max-w-3xl mx-auto">
      {#each currentAffairsOptions as option}
        <div 
          class="card-option relative overflow-hidden rounded-2xl p-8 bg-white border border-gray-100 shadow-sm flex flex-col justify-between transition-all"
          style="--hover-color: {option.themeColor}"
        >
          <!-- Watermark icon in the background -->
          <div class="watermark-icon" style="color: {option.themeColor}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d={option.iconPath} />
            </svg>
          </div>

          <div class="relative z-10">
            <span 
              class="text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider inline-block mb-4"
              style="background-color: {option.themeColor}15; color: {option.themeColor}"
            >
              {option.badge}
            </span>
            <h3 class="text-2xl font-black text-gray-900 mb-3 tracking-tight">{option.title}</h3>
            <p class="text-gray-500 text-sm leading-relaxed mb-8">{option.description}</p>
          </div>

          <div class="relative z-10 mt-auto">
            <a 
              href={`/current-affairs/${option.url}`}
              class="open-btn inline-flex items-center justify-center w-full py-3 px-6 rounded-xl text-sm font-bold uppercase tracking-wider transition-all"
              style="background-color: {option.themeColor}; color: white; box-shadow: 0 4px 6px -1px {option.themeColor}20"
            >
              Access Now
              <svg class="ml-2 w-4 h-4 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
              </svg>
            </a>
          </div>
        </div>
      {/each}
    </div>
  </main>
</div>

<style>
  .card-option {
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease;
  }

  .card-option:hover {
    transform: translateY(-6px);
    border-color: var(--hover-color);
    box-shadow: 0 12px 20px -8px rgba(0, 0, 0, 0.1);
  }

  .watermark-icon {
    position: absolute;
    right: -10px;
    top: -10px;
    width: 110px;
    height: 110px;
    opacity: 0.04;
    transition: transform 0.4s ease, opacity 0.4s ease;
    pointer-events: none;
  }

  .card-option:hover .watermark-icon {
    transform: scale(1.15) rotate(5deg);
    opacity: 0.09;
  }

  .open-btn {
    transition: transform 0.2s ease, filter 0.2s ease, box-shadow 0.2s ease;
  }

  .card-option:hover .open-btn {
    filter: brightness(1.05);
    box-shadow: 0 10px 15px -3px var(--hover-color)30;
  }

  .card-option:hover .open-btn svg {
    transform: translateX(4px);
  }
</style>