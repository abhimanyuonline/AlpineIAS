<script>
    let { data } = $props();
    const quizzes = data.quizzes;
    console.log(quizzes);
</script>

<div class="py-8 px-4 mx-auto max-w-screen-xl">
    <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold" style="color: #016630;">
            Available Quizzes
        </h1>
        <div class="relative">
            <input type="text" placeholder="Search quizzes..." class="py-2 pl-10 pr-4 w-64 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 absolute left-3 top-2.5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
            </svg>
        </div>
    </div>
    
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each quizzes as quiz}
            <a href={`/quizzes/${quiz.slug}`} class="group">
                <div class="flex flex-col h-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white border" style="border-color: #4ade80;">
                    <div class="h-2" style="background-color: #016630;"></div>
                    <div class="flex-1 p-6">
                        <div class="flex items-center mb-4">
                            <div class="p-2 rounded-full mr-3" style="background-color: rgba(1, 102, 48, 0.1);">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" style="color: #016630;" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                                </svg>
                            </div>
                            <h2 class="text-xl font-semibold text-gray-800 group-hover:transition-colors duration-300" style="group-hover:color: #016630;">
                                {quiz.metadata.title || 'Quiz Title'}
                            </h2>
                        </div>
                        <p class="text-gray-600 text-sm mb-4 line-clamp-2">
                            {quiz.metadata.description || 'A beginner-friendly multiple choice quiz covering basic topics in physics, chemistry, biology, and astronomy...'}
                        </p>
                        <div class="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium text-white" style="background-color: #016630;">
                                {quiz.metadata.difficulty || 'General'}
                            </span>
                            <span class="text-sm text-gray-500 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                                {quiz.metadata.timing || '5 mins'}
                            </span>
                        </div>
                    </div>
                    <div class="px-6 py-3 bg-green-600 flex justify-center">
                        <span class="text-white font-medium flex items-center group-hover:translate-x-1 transition-transform duration-300">
                            Start Quiz
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </div>
                </div>
            </a>
        {/each}
    </div>
    
    <!-- Empty state for when there are no quizzes -->
    {#if quizzes.length === 0}
        <div class="text-center py-12 px-4 bg-white rounded-lg border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h3 class="mt-4 text-lg font-medium text-gray-800">No quizzes available</h3>
            <p class="mt-1 text-sm text-gray-500">Check back later for new quizzes!</p>
        </div>
    {/if}
    
    <div class="mt-8 flex justify-center">
        <button class="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full flex items-center transition-colors duration-300">
            <span>View All Quizzes</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
        </button>
    </div>
</div>