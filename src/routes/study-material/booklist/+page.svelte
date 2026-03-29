<script>
  let showBooks = false;
  function toggle() { showBooks = !showBooks; }

  const categories = [
    { title: "Geography", count: 11, link: "https://www.drishtiias.com/free-downloads/ncert-geography-downloads", color: "#34bfa3" },
    { title: "ECONOMICS", count: 5, link: "https://www.drishtiias.com/free-downloads/ncert-books-economics-download", color: "#ff6b9d" },
    { title: "ENVIRONMENT", count: 3, link: "https://www.drishtiias.com/free-downloads/ncert-books-environment-ecology-download", color: "#43a047" },
    { title: "POLITY", count: 9, link: "https://www.drishtiias.com/free-downloads/ncert-book-polity-download", color: "#1fbcd2" },
    { title: "SCIENCE AND TECHNOLOGY", count: 4, link: "", color: "#8e24aa" },
    { title: "INTERNATIONAL RELATIONS", count: 2, link: "", color: "#3949ab" },
    { title: "MODERN HISTORY", count: 9, link: "https://www.drishtiias.com/free-downloads/ncert-history-downloads", color: "#f4511e" },
    { title: "MEDIEVAL HISTORY", count: 9, link: "https://www.drishtiias.com/free-downloads/ncert-history-downloads", color: "#6d4c41" },
    { title: "ANCIENT HISTORY", count: 9, link: "https://www.drishtiias.com/free-downloads/ncert-history-downloads", color: "#ffb300" },
    { title: "WORLD HISTORY", count: 9, link: "https://www.drishtiias.com/free-downloads/ncert-history-downloads", color: "#039be5" },
    { title: "SOCIETY", count: 4, link: "https://www.drishtiias.com/free-downloads/ncert-books-sociology-download", color: "#d81b60" },
    { title: "POST INDEPENDENCE", count: 2, link: "", color: "#757575" },
    { title: "DISASTER MANAGEMENT", count: 1, link: "", color: "#fb8c00" },
    { title: "INTERNAL SECURITY", count: 1, link: "", color: "#546e7a" },
    { title: "ETHICS", count: 2, link: "", color: "#00acc1" },
    { title: "GOVERNANCE", count: 2, link: "", color: "#00897b" },
    { title: "SOCIAL JUSTICE", count: 1, link: "", color: "#e91e63" },
    { title: "CURRENT AFFAIRS", count: 12, link: "", color: "#fbc02d" }
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

    <section class="mb-8">
      <button class="text-blue-600 hover:text-blue-800 font-medium transition-colors" on:click={toggle}>
        <span>{showBooks ? 'Hide' : 'Show'}</span> Download Book List PDF
      </button>

      {#if showBooks}
        <ul class="list-disc pl-5 mt-4 space-y-2 text-green-700 text-sm animate-fade-in">
          <li><a href="https://drive.google.com/drive/folders/1rqi_zAnf7QAckjy61osSb1j7eAYKO5DP?usp=sharing" target="_blank" class="underline">📄 Complete UPSC Book List (Prelims + Mains)</a></li>
        </ul>
      {/if}
    </section>

    <div class="download-grid">
      {#each categories as cat}
        {#if cat.link}
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

    <div class="flex justify-center mt-12">
      <a
        href="https://drive.google.com/drive/folders/1rqi_zAnf7QAckjy61osSb1j7eAYKO5DP?usp=sharing"
        class="bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 shadow-lg shadow-green-200"
        target="_blank"
      >
        📥 Download Full Book List PDF
      </a>
    </div>
  </main>
</div>

<style>
  .download-grid {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 20px;
    padding: 10px 0;
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
    align-items: center;
    justify-content: space-between;
    padding: 25px 30px;
    background-color: var(--card-bg);
    border-radius: 4px;
    text-decoration: none;
    transition: all 0.3s ease;
    min-height: 120px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    overflow: hidden;
  }

  .card-slide.with-link:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.15), 0 4px 6px -2px rgba(0, 0, 0, 0.1);
    filter: brightness(1.05);
    cursor: pointer;
  }

  .card-slide.no-link {
    cursor: default;
    opacity: 0.9;
  }

  .card-content {
    display: flex;
    flex-direction: column;
    z-index: 2;
    color: white;
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
</style>


