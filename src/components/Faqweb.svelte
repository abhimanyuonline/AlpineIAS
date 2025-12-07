<script>
  import { slide } from 'svelte/transition';
  
  // Alpine green custom colors - matching your main theme
  export let alpineGreen = "#036752";
  export let alpineGreenLight = "#0d8b75";
  export let alpineGreenDark = "#025444";
  
  // FAQ items data
  export let faqItems = [
  {
    question: "What is the eligibility criteria for UPSC Civil Services Exam?",
    answer: "You must have a graduate degree from a recognized university and be between 21 to 32 years of age (for general category). Age relaxation is available for reserved categories.",
    isOpen: false
  },
  {
    question: "Do you provide online or offline coaching?",
    answer: "Yes, we offer both online and offline batches. You can choose based on your preference and convenience.",
    isOpen: false
  },
  {
    question: "What is included in the GS Foundation course?",
    answer: "The GS Foundation course includes classes for Prelims, Mains, CSAT, current affairs, test series, and personal mentorship.",
    isOpen: false
  },
  {
    question: "Can I access recorded lectures if I miss a class?",
    answer: "Yes, all our live classes are recorded and made available on the student portal for later access.",
    isOpen: false
  },
  {
    question: "Do you offer test series for Prelims and Mains?",
    answer: "Yes, we offer structured test series based on the latest UPSC pattern with detailed evaluation and feedback.",
    isOpen: false
  },
  {
    question: "Do you offer hybrid learning mode for flexibility?",
    answer: "Yes, we provide hybrid learning options that combine both online and offline modes. Students can attend live classes in person and also access online resources, recorded lectures, and digital study materials for maximum flexibility.",
    isOpen: false
  },
  {
    question: "What are the optional subjects available for UPSC Mains?",
    answer: "There are a total of 48 optional subjects in the UPSC Mains exam, which includes 25 core subjects and 23 literature optional subjects. The core subjects are: Agriculture, Animal Husbandry and Veterinary Science, Anthropology, Botany, Chemistry, Civil Engineering, Commerce and Accountancy, Economics, Electrical Engineering, Geography, Geology, History, Law, Management, Mathematics, Mechanical Engineering, Medical Science, Philosophy, Physics, Political Science and International Relations, Psychology, Public Administration, Sociology, Statistics, and Zoology. Literature subjects include: Assamese, Bengali, Bodo, Dogri, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Oriya, Punjabi, Sanskrit, Santali, Sindhi, Tamil, Telugu, Urdu, and English.",
    isOpen: false
  }
];
  
  // Toggle FAQ item
  function toggleItem(index) {
    faqItems = faqItems.map((item, i) => {
      if (i === index) {
        return { ...item, isOpen: !item.isOpen };
      } else {
        return { ...item, isOpen: false };
      }
    });
  }
</script>

<section class="faq-section py-10 max-w-4xl mx-auto px-5">
  <div class="flex flex-col md:flex-row md:gap-10">
    <!-- Left column with title -->
    <div class="md:w-1/3 mb-8 md:mb-0">
      <h1 class="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
    </div>
    
    <!-- Right column with FAQ list -->
    <div class="md:w-2/3">
      <!-- FAQ accordion -->
      <div class="space-y-4">
        {#each faqItems as item, index}
          <div class="border-b border-gray-200 pb-4">
            <!-- FAQ Question -->
            <button 
              class="flex w-full justify-between items-center py-2 text-left font-medium focus:outline-none hover:text-alpine-green" 
              style="--alpine-green: {alpineGreen};"
              on:click={() => toggleItem(index)}
              aria-expanded={item.isOpen}
              aria-controls={`faq-answer-${index}`}
            >
              <span>{item.question}</span>
              <svg 
                class="w-5 h-5 transform transition-transform duration-200 {item.isOpen ? 'rotate-180' : ''}" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </button>
            
            <!-- FAQ Answer -->
            {#if item.isOpen}
              <div 
                id={`faq-answer-${index}`}
                class="mt-2 text-gray-600"
                transition:slide={{ duration: 200 }}
              >
                <p>{item.answer}</p>
              </div>
            {/if}
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>

<style>
  .faq-section {
    font-family: Inter, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  }
  
  /* Custom styling for accordion */
  button {
    transition: all 0.2s ease;
  }
  
  button:hover {
    color: var(--alpine-green, #036752);
  }
  
  /* Active state for question */
  button[aria-expanded="true"] {
    color: var(--alpine-green, #036752);
  }
</style>