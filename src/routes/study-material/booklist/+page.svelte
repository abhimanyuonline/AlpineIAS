<script>
  import { slide } from 'svelte/transition';
  let showBooks = false;
  function toggle() { showBooks = !showBooks; }

  let expandedCategoryId = null;
  function toggleCategory(title) {
    if (expandedCategoryId === title) {
      expandedCategoryId = null;
    } else {
      expandedCategoryId = title;
    }
  }

  function handleKeyDown(event, title) {
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

<div class="bg-gray-50 min-h-screen">
  <main class="p-6 max-w-7xl mx-auto">
    <h1 class="text-4xl font-bold text-center mb-4">UPSC Book List</h1>
    <p class="text-center mb-10 text-gray-600">Standard & Recommended Books for Prelims and Mains – Curated by Toppers & Mentors</p>
    <div class="download-grid">
      {#each categories as cat}
        {#if cat.subItems}
          <div 
            class="card-slide with-link cursor-pointer overflow-visible text-left border-none w-full" 
            class:expanded={expandedCategoryId === cat.title}
            style="--card-bg: {cat.color}" 
            on:click={() => toggleCategory(cat.title)}
            on:keydown={(e) => handleKeyDown(e, cat.title)}
            role="button"
            aria-expanded={expandedCategoryId === cat.title}
            tabindex="0"
          >
            <div class="card-header flex justify-between items-center w-full">
              <div class="card-content">
                <span class="card-title">{cat.title}</span>
                <span class="card-count">TOTAL PDFS : {cat.count}</span>
              </div>
              <div class="card-icon-container relative w-12 h-12 flex items-center justify-center">
                <svg class="w-6 h-6 transform transition-transform duration-300" class:rotate-180={expandedCategoryId === cat.title} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </div>
            </div>
            
            {#if expandedCategoryId === cat.title}
              <div class="dropdown-list mt-6 space-y-3 w-full" transition:slide>
                {#each cat.subItems as item}
                  <a href={item.link} target="_blank" class="block p-3 rounded-lg bg-white/10 hover:bg-white/20 transition-colors text-xs font-semibold uppercase leading-tight tracking-wide" on:click|stopPropagation>
                    {item.label}
                  </a>
                {/each}
              </div>
            {/if}
          </div>
        {:else if cat.link}
          <a href={cat.link} target="_blank" class="card-slide with-link" style="--card-bg: {cat.color}">
            <div class="card-content">
              <span class="card-title">{cat.title}</span>
              <span class="card-count">TOTAL PDFS : {cat.count}</span>
            </div>
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                <path d="M8 7h6"/><path d="M8 11h6"/><path d="M8 15h6"/>
              </svg>
            </div>
          </a>
        {:else}
          <div class="card-slide no-link" style="--card-bg: {cat.color}">
            <div class="card-content">
              <span class="card-title">{cat.title}</span>
              <span class="card-count">TOTAL PDFS : {cat.count}</span>
            </div>
            <div class="card-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                <path d="M8 7h6"/><path d="M8 11h6"/><path d="M8 15h6"/>
              </svg>
            </div>
          </div>
        {/if}
      {/each}
    </div>
  </main>
</div>

<style>
  .download-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
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
      grid-template-columns: repeat(4, 1fr);
    }
  }

  .card-slide {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 25px 30px;
    background-color: var(--card-bg);
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s ease;
    min-height: 120px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    color: white;
  }

  .card-slide.expanded {
    min-height: auto;
  }

  .card-slide.with-link:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
    filter: brightness(1.05);
  }

  .card-slide.no-link {
    cursor: default;
    opacity: 0.9;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    z-index: 2;
  }

  .card-title {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 12px;
    letter-spacing: 0.02em;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    line-height: 1.2;
  }

  .card-count {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.95;
  }

  .card-icon, .card-icon-container {
    color: white;
    opacity: 0.3;
    z-index: 1;
  }
  
  .card-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    transition: transform 0.3s ease;
  }

  .card-slide.with-link:hover .card-icon {
    transform: translateY(-50%) scale(1.1);
    opacity: 0.4;
  }

  .animate-fade-in {
    animation: fadeIn 0.4s ease-out forwards;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }

  .dropdown-list a {
    text-decoration: none;
    color: white;
  }
</style>



