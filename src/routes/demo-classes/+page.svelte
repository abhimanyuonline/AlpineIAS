<script>
	import { fade, fly } from 'svelte/transition';

	// Placeholder data for YouTube videos
	// You can replace 'id' with actual YouTube video IDs
	const videos = [
		{
			id: 'dQw4w9WgXcQ',
			title: 'Course Introduction',
			description: 'Welcome to our comprehensive coaching program.'
		},
		{
			id: 'M7fi_IBsa0k',
			title: 'Chapter 1: Basics',
			description: 'Understanding the fundamental concepts.'
		},
		{
			id: 'tgbNymZ7vqY',
			title: 'Chapter 2: Advanced Topics',
			description: 'Deep dive into complex theories.'
		},
		{
			id: 'ScMzIvxBSi4',
			title: 'Exam Strategies',
			description: 'Tips and tricks to ace your exams.'
		},
		{ id: '9bZkp7q19f0', title: 'Student Success Story', description: 'Hear from our topper.' },
		{ id: 'jNQXAC9IVRw', title: 'Live Session Recording', description: 'Q&A session with faculty.' }
	];

	let loaded = false;
	let showVideos = false;
	let name = '';
	let mobile = '';
	let email = '';

	function handleSubmit() {
		if (name && mobile && email) {
			showVideos = true;
		}
	}

	import { onMount } from 'svelte';
	onMount(() => {
		loaded = true;
	});
</script>

<svelte:head>
	<title>Video Gallery - Alpine Coaching</title>
	<meta name="description" content="Watch our latest educational videos and tutorials." />
</svelte:head>

<div class="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
	<div class="mx-auto max-w-7xl">
		<div class="mb-12 text-center" in:fly={{ y: -20, duration: 800 }}>
			<h1 class="text-4xl font-extrabold text-[#036752] sm:text-5xl sm:tracking-tight lg:text-6xl">
				Video Gallery
			</h1>
			<p class="mx-auto mt-5 max-w-xl text-xl text-gray-500">
				Explore our collection of educational videos, tutorials, and success stories.
			</p>
		</div>

		{#if !showVideos}
			<div
				class="mx-auto max-w-md overflow-hidden rounded-xl bg-white shadow-xl"
				in:fly={{ y: 20, duration: 800 }}
			>
				<div class="bg-[#036752] px-6 py-4">
					<h2 class="text-xl font-bold text-white">Guest Registration</h2>
					<p class="text-green-100">Please enter your details to watch the demo classes.</p>
				</div>
				<form on:submit|preventDefault={handleSubmit} class="space-y-6 px-6 py-8">
					<div>
						<label for="name" class="block text-sm font-medium text-gray-700">Full Name</label>
						<input
							type="text"
							id="name"
							bind:value={name}
							required
							class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#036752] focus:ring-[#036752] focus:outline-none"
							placeholder="John Doe"
						/>
					</div>

					<div>
						<label for="mobile" class="block text-sm font-medium text-gray-700">Mobile Number</label
						>
						<input
							type="tel"
							id="mobile"
							bind:value={mobile}
							required
							pattern="[-0-9+ ]{(10, 15)}"
							title="Please enter a valid mobile number (10-15 digits)"
							class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#036752] focus:ring-[#036752] focus:outline-none"
							placeholder="1234567890"
						/>
					</div>

					<div>
						<label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
						<input
							type="email"
							id="email"
							bind:value={email}
							required
							class="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#036752] focus:ring-[#036752] focus:outline-none"
							placeholder="john@example.com"
						/>
					</div>

					<div>
						<button
							type="submit"
							class="flex w-full justify-center rounded-md border border-transparent bg-[#036752] px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-[#025642] focus:ring-2 focus:ring-[#036752] focus:ring-offset-2 focus:outline-none"
						>
							Start Watching
						</button>
					</div>
				</form>
			</div>
		{:else}
			<div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
				{#each videos as video, i}
					<div
						class="transform overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
						in:fly={{ y: 20, duration: 800, delay: i * 100 }}
					>
						<div class="group relative h-0 bg-gray-200 pb-[56.25%]">
							<!-- YouTube Embed -->
							<iframe
								class="absolute top-0 left-0 h-full w-full"
								src="https://www.youtube.com/embed/{video.id}"
								title={video.title}
								frameborder="0"
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
								allowfullscreen
							></iframe>
						</div>
						<div class="p-6">
							<h3 class="mb-2 line-clamp-1 text-lg font-bold text-gray-900" title={video.title}>
								{video.title}
							</h3>
							<p class="line-clamp-2 text-sm text-gray-600">{video.description}</p>
						</div>
					</div>
				{/each}
			</div>

			{#if videos.length === 0}
				<div class="py-20 text-center text-gray-500">
					<p>No videos available at the moment. Please check back later.</p>
				</div>
			{/if}
		{/if}
	</div>
</div>

<style>
	/* Add any custom styles here if needed */
</style>
