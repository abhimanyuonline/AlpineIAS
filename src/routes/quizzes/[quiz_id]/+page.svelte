<script>
  let { data } = $props();
  const meta = data.meta;
  const questions = data.questions;
  
  let userAnswers = $state(Array(questions.length).fill(null));
  let submitted = $state(false);
  let score = $state(0);
  let currentQuestion = $state(0);
  
  function selectAnswer(questionIndex, optionKey) {
      userAnswers[questionIndex] = optionKey;
  }
  
  function submitQuiz() {
      score = userAnswers.reduce((acc, ans, idx) => {
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
  
  function jumpToQuestion(index) {
      currentQuestion = index;
  }
  
  $effect(() => {
      // Scroll to top when changing questions
      if (typeof window !== 'undefined') {
          window.scrollTo(0, 0);
      }
  });
</script>

<div class="max-w-4xl mx-auto py-8 px-4">
  <!-- Quiz Header -->
  <div class="mb-8 text-center">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">{meta.name}</h1>
      <p class="text-gray-600 max-w-2xl mx-auto">{meta.description}</p>
      
      {#if !submitted}
          <div class="mt-6 bg-white rounded-full h-2.5 shadow overflow-hidden">
              <div class="bg-green-600 h-2.5 rounded-full" style="width: {(userAnswers.filter(Boolean).length / questions.length) * 100}%"></div>
          </div>
          <p class="mt-2 text-sm text-gray-600">{userAnswers.filter(Boolean).length} of {questions.length} questions answered</p>
      {/if}
  </div>

  {#if !submitted}
      <!-- Single Question View -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div class="bg-green-600 p-4 text-white flex justify-between items-center">
              <h2 class="font-medium">Question {currentQuestion + 1} of {questions.length}</h2>
              <div class="flex space-x-1">
                  {#each questions as _, i}
                      <button 
                          on:click={() => jumpToQuestion(i)}
                          class="w-8 h-8 flex items-center justify-center rounded-full text-sm font-medium
                              {i === currentQuestion 
                                  ? 'bg-white text-green-600' 
                                  : userAnswers[i] !== null
                                      ? 'bg-green-500 text-white'
                                      : 'bg-green-700 text-white'}"
                      >
                          {i + 1}
                      </button>
                  {/each}
              </div>
          </div>
          
          <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-800 mb-6">{questions[currentQuestion].Question}</h3>
              
              <div class="space-y-3">
                  {#each ['A', 'B', 'C', 'D'] as option}
                      <button
                          class="w-full text-left p-4 border rounded-lg transition-all
                              {userAnswers[currentQuestion] === option 
                                  ? 'bg-green-50 border-green-400 ring-2 ring-green-400'
                                  : 'bg-white border-gray-300 hover:bg-gray-50'}"
                          on:click={() => selectAnswer(currentQuestion, option)}
                      >
                          <div class="flex items-center">
                              <div class="flex-shrink-0 mr-3">
                                  <div class="w-6 h-6 rounded-full flex items-center justify-center border-2
                                      {userAnswers[currentQuestion] === option
                                          ? 'border-green-500 bg-green-500 text-white'
                                          : 'border-gray-400 text-transparent'}">
                                      {#if userAnswers[currentQuestion] === option}
                                          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                          </svg>
                                      {/if}
                                  </div>
                              </div>
                              <div>
                                  <strong class="text-gray-800">{option}:</strong> 
                                  <span class="text-gray-700">{questions[currentQuestion][`${option}`]}</span>
                              </div>
                          </div>
                      </button>
                  {/each}
              </div>
              
              <div class="mt-8 flex justify-between">
                  <button
                      on:click={prevQuestion}
                      class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 flex items-center"
                      disabled={currentQuestion === 0}
                  >
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                      </svg>
                      Previous
                  </button>
                  
                  {#if currentQuestion === questions.length - 1}
                      <button
                          on:click={submitQuiz}
                          class="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                          disabled={userAnswers.includes(null)}
                      >
                          Submit Quiz
                      </button>
                  {:else}
                      <button
                          on:click={nextQuestion}
                          class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 flex items-center"
                      >
                          Next
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                          </svg>
                      </button>
                  {/if}
              </div>
          </div>
      </div>
  {:else}
      <!-- Results View -->
      <div class="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
          <div class="bg-green-600 p-4 text-white">
              <h2 class="text-xl font-semibold">Quiz Results</h2>
          </div>
          
          <div class="p-6">
              <div class="flex flex-col items-center justify-center py-8">
                  <div class="w-32 h-32 rounded-full bg-gray-100 flex items-center justify-center border-8 
                      {score / questions.length >= 0.7 ? 'border-green-500' : 
                      score / questions.length >= 0.4 ? 'border-yellow-500' : 'border-red-500'}">
                      <span class="text-3xl font-bold">
                          {Math.round((score / questions.length) * 100)}%
                      </span>
                  </div>
                  
                  <h3 class="text-2xl font-bold mt-4 text-gray-800">Your Score: {score} / {questions.length}</h3>
                  <p class="text-gray-600 mt-2">
                      {score / questions.length >= 0.7 ? 'Excellent job!' : 
                      score / questions.length >= 0.4 ? 'Good effort!' : 'Keep practicing!'}
                  </p>
              </div>
              
              <h3 class="text-xl font-semibold mt-8 mb-4 text-gray-800">Review Your Answers</h3>
              
              <div class="space-y-6">
                  {#each questions as q, i}
                      <div class="p-4 bg-gray-50 rounded-lg border border-gray-200">
                          <h4 class="font-medium text-gray-800">Q{i + 1}: {q.Question}</h4>
                          
                          <div class="mt-3 space-y-2">
                              {#each ['A', 'B', 'C', 'D'] as option}
                                  <div class="flex items-center p-2 rounded
                                      {option === q.Correct ? 'bg-green-100' : 
                                      option === userAnswers[i] && option !== q.Correct ? 'bg-red-100' : 'bg-white'}">
                                      <div class="flex-shrink-0 mr-3">
                                          {#if option === q.Correct}
                                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                              </svg>
                                          {:else if option === userAnswers[i] && option !== q.Correct}
                                              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
                                                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                                              </svg>
                                          {:else}
                                              <div class="w-5 h-5"></div>
                                          {/if}
                                      </div>
                                      <div>
                                          <span class="font-medium text-gray-800">{option}:</span> 
                                          <span class="text-gray-700">{q[`${option}`]}</span>
                                      </div>
                                  </div>
                              {/each}
                          </div>
                      </div>
                  {/each}
              </div>
              
              <div class="mt-8 flex justify-center">
                  <button
                      class="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium"
                  >
                      Back to All Quizzes
                  </button>
              </div>
          </div>
      </div>
  {/if}
</div>