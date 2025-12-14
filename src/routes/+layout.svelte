<script lang="ts">   
  import '../app.css';   
  import MainMenu from '../components/MainMenu.svelte';   
  import SideBar from '../components/SideBar/SideBar.svelte';   
  import Footer from '../components/Footer.svelte';   
  import { onMount } from 'svelte';    
  
  // Detect screen size for responsive sidebar toggle - Removed as Sidebar is now visible on all devices 
</script>  

<svelte:head>
  <title>AlpineIAS - Premier UPSC Coaching Institute in Dehradun, India</title>
  <meta name="description" content="AlpineIAS is Dehradun's leading UPSC coaching institute, providing comprehensive IAS preparation with expert faculty, proven strategies, and personalized mentorship." />

  <!-- Open Graph meta tags -->
  <meta property="og:title" content="AlpineIAS - Premier UPSC Coaching Institute in Dehradun, India" />
  <meta property="og:description" content="AlpineIAS is Dehradun's leading UPSC coaching institute, providing comprehensive IAS preparation with expert faculty, proven strategies, and personalized mentorship." />
  <meta property="og:image" content="https://alpineias.com/logos/alpinelogo.png" />
  <meta property="og:image:alt" content="AlpineIAS Logo - Premier UPSC Coaching Institute" />
  <meta property="og:url" content="https://alpineias.com/" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="AlpineIAS" />
  <meta property="og:locale" content="en_IN" />

  <!-- Twitter Card meta tags -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="AlpineIAS - Premier UPSC Coaching Institute in Dehradun, India" />
  <meta name="twitter:description" content="AlpineIAS is Dehradun's leading UPSC coaching institute with expert faculty and proven success rates." />
  <meta property="twitter:image" content="https://alpineias.com/logos/alpinelogo.png" />
  <meta name="twitter:image:alt" content="AlpineIAS Logo - Premier UPSC Coaching Institute" />
  <meta name="twitter:site" content="@AlpineIAS" />
  <meta name="twitter:creator" content="@AlpineIAS" />

  <!-- Additional meta tags for better SEO -->
  <meta name="robots" content="index, follow, max-image-preview:large" />
  <meta name="author" content="AlpineIAS" />
  <meta name="keywords" content="UPSC coaching, IAS preparation, civil services, Dehradun, AlpineIAS, UPSC institute, IAS coaching" />
  <link rel="canonical" href="https://alpineias.com/" />
 <script type="application/ld+json">
 {
   "@context": "https://schema.org",
   "@type": "Organization",
   "name": "AlpineIAS",
   "url": "https://alpineias.com/",
   "logo": "https://alpineias.com/logos/alpinelogo.png",
   "description": "AlpineIAS is Dehradun's leading UPSC coaching institute, providing comprehensive IAS preparation with expert faculty, proven strategies, and personalized mentorship.",
   "address": {
     "@type": "PostalAddress",
     "streetAddress": "285/9, Maharani Bagh Ln, near ballupur chowk, Mohit Nagar",
     "addressLocality": "Dehradun",
     "addressRegion": "Uttarakhand",
     "postalCode": "248001",
     "addressCountry": "IN"
   }
 }
 </script>
</svelte:head>

<!-- ✅ MAIN PAGE LAYOUT --> 
<div class="min-h-screen flex flex-col overflow-x-hidden">   
  <!-- Fixed Main Menu -->   
  <div class="fixed top-0 left-0 right-0 z-50 bg-white shadow w-full">     
    <MainMenu />   
  </div>    
  
  <!-- Add more top padding to create space between navbar and pages -->   
  <div class="flex-1 flex pt-20">     
    <main class="flex-1 w-full overflow-x-hidden min-w-0">       
      <slot />     
    </main>     
    <SideBar />   
  </div>    
  
  <Footer /> 
</div>  

<style>   
  :global(body) {     
    margin: 0;     
    padding: 0;     
    overflow-x: hidden;   
  }    
  
  :global(html, body, #app) {     
    height: 100%;     
    margin: 0;     
    padding: 0;     
    overflow-x: hidden;     
    width: 100%;   
  } 
</style>