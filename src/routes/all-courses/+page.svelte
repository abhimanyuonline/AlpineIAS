<script>
    import courses from "../courses.json";
    // import logo from '$lib/assets/logo.png';
    // import { enhancedImages } from '@sveltejs/enhanced-img';
</script>

<main class="p-4 bg-gray-100 min-h-screen">
    <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {#each courses as course}
            <div class="bg-white rounded-lg shadow-md overflow-hidden transition duration-300 hover:shadow-lg">
                <div class="bg-gradient-to-r {course.gradient} p-4 h-64 flex flex-col">
                    <div class="text-white text-3xl font-bold mb-2">
                        {course.title}
                    </div>
                    <div class="text-white text-2xl mt-1 mb-auto">
                        {course.type}
                    </div>
                </div>
                
                <div class="p-4">
                    <div class="text-gray-500 font-medium">{course.year}</div>
                    <h3 class="text-lg font-bold mb-4">{course.title}</h3>
                    
                    <ul class="space-y-3">
                        {#each course.features as feature}
                            <li class="flex items-start">
                                <span class="text-green-500 font-bold mr-2">•</span>
                                <span class="text-sm">{feature}</span>
                            </li>
                        {/each}
                    </ul>
                    
                    <div class="flex mt-8 justify-center">
                        <a href={`all-courses/${course.link}`} class="w-full bg-green-500 text-white rounded-full py-2 px-4 text-center font-medium hover:bg-green-600">
                            Join Now
                        </a>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</main>

<style>
/* Add any additional custom styles here */
</style>