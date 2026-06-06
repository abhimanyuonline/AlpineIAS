<!-- ADD THESE STYLES TO YOUR HOME PAGE COMPONENT -->
<!-- (The one that contains Marquee, GalleryView, CourseBlocks, TeacherCard, Faqweb, Popup) -->

<script>
    import { onMount } from "svelte";
    import courses from "./courses.json";
    import CourseBlocks from "../components/CourseBlocks.svelte";
    import GalleryView from "../components/GalleryView.svelte";
    import MainMenu from "../components/MainMenu.svelte";
    import Marquee from "../components/Marquee/Marquee.svelte";
    import MarqueeItem from "../components/Marquee/MarqueeItem.svelte";
    import Popup from "../components/Popup.svelte";
    import SideBar from "../components/SideBar/SideBar.svelte";
    import TeacherCard from "../components/TeacherCard.svelte";
    import Faqweb from "../components/Faqweb.svelte";
    import YouTubePopup from "../components/YouTubePopup.svelte";

    let isMobile = $state(false);

    onMount(() => {
        const checkMobile = () => {
            isMobile = window.innerWidth < 768;
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    });

    const links = [
        { name: "Home", link: "/" },
        { name: "All Courses", link: "/all-courses" },
        { name: "Study Materials", link: "/study-material"},
        { name: "Current Affairs", link: "/current-affairs"},
        { name: "Test series", link: "/test-series"},
        { name: "Quizzes", link: "/quizzes"},
        { name: "Contact", link: "/contact-us" },
        { name: "Admission", link: "/admission"}
    ];

    let galleryImages = $derived(isMobile
        ? [["/logos/mobilepopup2.png", "Mobile Banner"], ["/logos/Popup3.jpeg", "Local Banner"],["/logos/Popup4.png", "Local Banner"]]
        : [["/logos/popup1.jpg", "Local Banner"], ["/logos/popup2.png", "Local Banner"], ["/logos/Popup3.jpeg", "Local Banner"], ["/logos/Popup4.png", "Local Banner"]]);
</script>

<!-- Top Ambient Blur Blobs & Hero Section -->
<div class="relative overflow-hidden bg-gradient-to-br from-green-50/50 via-emerald-50/30 to-teal-50/40 border-b border-gray-100">
    <div class="absolute top-[10%] left-[-15%] w-[45vw] h-[45vw] bg-emerald-300/10 rounded-full blur-3xl pointer-events-none"></div>
    <div class="absolute bottom-[20%] right-[-15%] w-[50vw] h-[50vw] bg-teal-300/10 rounded-full blur-3xl pointer-events-none"></div>

    <Marquee>
        {#each links as link}
            <MarqueeItem>
                <a href="{link.link}" class="link font-semibold text-emerald-800 hover:text-emerald-950 transition-colors" aria-label="{link.name}">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        fill="#059669" fill-opacity="0.2" viewBox="0 0 24 24" stroke-width="1.5" stroke="#059669" class="size-5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                    </svg>
                    {link.name}
                </a>
            </MarqueeItem>
        {/each}
    </Marquee>

    <!-- Split Hero Stack -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl pt-8 pb-16 relative z-10 space-y-10">
        <!-- Hero Gallery Banner (Photo Grid) at the top -->
        <div class="bg-white rounded-3xl p-3 shadow-xl shadow-gray-200/30 border border-white/60 overflow-hidden relative">
            <GalleryView images={galleryImages} delay={3000} />
        </div>
        
        <!-- Hero Text and Details below the banner (Centered Glass Card) -->
        <div class="max-w-4xl mx-auto text-center bg-white/80 backdrop-blur-xl border border-white/60 shadow-xl shadow-gray-200/35 rounded-3xl p-8 md:p-12 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-emerald-500 before:to-teal-500">
            <!-- Decorative interior blobs -->
            <div class="absolute -top-12 -left-12 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl pointer-events-none"></div>
            <div class="absolute -bottom-16 -right-16 w-40 h-40 bg-teal-500/5 rounded-full blur-3xl pointer-events-none"></div>

            <div class="relative z-10 space-y-6">
                <!-- Admission Badge -->
                <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100/80 text-emerald-800 border border-emerald-200/50 backdrop-blur-md">
                    <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    ADMISSIONS OPEN 2026-2027
                </div>
                
                <!-- Main Header Title -->
                <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-tight">
                    Navigate Your <span class="bg-gradient-to-r from-emerald-600 to-green-700 bg-clip-text text-transparent">UPSC Journey</span> With <span class="bg-gradient-to-r from-emerald-700 via-green-800 to-teal-900 bg-clip-text text-transparent">Alpine IAS</span>
                </h1>
                
                <!-- Description -->
                <p class="text-gray-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
                    Empowering civil services aspirants in Dehradun and nationwide with customized study plans, integrated prelims-mains strategies, and direct mentoring by experienced educators.
                </p>
                
                <!-- Highlights List with Custom Badges -->
                <div class="flex flex-wrap justify-center gap-3 md:gap-4 pt-2">
                    <span class="flex items-center text-xs md:text-sm font-bold text-emerald-800 bg-emerald-50/80 border border-emerald-100/80 px-4 py-2 rounded-xl shadow-2xs transition-transform hover:scale-105 duration-300">
                        <svg class="h-4.5 w-4.5 text-emerald-600 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 12l2 2 4-4" />
                        </svg>
                        1-on-1 Mentorship
                    </span>
                    <span class="flex items-center text-xs md:text-sm font-bold text-amber-800 bg-amber-50/80 border border-amber-100/80 px-4 py-2 rounded-xl shadow-2xs transition-transform hover:scale-105 duration-300">
                        <svg class="h-4.5 w-4.5 text-amber-600 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.907c.961 0 1.36 1.246.588 1.81l-3.97 2.883a1 1 0 00-.364 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.971-2.883a1 1 0 00-1.18 0l-3.97 2.883c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.364-1.118l-3.97-2.883c-.772-.567-.372-1.81.588-1.81h4.907a1 1 0 00.95-.69l1.519-4.674z" />
                        </svg>
                        Qualified UPSC Faculty
                    </span>
                    <span class="flex items-center text-xs md:text-sm font-bold text-blue-800 bg-blue-50/80 border border-blue-100/80 px-4 py-2 rounded-xl shadow-2xs transition-transform hover:scale-105 duration-300">
                        <svg class="h-4.5 w-4.5 text-blue-600 mr-2 shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.168.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        Integrated GS + CSAT
                    </span>
                </div>
                
                <!-- CTA Buttons with Hover Scaling -->
                <div class="flex flex-wrap justify-center gap-4 pt-4">
                    <a href="/admission" class="px-8 py-3.5 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white font-extrabold rounded-xl shadow-md shadow-emerald-600/15 hover:shadow-lg hover:shadow-emerald-600/25 hover:scale-[1.03] active:scale-[0.99] transition-all duration-300 text-center">
                        Register Online
                    </a>
                    <a href="#courses-section" class="px-8 py-3.5 bg-white hover:bg-gray-50 text-gray-800 font-extrabold rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:scale-[1.03] active:scale-[0.99] transition-all duration-300 text-center">
                        Explore Batches
                    </a>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Core Pillars (The Alpine Edge) -->
<section class="py-12 bg-white border-b border-gray-100 relative z-10">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            <!-- Pillar 1 -->
            <div class="bg-gradient-to-br from-emerald-50/40 to-green-50/30 p-6 rounded-2xl border border-emerald-100/50 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div class="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                    🎓
                </div>
                <h3 class="text-lg font-bold text-emerald-950 mb-2">Dedicated Mentor Support</h3>
                <p class="text-sm text-gray-600 leading-relaxed">
                    UPSC Mains and Interview qualified educators provide regular checkpoints and daily strategy tracking.
                </p>
            </div>
            
            <!-- Pillar 2 -->
            <div class="bg-gradient-to-br from-amber-50/40 to-orange-50/30 p-6 rounded-2xl border border-amber-100/50 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div class="w-12 h-12 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                    ✍️
                </div>
                <h3 class="text-lg font-bold text-amber-950 mb-2">Focused Answer Writing</h3>
                <p class="text-sm text-gray-600 leading-relaxed">
                    Daily evaluation checks with detailed feedback matrices for Optionals, Essays, and GS papers.
                </p>
            </div>
            
            <!-- Pillar 3 -->
            <div class="bg-gradient-to-br from-blue-50/40 to-indigo-50/30 p-6 rounded-2xl border border-blue-100/50 shadow-sm hover:shadow-md transition-all duration-300 group">
                <div class="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-700 flex items-center justify-center font-bold text-xl mb-4 group-hover:scale-110 transition-transform">
                    🌐
                </div>
                <h3 class="text-lg font-bold text-blue-950 mb-2">Flexible Hybrid System</h3>
                <p class="text-sm text-gray-600 leading-relaxed">
                    Attend physical interactive batches in Dehradun or access fully recorded lectures on our portal.
                </p>
            </div>
        </div>
    </div>
</section>

<!-- Courses section container -->
<div id="courses-section" class="pt-20 pb-2 text-center bg-gray-50 relative overflow-hidden">
    <div class="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
    <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200/50 uppercase tracking-widest mb-3">
        OUR PROGRAMMES
    </span>
    <h2 class="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
        Courses Offered by Alpine IAS
    </h2>
    <p class="text-gray-500 text-sm sm:text-base mt-2 max-w-xl mx-auto px-4 leading-relaxed">
        Select a comprehensive learning program designed to suit your stage of preparation—from core NCERT basics to advanced exam series.
    </p>
</div>

<!-- <Popup>
    <img src="https://vajiram-prod.s3.ap-south-1.amazonaws.com/Sure_Shot_Slider_d198e0463a.webp" alt="popup" width="500px">
</Popup> -->

<CourseBlocks courses={courses} />

<TeacherCard />

<Faqweb />

<YouTubePopup />

<style>
.link {
    display: flex;
    gap: 3px;
    align-items: center;
}

/* MOBILE RESPONSIVE FIXES FOR HOME PAGE */
@media (max-width: 768px) {
    /* Ensure all home page content fits properly */
    :global(.marquee-container) {
        overflow-x: hidden;
    }
    
    :global(.gallery-view) {
        margin: 0 -1rem;
    }
    
    :global(.gallery-view img) {
        width: 100%;
        height: auto;
        max-height: 250px;
        object-fit: cover;
    }
    
    :global(.course-blocks) {
        padding: 1rem;
    }
    
    :global(.popup) {
        padding: 1rem;
    }
    
    :global(.popup img) {
        max-width: 90%;
        max-height: 80vh;
        width: auto;
        height: auto;
    }
    
    .link {
        font-size: 12px;
        gap: 2px;
    }
    
    .link svg {
        width: 16px;
        height: 16px;
    }
}

@media (max-width: 480px) {
    :global(.gallery-view img) {
        max-height: 200px;
    }
    
    :global(.course-blocks),
    :global(.faq-section) {
        padding: 0.75rem;
    }
    
    .link {
        font-size: 11px;
        gap: 1px;
    }
    
    .link svg {
        width: 14px;
        height: 14px;
    }
}
</style>