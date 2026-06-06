<script lang="ts">
  let { data }: { data: any } = $props();
  const meta = data.meta;
  const questions = data.questions;
  
  let userAnswers = $state<(string | null)[]>(Array(questions.length).fill(null));
  let submitted = $state(false);
  let score = $state(0);
  let currentQuestion = $state(0);
  
  function selectAnswer(questionIndex: number, optionKey: string) {
    userAnswers[questionIndex] = optionKey;
  }
  
  function submitQuiz() {
    score = userAnswers.reduce((acc: number, ans: string | null, idx: number) => {
      return acc + (ans === questions[idx].Correct ? 1 : 0);
    }, 0);
    submitted = true;
  }
  
  function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
      currentQuestion++;
    }
  }
  
  function prevQuestion() {
    if (currentQuestion > 0) {
      currentQuestion--;
    }
  }
  
  function jumpToQuestion(index: number) {
    currentQuestion = index;
  }
  
  $effect(() => {
    // Scroll to top when changing questions
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }
  });
</script>

<svelte:head>
  <title>{meta.name} – Alpine IAS Quiz</title>
  <meta name="description" content="{meta.description || 'Test your knowledge on key UPSC topics.'}" />
</svelte:head>

<div class="bg-gray-50 min-h-screen pt-8 pb-20 relative overflow-hidden">
  <!-- Decorative Ambient Blobs -->
  <div class="absolute top-[10%] left-[-5%] w-[30vw] h-[30vw] bg-emerald-100/15 rounded-full blur-3xl pointer-events-none"></div>
  <div class="absolute top-[40%] right-[-5%] w-[35vw] h-[35vw] bg-teal-100/10 rounded-full blur-3xl pointer-events-none"></div>

  <main class="max-w-3xl mx-auto px-4 relative z-10">
    
    <!-- Breadcrumb back link -->
    <div class="mb-6">
      <a href="/quizzes" class="text-sm font-bold text-emerald-700 hover:text-emerald-800 transition flex items-center gap-1">
        ← Back to Quizzes
      </a>
    </div>

    <!-- Quiz Info Header -->
    <div class="bg-white rounded-3xl p-6 md:p-8 border border-gray-100 shadow-sm mb-8 relative overflow-hidden text-center">
      <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-600 to-teal-600"></div>
      <h1 class="text-2xl md:text-3xl font-black text-gray-900 mb-2 uppercase tracking-tight">{meta.name}</h1>
      <p class="text-gray-500 text-xs md:text-sm max-w-xl mx-auto leading-relaxed">{meta.description}</p>
      
      {#if !submitted}
        <!-- Progress Bar -->
        <div class="mt-6 max-w-md mx-auto">
          <div class="bg-gray-100 rounded-full h-2 shadow-inner overflow-hidden">
            <div 
              class="bg-emerald-600 h-2 rounded-full transition-all duration-300" 
              style="width: {(userAnswers.filter(a => a !== null).length / questions.length) * 100}%"
            ></div>
          </div>
          <p class="mt-2 text-xs font-bold text-gray-400 uppercase tracking-wider">
            {userAnswers.filter(a => a !== null).length} of {questions.length} questions answered
          </p>
        </div>
      {/if}
    </div>

    {#if !submitted}
      <!-- Single Question Challenge Card -->
      <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-8">
        
        <!-- Top Nav Indicator Grid -->
        <div class="bg-gradient-to-r from-emerald-950 to-teal-950 p-4 px-6 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <span class="text-xs font-extrabold uppercase tracking-widest text-emerald-300">
            Question {currentQuestion + 1} of {questions.length}
          </span>
          <!-- Bullet Navs -->
          <div class="flex flex-wrap justify-center gap-1.5">
            {#each questions as _, i}
              <button 
                onclick={() => jumpToQuestion(i)}
                class="w-7 h-7 flex items-center justify-center rounded-lg text-xs font-bold transition-all
                  {i === currentQuestion 
                    ? 'bg-white text-emerald-950 scale-110 shadow-md' 
                    : userAnswers[i] !== null
                      ? 'bg-emerald-700/60 text-emerald-100 border border-emerald-600/30'
                      : 'bg-emerald-950/40 text-emerald-300 hover:bg-emerald-900/60'}"
              >
                {i + 1}
              </button>
            {/each}
          </div>
        </div>
        
        <div class="p-6 md:p-8">
          <!-- Question Text -->
          <h3 class="text-lg md:text-xl font-bold text-gray-950 mb-8 leading-snug">
            {questions[currentQuestion].Question}
          </h3>
          
          <!-- Options list -->
          <div class="space-y-3.5">
            {#each ['A', 'B', 'C', 'D'] as option}
              {@const isSelected = userAnswers[currentQuestion] === option}
              <button
                class="w-full text-left p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between
                  {isSelected 
                    ? 'bg-emerald-50/50 border-emerald-500 ring-1 ring-emerald-500 shadow-sm' 
                    : 'bg-white border-gray-150 hover:border-gray-300 hover:bg-gray-50/50'}"
                onclick={() => selectAnswer(currentQuestion, option)}
              >
                <div class="flex items-center gap-3">
                  <div class="w-6 h-6 rounded-lg flex items-center justify-center border-2 font-bold text-xs transition-all
                    {isSelected
                      ? 'border-emerald-600 bg-emerald-600 text-white'
                      : 'border-gray-300 text-gray-400'}">
                    {option}
                  </div>
                  <span class="text-sm font-medium text-gray-700">{questions[currentQuestion][`${option}`]}</span>
                </div>
                
                {#if isSelected}
                  <svg class="text-emerald-600 w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                {/if}
              </button>
            {/each}
          </div>
          
          <!-- Navigation Footer -->
          <div class="mt-10 pt-6 border-t border-gray-100 flex items-center justify-between gap-4">
            <button
              onclick={prevQuestion}
              class="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-gray-200 text-xs font-bold uppercase tracking-wider text-gray-700 hover:bg-gray-50 disabled:opacity-40 disabled:pointer-events-none transition"
              disabled={currentQuestion === 0}
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Previous
            </button>
            
            {#if currentQuestion === questions.length - 1}
              <button
                onclick={submitQuiz}
                class="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-md shadow-emerald-600/10 disabled:opacity-40 disabled:pointer-events-none"
                disabled={userAnswers.includes(null)}
              >
                Submit Quiz
              </button>
            {:else}
              <button
                onclick={nextQuestion}
                class="inline-flex items-center gap-1.5 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition shadow-md shadow-emerald-600/10"
              >
                Next
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            {/if}
          </div>
        </div>
      </div>
    {:else}
      <!-- Results View -->
      <div class="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden mb-8">
        <div class="bg-gradient-to-r from-emerald-950 to-teal-950 p-6 text-center text-white">
          <h2 class="text-xl font-bold uppercase tracking-wider">Quiz Completed</h2>
        </div>
        
        <div class="p-6 md:p-8">
          <div class="flex flex-col items-center justify-center py-6 border-b border-gray-50 mb-8">
            <div class="w-28 h-28 rounded-full flex flex-col items-center justify-center border-4 font-black text-2xl mb-4
              {(score / questions.length) >= 0.7 ? 'border-green-500 bg-green-50/50 text-green-700' : 
              (score / questions.length) >= 0.4 ? 'border-amber-500 bg-amber-50/50 text-amber-700' : 'border-rose-500 bg-rose-50/50 text-rose-700'}">
              <span>{Math.round((score / questions.length) * 100)}%</span>
            </div>
            
            <h3 class="text-2xl font-black text-gray-900 uppercase tracking-tight">Your Score: {score} / {questions.length}</h3>
            <p class="text-gray-500 text-xs font-semibold uppercase mt-1">
              {(score / questions.length) >= 0.7 ? '🎉 Excellent Job! Ready for UPSC.' : 
              (score / questions.length) >= 0.4 ? '👍 Good Effort! Keep revising.' : '💪 Keep practicing! Try once more.'}
            </p>
          </div>
          
          <h3 class="text-lg font-bold text-gray-900 mb-4 uppercase tracking-wider">Review Your Answers</h3>
          
          <div class="space-y-4">
            {#each questions as q, i}
              {@const isCorrect = userAnswers[i] === q.Correct}
              <div class="p-5 rounded-2xl border border-gray-100 bg-gray-50/30">
                <h4 class="font-bold text-sm text-gray-950 leading-snug flex items-start gap-2">
                  <span class="text-xs font-black text-gray-400 uppercase mt-0.5">Q{i + 1}:</span>
                  <span>{q.Question}</span>
                </h4>
                
                <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {#each ['A', 'B', 'C', 'D'] as option}
                    {@const isUserChoice = userAnswers[i] === option}
                    {@const isCorrectChoice = q.Correct === option}
                    <div class="flex items-center justify-between p-3 rounded-xl text-xs font-semibold border
                      {isCorrectChoice 
                        ? 'bg-green-50 border-green-200 text-green-750' 
                        : isUserChoice 
                          ? 'bg-red-50 border-red-200 text-red-750' 
                          : 'bg-white border-gray-150 text-gray-600'}">
                      <div class="flex items-center gap-2">
                        <span class="font-black uppercase">{option}:</span>
                        <span>{q[`${option}`]}</span>
                      </div>
                      
                      {#if isCorrectChoice}
                        <svg class="text-green-600 w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      {:else if isUserChoice}
                        <svg class="text-red-500 w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="2.5">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      {/if}
                    </div>
                  {/each}
                </div>
              </div>
            {/each}
          </div>
          
          <div class="mt-10 pt-6 border-t border-gray-100 flex justify-center">
            <a
              href="/quizzes"
              class="px-8 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-extrabold uppercase tracking-wider transition shadow-md shadow-emerald-600/10"
            >
              Back to All Quizzes
            </a>
          </div>
        </div>
      </div>
    {/if}
  </main>
</div>