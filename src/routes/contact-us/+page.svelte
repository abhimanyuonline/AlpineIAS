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

<div class="min-h-screen bg-white">
    <!-- Contact Us Header -->
    <div class="w-full px-0 py-8 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 class="text-4xl font-bold text-green-600">CONTACT US</h1>
            <p class="text-gray-600 mt-2">We would love to hear from you, please feel free to contact us.</p>
            <div class="flex items-center mt-2 text-gray-500">
                <span class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    22-09-2023
                </span>
                <span class="flex items-center ml-6">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    09:55 PM
                </span>
            </div>
        </div>
    </div>

    <!-- Main Content -->
    <div class="w-full flex flex-col lg:flex-row">
        <!-- Left Section - Contact Details -->
        <div class="w-full lg:w-1/3 bg-green-50 p-8">
            <!-- Call us -->
            <div class="mb-8">
                <h2 class="flex items-center text-xl font-semibold text-gray-800 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Call us
                </h2>
                <div class="ml-8">
                    <p class="mb-1"><span class="font-semibold">Dehradun :</span> 9749033332</p>
                    <p class="mb-1"><span class="font-semibold">Dehradun :</span> 8595391567</p>
                    <p class="mb-1"><span class="font-semibold">Dehradun :</span> 8800536991</p>
                </div>
            </div>

            <!-- Location -->
            <div>
                <h2 class="flex items-center text-xl font-semibold text-gray-800 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Location
                </h2>
                
                <!-- Dehradun Location -->
                <div class="ml-8 mb-4">
                    <p class="font-semibold mb-1">Dehradun :</p>
                    <p>Alphin-IAS</p>
                    <p>285/9 Maharani Bagh Lane, Mohit Nagar, Near lane no.9A</p>
                    <p>Dehradun, Uttarakhand</p>
                </div>
            </div>
        </div>

        <!-- Right Section - Contact Form -->
        <div class="w-full lg:w-2/3 p-8">
            <div class="bg-white p-6 shadow-sm border-t-2 border-green-600">
                <!-- Dear aspirant text -->
                <h2 class="text-xl text-green-600 font-medium mb-4">Dear aspirant, please contact us for any counselling or other requirements</h2>
                
                <p class="mb-2">Please Choose one of the following to proceed</p>
                <div class="flex gap-4 mb-6">
                    <button 
                        class="{formType === 'course' ? 'bg-green-50 text-green-600 border border-green-600' : 'bg-white text-gray-500 border border-gray-300'} px-4 py-2 rounded-md"
                        on:click={() => selectFormType('course')}
                    >
                        Course Counselling
                    </button>
                    <button 
                        class="{formType === 'help' ? 'bg-green-50 text-green-600 border border-green-600' : 'bg-white text-gray-500 border border-gray-300'} px-4 py-2 rounded-md"
                        on:click={() => selectFormType('help')}
                    >
                        Help & Support
                    </button>
                </div>
                
                <form id="course-form" on:submit={handleFormSubmit}>
                    {#if formType === 'course'}
                        <!-- Course Selection - Only show for Course Counselling -->
                        <div class="mb-4">
                            <label class="block text-gray-700 mb-2">Choose the Course or Programme you need counselling for:<span class="text-red-500">*</span></label>
                            <select 
                                bind:value={selectedCourse}
                                class="w-full p-2 border border-gray-300 rounded-md" 
                                required
                                name="selectedCourse"
                            >
                                <option value="" disabled selected>Select...</option>
                                <option value="upsc">UPSC</option>
                                <option value="ias">IAS</option>
                                <option value="ips">IPS</option>
                            </select>
                        </div>
                    {/if}
                    
                    <p class="text-gray-700 mb-2">Please fill out your contact details</p>
                    
                    <!-- Name -->
                    <div class="mb-4">
                        <label class="block text-gray-700 mb-2">Name<span class="text-red-500">*</span></label>
                        <input 
                            type="text" 
                            bind:value={name}
                            name="name"
                            placeholder="Enter your full name" 
                            class="w-full p-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    
                    {#if formType === 'help'}
                        <!-- Email & Phone in different order for Help & Support -->
                        <!-- Email (first for Help & Support) -->
                        <div class="mb-4">
                            <label class="block text-gray-700 mb-2">Email<span class="text-red-500">*</span></label>
                            <input 
                                type="email" 
                                name="email"
                                bind:value={email}
                                placeholder="Enter your email ID" 
                                class="w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                        
                        <!-- Phone Number -->
                        <div class="mb-4">
                            <label class="block text-gray-700 mb-2">Phone Number<span class="text-red-500">*</span></label>
                            <input 
                                type="tel" 
                                name="phone"
                                bind:value={phone}
                                placeholder="9999999999" 
                                class="w-full p-2 border border-gray-300 rounded-md"
                                required
                            />
                        </div>
                    {:else}
                        <!-- Phone and Email in original layout for Course Counselling -->
                        <div class="flex flex-wrap gap-4 mb-4">
                            <div class="flex-1 min-w-[45%]">
                                <label class="block text-gray-700 mb-2">Phone Number<span class="text-red-500">*</span></label>
                                <input 
                                    type="tel" 
                                    bind:value={phone}
                                    placeholder="9999999999" 
                                    name="phone"
                                    class="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                            <div class="flex-1 min-w-[45%]">
                                <label class="block text-gray-700 mb-2">Email<span class="text-red-500">*</span></label>
                                <input 
                                    type="email" 
                                    bind:value={email}
                                    name="email"
                                    placeholder="Enter your email ID" 
                                    class="w-full p-2 border border-gray-300 rounded-md"
                                    required
                                />
                            </div>
                        </div>
                    {/if}
                    
                    <!-- Message -->
                    <div class="mb-6">
                        <label class="block text-gray-700 mb-2">Message<span class="text-red-500">*</span></label>
                        <textarea 
                            bind:value={message}
                            name="message"
                            placeholder="Enter your query" 
                            class="w-full p-2 border border-gray-300 rounded-md h-32"
                            required
                        ></textarea>
                    </div>
                    
                    <!-- Submit Button -->
                    <button type="submit" class="w-full px-6 py-3 bg-green-600 text-white font-medium text-lg hover:bg-green-700 transition-colors">
                        {formType === 'help' ? 'SEND' : 'SUBMIT'}
                    </button>
                    
                    <p class="text-xs text-gray-600 mt-2">
                        This site is protected by reCAPTCHA and the Google
                        <a href="#" class="text-green-600">Privacy Policy</a> and
                        <a href="#" class="text-green-600">Terms of Service</a> apply.
                    </p>
                </form>
            </div>
        </div>
    </div>

    <!-- Location Maps Section -->
    <div class="w-full px-0 py-8 bg-white">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
            <!-- Main Location Map -->
            <div class="mb-8">
                <h2 class="flex items-center text-xl font-semibold text-gray-800 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Dehradun
                </h2>
                <div class="rounded-lg overflow-hidden shadow-md border border-gray-200 h-64 md:h-96">
                    <div class="relative w-full h-full">
                        <div class="bg-gray-200 w-full h-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.9303381624605!2d78.00473408482882!3d30.32892613976698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE5JzQ0LjEiTiA3OMKwMDAnMjYuMyJF!5e0!3m2!1sen!2sin!4v1711257231987!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style="border:0;"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div class="absolute bottom-4 left-4 bg-white p-2 shadow-md rounded-md">
                            <div class="flex items-center">
                                <div class="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="font-medium text-sm">Alphin-IAS - Dehradun</p>
                                    <div class="flex items-center mt-1">
                                        <div class="flex items-center text-yellow-500">
                                            <span>4.8</span>
                                            <div class="flex ml-1">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                </svg>
                                            </div>
                                        </div>
                                        <span class="text-gray-600 text-xs ml-2">4,250 reviews</span>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2">
                                <a href="https://maps.google.com/directions?q=30.3289261,78.007309" target="_blank" class="text-blue-500 text-xs flex items-center">
                                    <span>Directions</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Satellite View Map -->
            <div>
                <h2 class="flex items-center text-xl font-semibold text-gray-800 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    Satellite View
                </h2>
                <div class="rounded-lg overflow-hidden shadow-md border border-gray-200 h-64 md:h-96">
                    <div class="relative w-full h-full">
                        <div class="bg-gray-200 w-full h-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.9303381624605!2d78.00473408482882!3d30.32892613976698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE5JzQ0LjEiTiA3OMKwMDAnMjYuMyJF!5e1!3m2!1sen!2sin!4v1711257231987!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style="border:0;"
                                allowfullscreen=""
                                loading="lazy"
                                referrerpolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                        <div class="absolute bottom-4 left-4 bg-white p-2 shadow-md rounded-md">
                            <div class="flex items-center">
                                <div class="mr-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="font-medium text-sm">Alphin-IAS - Satellite View</p>
                                    <p class="text-xs text-gray-600">30°19'44.1"N 78°00'26.3"E, Dehradun</p>
                                </div>
                            </div>
                            <div class="mt-2">
                                <a href="https://maps.google.com/directions?q=30.3289261,78.007309" target="_blank" class="text-blue-500 text-xs flex items-center">
                                    <span>Directions</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<!-- Confirmation Modal -->
{#if showConfirmationModal}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div class="flex items-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 class="text-lg font-semibold text-gray-800">Confirm Submission</h3>
            </div>
            
            <p class="text-gray-600 mb-6">Please review your information before submitting:</p>
            
            <div class="bg-gray-50 p-4 rounded-md mb-6 text-sm">
                <div class="space-y-2">
                    <div><strong>Form Type:</strong> {formData.formType === 'course' ? 'Course Counselling' : 'Help & Support'}</div>
                    <div><strong>Name:</strong> {formData.name}</div>
                    <div><strong>Phone:</strong> {formData.phone}</div>
                    <div><strong>Email:</strong> {formData.email}</div>
                    {#if formData.formType === 'course' && formData.selectedCourse}
                        <div><strong>Course:</strong> {formData.selectedCourse.toUpperCase()}</div>
                    {/if}
                    <div><strong>Message:</strong> {formData.message}</div>
                </div>
            </div>
            
            <div class="flex gap-3">
                <button 
                    class="flex-1 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-colors"
                    on:click={closeConfirmationModal}
                >
                    Cancel
                </button>
                <button 
                    class="flex-1 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
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
    <div class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-white rounded-lg p-6 max-w-md w-full mx-4">
            <div class="text-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-green-600 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 class="text-lg font-semibold text-gray-800 mb-2">Form Submitted Successfully!</h3>
                <p class="text-gray-600 mb-6">Thank you for contacting us. We will get back to you soon.</p>
                <button 
                    class="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
                    on:click={closeSuccessModal}
                >
                    OK
                </button>
            </div>
        </div>
    </div>
{/if}