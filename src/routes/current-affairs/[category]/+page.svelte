<script>
    export let data;
</script>

<div class="container mx-auto p-4">
  <h1 class="text-2xl font-bold mb-4">Current Affairs</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each data.posts as post}
      <a href={`/current-affairs/${data.category}/${post.slug}`} class="block rounded-lg shadow-md overflow-hidden">
        <div class="p-4">
          <h2 class="text-lg font-semibold">{post.metadata.title}</h2>
          <p class="text-sm text-gray-600">{post.metadata.description}</p>
          <!-- Display other metadata as needed -->
        </div>
      </a>
    {/each}
  </div>
</div>
