<script lang="ts">
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';

  let showPopup = false;
  let videoId = 'QE-kxAHRfgs';

  onMount(() => {
    // Small delay for better UX
    setTimeout(() => {
      showPopup = true;
    }, 1000);
  });

  function closePopup() {
    showPopup = false;
  }
</script>

{#if showPopup}
  <div class="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" transition:fade>
    <div class="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl overflow-hidden" transition:scale={{ start: 0.9, duration: 300 }}>
      <!-- Header with Close Button -->
      <div class="absolute top-0 right-0 z-10 p-4">
        <button 
          on:click={closePopup}
          class="bg-black/50 hover:bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center transition-colors duration-300 backdrop-blur-md"
          aria-label="Close popup"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <!-- YouTube Embed -->
      <div class="relative w-full aspect-video bg-gray-900">
        <iframe
          class="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
{/if}
