<script>
    let { courses } = $props();
</script>

<section class="py-16 px-4 bg-gray-50">
    <div class="max-w-7xl mx-auto">
        <!-- Section Heading with dots -->
        <div class="mb-12 text-center">
            <!-- <h2 class="text-2xl font-bold text-gray-800 mb-2">Our Featured UPSC CSE Courses</h2> -->
            <!-- <div class="flex justify-center space-x-2">
                {#each Array(10) as _, i}
                    <div class={`w-2 h-2 rounded-full ${i === 8 ? 'bg-gray-800' : 'bg-gray-300'}`}></div>
                {/each}
            </div> -->
        </div>

        <!-- Course Grid - Updated for better mobile layout -->
        <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
            {#each courses as course}
                <a href="all-courses/{course.link}" class="block group h-full">
                    <div class="bg-white rounded-lg overflow-hidden shadow-md transition-transform duration-300 hover:shadow-lg hover:-translate-y-1 h-full flex flex-col">
                        <div class="aspect-square overflow-hidden">
                            <!-- Replace with actual image -->
                            <img
                                src={course.icon}
                                alt={course.title}
                                class="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                        <div class="p-2 sm:p-3 md:p-4">
                            <h3 class="text-sm sm:text-base font-medium text-gray-800 leading-tight line-clamp-2 min-h-[2.5rem] sm:min-h-[3rem]">{course.title}</h3>
                        </div>
                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>