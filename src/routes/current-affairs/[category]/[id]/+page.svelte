<script>
    export let data;

    function goBack() {
        goto(-1);
    }
</script>

<link rel="stylesheet" href="/blog.css">

<div class="container mx-auto py-12">
    <!-- Featured Image -->
    <!-- <img src={data.featuredImage} alt={data.title} class="rounded-lg shadow-md mb-8 w-full object-cover h-96" /> -->

    <div class="flex justify-between items-center mb-4">
        <div class="text-sm text-gray-500 overflow-hidden whitespace-nowrap text-overflow-ellipsis">
            <a href="/" class="hover:underline">Home</a> /
            <a href="/current-affairs" class="hover:underline">Current Affairs</a> /
            <a href={`/current-affairs/${data.category}`} class="hover:underline">{data.category}</a> /
            <span title={data.meta.title} class="hover:underline">{data.meta.title.length > 30 ? data.meta.title.substring(0, 30) + '...' : data.meta.title}</span>
        </div>
        <a href={`/current-affairs/${data.category}`} class="text-blue-500 hover:underline">
            <i class="fas fa-arrow-left mr-1"></i>
            Back
        </a>
    </div>

    <!-- Title -->
    <h1 class="text-4xl font-bold text-gray-900 mb-4">{data.meta.title}</h1>

    <!-- Metadata -->
    <div class="bg-gray-100 rounded-md p-4 mb-6 flex items-center text-gray-600">
        <i class="fas fa-user mr-2"></i>
        <span>Author: {data.meta.author}</span>
        <i class="far fa-calendar-alt mx-2"></i>
        <span>Published: {data.meta.date}</span>
    </div>

    <!-- Content -->
    <div class="blog-content border border-gray-200 rounded-md p-6">
        {@html data.content}
    </div>

    <!-- Related Articles (Placeholder) -->
    <div class="mt-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Related Articles</h2>
        <p class="text-gray-700">Coming Soon...</p>
    </div>

    <!-- Comment Section (Placeholder) -->
    <div class="mt-12">
        <h2 class="text-2xl font-semibold text-gray-900 mb-4">Comments</h2>
        <p class="text-gray-700">Coming Soon...</p>
    </div>
</div>
