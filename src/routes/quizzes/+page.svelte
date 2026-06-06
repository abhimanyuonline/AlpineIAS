<script lang="ts">
  let { data }: { data: any } = $props();
  const quizzes = data.quizzes;
  
  let searchQuery = $state("");
  
  // Filter quizzes based on search query reactively
  let filteredQuizzes = $derived(
    quizzes.filter((quiz: any) => 
      quiz.metadata.title?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      quiz.metadata.description?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  // Difficulty color mapper
  function getDifficultyStyle(difficulty = 'General') {
    const d = difficulty.toLowerCase();
    if (d === 'easy') return { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-150' };
    if (d === 'medium') return { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-150' };
    if (d === 'hard') return { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-150' };
    return { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-150' };
  }
</script>

<svelte:head>
  <title>UPSC MCQ Quizzes – Alpine IAS</title>
  <meta name="description" content="Test your UPSC preparation with our interactive daily quiz covering history, geography, polity, and economy." />
</svelte:head>

<div class="bg-gray-50 min-h-screen pt-12 pb-20 relative overflow-hidden">
  <!-- Decorative Ambient Blobs -->
  <div class="absolute top-[-5%] left-[-10%] w-[40vw] h-[40vw] bg-emerald-100/10 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute bottom-[-5%] right-[-10%] w-[40vw] h-[40vw] bg-teal-100/10 rounded-full blur-3xl pointer-events-none"></div>

  <main class="max-w-6xl mx-auto px-4 relative z-10">
    
    <!-- Header with Search -->
    <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12 pb-6 border-b border-gray-150">
      <div>
        <span class="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
          Assessment Centre
        </span>
        <h1 class="text-3xl md:text-4xl font-black text-gray-900 uppercase tracking-tight">Interactive Quizzes</h1>
        <p class="text-gray-500 text-sm mt-1 max-w-xl">Challenge your UPSC knowledge with our daily topic-wise mock tests.</p>
      </div>

      <!-- Search Input -->
      <div class="relative w-full md:w-80">
        <input 
          type="text" 
          placeholder="Search quizzes..." 
          bind:value={searchQuery}
          class="w-full py-3 pl-11 pr-4 rounded-xl border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition"
        >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 absolute left-4 top-3.5" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>

    <!-- Quizzes Grid -->
    {#if filteredQuizzes.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each filteredQuizzes as quiz}
          {@const diff = getDifficultyStyle(quiz.metadata.difficulty)}
          <a href={`/quizzes/${quiz.slug}`} class="quiz-card bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden flex flex-col justify-between transition-all">
            <div class="p-6 flex-grow flex flex-col">
              <!-- Meta Row -->
              <div class="flex items-center justify-between mb-4">
                <span class="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] font-extrabold uppercase tracking-wide border {diff.bg} {diff.text} {diff.border}">
                  {quiz.metadata.difficulty || 'General'}
                </span>
                <span class="text-xs text-gray-400 font-bold flex items-center gap-1.5">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {quiz.metadata.timing || '5 mins'}
                </span>
              </div>

              <!-- Title -->
              <h3 class="text-xl font-bold text-gray-950 mb-2 leading-snug">
                {quiz.metadata.title || 'UPSC Daily Quiz'}
              </h3>

              <!-- Description -->
              <p class="text-gray-500 text-xs leading-relaxed mb-6 flex-grow line-clamp-3">
                {quiz.metadata.description || 'A structured multiple-choice quiz covering key topics in general studies and current updates...'}
              </p>
            </div>

            <!-- Start Action Bar -->
            <div class="px-6 py-4 bg-emerald-600 flex items-center justify-between text-xs font-bold uppercase tracking-wider text-white">
              <span>Start Challenge</span>
              <svg class="w-4 h-4 transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </a>
        {/each}
      </div>
    {:else}
      <!-- Empty State -->
      <div class="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm max-w-xl mx-auto">
        <svg class="h-16 w-16 mx-auto text-gray-300 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <h3 class="text-lg font-bold text-gray-800">No quizzes match your search</h3>
        <p class="text-sm text-gray-500 mt-1">Try checking for spelling or searching for generic topics like "UPSC".</p>
      </div>
    {/if}

  </main>
</div>

<style>
  .quiz-card {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease, border-color 0.3s ease;
  }
  .quiz-card:hover {
    transform: translateY(-5px);
    border-color: #059669;
    box-shadow: 0 10px 15px -3px rgba(5, 150, 105, 0.1);
  }
  .quiz-card:hover svg {
    transform: translateX(4px);
  }
</style>