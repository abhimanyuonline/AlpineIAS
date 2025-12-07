<script>
  let show = false;
  function toggle() {
    show = !show;
  }
</script>

<svelte:head>
  <title>UPSC Syllabus (Prelims + Mains) – Alpine IAS</title>
  <meta name="description" content="Get the detailed UPSC syllabus for Prelims and Mains including GS Papers, Essay, and Interview. Download the official PDF for free." />
</svelte:head>

<div class="bg-gray-50 min-h-screen">
  <main class="p-6 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-center mb-4">UPSC Syllabus – Prelims & Mains</h1>
    <p class="text-center mb-6">Curated for Serious Aspirants | 100% Free | Downloadable PDF</p>

    <section class="mb-6 text-gray-700 text-sm leading-relaxed space-y-4">
      <h2 class="text-2xl font-bold">📝 Prelims Syllabus (Objective)</h2>
      <ul class="list-disc pl-5 space-y-1">
        <li><strong>Paper I – General Studies:</strong> Current events, History of India, Indian Polity, Economy, Geography, Environment, and General Science.</li>
        <li><strong>Paper II – CSAT (Qualifying):</strong> Comprehension, Logical reasoning, Analytical ability, Decision-making, Basic numeracy (Class X level).</li>
      </ul>

      <h2 class="text-2xl font-bold">📘 Mains Syllabus (Descriptive)</h2>
      <ul class="list-disc pl-5 space-y-1">
        <li><strong>Paper A:</strong> Indian Language (qualifying)</li>
        <li><strong>Paper B:</strong> English (qualifying)</li>
        <li><strong>GS Paper I:</strong> Indian Heritage, History, Geography, and Indian Society</li>
        <li><strong>GS Paper II:</strong> Constitution, Governance, International Relations</li>
        <li><strong>GS Paper III:</strong> Economy, Science & Tech, Environment, Internal Security, Disaster Management</li>
        <li><strong>GS Paper IV:</strong> Ethics, Integrity, and Aptitude</li>
        <li><strong>Essay:</strong> Two essays on abstract/social/philosophical topics</li>
        <li><strong>Optional Subject Papers I & II:</strong> Subject chosen by the candidate (e.g., Sociology, PSIR, Geography)</li>
      </ul>

      <h2 class="text-2xl font-bold">🎙️ Personality Test (Interview)</h2>
      <p>The interview evaluates intellectual and moral qualities such as balance of judgment, critical thinking, integrity, and leadership. No fixed syllabus.</p>
    </section>

    <section class="mb-6">
      <button class="text-blue-600 underline" on:click={toggle}>
        <span>{show ? 'Hide' : 'Show'}</span> Download Official Syllabus PDF
      </button>

      {#if show}
        <ul class="list-disc pl-5 mt-4 space-y-2 text-green-700 text-sm">
          <li><a href="https://drive.google.com/drive/folders/15eDW0BNwfJ7JI4QY1Z-C7Yem2X0LnjSg?usp=sharing" target="_blank" class="underline">📄 UPSC Prelims + Mains Official Syllabus PDF</a></li>
        </ul>
      {/if}
    </section>

    <div class="flex justify-center mt-8">
      <a
        href="https://drive.google.com/drive/folders/15eDW0BNwfJ7JI4QY1Z-C7Yem2X0LnjSg?usp=sharing"
        class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
        target="_blank"
      >
        📥 Download Full Syllabus PDF
      </a>
    </div>
  </main>
</div>

<style>
  a:hover {
    text-decoration: underline;
  }
</style>
