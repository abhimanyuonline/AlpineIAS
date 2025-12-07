<!-- CurrentAffairsOptions.svelte -->
<script>
    // Data for current affairs options
    const currentAffairsOptions = [
      {
        id: 1,
        title: "DAILY CURRENT AFFAIRS",
        description: "Stay updated with the latest news and events relevant for UPSC examination. New content published every day to keep you informed on the go.",
        url: "daily"
      },
      {
        id: 2,
        title: "WEEKLY CURRENT AFFAIRS",
        description: "Comprehensive weekly digest of all important news and events curated specifically for UPSC aspirants. Published every Sunday.",
        url: "weekly"
      }
    ];
       
    // Function to handle selection
    function selectOption(optionId) {
      // Add your navigation or selection logic here
      // console.log(`Selected option: ${optionId}`);
      window.location.href = `/current-affairs/${optionId}`;
    }
  </script>
     
  <div class="container mx-auto p-4">
    <div class="flex flex-col md:flex-row gap-6 justify-center items-stretch">
      <!-- Current Affairs Options Cards -->
      {#each currentAffairsOptions as option}
        <div class="bg-white rounded-lg shadow-md overflow-hidden flex flex-col max-w-sm mx-auto md:mx-0 w-full">
          <!-- Content -->
          <div class="p-4 flex flex-col flex-grow">
            <h3 class="font-bold text-gray-800 uppercase text-sm mb-1">{option.title}</h3>
            <p class="text-gray-600 text-xs mb-6 flex-grow">{option.description}</p>
                         
            <!-- Select button only -->
            <div class="flex justify-center items-center mt-auto">
            <a 
             href={`/current-affairs/${option.url}`}
            class="bg-white border border-gray-300 text-gray-800 text-xs uppercase font-bold py-1 px-4 rounded-full hover:bg-gray-100 transition-colors duration-200"
            >
            OPEN
            </a>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>