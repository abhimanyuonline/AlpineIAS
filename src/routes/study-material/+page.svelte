<script>   
  import studyMaterials from "../studymaterial.json";   
  import { onMount } from 'svelte';    
  
  let hoveredId = $state(); 
  
  const bookListColors = [
    '#34bfa3', '#ff6b9d', '#43a047', '#1fbcd2', '#8e24aa', 
    '#3949ab', '#f4511e', '#6d4c41', '#ffb300', '#039be5', 
    '#d81b60', '#757575', '#fb8c00', '#546e7a', '#00acc1', 
    '#00897b', '#e91e63', '#fbc02d'
  ];

  let blockColors = $state([...bookListColors]);
  
  onMount(() => {     
    blockColors = [...bookListColors].sort(() => Math.random() - 0.5);
  });    
</script>  

<svelte:head>
  <title>UPSC Study Materials – Alpine IAS</title>
  <meta name="description" content="Access UPSC Study Materials including Yojana Magazine, Economic Survey, and more." />
</svelte:head>

<div class="bg-gray-50 min-h-screen pt-12 pb-20 relative overflow-hidden">
  <!-- Decorative Ambient Blobs -->
  <div class="absolute top-[10%] left-[-5%] w-[35vw] h-[35vw] bg-emerald-200/10 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute top-[40%] right-[-5%] w-[40vw] h-[40vw] bg-teal-200/10 rounded-full blur-3xl pointer-events-none"></div>

  <main class="p-6 max-w-6xl mx-auto relative z-10">
    <div class="text-center mb-12">
      <span class="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
        Resource Library
      </span>
      <h1 class="text-4xl font-black text-emerald-950 mb-4 uppercase tracking-tight">UPSC Study Materials</h1>
      <p class="text-gray-500 max-w-2xl mx-auto text-sm">Comprehensive resources for your UPSC preparation. Download free PDFs, official documents, and curated notes.</p>
    </div>
    
    <div class="download-grid">
      {#each studyMaterials as item, index}
        <a 
          href={`/study-material/${item.link}`} 
          class="card-slide with-link group" 
          style="--card-bg: {blockColors[index % blockColors.length]}"
          onmouseenter={() => hoveredId = index}
          onmouseleave={() => hoveredId = null}
        >
          <!-- Watermark background icon -->
          <div class="card-watermark">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              <path d="M8 7h6"/><path d="M8 11h6"/><path d="M8 15h6"/>
            </svg>
          </div>

          <div class="card-content flex flex-col justify-between h-full z-10 w-full">
            <div>
              <span class="card-tag">
                UPSC Prep
              </span>
              <h3 class="card-title">{item.title}</h3>
            </div>
            
            <div class="card-footer flex items-center gap-1">
              <span>View Material</span>
              <svg class="w-3.5 h-3.5 transform transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </div>
          </div>
        </a>
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
    align-items: stretch;
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
    padding: 28px 24px;
    background-color: var(--card-bg);
    border-radius: 20px;
    text-decoration: none;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease, filter 0.3s ease;
    min-height: 160px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    color: white;
    overflow: hidden;
  }

  .card-slide.with-link:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 20px -8px rgba(0, 0, 0, 0.25);
    filter: brightness(1.04);
  }

  .card-tag {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    background: rgba(255, 255, 255, 0.16);
    padding: 3px 8px;
    border-radius: 6px;
    width: fit-content;
    border: 1px solid rgba(255, 255, 255, 0.08);
    display: inline-block;
    margin-bottom: 12px;
  }

  .card-title {
    font-size: 1.25rem;
    font-weight: 900;
    letter-spacing: -0.01em;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    line-height: 1.25;
    text-transform: uppercase;
  }

  .card-footer {
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    opacity: 0.95;
    margin-top: 24px;
    transition: opacity 0.2s ease;
  }

  .card-watermark {
    position: absolute;
    right: -15px;
    bottom: -15px;
    width: 120px;
    height: 120px;
    color: white;
    opacity: 0.08;
    z-index: 1;
    transition: transform 0.4s ease, opacity 0.4s ease;
    pointer-events: none;
  }

  .card-slide:hover .card-watermark {
    transform: scale(1.15) rotate(8deg);
    opacity: 0.12;
  }
</style>