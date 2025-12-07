<script>
  let showLinks = false;
  function toggle() { showLinks = !showLinks; }
</script>

<svelte:head>
  <title>NCERT’s – Arts Books (Free Download) – Alpine IAS</title>
  <meta name="description" content="Download NCERT Arts subjects (Class 11–12) like History, Geography, Pol Science, Art & Culture – free for UPSC prep." />
</svelte:head>

<div class="bg-gray-50 min-h-screen">
  <main class="p-6 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-center mb-4">NCERT Arts Subjects (Class 11–12)</h1>
    <p class="text-center mb-6">Core NCERTs for UPSC – History, Geography, Pol Science, Sociology, Art & Culture</p>

    <section class="mb-6 space-y-4 text-gray-700 text-sm leading-relaxed">
      <h2 class="text-2xl font-bold">📘 History</h2>
      <p>
        NCERT History (Classes XI–XII): Covers themes in world and Indian history from early civilizations to modern India. Highly recommended for building a strong foundation in GS‑I (Indian heritage & culture).
      </p>

      <h2 class="text-2xl font-bold">🌍 Geography</h2>
      <p>
        NCERT Geography (XI–XII): Includes Physical Geography, Human Geography, and India-specific geography. Crucial for mapping, climatic systems, environmental zones — top choice for GS‑I and GS‑III.
      </p>

      <h2 class="text-2xl font-bold">🏛️ Political Science</h2>
      <p>
        NCERT Pol Science (XI–XII): Covers Political Theory, Constitution, Governance, and World Politics. Essential for GS‑II (Constitution, Polity, Governance, IR).
      </p>

      <h2 class="text-2xl font-bold">👥 Sociology</h2>
      <p>
        NCERT Sociology (XI–XII): Explains social structure, institutions, and change. Valuable for GS‑I and optional Sociology candidates.
      </p>

      <h2 class="text-2xl font-bold">🎨 Indian Art & Culture</h2>
      <p>
        NCERT Art & Culture (XI–XII): Covers Indian art, dance, music traditions, crafts, and culture heritage. A go-to for GS‑I and culture-centric questions.
      </p>
    </section>

    <section class="mb-6">
      <button class="text-blue-600 underline" on:click={toggle}>
        <span>{showLinks ? 'Hide' : 'Show'}</span> Download NCERT Links
      </button>

      {#if showLinks}
        <ul class="list-disc pl-5 mt-4 space-y-2 text-green-700 text-sm">
          <li><a href="https://drive.google.com/drive/folders/10Z-McQKO4OqGjJTtF7p4b3HOuFSEBMkV?usp=sharing" target="_blank" class="underline">NCERT History XI–XII PDF</a></li>
          <li><a href="https://drive.google.com/drive/folders/10Z-McQKO4OqGjJTtF7p4b3HOuFSEBMkV?usp=sharing" target="_blank" class="underline">NCERT Geography XI–XII PDF</a></li>
          <li><a href="https://drive.google.com/drive/folders/10Z-McQKO4OqGjJTtF7p4b3HOuFSEBMkV?usp=sharing" target="_blank" class="underline">NCERT Political Science XI–XII PDF</a></li>
          <li><a href="https://drive.google.com/drive/folders/10Z-McQKO4OqGjJTtF7p4b3HOuFSEBMkV?usp=sharing" target="_blank" class="underline">NCERT Sociology XI–XII PDF</a></li>
          <li><a href="https://drive.google.com/drive/folders/10Z-McQKO4OqGjJTtF7p4b3HOuFSEBMkV?usp=sharing" target="_blank" class="underline">NCERT Art & Culture XI–XII PDF</a></li>
        </ul>
      {/if}
    </section>

    <div class="flex justify-center mt-8">
      <a
        href="https://drive.google.com/drive/folders/10Z-McQKO4OqGjJTtF7p4b3HOuFSEBMkV?usp=sharing"
        target="_blank"
        class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
      >
        📥 Download All NCERT Arts PDFs
      </a>
    </div>
  </main>
</div>

<style>
  a:hover {
    text-decoration: underline;
  }
</style>
