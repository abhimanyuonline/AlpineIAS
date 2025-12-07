<script>
  let showBooks = false;
  function toggle() { showBooks = !showBooks; }
</script>

<svelte:head>
  <title>Book List for UPSC (Free PDF) – Alpine IAS</title>
  <meta name="description" content="Download the most recommended book list for UPSC Prelims, Mains (GS), and Essay preparation in PDF format." />
</svelte:head>

<div class="bg-gray-50 min-h-screen">
  <main class="p-6 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-center mb-4">UPSC Book List</h1>
    <p class="text-center mb-6">Standard & Recommended Books for Prelims and Mains – Curated by Toppers & Mentors</p>

    <section class="mb-6 text-gray-700 text-sm leading-relaxed space-y-4">
      <h2 class="text-2xl font-bold">📘 Prelims (General Studies)</h2>
      <ul class="list-disc pl-5 space-y-1">
        <li>NCERTs (Class 6–12) – History, Geography, Polity, Economics, Science</li>
        <li>Indian Polity – M. Laxmikanth</li>
        <li>Indian Economy – Ramesh Singh / Nitin Singhania (for theory)</li>
        <li>Geography – G.C. Leong + Certificate Physical Geography (NCERTs)</li>
        <li>History – Spectrum (Modern) + NCERT Ancient & Medieval</li>
        <li>Environment – Shankar IAS Book</li>
        <li>Current Affairs – Newspaper + Monthly Magazines (e.g. Vision, Insights)</li>
      </ul>

      <h2 class="text-2xl font-bold">📝 Mains GS (Papers I–IV)</h2>
      <ul class="list-disc pl-5 space-y-1">
        <li>GS-I: Indian Society – NCERT Sociology + IGNOU Material</li>
        <li>GS-I: Indian Heritage – Nitin Singhania (Art & Culture)</li>
        <li>GS-II: Governance & Polity – Laxmikanth + ARC Reports</li>
        <li>GS-III: Economy – Ramesh Singh + Economic Survey</li>
        <li>GS-III: Internal Security – Challenges to Internal Security by Ashok Kumar</li>
        <li>GS-IV: Ethics – Lexicon + Subbarao + Case Study Compilation (ForumIAS)</li>
      </ul>

      <h2 class="text-2xl font-bold">🗒️ Essay & Interview</h2>
      <ul class="list-disc pl-5 space-y-1">
        <li>Essay: Essays by IAS Toppers (Vision / Insights compilations)</li>
        <li>Interview: Mock transcripts + “Cracking the Code” by Ayush Sinha</li>
      </ul>
    </section>

    <section class="mb-6">
      <button class="text-blue-600 underline" on:click={toggle}>
        <span>{showBooks ? 'Hide' : 'Show'}</span> Download Book List PDF
      </button>

      {#if showBooks}
        <ul class="list-disc pl-5 mt-4 space-y-2 text-green-700 text-sm">
          <li><a href="https://drive.google.com/drive/folders/1rqi_zAnf7QAckjy61osSb1j7eAYKO5DP?usp=sharing" target="_blank" class="underline">📄 Complete UPSC Book List (Prelims + Mains)</a></li>
        </ul>
      {/if}
    </section>

    <div class="flex justify-center mt-8">
      <a
        href="https://drive.google.com/drive/folders/1rqi_zAnf7QAckjy61osSb1j7eAYKO5DP?usp=sharing"
        class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
        target="_blank"
      >
        📥 Download Full Book List PDF
      </a>
    </div>
  </main>
</div>

<style>
  a:hover {
    text-decoration: underline;
  }
</style>
