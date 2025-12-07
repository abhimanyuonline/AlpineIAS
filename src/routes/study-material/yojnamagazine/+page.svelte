<script>
  let showIssues = false;
  let showWhyImportant = false;

  function toggleIssues() {
    showIssues = !showIssues;
  }

  function toggleWhyImportant() {
    showWhyImportant = !showWhyImportant;
  }
</script>

<svelte:head>
  <title>Yojna Magazine (Free Download) – Alpine IAS</title>
  <meta name="description" content="Download Yojna Magazine for UPSC preparation absolutely free. Curated by Alpine IAS for serious aspirants." />
</svelte:head>

<div class="bg-gray-50">
  <main class="p-6 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-center mb-4">Yojna Magazine – Monthly Issues</h1>
    <p class="text-center mb-6">Curated for UPSC Aspirants | 100% Free | Download from Google Drive</p>

    <section class="mb-6">
      <h2 class="text-2xl font-bold">About Yojna</h2>
      <p class="mt-2 text-gray-700">
        <strong>Yojna</strong> is a monthly government publication that offers in‑depth coverage of socio‑economic and policy issues, with expert insights, case studies, and data — making it a cornerstone for UPSC preparation.
      </p>
    </section>

    <section class="mb-6">
      <button class="text-blue-600 underline" on:click={toggleIssues}>
        <span>{showIssues ? 'Hide' : 'Show'}</span> Latest Download Links
      </button>

      {#if showIssues}
        <ul class="list-disc pl-5 mt-4 space-y-2 text-green-700 text-sm">
          <li><a href="https://drive.google.com/drive/folders/1A-oIhPdeq0_x5mzQ7h9IVhyDwr_Zm0ns?usp=sharing" target="_blank" class="underline">Yojna – June 2025 Edition (Theme: Digital Governance)</a></li>
          <li><a href="https://drive.google.com/drive/folders/1A-oIhPdeq0_x5mzQ7h9IVhyDwr_Zm0ns?usp=sharing" target="_blank" class="underline">Yojna – May 2025 Edition (Theme: Rural Transformation)</a></li>
          <li><a href="https://drive.google.com/drive/folders/1A-oIhPdeq0_x5mzQ7h9IVhyDwr_Zm0ns?usp=sharing" target="_blank" class="underline">Yojna – April 2025 Edition (Theme: Innovation & Science)</a></li>
        </ul>
      {/if}
    </section>

    <section class="mb-6">
      <button class="text-blue-600 underline" on:click={toggleWhyImportant}>
        <span>{showWhyImportant ? 'Hide' : 'Show'}</span> Why Read Yojna for UPSC?
      </button>

      {#if showWhyImportant}
        <ul class="list-disc pl-5 space-y-1 text-gray-700 text-sm">
          <li>Authoritative source of recent government schemes & policy analysis</li>
          <li>Balanced pros‑and‑cons discussions foster critical perspective</li>
          <li>Supports GS‑II & III with data, case studies, statistics</li>
          <li>Ideal for mains & interview – top IAS mentors recommend it</li>
          <li>Sharpens ethical reasoning via real-world governance dilemmas</li>
        </ul>
      {/if}
    </section>

    <section class="mb-6">
      <h2 class="text-2xl font-bold">How to Read & Use Yojna</h2>
      <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-700 text-sm">
        <li>Read issues regularly aligned with syllabus topics (e.g. Governance, Economy, Science)</li>
        <li>Note editorials, case studies, example‑rich articles and statistical insights</li>
        <li>Make crisp summaries (1–2 pages) for each issue during mains prep</li>
        <li>Use magazine content to enrich essays & answers with factual depth</li>
        <li>Use summaries or original PDFs—both are effective; no need to read entire print versions</li>
      </ul>
    </section>

    <div class="flex justify-center mt-8">
      <a
        href="https://drive.google.com/drive/folders/1A-oIhPdeq0_x5mzQ7h9IVhyDwr_Zm0ns?usp=sharing"
        class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
        target="_blank"
      >
        📥 Download All Yojna Issues (Free)
      </a>
    </div>
  </main>
</div>

<style>
  a:hover {
    text-decoration: underline;
  }
</style>
