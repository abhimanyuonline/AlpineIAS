<script>
  let show = false;
  function toggle() { show = !show; }
</script>

<svelte:head>
  <title>GS3-NOTE(Free Download) – Alpine IAS</title>
  <meta name="description" content="Download ECONOMIC SURVEY for UPSC preparation absolutely free. Curated by Alpine IAS for serious aspirants." />
</svelte:head>

<div class="bg-gray-50">
  <main class="p-6 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-center mb-4">GS3 NOTE</h1>
    <p class="text-center mb-6">Curated for UPSC Aspirants | 100% Free | Download from Google Drive</p>

    <section class="mb-6">
      <button class="text-blue-600 underline" on:click={toggle}>
        <span>{show ? 'Hide' : 'Show'}</span> Download Links
      </button>

      {#if show}
        <ul class="list-disc pl-5 mt-4 space-y-2 text-green-700 text-sm">
          <li><a href="https://drive.google.com/drive/folders/1uE0-MTrLZ5-mpc6Qm2cQYKJRvV7PKpAu?usp=sharing" target="_blank" class="underline">GS3 NOTE– Sample Download Link</a></li>
        </ul>
      {/if}
    </section>

    <div class="flex justify-center mt-8">
      <a
        href="https://drive.google.com/drive/folders/1uE0-MTrLZ5-mpc6Qm2cQYKJRvV7PKpAu?usp=sharing"
        class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
        target="_blank"
      >
        📥 Download GS3 NOTE
      </a>
    </div>
  </main>
</div>

<style>
  a:hover { text-decoration: underline; }
</style>
