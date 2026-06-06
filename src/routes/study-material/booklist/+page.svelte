<script lang="ts">
  import { slide } from 'svelte/transition';
  let showBooks = false;
  function toggle() { showBooks = !showBooks; }

  let expandedCategoryId = $state<string | null>(null);
  function toggleCategory(title: string) {
    if (expandedCategoryId === title) {
      expandedCategoryId = null;
    } else {
      expandedCategoryId = title;
    }
  }

  function handleKeyDown(event: KeyboardEvent, title: string) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleCategory(title);
    }
  }

  const categories = [
    { 
      title: "Geography", 
      count: 4, 
      color: "#34bfa3",
      subItems: [
        { label: "1. FUNDAMENTALS OF PHYSICAL GEOGRAPHY CLASS 11 NCERT", link: "https://ncert.nic.in/textbook.php?kegy2=0-14" },
        { label: "2. INDIAN PHYSICAL ENVIRONMENT CLASS 11 NCERT", link: "https://ncert.nic.in/textbook.php?kegy1=0-6" },
        { label: "3. FUNDAMENTALS OF HUMAN GEOGRAPHY CLASS 12 NCERT", link: "https://ncert.nic.in/textbook.php?legy1=0-8" },
        { label: "4. INDIAN PEOPLE AND ECONOMY CLASS 12 NCERT", link: "https://ncert.nic.in/textbook.php?legy2=0-9" }
      ]
    },
    { 
      title: "ECONOMICS", 
      count: 1, 
      color: "#ff6b9d",
      subItems: [
        { label: "1. INTRODUCTORY MACROECONOMICS CLASS 12 NCERT", link: "https://ncert.nic.in/textbook.php?leec1=0-6" }
      ]
    },
    { 
      title: "ENVIRONMENT", 
      count: 2, 
      color: "#43a047",
      subItems: [
        { label: "1. BIOLOGY CLASS 12 NCERT", link: "https://ncert.nic.in/textbook.php/pdf/lebo1ps.pdf" },
        { label: "2. ALPINE IAS NOTES", link: "" }
      ]
    },
    { 
      title: "POLITY", 
      count: 4, 
      color: "#1fbcd2",
      subItems: [
        { label: "1. INDIAN CONSTITUTION AT WORK CLASS 11 NCERT", link: "https://ncert.nic.in/textbook.php?keps2=0-10" },
        { label: "2. POLITICAL THEORY CLASS 11", link: "https://ncert.nic.in/textbook.php?keps1=0-8" },
        { label: "3. M LAXMIKANT", link: "" },
        { label: "4. ALPINE IAS STUDY MATERIAL", link: "" }
      ]
    },
    { 
      title: "SCIENCE AND TECHNOLOGY", 
      count: 2, 
      color: "#8e24aa",
      subItems: [
        { label: "1. SCIENCE CLASS 10TH NCERT", link: "https://ncert.nic.in/textbook.php?jesc1=0-13" },
        { label: "2. ALPINE IAS NOTES", link: "" }
      ]
    },
    { 
      title: "INTERNATIONAL RELATIONS", 
      count: 2, 
      color: "#3949ab",
      subItems: [
        { label: "1. CONTEMPORARY WORLD POLITICS CLASS 12 NCERT", link: "https://ncert.nic.in/textbook.php?leps1=0-7" },
        { label: "2. ALPINE IAS NOTES", link: "" }
      ]
    },
    { 
      title: "MODERN HISTORY", 
      count: 3, 
      color: "#f4511e",
      subItems: [
        { label: "1. BIPIN CHANDRA PAL OLD NCERT CLASS 12", link: "" },
        { label: "2. SPECTRUM", link: "" },
        { label: "3. ALPINE IAS NOTES", link: "" }
      ]
    },
    { 
      title: "MEDIEVAL HISTORY", 
      count: 2, 
      color: "#6d4c41",
      subItems: [
        { label: "1. SATISH CHANDRA OLD NCERT CLASS 11 NCERT", link: "" },
        { label: "2. ALPINE IAS NOTES", link: "" }
      ]
    },
    { 
      title: "ANCIENT HISTORY", 
      count: 2, 
      color: "#ffb300",
      subItems: [
        { label: "1. RS SHARMA CLASS 11 OLD NCERT", link: "" },
        { label: "2. ALPINE IAS NOTES", link: "" }
      ]
    },
    { 
      title: "WORLD HISTORY", 
      count: 2, 
      color: "#039be5",
      subItems: [
        { label: "1. STORY OF CIVILIZATION CLASS 10 OLD NCERT", link: "" },
        { label: "2. ALPINE IAS NOTES", link: "" }
      ]
    },
    { 
      title: "SOCIETY", 
      count: 2, 
      color: "#d81b60",
      subItems: [
        { label: "1. INDIAN SOCIETY CLASS 12 NCERT", link: "https://ncert.nic.in/textbook.php?lesy1=0-7" },
        { label: "2. SOCIAL CHANGE AND DEVELOPMENT IN INDIA CLASS 12 NCERT", link: "https://ncert.nic.in/textbook.php?lesy2=0-8" }
      ]
    },
    { 
      title: "POST INDEPENDENCE", 
      count: 1, 
      color: "#757575",
      subItems: [
        { label: "1. POLITICS IN INDIA SINCE INDEPENDENCE", link: "https://ncert.nic.in/textbook.php?leps2=0-8" }
      ]
    },
    { 
      title: "DISASTER MANAGEMENT", 
      count: 1, 
      color: "#fb8c00",
      subItems: [
        { label: "1. ALPINE IAS NOTES", link: "" }
      ]
    },
    { 
      title: "INTERNAL SECURITY", 
      count: 1, 
      color: "#546e7a",
      subItems: [
        { label: "1. ALPINE IAS NOTES", link: "" }
      ]
    },
    { 
      title: "ETHICS", 
      count: 1, 
      color: "#00acc1",
      subItems: [
        { label: "1. ALPINE IAS NOTES", link: "" }
      ]
    },
    { 
      title: "GOVERNANCE", 
      count: 1, 
      color: "#00897b",
      subItems: [
        { label: "1. ALPINE IAS NOTES", link: "" }
      ]
    },
    { 
      title: "SOCIAL JUSTICE", 
      count: 1, 
      color: "#e91e63",
      subItems: [
        { label: "1. ALPINE IAS NOTES", link: "" }
      ]
    },
    { 
      title: "CURRENT AFFAIRS", 
      count: 4, 
      color: "#fbc02d",
      subItems: [
        { label: "1. THE HINDU/INDIAN EXPRESS NEWSPAPER", link: "" },
        { label: "2. ALPINE IAS DAILY CURRENT AFFAIRS NOTES", link: "" },
        { label: "3. PIB", link: "" },
        { label: "4. SANSAD TV PERSPECTIVE PROGRAM", link: "" }
      ]
    }
  ];
