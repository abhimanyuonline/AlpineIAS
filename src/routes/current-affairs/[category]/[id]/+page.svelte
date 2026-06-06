<script lang="ts">
  let { data }: { data: any } = $props();
  
  // Clean title helper for breadcrumb
  const shortTitle = data.meta.title.length > 25 
    ? data.meta.title.substring(0, 25) + '...' 
    : data.meta.title;
    
  const themeColor = data.category === 'daily' ? '#059669' : '#3b82f6';
</script>

<svelte:head>
  <title>{data.meta.title} – Alpine IAS</title>
  <meta name="description" content="{data.meta.description || 'Current affairs detailed explanation by Alpine IAS.'}" />
</svelte:head>

<link rel="stylesheet" href="/blog.css">

<div class="bg-gray-50 min-h-screen pt-6 pb-20 relative overflow-hidden">
  <!-- Decorative Ambient Blobs -->
  <div class="absolute top-[5%] left-[-10%] w-[35vw] h-[35vw] bg-emerald-100/10 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute top-[35%] right-[-10%] w-[35vw] h-[35vw] bg-blue-100/10 rounded-full blur-3xl pointer-events-none"></div>

  <main class="max-w-4xl mx-auto px-4 relative z-10">
    
    <!-- Top Navigation Row (Breadcrumb & Back Button) -->
    <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8 pb-4 border-b border-gray-150">
      <!-- Breadcrumbs -->
      <nav class="text-xs font-semibold text-gray-500 flex items-center gap-1.5 overflow-hidden whitespace-nowrap text-ellipsis">
        <a href="/" class="hover:text-emerald-700 transition">Home</a>
        <span class="text-gray-300">/</span>
        <a href="/current-affairs" class="hover:text-emerald-700 transition">Current Affairs</a>
        <span class="text-gray-300">/</span>
        <a href={`/current-affairs/${data.category}`} class="hover:text-emerald-700 transition uppercase">{data.category}</a>
        <span class="text-gray-300">/</span>
        <span class="text-gray-800 font-bold" title={data.meta.title}>{shortTitle}</span>
      </nav>

      <!-- Back button -->
      <a 
        href={`/current-affairs/${data.category}`} 
        class="inline-flex items-center text-xs font-extrabold uppercase tracking-wide px-3 py-1.5 rounded-lg bg-white border border-gray-200 text-gray-700 hover:border-gray-350 hover:bg-gray-50 hover:text-emerald-800 transition"
      >
        <svg class="mr-1.5 w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to List
      </a>
    </div>

    <!-- Article Card -->
    <article class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden p-6 md:p-10 mb-12">
      <!-- Title -->
      <h1 class="text-3xl md:text-4xl font-black text-gray-900 leading-tight mb-6 tracking-tight">
        {data.meta.title}
      </h1>

      <!-- Metadata Panel -->
      <div class="bg-gray-50 rounded-2xl p-4 mb-8 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-bold text-gray-600 border border-gray-100">
        <div class="flex items-center gap-1.5">
          <svg class="text-emerald-700 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <span>Author: {data.meta.author || 'Alpine IAS Mentor'}</span>
        </div>
        <div class="flex items-center gap-1.5">
          <svg class="text-emerald-700 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span>Published: {data.meta.date}</span>
        </div>
        <div class="flex items-center gap-1.5">
          <svg class="text-emerald-700 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 7h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          <span class="uppercase">Category: {data.category}</span>
        </div>
      </div>

      <!-- Main Blog Content -->
      <div class="blog-content prose max-w-none text-gray-800 leading-relaxed text-sm md:text-base">
        {@html data.content}
      </div>
    </article>

    <!-- Side-by-Side Placeholder Panels (Related & Comments) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <!-- Related Articles -->
      <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-1.5">
          <svg class="text-emerald-600 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          Related Articles
        </h3>
        <p class="text-gray-500 text-xs leading-relaxed">
          More related articles covering this topic and connected UPSC syllabus segments are being compiled by our mentors. Coming soon!
        </p>
      </div>

      <!-- Comments Section -->
      <div class="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
        <h3 class="text-lg font-bold text-gray-900 mb-3 flex items-center gap-1.5">
          <svg class="text-emerald-600 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          Aspirant Discussions
        </h3>
        <p class="text-gray-500 text-xs leading-relaxed">
          Share your doubts, answers, and study notes on this article. Comment and peer review functionality will be active shortly.
        </p>
      </div>
    </div>

  </main>
</div>

<style>
  /* Base typography overrides for raw HTML blog content */
  .blog-content :global(p) {
    margin-bottom: 1.25rem;
    color: #374151;
  }
  .blog-content :global(h2) {
    font-size: 1.4rem;
    font-weight: 800;
    color: #111827;
    margin-top: 2rem;
    margin-bottom: 1rem;
    letter-spacing: -0.01em;
    text-transform: uppercase;
    border-bottom: 1.5px solid #f3f4f6;
    padding-bottom: 0.25rem;
  }
  .blog-content :global(h3) {
    font-size: 1.15rem;
    font-weight: 700;
    color: #1f2937;
    margin-top: 1.5rem;
    margin-bottom: 0.75rem;
  }
  .blog-content :global(ul) {
    list-style-type: disc;
    padding-left: 1.5rem;
    margin-bottom: 1.25rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
  .blog-content :global(li) {
    font-size: 0.925rem;
    color: #4b5563;
  }
  .blog-content :global(strong) {
    color: #111827;
    font-weight: 700;
  }
</style>
