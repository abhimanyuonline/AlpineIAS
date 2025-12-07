<script>   
  import studyMaterials from "../studymaterial.json";   
  import { onMount } from 'svelte';    
  
  let hoveredId = null;   
  let screenSize = 'xs';    
  
  function determineScreenSize() {     
    const width = window.innerWidth;     
    if (width < 480) screenSize = 'xs';     
    else if (width < 640) screenSize = 'sm';     
    else if (width < 768) screenSize = 'md';     
    else if (width < 1024) screenSize = 'lg';     
    else screenSize = 'xl';   
  }    
  
  onMount(() => {     
    determineScreenSize();     
    window.addEventListener('resize', determineScreenSize);     
    return () => window.removeEventListener('resize', determineScreenSize);   
  });    
  
  $: gridColumns = screenSize === 'xs' ? 2                     
                  : screenSize === 'sm' ? 3                     
                  : screenSize === 'md' ? 3                     
                  : screenSize === 'lg' ? 3                     
                  : 4; 
</script>  

<div class="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">   
  <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4 md:mb-8 lg:mb-12">UPSC Study Materials</h1>    
  
  <div class="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">     
    <div class="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-10">       
      {#each studyMaterials as item, index}         
        <a           
          href={`/study-material/${item.link}`}           
          class="block no-underline transform transition-all duration-300 ease-in-out rounded-lg overflow-hidden shadow-md"
          class:shadow-xl={hoveredId === index}           
          class:translate-y-[-5px]={hoveredId === index}           
          on:mouseenter={() => hoveredId = index}           
          on:mouseleave={() => hoveredId = null}
          style="width: calc((100% - {(gridColumns - 1) * (screenSize === 'xs' ? 16 : screenSize === 'sm' ? 24 : screenSize === 'md' ? 32 : 40)}px) / {gridColumns}); min-width: 200px; max-width: 350px;"         
        >           
          <div class="flex flex-col w-full h-full rounded-lg overflow-hidden mb-2">             
            <div class="w-full aspect-[4/3] lg:aspect-[3/2] bg-green-600 flex items-center justify-center p-4 lg:p-6">               
              <!-- Optional icon or initials could be shown here -->               
              <span class="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-center px-2 leading-tight">{item.title}</span>             
            </div>             
            <div class="w-full p-2 sm:p-3 lg:p-4 bg-white">               
              <h3 class="text-xs sm:text-sm md:text-base lg:text-lg font-medium text-gray-800 line-clamp-2 text-center">{item.title}</h3>             
            </div>           
          </div>         
        </a>       
      {/each}     
    </div>   
  </div>    
  
  <div class="mt-6 md:mt-8 lg:mt-12 w-full max-w-md text-center text-gray-600">     
    <p class="text-sm md:text-base lg:text-lg">Click on any item to access its content</p>   
  </div> 
</div>  

<style>   
  a:hover .bg-green-600 {     
    background-color: #00843d;   
  }    
  
  a, .bg-green-600 {     
    transition: all 0.3s ease;   
  }    
  
  .shadow-md {     
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),                 
                0 2px 4px -1px rgba(0, 0, 0, 0.06);   
  }    
  
  .shadow-xl {     
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),                 
                0 4px 6px -2px rgba(0, 0, 0, 0.05),                 
                0 0 0 1px rgba(0, 0, 0, 0.02);   
  }    
  
  a {     
    position: relative;   
  }    
  
  a::after {     
    content: '';     
    position: absolute;     
    z-index: -1;     
    width: 100%;     
    height: 100%;     
    opacity: 0;     
    border-radius: 8px;     
    box-shadow: 0 15px 25px -12px rgba(0, 100, 50, 0.4);     
    transition: opacity 0.3s ease-in-out;   
  }    
  
  a:hover::after {     
    opacity: 1;   
  }
</style>