<script lang="ts">
	import { onMount } from "svelte";
	import { fade } from "svelte/transition";

	let { images, delay } = $props();

	let currentImg = $state(0);
	let intervalId: number;

	onMount(() => {
		intervalId = setInterval(changeImage, delay);
	});

	function changeImage() {
		currentImg = (currentImg + 1) % images.length;
	}

	function setImage(i: number) {
		currentImg = i % images.length;
		if (intervalId) clearInterval(intervalId);
		intervalId = setInterval(changeImage, delay);
	}
</script>

<div class="gcont">
	<!-- Right Arrow -->
	<div class="arrow-right z-2">
		<button class="arrow" type="button" aria-label="right arrow" on:click={() => setImage(currentImg + 1)}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
				<path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
			</svg>
		</button>
	</div>

	<!-- Left Arrow -->
	<div class="arrow-left z-2">
		<button class="arrow" type="button" aria-label="left arrow" on:click={() => setImage(currentImg + images.length - 1)}>
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
				<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
			</svg>
		</button>
	</div>

	<!-- Image Slider -->
	<div class="gimages">
		{#each images as img, i}
			{#if currentImg == i}
				<img src={img[0]} alt={img[1]} class="gimg" transition:fade />
			{/if}
		{/each}
	</div>

	<!-- Dot Buttons -->
	<div class="gdots">
		{#each images as _, i}
			<button class="dotbtn" type="button" aria-label="Image {i} select button" class:active={i == currentImg} on:click={() => setImage(i)}></button>
		{/each}
	</div>
</div>

<style>
.gcont {
	position: relative;
	width: 100%;
}

/* ✅ Responsive aspect ratio - taller on mobile, wider on desktop */
.gimages {
	position: relative;
	width: 100%;
	/* Mobile: 3:2 ratio (taller) */
	aspect-ratio: 3 / 2;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Tablet and desktop: wider ratio */
@media (min-width: 768px) {
	.gimages {
		aspect-ratio: 4 / 1.5;
	}
}

/* Large desktop: even wider */
@media (min-width: 1024px) {
	.gimages {
		aspect-ratio: 5 / 1;
	}
}

/* ✅ Fixed image size and layout for both local and remote */
.gimg {
	max-width: 100%;
	max-height: 100%;
	object-fit: cover;
	border-radius: 10px;
	box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	margin: auto;
}

/* Navigation Dots */
.gdots {
	width: 100%;
	display: flex;
	gap: 15px;
	justify-content: center;
	padding: 5px 0;
}

.dotbtn {
	background: grey;
	padding: 5px;
	border-radius: 3px;
	cursor: pointer;
	border: none;
}

.dotbtn.active {
	background: black;
}

/* Arrows - responsive sizing */
.arrow-right, .arrow-left {
	position: absolute;
	display: flex;
	align-items: center;
	top: 0;
	bottom: 0;
	margin: 10px;
}

/* Smaller margins on mobile */
@media (min-width: 768px) {
	.arrow-right, .arrow-left {
		margin: 15px;
	}
}

.arrow-right {
	right: 0;
}

.arrow-left {
	left: 0;
}

.arrow {
	transition: transform 0.3s ease-in-out;
	cursor: pointer;
	height: 40px;
	width: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	color: white;
	background: rgba(0, 0, 0, 0.5);
	border-radius: 50%;
	border: none;
}

/* Larger arrows on desktop */
@media (min-width: 768px) {
	.arrow {
		height: 50px;
		width: 50px;
	}
}

.arrow-right:hover > .arrow,
.arrow-left:hover > .arrow {
	transform: scale(1.2);
}

/* Better dot visibility on mobile */
@media (max-width: 767px) {
	.gdots {
		gap: 10px;
		padding: 8px 0;
	}
	
	.dotbtn {
		padding: 6px;
		border-radius: 50%;
	}
}
</style>