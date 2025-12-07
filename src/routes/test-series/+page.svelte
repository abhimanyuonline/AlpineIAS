<script>
    import testData from "../testdetails.json";
    // import logo from '$lib/assets/logo.png';
    // import { enhancedImages } from '@sveltejs/enhanced-img';
         
    // Debug: Log the imported data
    console.log('Loaded test data:', testData);
</script>

<main class="p-4 bg-gray-100 min-h-screen">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#if testData && testData.length > 0}
            {#each testData as test, index}
                <div class="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
                    <!-- Fixed: Dynamic class binding using template literal -->
                    <div class={`bg-gradient-to-r ${test.gradient} p-4 h-64 flex flex-col`}>
                        <div class="text-white text-3xl font-bold mb-2">
                            {test.title}
                        </div>
                                         
                        <div class="text-white text-2xl mt-1 mb-auto">
                            {test.type}
                        </div>
                                         
                        <!-- Icon based on course type -->
                        <div class="flex justify-center items-center mt-4">
                            {#if test.icon}
                                <img src={test.icon} alt="Course Icon" class="h-28" />
                            {/if}
                        </div>
                    </div>
                             
                    <div class="p-4">
                        <div class="text-gray-500 font-medium">{test.year}</div>
                        <h3 class="text-lg font-bold mb-4">{test.title}</h3>
                                         
                        {#if test.features && test.features.length > 0}
                            <ul class="space-y-3">
                                {#each test.features as feature}
                                    <li class="flex items-start">
                                        <span class="text-green-500 font-bold mr-2">•</span>
                                        <span class="text-sm">{feature}</span>
                                    </li>
                                {/each}
                            </ul>
                        {/if}
                                         
                        <div class="flex mt-8 justify-center">
                            <a
                                 href={`/test-series/${test.link}`}
                                 class="w-full bg-green-500 text-white rounded-full py-2 px-4 text-center font-medium hover:bg-green-600 transition-colors"
                            >
                                Join Now
                            </a>
                        </div>
                    </div>
                </div>
            {/each}
        {:else}
            <div class="col-span-full text-center py-8">
                <p class="text-gray-500 text-lg">No test series available at the moment.</p>
            </div>
        {/if}
    </div>
</main>

<style>
    /* Add any additional custom styles here */
</style>