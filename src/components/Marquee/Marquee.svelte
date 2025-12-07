<script lang="ts">
    let { children } = $props();
</script>

<div class="m-container shadow">
    <div class="marquee">
        {@render children()}
    </div>
    <div class="marquee">
        {@render children()}
    </div>
</div>

<style>
.m-container {
    width: 100%;
    display: flex;
    overflow-x: hidden;
    flex-direction: row;

    padding: 5px 0px;
}

.marquee {
    display: flex;
    flex: 0 0 auto;
    min-width: 100%;
    flex-direction: row;
    align-items: center;
    gap: 50px;

    animation: scroll 15s linear infinite;
    justify-content: space-evenly;
}

.m-container:hover .marquee {
    animation-play-state: paused;
}

.m-container:active .marquee {
    animation-play-state: paused;
}

@keyframes scroll {
    0% {
        transform: translateX(0%);
    }
    100% {
        transform: translateX(-100%);
    }
}
</style>