</script>

<svelte:head>
  <title>Book List for UPSC (Free PDF) – Alpine IAS</title>
  <meta name="description" content="Download the most recommended book list for UPSC Prelims, Mains (GS), and Essay preparation in PDF format." />
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

    <!-- Centered Header -->
    <div class="text-center mb-12">
      <span class="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
        Recommended Reading
      </span>
      <h1 class="text-4xl font-black text-emerald-950 mb-4 uppercase tracking-tight">UPSC Book List</h1>
      <p class="text-gray-500 max-w-2xl mx-auto text-sm">Standard & Recommended Books for Prelims and Mains – Curated by Toppers & Mentors.</p>
    </div>

    <div class="download-grid">
      {#each categories as cat}
        <div 
          class="card-slide with-link cursor-pointer overflow-hidden text-left border-none w-full relative" 
          class:expanded={expandedCategoryId === cat.title}
          style="--card-bg: {cat.color}" 
          onclick={() => toggleCategory(cat.title)}
          onkeydown={(e) => handleKeyDown(e, cat.title)}
          role="button"
          aria-expanded={expandedCategoryId === cat.title}
          tabindex="0"
        >
          <!-- Watermark Icon -->
          <div class="card-watermark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              <path d="M8 7h6"/><path d="M8 11h6"/><path d="M8 15h6"/>
            </svg>
          </div>

          <div class="card-header flex justify-between items-center w-full relative z-10">
            <div class="card-content">
              <span class="card-title text-base font-black tracking-wide uppercase leading-tight">{cat.title}</span>
              <span class="card-count text-[10px] font-bold tracking-wider opacity-90 uppercase">TOTAL ITEMS: {cat.count}</span>
            </div>
            <div class="card-icon-container relative w-10 h-10 flex items-center justify-center bg-white/10 rounded-full border border-white/10">
              <svg class="w-5 h-5 transform transition-transform duration-300" class:rotate-180={expandedCategoryId === cat.title} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>
          
          {#if expandedCategoryId === cat.title}
            <div class="dropdown-list mt-6 space-y-3.5 w-full relative z-10" transition:slide>
              {#each cat.subItems as item}
                {#if item.link}
                  <a href={item.link} target="_blank" class="block p-3 rounded-xl bg-white/10 hover:bg-white/20 hover:shadow-sm border border-white/10 transition text-white text-[11px] font-bold uppercase tracking-wider flex items-center justify-between" onclick={(e) => e.stopPropagation()}>
                    <span>{item.label}</span>
                    <span class="text-[9px] text-white/80 font-medium flex items-center gap-0.5 whitespace-nowrap bg-white/10 px-2 py-1 rounded">Open <svg class="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></span>
                  </a>
                {:else}
                  <div class="block p-3 rounded-xl bg-white/5 border border-white/5 text-white/50 text-[11px] font-semibold uppercase tracking-wider flex items-center justify-between" onclick={(e) => e.stopPropagation()}>
                    <span>{item.label}</span>
                    <span class="text-[9px] text-white/40 italic whitespace-nowrap">Notes Coming Soon</span>
                  </div>
                {/if}
              {/each}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </main>
</div>

<style>
  .download-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    padding: 10px 0;
    align-items: start;
  }

  @media (min-width: 640px) {
    .download-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (min-width: 1024px) {
    .download-grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .card-slide {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 24px;
    background-color: var(--card-bg);
    border-radius: 20px;
    text-decoration: none;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
    min-height: 140px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .card-slide.expanded {
    min-height: auto;
  }

  .card-slide.with-link:hover {
    transform: translateY(-4px);
    box-shadow: 0 12px 20px -8px rgba(0, 0, 0, 0.25);
  }

  .card-slide.no-link {
    cursor: default;
    opacity: 0.95;
  }

  .card-content {
    display: flex;
    flex-direction: column;
  }

  .card-watermark {
    position: absolute;
    right: -15px;
    bottom: -15px;
    width: 110px;
    height: 110px;
    color: white;
    opacity: 0.07;
    z-index: 1;
    transition: transform 0.4s ease, opacity 0.4s ease;
    pointer-events: none;
  }

  .card-slide:hover .card-watermark {
    transform: scale(1.15) rotate(8deg);
    opacity: 0.11;
  }

  .dropdown-list a {
    text-decoration: none;
    color: white;
  }
</style>



