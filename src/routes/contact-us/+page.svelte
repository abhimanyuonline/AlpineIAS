<script lang="ts">
    import { initEmailJS, emailjs } from "$lib/email";
    import { onMount } from "svelte";

    let selectedCourse = '';
    let name = '';
    let phone = '';
    let email = '';
    let message = '';
    let contactPreference = 'phone';
    let callTimePreference = '';
    let formType = 'course'; // Default to 'course' for Course Counselling
    
    // Modal states
    let showConfirmationModal = false;
    let showSuccessModal = false;
    let formData: any = {};

    onMount(() => {
        initEmailJS();
    });

    function handleSubmit() {
        // Handle form submission logic here
        console.log({ 
            formType,
            selectedCourse: formType === 'course' ? selectedCourse : null, 
            name, 
            phone, 
            email, 
            message, 
            contactPreference: formType === 'course' ? contactPreference : null,
            callTimePreference: formType === 'course' ? callTimePreference : null
        });
    }

    function handleFormSubmit(event: Event) {
        event.preventDefault();
        
        // Collect form data for confirmation
        formData = {
            formType,
            name,
            phone,
            email,
            message,
            selectedCourse: formType === 'course' ? selectedCourse : null
        };
        
        // Show confirmation modal
        showConfirmationModal = true;
    }

    function sendEmail() {
        const template = formType === 'course' ? 'course_form' : 'course_form';
        
        // Create a form element for emailjs
        const form = document.getElementById('course-form') as HTMLFormElement;
        
        emailjs.sendForm('contact_form', template, form)
            .then(() => {
                console.log('sent email');
                showSuccessModal = true;
                resetForm();
            })
            .catch(() => {
                console.log('failed to send email');
                // You might want to show an error modal here
            });
    }

    function confirmSubmission() {
        showConfirmationModal = false;
        sendEmail();
    }

    function closeConfirmationModal() {
        showConfirmationModal = false;
    }

    function closeSuccessModal() {
        showSuccessModal = false;
    }

    function selectFormType(type: string) {
        formType = type;
        // Reset form fields when switching between form types
        resetForm();
    }

    function resetForm() {
        selectedCourse = '';
        name = '';
        phone = '';
        email = '';
        message = '';
    }
</script>

