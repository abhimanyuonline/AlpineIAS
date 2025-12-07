<!-- Simple fix: Just add auto-close functionality to your existing code -->
<script>
  import { fly, fade, scale } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { spring } from 'svelte/motion';
  
  let menuOpen = false;
  let activeItem = null;
  
  let menuItems = [
      { name: "Home", link: "/" },
      { name: "All Courses", link: "/all-courses" },
      { name: "Study Materials", link: "/study-material", dropdown: false },
      { name: "Current Affairs", link: "/current-affairs" },
      { name: "Test series", link: "/test-series" },
      { name: "Quizzes", link: "/quizzes" },
      { name: "Contact", link: "/contact-us" },
      { name: "Admision", link: "/admision"},
  ];

  // Alpine green custom colors
  const alpineGreen = "#036752";
  const alpineGreenLight = "#0d8b75";
  const alpineGreenDark = "#025444";
  
  // Button animation states
  let buttonHovered = false;
  let buttonClicked = false;
  
  // Simple animation approach that will definitely work
  function animateButtonHover(isHover) {
      buttonHovered = isHover;
  }
  
  function animateButtonClick() {
      buttonClicked = true;
      setTimeout(() => {
          buttonClicked = false;
      }, 300);
  }
  
  // Handle menu item hover
  function handleMenuHover(index) {
    activeItem = index;
  }
  
  function handleMenuLeave() {
    activeItem = null;
  }

  // SIMPLE FIX: Just add this function to close menu
  function closeMenu() {
    menuOpen = false;
  }
</script>

<header class="flex items-center justify-between bg-white px-6 py-3 shadow">
<!-- Logo -->
<div class="flex items-center space-x-3">
  <img 
    src="/logos/alpinelogo.png" 
    alt="Alpine Coaching Logo" 
    class="h-14 w-auto object-contain"
  />
</div>

