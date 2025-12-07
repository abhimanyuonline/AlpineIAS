<script lang="ts">
  import { onMount } from "svelte";

  let visible = false;
  const POPUP_SEEN_KEY = 'popup_seen_in_session_test123'; // Use a temp key for testing

  onMount(() => {
    const popupSeen = sessionStorage.getItem(POPUP_SEEN_KEY);
    if (!popupSeen) {
      setTimeout(() => {
        visible = true;
      }, 3000); // show after 3 seconds
    }
  });

  function hide() {
    visible = false;
    sessionStorage.setItem(POPUP_SEEN_KEY, 'true');
  }
</script>

{#if visible}
  <div class="main-cont z-10">
    <button class="close-btn" aria-label="close btn" on:click={hide}>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="size-8">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
    </button>

    <!-- ✅ Image with fixed width instead of using max 90% of screen -->
    <div class="popup-wrapper">
      <img src="/logos/popup1.jpg" alt="" class="popup-img" />
    </div>
  </div>
{/if}

<style>
/* ✅ This is the fullscreen semi-transparent background */
.main-cont {
  position: fixed;
  top: 0%;
  bottom: 0%;
  right: 0%;
  left: 0%;

  background: rgba(0, 0, 0, 0.8);

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* ✅ Close button stays at top right */
.close-btn {
  position: absolute;
  top: 0%;
  right: 0%;
  margin: 15px 15px;
}

/* ✅ Wrapper added to control size of popup */
.popup-wrapper {
  width: 400px; /* 🔧 Set fixed width */
  max-width: 90vw;
  max-height: 90vh;
  padding: 10px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
}

/* ✅ Adjust image to fit inside the wrapper */
.popup-img {
  max-width: 100%;
  max-height: 100%;
  border-radius: 10px;
}
</style>
