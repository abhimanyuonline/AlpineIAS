<script>
    import { fade } from 'svelte/transition';
    
    // Alpine green custom colors - matching your main theme
    export let alpineGreen = "#036752";
    export let alpineGreenLight = "#0d8b75";
    export let alpineGreenDark = "#025444";
    
    // Teacher cards data with professional UPSC-focused descriptions
    export let teachers = [
      {
        name: "Munde Dhananjay",
        image: "/teachersimage/teacherimage1.jpg",
        tags: ["UPSC MAINS QUALIFIED", "PUBLIC ADMINISTRATION"],
        description: "UPSC Mains qualified mentor with proven expertise in guiding aspirants through the challenging civil services examination. Specializes in answer writing techniques, time management strategies, and comprehensive coverage of General Studies papers. My structured approach has helped numerous students clear Prelims and excel in Mains with confidence."
      },
      {
        name: "Shikhar Saurav",
        image: "/teachersimage/teacherimage2.jpg",
        tags: ["NIT DURGAPUR", "UPSC INTERVIEW", "DIRECTOR"],
        description: "Director and UPSC Interview specialist with engineering background from NIT Durgapur. Having successfully navigated through all three stages of UPSC, I provide comprehensive guidance from Prelims strategy to Interview preparation. My technical background combined with civil services experience offers unique insights into contemporary issues and administrative challenges."
      },
      {
        name: "Sonam Banga",
        image: "/teachersimage/teacherimage3.jpg",
        tags: ["JNU MASTERS", "UPSC INTERVIEW", "POLITICAL SCIENCE"],
        description: "JNU Masters graduate and UPSC Interview qualified mentor specializing in Political Science and International Relations. With deep academic foundation and practical UPSC experience, I focus on conceptual clarity, current affairs integration, and developing analytical thinking essential for civil services success. My personalized approach ensures each student reaches their full potential."
      },
      {
        name: "Shikha Shalini",
        image: "/teachersimage/teacherimage4.jpg",
        tags: ["PH.D. TAIWAN", "3 UPSC INTERVIEWS", "ETHICS & ESSAY"],
        description: "Ph.D. in Organisational Management and Leadership from Yuan Ze University, Taiwan, with 5 years of teaching experience in Environmental Sustainability and English Communication. Having appeared in 3 UPSC interviews, I specialize in English writing, essay writing, ethics, and comprehensive interview preparation. My academic background and practical UPSC experience provide unique insights into personality development and communication skills essential for civil services success."
      },
       {
        name: "RAKESH  KUMAR SAH",
        image: "/teachersimage/teacherimage5.jpg",
        tags: ["BTECH IIT KHRAGPUR", "MBA :IIM LUCKNOW "],
        description: "Ph.D. in Organisational Management and Leadership from Yuan Ze University, Taiwan, with 5 years of teaching experience in Environmental Sustainability and English Communication. Having appeared in 3 UPSC interviews, I specialize in English writing, essay writing, ethics, and comprehensive interview preparation. My academic background and practical UPSC experience provide unique insights into personality development and communication skills essential for civil services success."
      }
    ];
    
    // Button hover states for teacher cards
    let teacherButtonHovered = Array(teachers.length).fill(false);
    
    function handleTeacherButtonHover(index, isHover) {
      teacherButtonHovered[index] = isHover;
    }

    // Handle image loading errors
    function handleImageError(event) {
      // Set a placeholder or default image when the original fails to load
      event.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjMwMCIgdmlld0JveD0iMCAwIDMwMCAzMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjE1MCIgY3k9IjEyMCIgcj0iNDAiIGZpbGw9IiM5Q0EzQUYiLz4KPHBhdGggZD0iTTEwMCAyMDBDMTAwIDIwMCAxMjAgMTgwIDE1MCAxODBDMTgwIDE4MCAyMDAgMjAwIDIwMCAyMDBWMjUwSDE0MEgxMDBWMjAwWiIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K';
      event.target.alt = 'Default avatar';
    }
