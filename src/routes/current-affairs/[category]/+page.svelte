<script lang="ts">
  let { data }: { data: any } = $props();
  const posts = data.posts;
  const category = data.category;
  
  // Format category name for title display
  const titleDisplay = category === 'daily' ? 'Daily Current Affairs' : 'Weekly Current Affairs';
  const subtitleDisplay = category === 'daily' 
    ? 'Fresh current affairs updates curated every morning from major news portals.'
    : 'Comprehensive weekly current affairs summaries and editorial critiques published every Sunday.';
  
  const themeColor = category === 'daily' ? '#059669' : '#3b82f6';
</script>

<svelte:head>
  <title>{titleDisplay} – Alpine IAS</title>
  <meta name="description" content="{subtitleDisplay} Detailed explanations for UPSC CSE preparation." />
</svelte:head>

<div class="bg-gray-50 min-h-screen pt-8 pb-20 relative overflow-hidden">
  <!-- Decorative Ambient Blobs -->
  <div class="absolute top-[10%] left-[-5%] w-[35vw] h-[35vw] bg-emerald-100/10 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute top-[40%] right-[-5%] w-[40vw] h-[40vw] bg-teal-100/10 rounded-full blur-3xl pointer-events-none"></div>

  <main class="max-w-6xl mx-auto px-4 relative z-10">
    <!-- Breadcrumb -->
    <div class="mb-6">
      <a href="/current-affairs" class="text-sm font-bold text-emerald-700 hover:text-emerald-800 transition flex items-center gap-1">
        ← Back to Options
      </a>
    </div>

    <!-- Title Card Header -->
    <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm mb-12 relative overflow-hidden">
      <div class="absolute top-0 left-0 right-0 h-1.5" style="background-color: {themeColor}"></div>
      <span class="text-xs font-bold uppercase tracking-widest block mb-2" style="color: {themeColor}">Alpine IAS Library</span>
      <h1 class="text-3xl md:text-4xl font-black text-gray-900 mb-3 uppercase tracking-tight">{titleDisplay}</h1>
      <p class="text-gray-500 max-w-3xl text-sm md:text-base leading-relaxed">{subtitleDisplay}</p>
    </div>

    <!-- Grid List of Articles -->
    {#if posts && posts.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each posts as post}
          <a 
            href={`/current-affairs/${category}/${post.slug}`} 
            class="article-card bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between transition-all"
            style="--accent: {themeColor}"
          >
            <div class="p-6">
              <!-- Meta Row -->
              <div class="flex justify-between items-center mb-3">
                <span 
                  class="text-[10px] font-extrabold px-2 py-0.5 rounded uppercase tracking-wider"
                  style="background-color: {themeColor}12; color: {themeColor}"
                >
                  {category}
                </span>
                <span class="text-xs text-gray-400 font-semibold">{post.metadata.date || 'LATEST'}</span>
              </div>

              <!-- Title -->
              <h3 class="text-lg font-bold text-gray-950 mb-2 leading-snug hover:text-emerald-800 transition-colors">
                {post.metadata.title}
              </h3>
              
              <!-- Description -->
              <p class="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-6">
                {post.metadata.description || 'Access today\'s detail coverage of critical issues with UPSC syllabus mapping...'}
              </p>
            </div>

            <!-- Read link footer -->
            <div class="px-6 py-4 bg-gray-50/50 border-t border-gray-50 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-gray-800 group-hover:text-emerald-800 transition-colors">
              <span>Read Article</span>
              <svg class="w-4 h-4 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        {/each}
      </div>
    {:else}
      <!-- Empty state -->
      <div class="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto">
        <svg class="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v1m2 4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2V11" />
        </svg>
        <h3 class="text-lg font-bold text-gray-800">No articles available</h3>
        <p class="text-sm text-gray-500 mt-1">Our academic team is currently preparing the next update. Please check back shortly.</p>
      </div>
    {/if}
  </main>
</div>

<style>
  .article-card {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease;
  }
  .article-card:hover {
    transform: translateY(-5px);
    border-color: var(--accent);
    box-shadow: 0 10px 15px -3px rgba(0,0,0,0.06);
  }
  .article-card:hover svg {
    transform: translateX(4px);
    color: var(--accent);
  }
  .article-card:hover span {
    color: var(--accent);
  }
</style>
