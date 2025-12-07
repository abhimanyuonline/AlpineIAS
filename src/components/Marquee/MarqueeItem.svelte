<script lang="ts">
    let { children } = $props();
</script>

<div class="marquee-item px-2 py-1 rounded-md">
    {@render children()}
</div>

<style>
.marquee-item:hover {
    background: rgba(251, 86, 33, 20%);
}
</style>
