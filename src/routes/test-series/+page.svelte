<script>
  import testData from "../testdetails.json";
  import { onMount } from 'svelte';

  const courseListColors = [
    '#34bfa3', '#ff6b9d', '#43a047', '#1fbcd2', '#8e24aa', 
    '#3949ab', '#f4511e', '#6d4c41', '#ffb300', '#039be5', 
    '#d81b60', '#757575', '#fb8c00', '#546e7a', '#00acc1', 
    '#00897b', '#e91e63', '#fbc02d'
  ];

  let blockColors = $state([...courseListColors]);
  
  onMount(() => {     
    blockColors = [...courseListColors].sort(() => Math.random() - 0.5);
  });
</script>

<svelte:head>
  <title>UPSC Test Series – Alpine IAS</title>
  <meta name="description" content="Prepare with Dehradun's premier UPSC Test Series including Astra Mains and Strike Hard Prelims tests." />
</svelte:head>

<div class="bg-gray-50 min-h-screen">
  <main class="p-6 max-w-7xl mx-auto pt-12 pb-20">
    <div class="text-center mb-12">
      <span class="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
        Exam Simulations
      </span>
      <h1 class="text-4xl font-black text-emerald-950 mb-4 uppercase tracking-tight">UPSC Test Series</h1>
      <p class="text-gray-500 max-w-2xl mx-auto text-sm">Challenge yourself with exam-simulated papers under strict mentor review. Prelims and Mains evaluation batches.</p>
    </div>
    
    <div class="tests-grid max-w-4xl mx-auto">
      {#if testData && testData.length > 0}
        {#each testData as test, index}
          <div 
            class="test-card relative overflow-hidden" 
            style="--card-bg: {blockColors[index % blockColors.length]}"
          >
            <!-- Watermark background icon -->
            <div class="card-watermark">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="16" y1="13" x2="8" y2="13"/>
                <line x1="16" y1="17" x2="8" y2="17"/>
                <polyline points="10 9 9 9 8 9"/>
              </svg>
            </div>
            
            <div class="card-header">
              <div class="test-title-top">{test.title}</div>
              <div class="test-type-top">{test.type}</div>
            </div>
            
            <div class="card-body">
              <div class="test-year">Batch {test.year}</div>
              <h3 class="test-title-body">{test.title}</h3>
              
              {#if test.features && test.features.length > 0}
                <ul class="features-list">
                  {#each test.features as feature}
                    <li class="feature-item">
                      <svg class="feature-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </li>
                  {/each}
                </ul>
              {/if}
              
              <div class="join-btn-container">
                <a href={`/test-series/${test.link}`} class="join-btn">
                  Join Now
                </a>
              </div>
            </div>
          </div>
        {/each}
      {:else}
        <div class="col-span-full text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
          <p class="text-gray-500 text-lg">No test series available at the moment.</p>
        </div>
      {/if}
    </div>
  </main>
</div>

<style>
  .tests-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    padding: 10px 0;
    align-items: stretch;
  }

  @media (min-width: 640px) {
    .tests-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  .test-card {
    background-color: var(--card-bg);
    color: white;
    border-radius: 20px;
    padding: 28px 24px;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    height: 100%;
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
  }

  .test-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 20px -8px rgba(0, 0, 0, 0.25);
  }

  .card-header {
    position: relative;
    z-index: 2;
    margin-bottom: 24px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
    padding-bottom: 20px;
  }

  .test-title-top {
    font-size: 1.4rem;
    font-weight: 850;
    line-height: 1.25;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.01em;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.15);
  }

  .test-type-top {
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    opacity: 0.95;
    background: rgba(255, 255, 255, 0.18);
    padding: 4px 10px;
    border-radius: 6px;
    width: fit-content;
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  .card-body {
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }

  .test-year {
    font-size: 0.72rem;
    font-weight: 700;
    opacity: 0.8;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    margin-bottom: 6px;
  }

  .test-title-body {
    font-size: 1.1rem;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.3;
    opacity: 0.95;
  }

  .features-list {
    list-style: none;
    padding: 0;
    margin: 0 0 30px 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
    flex-grow: 1;
  }

  .feature-item {
    display: flex;
    align-items: flex-start;
    font-size: 0.875rem;
    line-height: 1.4;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.9);
  }

  .feature-icon {
    margin-right: 10px;
    flex-shrink: 0;
    margin-top: 3px;
    opacity: 0.85;
    color: white;
  }

  .join-btn-container {
    margin-top: auto;
    width: 100%;
  }

  .join-btn {
    background-color: white;
    color: var(--card-bg);
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    font-size: 0.85rem;
    text-align: center;
    padding: 12px 24px;
    border-radius: 9999px;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    display: block;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .join-btn:hover {
    transform: scale(1.03);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.25);
    background-color: rgba(255, 255, 255, 0.98);
  }

  .card-watermark {
    position: absolute;
    right: -25px;
    top: -25px;
    width: 150px;
    height: 150px;
    color: white;
    opacity: 0.08;
    z-index: 1;
    transition: transform 0.4s ease, opacity 0.4s ease;
    pointer-events: none;
  }

  .test-card:hover .card-watermark {
    transform: scale(1.15) rotate(10deg);
    opacity: 0.12;
  }
</style>