</script>
  

<!-- Teacher Cards Section -->
<section class="py-16 bg-gray-50 relative z-10 border-t border-gray-100">
    <div class="container mx-auto px-6">
      <!-- Section Heading -->
      <div class="mb-12 text-center">
        <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200/50 uppercase tracking-widest mb-3">
            EXPERT MENTORS
        </span>
        <h2 class="text-3xl sm:text-4xl font-extrabold text-emerald-950 tracking-tight">
            Meet Our UPSC Mentors
        </h2>
        <p class="text-gray-500 text-sm sm:text-base mt-2 max-w-xl mx-auto px-4 leading-relaxed">
            Expert guidance, personality development, and administrative insights from qualified civil services professionals.
        </p>
      </div>
      
      <!-- Teacher Cards Container - Updated for Infinite Scroll -->
      <div class="marquee-container">
        <div class="marquee-content">
          {#each [...teachers, ...teachers] as teacher, index}
            <div class="teacher-card-wrapper">
              <div class="bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 teacher-card">
                <div class="px-4 pt-4 pb-6">
                  <!-- Image Container made smaller -->
                  <div class="image-container">
                    <img 
                      src={teacher.image} 
                      alt={teacher.name} 
                      class="teacher-image"
                      on:error={handleImageError}
                      loading="lazy"
                    />
                  </div>
                  
                  <div class="text-center">
                    <h3 class="text-xl font-bold mb-2 text-gray-800">{teacher.name}</h3>
                    
                    <!-- Qualification Tags - made more compact -->
                    <div class="flex flex-wrap justify-center gap-1 mb-3">
                      {#each teacher.tags as tag}
                        <span class="bg-gradient-to-r from-blue-50 to-green-50 text-gray-700 px-2 py-1 rounded-full text-xs font-medium border border-gray-200">{tag}</span>
                      {/each}
                    </div>
                    
                    <!-- Description - shortened with ellipsis -->
                    <p class="text-gray-600 mb-4 leading-tight text-xs text-left line-clamp-4">
                      {teacher.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          {/each}
        </div>
      </div>
    </div>
</section>
  
<style>
    /* Infinite Scroll Animation */
    @keyframes scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(calc(-300px * 5 - 1.5rem * 5));
        }
    }

    .marquee-container {
        width: 100%;
        overflow: hidden;
        padding: 20px 0;
        position: relative;
    }

    .marquee-content {
        display: flex;
        gap: 1.5rem;
        width: max-content;
        animation: scroll 30s linear infinite;
    }

    .marquee-content:hover {
        animation-play-state: paused;
    }

    .teacher-card-wrapper {
        flex: 0 0 300px;
        width: 300px;
    }

    /* Smaller image container */
    .image-container {
      width: 100%;
      aspect-ratio: 1/1; /* Square images for better space usage */
      position: relative;
      overflow: hidden;
      border-radius: 12px;
      background-color: #f8f9fa;
      margin: 0 auto 16px auto;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
    }
    
    .teacher-image {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center top;
      transition: all 0.3s ease;
      border-radius: 12px;
    }
    
    .image-container:hover .teacher-image {
      transform: scale(1.02);
    }
    
    /* More compact teacher card */
    .teacher-card {
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
      border: 1px solid rgba(0, 0, 0, 0.05);
      min-height: 380px; /* Reduced height */
    }
    
    .teacher-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 12px 24px rgba(3, 103, 82, 0.1);
    }
    
    /* Line clamp for description text */
    .line-clamp-4 {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    /* Responsive adjustments */
    @media (max-width: 1280px) {
      .marquee-container {
        padding: 15px 0;
      }
    }
    
    @media (max-width: 768px) {
      .teacher-card-wrapper {
        flex: 0 0 280px;
        width: 280px;
      }
      
      .image-container {
        aspect-ratio: 1/1;
      }
    }
    
    @media (max-width: 480px) {
      .teacher-card-wrapper {
        flex: 0 0 260px;
        width: 260px;
      }
    }
</style>