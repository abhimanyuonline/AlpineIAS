<script>
  let show = false;
  function toggle() {
    show = !show;
  }
</script>

<svelte:head>
  <title>BUDGET (Free Download) – Alpine IAS</title>
  <meta name="description" content="Download Union Budget of India PDFs for UPSC prep free. Essential for GS‑III, Essays & Interview." />
</svelte:head>

<div class="bg-gray-50 min-h-screen">
  <main class="p-6 max-w-4xl mx-auto">
    <h1 class="text-4xl font-bold text-center mb-4">Union Budget of India</h1>
    <p class="text-center mb-6">For UPSC Aspirants | Free Download | Data‑Rich & Analytical</p>

    <section class="mb-6">
      <h2 class="text-2xl font-bold">What is the Union Budget?</h2>
      <p class="mt-2 text-gray-700 text-sm leading-relaxed">
        The Union Budget—called the “Annual Financial Statement” in Article 112 of the Indian Constitution—is India’s yearly economic roadmap. It’s presented by the Finance Minister every year on 1st February and includes estimates of revenue and expenditure for the upcoming financial year.
      </p>
    </section>

    <section class="mb-6">
      <h2 class="text-2xl font-bold">Highlights of Budget 2025–26</h2>
      <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-700 text-sm">
        <li>Theme: <strong>“Sabka Vikas”</strong> – Inclusive Development</li>
        <li>New tax regime raised the threshold to ₹12.75 L</li>
        <li>Fiscal deficit target: <strong>4.4%</strong>, down from 4.8%</li>
        <li>Focused on MSMEs, rural growth, and middle-class consumption</li>
        <li>Moderate capital expenditure to maintain growth without overheating</li>
      </ul>
    </section>

    <section class="mb-6">
      <h2 class="text-2xl font-bold">Why It Matters for UPSC?</h2>
      <ul class="list-disc pl-5 mt-2 space-y-1 text-gray-700 text-sm">
        <li>Key source for <strong>GS-III: Economy</strong> section</li>
        <li>Provides facts and data points for Essays & Mains</li>
        <li>Important for <strong>interview questions</strong> on fiscal strategy & reforms</li>
      </ul>
    </section>

    <section class="mb-6">
      <button class="text-blue-600 underline" on:click={toggle}>
        <span>{show ? 'Hide' : 'Show'}</span> Download Links
      </button>

      {#if show}
        <ul class="list-disc pl-5 mt-4 space-y-2 text-green-700 text-sm">
          <li><a href="https://drive.google.com/drive/folders/1ZISLsJZh_5YsI_XAejB9uWasZMCKRVog?usp=sharing" target="_blank" class="underline">Budget 2025–26 – Full PDF</a></li>
          <li><a href="https://drive.google.com/drive/folders/1ZISLsJZh_5YsI_XAejB9uWasZMCKRVog?usp=sharing" target="_blank" class="underline">Budget 2024–25 – PDF + Summary</a></li>
          <li><a href="https://drive.google.com/drive/folders/1ZISLsJZh_5YsI_XAejB9uWasZMCKRVog?usp=sharing" target="_blank" class="underline">Budget Notes for UPSC (Alpine IAS)</a></li>
        </ul>
      {/if}
    </section>

    <div class="flex justify-center mt-8">
      <a
        href="https://drive.google.com/drive/folders/1ZISLsJZh_5YsI_XAejB9uWasZMCKRVog?usp=sharing"
        target="_blank"
        class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors"
      >
        📥 Download All Budget PDFs
      </a>
    </div>
  </main>
</div>

<style>
  a:hover {
    text-decoration: underline;
  }
</style>
