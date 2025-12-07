<script>
  let show = false;
  function toggle() { show = !show; }
</script>

<svelte:head>
  <title>ECONOMIC SURVEY (Free Download) – Alpine IAS</title>
  <meta name="description" content="Download Economic Survey of India for UPSC preparation absolutely free. Curated by Alpine IAS for serious aspirants." />
</svelte:head>

<div class="bg-gray-50">
  <main class="p-6 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-center mb-4">Economic Survey of India</h1>
    <p class="text-center mb-6">Curated for UPSC Aspirants | 100% Free | Download from Google Drive</p>

    <!-- 📘 About Section -->
    <section class="mb-6">
      <h2 class="text-2xl font-bold">What is the Economic Survey?</h2>
      <p class="mt-2 text-gray-700 text-sm leading-relaxed">
        The <strong>Economic Survey of India</strong> is an annual document released by the Ministry of Finance, Government of India, one day before the Union Budget. It reviews the developments in the Indian economy over the past financial year, summarizes the performance of major development programs, and highlights policy initiatives of the government.
      </p>
      <p class="mt-2 text-gray-700 text-sm leading-relaxed">
        The survey is prepared by the Department of Economic Affairs under the guidance of the Chief Economic Advisor. It acts as a key source of authentic data and analysis for UPSC aspirants, especially for <strong>GS Paper 3 (Economy)</strong>, <strong>Essay</strong>, and the <strong>Interview</strong> stage.
      </p>
    </section>

    <!-- 📌 Importance Section -->
    <section class="mb-6">
      <h2 class="text-2xl font-bold">Why Read the Economic Survey for UPSC?</h2>
      <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-700 text-sm">
        <li>Provides data-backed insights into government schemes and fiscal trends</li>
        <li>Essential for understanding macroeconomic indicators (GDP, inflation, current account, etc.)</li>
        <li>Rich source of examples, case studies, and reform recommendations</li>
        <li>Includes key themes like digital economy, green growth, employment trends, etc.</li>
        <li>Highly recommended by toppers and UPSC mentors</li>
      </ul>
    </section>

    <!-- 🔽 Downloads Section -->
    <section class="mb-6">
      <button class="text-blue-600 underline" on:click={toggle}>
        <span>{show ? 'Hide' : 'Show'}</span> Download Links
      </button>

      {#if show}
        <ul class="list-disc pl-5 mt-4 space-y-2 text-green-700 text-sm">
          <li><a href="https://drive.google.com/drive/folders/1Gat66nyXpOxIC7kderePkipYCSQmfHlf?usp=sharing" target="_blank" class="underline">📘 Economic Survey 2023-24 (Volume 1 & 2)</a></li>
          <li><a href="https://drive.google.com/drive/folders/1Gat66nyXpOxIC7kderePkipYCSQmfHlf?usp=sharing" target="_blank" class="underline">📘 Economic Survey 2022-23</a></li>
          <li><a href="https://drive.google.com/drive/folders/1Gat66nyXpOxIC7kderePkipYCSQmfHlf?usp=sharing" target="_blank" class="underline">📘 Summary Notes for Economic Survey (Compiled for UPSC)</a></li>
        </ul>
      {/if}
    </section>

    <!-- 🔗 Download All -->
    <div class="flex justify-center mt-8">
      <a
        href="https://drive.google.com/drive/folders/1Gat66nyXpOxIC7kderePkipYCSQmfHlf?usp=sharing"
        class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
        target="_blank"
      >
        📥 Download All Economic Survey PDFs
      </a>
    </div>
  </main>
</div>

<style>
  a:hover { text-decoration: underline; }
</style>