<!-- Desktop Navigation -->
<nav class="hidden md:flex space-x-6 text-gray-700">
  {#each menuItems as item, index}
    <div 
      class="relative group"
      on:mouseenter={() => handleMenuHover(index)}
      on:mouseleave={handleMenuLeave}
    >
      <a 
        href={item.link} 
        class="nav-link relative py-2 px-3 block transition-all duration-300 rounded-md"
        style="box-shadow: {activeItem === index ? '0 2px 10px rgba(3, 103, 82, 0.25)' : 'none'}; 
               transform: {activeItem === index ? 'translateY(-2px)' : 'none'};
               background-color: {activeItem === index ? 'rgba(3, 103, 82, 0.05)' : 'transparent'};
               color: {activeItem === index ? alpineGreen : 'inherit'};"
      >
        {item.name}
        <!-- Animated underline indicator -->
        <span 
          class="block absolute bottom-0 left-1/2 w-0 h-0.5 bg-[#036752] transform -translate-x-1/2 transition-all duration-300 nav-indicator"
          style="width: {activeItem === index ? '80%' : '0'}; opacity: {activeItem === index ? '1' : '0'}"
        ></span>
      </a>
      {#if item.dropdown}
        <div 
          class="absolute left-0 mt-2 w-48 bg-white shadow-lg z-2 rounded-md overflow-hidden"
          style="opacity: {activeItem === index ? '1' : '0'}; pointer-events: {activeItem === index ? 'all' : 'none'};
                 box-shadow: 0 4px 15px rgba(3, 103, 82, 0.2), 0 1px 3px rgba(3, 103, 82, 0.1);"
          transition:scale={{duration: 200, start: 0.95, opacity: 0}}
        >
          <a href="#" class="block px-4 py-3 transition-all duration-200 transform hover:translate-x-1 nav-dropdown-item">Option 1</a>
          <a href="#" class="block px-4 py-3 transition-all duration-200 transform hover:translate-x-1 nav-dropdown-item">Option 2</a>
        </div>
      {/if}
    </div>
  {/each}
</nav>

<!-- Simplified "Let's Talk" Button with Working Animation -->
<div class="hidden md:block">
  <a 
    href="https://api.whatsapp.com/send?phone=919749033332&text=Hi,%20enquiry%20from%20AlpineIAS%20website"
    target="_blank"
    rel="noopener noreferrer"
    class="lets-talk-btn text-white px-6 py-2.5 rounded-full relative overflow-hidden font-medium transition-all duration-300 inline-block"
    style="background-color: {buttonHovered ? alpineGreenLight : alpineGreen}; 
           transform: translateY({buttonClicked ? '2px' : '0'});"
    on:mouseenter={() => animateButtonHover(true)}
    on:mouseleave={() => animateButtonHover(false)}
    on:click={animateButtonClick}
  >
    <!-- Button background with gradient -->
    <div class="absolute inset-0 bg-gradient-to-r from-[#036752] to-[#0d8b75] rounded-full"></div>
    
    <!-- Button text with arrow -->
    <div class="relative z-10 flex items-center justify-center space-x-1">
      <span>Let's Talk</span>
      <svg 
        class="w-4 h-4 transition-transform duration-300" 
        style="transform: translateX({buttonHovered ? '3px' : '0'});" 
        fill="none" stroke="currentColor" viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
      </svg>
    </div>
    
    <!-- Light effect on hover -->
    {#if buttonHovered}
      <div 
        class="absolute inset-0 bg-white opacity-10 rounded-full"
        transition:fade={{ duration: 200 }}
      ></div>
    {/if}
  </a>
</div>

<!-- Hamburger Button (Mobile) - KEEPING YOUR ORIGINAL CODE -->
<button class="md:hidden text-gray-700 focus:outline-none" on:click={() => menuOpen = !menuOpen} aria-label="menu-btn">
  <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
  </svg>
</button>
</header>

{#if menuOpen}
  <div class="fixed z-2 right-0 top-0 h-screen" transition:fly={{ x:200, duration: 500 }}>
      <div class="w-64 bg-white h-full shadow-lg p-6 flex flex-col space-y-4">
          <!-- Close button -->
          <div class="flex justify-end">
            <button 
              class="text-gray-500 hover:text-gray-800 transition-colors duration-200" 
              on:click={() => menuOpen = false}
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          
          <!-- Mobile Menu Items - ONLY CHANGE: Added on:click={closeMenu} -->
          {#each menuItems as item, index}
            <div 
              class="relative group" 
              transition:fly={{ y: 10, delay: 100 + (index * 50), duration: 200 }}
            >
              <a 
                href={item.link} 
                class="block py-3 px-3 transition-all duration-200 border-b border-gray-100 rounded-md mobile-nav-item"
                style="box-shadow: 0 1px 3px rgba(3, 103, 82, 0.1);"
                on:click={closeMenu}
              >
                {item.name}
                {#if item.dropdown}
                  <span class="float-right">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </span>
                {/if}
              </a>
              {#if item.dropdown}
                <div class="pl-4 mt-2 space-y-2 hidden group-hover:block">
                  <a href="#" class="block py-2 px-3 my-2 transition-all duration-200 transform hover:translate-x-1 rounded-md mobile-dropdown-item" style="box-shadow: 0 1px 2px rgba(3, 103, 82, 0.1);" on:click={closeMenu}>Option 1</a>
                  <a href="#" class="block py-2 px-3 my-2 transition-all duration-200 transform hover:translate-x-1 rounded-md mobile-dropdown-item" style="box-shadow: 0 1px 2px rgba(3, 103, 82, 0.1);" on:click={closeMenu}>Option 2</a>
                </div>
              {/if}
            </div>
          {/each}
          
          <!-- Mobile button - ONLY CHANGE: Added closeMenu() to the click handler -->
          <a 
            href="https://api.whatsapp.com/send?phone=919749033332&text=Hi,%20enquiry%20from%20AlpineIAS%20website%20for%20course%201year"
            target="_blank"
            rel="noopener noreferrer"
            class="lets-talk-btn w-full text-white px-6 py-2.5 rounded-full relative overflow-hidden font-medium transition-all duration-300 mt-4 inline-block text-center"
            style="background-color: {alpineGreen};"
            on:click={() => {
              animateButtonClick();
              closeMenu();
            }}
            transition:fly={{ y: 20, delay: 400, duration: 300 }}
          >
            <div class="absolute inset-0 bg-gradient-to-r from-[#036752] to-[#0d8b75] rounded-full"></div>
            <div class="relative z-10 flex items-center justify-center space-x-1">
              <span>Let's Talk</span>
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </div>
          </a>
      </div>
  </div>
{/if}

<style>
/* Modern button styling */
.lets-talk-btn {
  box-shadow: 0 4px 12px rgba(3, 103, 82, 0.25);
  transition: all 0.3s ease;
}

.lets-talk-btn:hover {
  box-shadow: 0 6px 16px rgba(3, 103, 82, 0.35);
}

/* Animation for shine effect */
@keyframes shine {
  0% {
    left: -100%;
    opacity: 0;
  }
  20% {
    opacity: 0.1;
  }
  50% {
    opacity: 0.3;
  }
  100% {
    left: 100%;
    opacity: 0;
  }
}

/* Apply shine effect on hover */
.lets-talk-btn:hover::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 50%;
  height: 100%;
  background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3), transparent);
  transform: skewX(-25deg);
  animation: shine 1.5s infinite;
}

/* Navigation link animations */
.nav-link {
  position: relative;
  overflow: hidden;
  font-weight: 500;
  letter-spacing: 0.01em;
}

.nav-link:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

/* Dropdown item styling */
.nav-dropdown-item {
  position: relative;
  background-color: white;
  transition: all 0.2s ease;
}

.nav-dropdown-item:hover {
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

/* Menu item hover effect */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* Mobile menu item hover animation */
@keyframes slideRight {
  from { transform: translateX(0); }
  to { transform: translateX(5px); }
}

/* Mobile nav item styling */
.mobile-nav-item {
  transition: all 0.3s ease;
}

.mobile-nav-item:hover {
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
  transform: translateY(-2px);
}

/* 3D shadow effect on hover */
@keyframes shadowPulse {
  0% { box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); }
  50% { box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15); }
  100% { box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); }
}
</style>