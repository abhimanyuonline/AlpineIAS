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

<div class="bg-gray-50 min-h-screen">
  <main class="p-6 max-w-7xl mx-auto">
    <h1 class="text-4xl font-bold text-center mb-4">UPSC Study Materials</h1>
    <p class="text-center mb-10 text-gray-600">Comprehensive resources for your UPSC preparation - Download PDFs and Study Notes</p>
    
    <div class="download-grid">
      {#each studyMaterials as item, index}
        <a 
          href={`/study-material/${item.link}`} 
          class="card-slide with-link" 
          style="--card-bg: {blockColors[index % blockColors.length]}"
          onmouseenter={() => hoveredId = index}
          onmouseleave={() => hoveredId = null}
        >
          <div class="card-content">
            <span class="card-title">{item.title}</span>
            <span class="card-count">VIEW MATERIAL</span>
          </div>
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
              <path d="M8 7h6"/><path d="M8 11h6"/><path d="M8 15h6"/>
            </svg>
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

  .card-slide.with-link:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
    filter: brightness(1.05);
  }

  .card-content {
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 80%;
  }

  .card-title {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 12px;
    letter-spacing: 0.02em;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
    line-height: 1.2;
    text-transform: uppercase;
  }

  .card-count {
    font-size: 0.65rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.95;
  }

  .card-icon {
    position: absolute;
    right: 15px;
    top: 50%;
    transform: translateY(-50%);
    width: 60px;
    height: 60px;
    color: white;
    opacity: 0.3;
    z-index: 1;
    transition: transform 0.3s ease;
  }

  .card-slide:hover .card-icon {
    transform: translateY(-50%) scale(1.1);
    opacity: 0.4;
  }
</style>