<div class="min-h-screen bg-gradient-to-b from-gray-50/50 to-white pb-16">
    <!-- Contact Us Header -->
    <div class="w-full bg-gradient-to-br from-green-50/70 via-white to-green-50/30 border-b border-green-100/60 py-16 mb-12">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
            <span class="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800 mb-4 uppercase tracking-wider">
                Get in Touch
            </span>
            <h1 class="text-4xl md:text-5xl font-extrabold text-green-700 tracking-tight">CONTACT US</h1>
            <p class="text-gray-600 mt-3 text-lg max-w-2xl leading-relaxed">
                Have questions about our UPSC/IAS prep batches or counseling? Reach out, and our expert mentors will help guide your path to success.
            </p>
            <div class="flex flex-wrap gap-6 mt-6 text-sm text-gray-500">
                <span class="flex items-center bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Mon - Sat: 9:00 AM - 7:00 PM
                </span>
                <span class="flex items-center bg-white px-3 py-1.5 rounded-lg border border-gray-100 shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    alpineias06@gmail.com
                </span>
            </div>
        </div>
    </div>

    <!-- Main Content Grid -->
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <!-- Left Column: Contact Details (4 cols on lg) -->
            <div class="lg:col-span-4 space-y-6">
                <!-- Info Intro Card -->
                <div class="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
                    <h2 class="text-lg font-bold text-gray-900 mb-2">Connect Directly</h2>
                    <p class="text-sm text-gray-500">
                        Choose your preferred mode of communication. Call us directly or drop an email query.
                    </p>
                </div>

                <!-- Call Us Card -->
                <div class="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-4">
                    <h3 class="flex items-center text-md font-bold text-gray-800 border-b border-gray-50 pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call us
                    </h3>
                    <div class="space-y-3">
                        <a href="tel:9749033332" class="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 border border-gray-100 hover:border-green-200 hover:bg-green-50/30 transition-all group">
                            <div class="text-sm">
                                <p class="text-xs text-gray-400 font-medium uppercase tracking-wider">Admissions</p>
                                <p class="font-semibold text-gray-700">97490 33332</p>
                            </div>
                            <span class="text-xs text-green-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Call Now &rarr;</span>
                        </a>
                        <a href="tel:8595391567" class="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 border border-gray-100 hover:border-green-200 hover:bg-green-50/30 transition-all group">
                            <div class="text-sm">
                                <p class="text-xs text-gray-400 font-medium uppercase tracking-wider">Counseling</p>
                                <p class="font-semibold text-gray-700">85953 91567</p>
                            </div>
                            <span class="text-xs text-green-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Call Now &rarr;</span>
                        </a>
                        <a href="tel:8800536991" class="flex items-center justify-between p-2.5 rounded-xl bg-gray-50 border border-gray-100 hover:border-green-200 hover:bg-green-50/30 transition-all group">
                            <div class="text-sm">
                                <p class="text-xs text-gray-400 font-medium uppercase tracking-wider">General Inquiry</p>
                                <p class="font-semibold text-gray-700">88005 36991</p>
                            </div>
                            <span class="text-xs text-green-600 font-medium opacity-0 group-hover:opacity-100 transition-opacity">Call Now &rarr;</span>
                        </a>
                    </div>

                    <!-- WhatsApp Quick Connect -->
                    <div class="pt-2">
                        <a 
                            href="https://api.whatsapp.com/send?phone=919749033332&text=Hi,%20I%20have%20an%20inquiry%20regarding%20Alpine%20IAS%20courses." 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            class="flex items-center justify-center gap-2 w-full py-3 px-4 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold rounded-xl shadow-sm hover:shadow-md transition-all active:scale-[0.98]"
                        >
                            <!-- SVG WhatsApp Icon -->
                            <svg class="h-5 w-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.457L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.45 5.436-.003 9.858-4.424 9.861-9.864.002-2.635-1.022-5.11-2.884-6.974C16.38 1.9 13.9.873 11.277.872c-5.437 0-9.86 4.421-9.863 9.86-.001 1.924.506 3.8 1.467 5.419l-.986 3.602 3.687-.967c1.61.879 3.034 1.338 4.572 1.338zm11.385-6.758c-.3-.15-1.774-.875-2.049-.975-.275-.1-.475-.15-.675.15-.2.3-.775.975-.95 1.175-.175.2-.35.225-.65.075-.3-.15-1.267-.467-2.414-1.49-1.085-.967-1.714-2.158-1.926-2.52-.213-.362-.023-.558.127-.707.135-.133.3-.35.45-.525.15-.175.2-.3.3-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.225-.244-.589-.493-.51-.675-.52-.172-.007-.368-.009-.565-.009-.197 0-.52.074-.79.37-.27.297-1.03 1.008-1.03 2.458 0 1.45 1.05 2.852 1.196 3.05.148.2 2.07 3.163 5.016 4.438.7.304 1.247.485 1.674.62.704.224 1.346.192 1.853.116.565-.084 1.774-.725 2.024-1.425.25-.7.25-1.3 1.75-1.425-.075-.125-.275-.225-.575-.375z"/>
                            </svg>
                            Chat with an Advisor
                        </a>
                    </div>
                </div>

                <!-- Location / Address Card -->
                <div class="space-y-3">
                    <h3 class="flex items-center text-md font-bold text-gray-800 px-2 pb-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        Office Location
                    </h3>
                    
                    <div class="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow duration-300">
                        <div class="flex items-start gap-3">
                            <div class="p-2 bg-green-50 rounded-lg text-green-600 shrink-0">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div class="space-y-4 flex-1">
                                <div>
                                    <h4 class="font-bold text-gray-900 text-lg">Alpine IAS</h4>
                                    <p class="text-xs font-semibold text-green-600 uppercase tracking-wider">Dehradun Campus</p>
                                </div>
                                
                                <div class="text-gray-600 text-sm leading-relaxed space-y-1">
                                    <p class="font-semibold text-gray-800">CP 12, 1st Floor, ITBP Road</p>
                                    <p>Indira Nagar</p>
                                    <p>Dehradun, Uttarakhand - 248006</p>
                                    <p class="text-xs text-gray-500 mt-2 bg-gray-50 p-2 rounded border border-gray-100 flex items-center gap-1.5">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5 text-green-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4" />
                                        </svg>
                                        <span><strong>Landmark:</strong> Near Leo Bakery</span>
                                    </p>
                                </div>

                                <div class="pt-1">
                                    <a 
                                        href="https://maps.app.goo.gl/7Qf4g12Wc4u6QeF16" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        class="inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-bold rounded-xl shadow-sm hover:shadow transition-all duration-200"
                                    >
                                        <span>Get Directions</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Right Column: Contact Form (8 cols on lg) -->
            <div class="lg:col-span-8">
                <div class="bg-white p-8 rounded-3xl border border-gray-100 shadow-md shadow-gray-100/50 relative overflow-hidden">
                    <!-- Subtle background blob -->
                    <div class="absolute -top-12 -right-12 w-24 h-24 bg-green-500/5 rounded-full blur-xl pointer-events-none"></div>
                    
                    <!-- Headings -->
                    <div class="mb-6">
                        <h2 class="text-2xl font-bold text-gray-900 tracking-tight">Send a Message</h2>
                        <p class="text-sm text-gray-500 mt-1">Fill out the form below to receive batch counseling or support from our advisors.</p>
                    </div>
                    
                    <!-- Tab switch header -->
                    <div class="inline-flex p-1 bg-gray-100 rounded-xl mb-6">
                        <button 
                            type="button"
                            class="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 {formType === 'course' ? 'bg-white text-green-700 shadow-sm' : 'text-gray-500 hover:text-gray-800'}"
                            on:click={() => selectFormType('course')}
                        >
                            Course Counselling
                        </button>
                        <button 
                            type="button"
                            class="px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-200 {formType === 'help' ? 'bg-white text-green-700 shadow-sm' : 'text-gray-500 hover:text-gray-800'}"
                            on:click={() => selectFormType('help')}
                        >
                            Help & Support
                        </button>
                    </div>
                    
                    <!-- Main Form -->
                    <form id="course-form" on:submit={handleFormSubmit} class="space-y-5">
                        
                        {#if formType === 'course'}
                            <!-- Course Selection -->
                            <div class="space-y-1.5">
                                <label for="selectedCourse" class="block text-sm font-semibold text-gray-700">Choose Programme / Course:<span class="text-red-500 ml-0.5">*</span></label>
                                <div class="relative">
                                    <select 
                                        id="selectedCourse"
                                        bind:value={selectedCourse}
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-green-600 focus:ring-4 focus:ring-green-600/10 transition-all outline-none text-gray-800 appearance-none" 
                                        required
                                        name="selectedCourse"
                                    >
                                        <option value="" disabled selected>Select a programme...</option>
                                        <option value="upsc">UPSC (IAS/IPS/IFS) Comprehensive</option>
                                        <option value="ias">IAS Foundation Batch</option>
                                        <option value="ips">UPSC Prelims/Mains Test Series</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        {/if}
                        
                        <!-- Name Field -->
                        <div class="space-y-1.5">
                            <label for="name" class="block text-sm font-semibold text-gray-700">Full Name:<span class="text-red-500 ml-0.5">*</span></label>
                            <input 
                                id="name"
                                type="text" 
                                bind:value={name}
                                name="name"
                                placeholder="Enter your full name" 
                                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-green-600 focus:ring-4 focus:ring-green-600/10 transition-all outline-none text-gray-800 placeholder-gray-400"
                                required
                            />
                        </div>
                        
                        {#if formType === 'help'}
                            <!-- Email & Phone for Help & Support -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="space-y-1.5">
                                    <label for="help-email" class="block text-sm font-semibold text-gray-700">Email Address:<span class="text-red-500 ml-0.5">*</span></label>
                                    <input 
                                        id="help-email"
                                        type="email" 
                                        name="email"
                                        bind:value={email}
                                        placeholder="name@example.com" 
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-green-600 focus:ring-4 focus:ring-green-600/10 transition-all outline-none text-gray-800 placeholder-gray-400"
                                        required
                                    />
                                </div>
                                
                                <div class="space-y-1.5">
                                    <label for="help-phone" class="block text-sm font-semibold text-gray-700">Phone Number:<span class="text-red-500 ml-0.5">*</span></label>
                                    <input 
                                        id="help-phone"
                                        type="tel" 
                                        name="phone"
                                        bind:value={phone}
                                        placeholder="Enter 10-digit mobile number" 
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-green-600 focus:ring-4 focus:ring-green-600/10 transition-all outline-none text-gray-800 placeholder-gray-400"
                                        required
                                    />
                                </div>
                            </div>
                        {:else}
                            <!-- Phone & Email for Course Counselling (original order) -->
                            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div class="space-y-1.5">
                                    <label for="course-phone" class="block text-sm font-semibold text-gray-700">Phone Number:<span class="text-red-500 ml-0.5">*</span></label>
                                    <input 
                                        id="course-phone"
                                        type="tel" 
                                        bind:value={phone}
                                        placeholder="Enter 10-digit mobile number" 
                                        name="phone"
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-green-600 focus:ring-4 focus:ring-green-600/10 transition-all outline-none text-gray-800 placeholder-gray-400"
                                        required
                                    />
                                </div>
                                <div class="space-y-1.5">
                                    <label for="course-email" class="block text-sm font-semibold text-gray-700">Email Address:<span class="text-red-500 ml-0.5">*</span></label>
                                    <input 
                                        id="course-email"
                                        type="email" 
                                        name="email"
                                        placeholder="name@example.com" 
                                        class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-green-600 focus:ring-4 focus:ring-green-600/10 transition-all outline-none text-gray-800 placeholder-gray-400"
                                        required
                                    />
                                </div>
                            </div>
                        {/if}
                        
                        <!-- Message Field -->
                        <div class="space-y-1.5">
                            <label for="message" class="block text-sm font-semibold text-gray-700">Your Query / Message:<span class="text-red-500 ml-0.5">*</span></label>
                            <textarea 
                                id="message"
                                bind:value={message}
                                name="message"
                                placeholder="Tell us about your UPSC goals or batch counseling requirements..." 
                                class="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-green-600 focus:ring-4 focus:ring-green-600/10 transition-all outline-none text-gray-800 placeholder-gray-400 h-36 resize-none"
                                required
                            ></textarea>
                        </div>
                        
                        <!-- Submit Button -->
                        <div class="pt-2">
                            <button 
                                type="submit" 
                                class="w-full px-6 py-4 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold text-lg rounded-xl shadow-md shadow-green-600/10 hover:shadow-lg hover:shadow-green-600/20 active:scale-[0.99] transition-all duration-200"
                            >
                                {formType === 'help' ? 'Send Message' : 'Submit Counselling Form'}
                            </button>
                        </div>
                        
                        <p class="text-xs text-gray-400 text-center mt-2 leading-relaxed">
                            This site is protected by reCAPTCHA and the Google
                            <a href="#" class="text-green-600 font-medium hover:underline">Privacy Policy</a> and
                            <a href="#" class="text-green-600 font-medium hover:underline">Terms of Service</a> apply.
                        </p>
                    </form>
                </div>
            </div>
            
        </div>
    </div>
</div>

<!-- Confirmation Modal -->
{#if showConfirmationModal}
    <div class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-2xl p-6 md:p-8 max-w-md w-full shadow-xl border border-gray-100 relative overflow-hidden animate-in fade-in zoom-in duration-200">
            <!-- Header decoration -->
            <div class="flex items-center gap-3 mb-4">
                <div class="p-2.5 bg-green-50 rounded-xl text-green-600 shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </div>
                <h3 class="text-xl font-bold text-gray-900">Confirm Submission</h3>
            </div>
            
            <p class="text-sm text-gray-500 mb-5 leading-relaxed">Please double-check your information before submitting to our counselor team:</p>
            
            <div class="bg-gray-50 rounded-xl p-5 border border-gray-100 text-sm space-y-3 mb-6">
                <div class="grid grid-cols-3 gap-2">
                    <span class="text-gray-400 font-medium">Type:</span>
                    <span class="col-span-2 text-gray-800 font-semibold">{formData.formType === 'course' ? 'Course Counselling' : 'Help & Support'}</span>
                </div>
                <div class="grid grid-cols-3 gap-2 border-t border-gray-100/50 pt-2.5">
                    <span class="text-gray-400 font-medium">Name:</span>
                    <span class="col-span-2 text-gray-800 font-semibold">{formData.name}</span>
                </div>
                <div class="grid grid-cols-3 gap-2 border-t border-gray-100/50 pt-2.5">
                    <span class="text-gray-400 font-medium">Phone:</span>
                    <span class="col-span-2 text-gray-800 font-semibold">{formData.phone}</span>
                </div>
                <div class="grid grid-cols-3 gap-2 border-t border-gray-100/50 pt-2.5">
                    <span class="text-gray-400 font-medium">Email:</span>
                    <span class="col-span-2 text-gray-800 font-semibold break-all">{formData.email}</span>
                </div>
                {#if formData.formType === 'course' && formData.selectedCourse}
                    <div class="grid grid-cols-3 gap-2 border-t border-gray-100/50 pt-2.5">
                        <span class="text-gray-400 font-medium">Programme:</span>
                        <span class="col-span-2 text-gray-800 font-semibold uppercase">{formData.selectedCourse}</span>
                    </div>
                {/if}
                <div class="grid grid-cols-3 gap-2 border-t border-gray-100/50 pt-2.5">
                    <span class="text-gray-400 font-medium font-normal">Message:</span>
                    <span class="col-span-2 text-gray-700 italic max-h-24 overflow-y-auto block leading-normal pr-1">{formData.message}</span>
                </div>
            </div>
            
            <div class="flex gap-3">
                <button 
                    class="flex-1 px-4 py-3 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 active:scale-[0.98] transition-all"
                    on:click={closeConfirmationModal}
                >
                    Cancel
                </button>
                <button 
                    class="flex-1 px-4 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-xl shadow-md shadow-green-600/10 active:scale-[0.98] transition-all"
                    on:click={confirmSubmission}
                >
                    Confirm & Submit
                </button>
            </div>
        </div>
    </div>
{/if}

<!-- Success Modal -->
{#if showSuccessModal}
    <div class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4">
        <div class="bg-white rounded-2xl p-8 max-w-md w-full shadow-xl border border-gray-100 text-center relative overflow-hidden animate-in fade-in zoom-in duration-200">
            <div class="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">Form Submitted!</h3>
            <p class="text-sm text-gray-500 mb-6 leading-relaxed">
                Thank you for reaching out to Alpine IAS. Our admissions coordinator will get in touch with you shortly.
            </p>
            <button 
                class="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold rounded-xl shadow-md shadow-green-600/10 active:scale-[0.98] transition-all"
                on:click={closeSuccessModal}
            >
                Done
            </button>
        </div>
    </div>
{/if}