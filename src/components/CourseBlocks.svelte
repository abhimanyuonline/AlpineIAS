<script>
    let { courses } = $props();
</script>

<section class="py-12 px-4 bg-gray-50 relative z-10">
    <div class="max-w-7xl mx-auto">
        <!-- Course Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {#each courses as course}
                <a href="all-courses/{course.link}" class="block group h-full relative">
                    <div class="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 h-full flex flex-col border border-gray-100 relative before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-emerald-500 before:to-teal-600">
                        
                        <!-- Image Container with Absolute Badges -->
                        <div class="aspect-video sm:aspect-[4/3] overflow-hidden relative bg-gray-100">
                            <img
                                src={course.icon}
                                alt={course.title}
                                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                loading="lazy"
                            />
                            
                            <!-- Badges Overlay -->
                            <div class="absolute top-4 left-4 flex flex-wrap gap-2">
                                <span class="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider bg-emerald-600 text-white shadow-sm">
                                    {course.type}
                                </span>
                                <span class="px-2.5 py-1 rounded-lg text-[10px] font-black bg-amber-500 text-white shadow-sm">
                                    Batch {course.year}
                                </span>
                            </div>
                        </div>

                        <!-- Card Body -->
                        <div class="p-6 flex-1 flex flex-col justify-between">
                            <div class="space-y-4">
                                <h3 class="text-lg font-bold text-gray-900 leading-snug group-hover:text-emerald-700 transition-colors">
                                    {course.title}
                                </h3>
                                
                                <!-- Course Features Preview -->
                                <ul class="space-y-2 text-xs text-gray-500 border-t border-gray-50 pt-4">
                                    {#each course.features.slice(0, 2) as feature}
                                        <li class="flex items-start gap-2">
                                            <svg class="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7" />
                                            </svg>
                                            <span class="leading-relaxed">{feature}</span>
                                        </li>
                                    {/each}
                                </ul>
                            </div>
                            
                            <!-- Card Footer -->
                            <div class="pt-6 border-t border-gray-50 mt-4 flex items-center justify-between text-xs font-bold text-emerald-700 group-hover:text-emerald-900 transition-colors">
                                <span>View Batch Details</span>
                                <span class="transform group-hover:translate-x-1.5 transition-transform duration-300">&rarr;</span>
                            </div>
                        </div>

                    </div>
                </a>
            {/each}
        </div>
    </div>
</section>