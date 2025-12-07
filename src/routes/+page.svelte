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
        { name: "Admision", link: "/admision"}
    ];

    let galleryImages = $derived(isMobile
        ? [["/logos/mobilepopup2.png", "Mobile Banner"]]
        : [["/logos/popup1.jpg", "Local Banner"], ["/logos/popup2.png", "Local Banner"]]);
</script>

<Marquee>
    {#each links as link}
        <MarqueeItem>
            <a href="{link.link}" class="link" aria-label="{link.name}">
                <svg xmlns="http://www.w3.org/2000/svg"
                    fill="red" fill-opacity="0.5" viewBox="0 0 24 24" stroke-width="1.5" stroke="red" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
                </svg>
                {link.name}
            </a>
        </MarqueeItem>
    {/each}
</Marquee>

<GalleryView images={galleryImages} delay={3000} />

<!-- NEW HEADING SECTION -->
<div class="courses-heading-container">
    <h2 class="courses-heading">Courses Offered by Alpine IAS</h2>
</div>

<!-- <Popup>
    <img src="https://vajiram-prod.s3.ap-south-1.amazonaws.com/Sure_Shot_Slider_d198e0463a.webp" alt="popup" width="500px">
</Popup> -->

<CourseBlocks courses={courses} />

<TeacherCard />

<Faqweb />

<style>
.link {
    display: flex;
    gap: 3px;
}

/* COURSES HEADING STYLES */
.courses-heading-container {
    text-align: center;
    padding: 5rem 1rem 0rem 1rem;
    background-color: #f8f9fa;
}

.courses-heading {
    font-size: 2.5rem;
    font-weight: bold;
    color: #2d5a3d;
    margin: 0;
    text-transform: uppercase;
    letter-spacing: 1px;
    position: relative;
}

.courses-heading::after {
    content: '';
    display: block;
    width: 80px;
    height: 3px;
    background-color: #2d5a3d;
    margin: 0.5rem auto 0 auto;
    border-radius: 2px;
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
    
    /* Mobile heading styles */
    .courses-heading-container {
        padding: 1.5rem 1rem 0rem 1rem;
    }
    
    .courses-heading {
        font-size: 1.8rem;
        letter-spacing: 0.5px;
    }
    
    .courses-heading::after {
        width: 60px;
        height: 2px;
        margin: 0.25rem auto 0 auto;
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
    
    /* Small mobile heading styles */
    .courses-heading-container {
        padding: 3rem 0.75rem 0rem 0.75rem;
    }
    
    .courses-heading {
        font-size: 1.5rem;
        letter-spacing: 0.3px;
    }
    
    .courses-heading::after {
        width: 50px;
        height: 2px;
        margin: 0.25rem auto 0 auto;
    }
}
</style>