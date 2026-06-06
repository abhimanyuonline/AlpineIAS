<script>
	import { onMount } from 'svelte';
	import { fade, scale } from 'svelte/transition';
	// Add these imports for EmailJS functionality
	import { initEmailJS, emailjs } from '$lib/email';

	// Form data
	let formData = {
		// Personal Details
		fullName: '',
		dateOfBirth: '',
		gender: '',
		nationality: '',
		category: '',
		aadhaarNumber: '',

		// Contact Information
		mobileNumber: '',
		alternateMobileNumber: '',
		emailAddress: '',
		permanentAddress: '',
		correspondenceAddress: '',

		// Educational Qualifications
		class10Board: '',
		class10Year: '',
		class10Percentage: '',
		class12Board: '',
		class12Year: '',
		class12Percentage: '',
		graduationBoard: '',
		graduationYear: '',
		graduationPercentage: '',
		postGraduationBoard: '',
		postGraduationYear: '',
		postGraduationPercentage: '',

		// Course Details
		courseAppliedFor: '',
		testSeriesSubject: '',
		optionalSubject: '',
		feePaymentPreference: '',

		// Payment Details
		modeOfPayment: '',
		transactionId: '',
		amountPaid: '',
		dateOfPayment: ''
	};

	let errors = {};
	let isSubmitting = false;

	// Add modal states for confirmation and success
	let showConfirmationModal = false;
	let showSuccessModal = false;

	// Initialize EmailJS on component mount
	onMount(() => {
		initEmailJS();
	});

	function validateForm() {
		errors = {};

		// Required field validations
		if (!formData.fullName.trim()) errors.fullName = 'Full Name is required';
		if (!formData.dateOfBirth) errors.dateOfBirth = 'Date of Birth is required';
		if (!formData.gender) errors.gender = 'Gender is required';
		if (!formData.mobileNumber.trim()) errors.mobileNumber = 'Mobile Number is required';
		if (!formData.emailAddress.trim()) errors.emailAddress = 'Email Address is required';
		if (!formData.courseAppliedFor) errors.courseAppliedFor = 'Course selection is required';

		// Email validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (formData.emailAddress && !emailRegex.test(formData.emailAddress)) {
			errors.emailAddress = 'Please enter a valid email address';
		}

		// Mobile number validation
		const mobileRegex = /^[0-9]{10}$/;
		if (formData.mobileNumber && !mobileRegex.test(formData.mobileNumber)) {
			errors.mobileNumber = 'Please enter a valid 10-digit mobile number';
		}

		return Object.keys(errors).length === 0;
	}

	// Modified handleSubmit to show confirmation modal
	async function handleSubmit(event) {
		event.preventDefault();

		if (!validateForm()) return;

		// Show confirmation modal instead of directly submitting
		showConfirmationModal = true;
	}

	// New function to send email using EmailJS
	function sendEmail() {
		// Create a comprehensive message with all form details
		const detailedMessage = `
STUDENT APPLICATION FORM SUBMISSION

=== PERSONAL DETAILS ===
Full Name: ${formData.fullName}
Date of Birth: ${formData.dateOfBirth}
Gender: ${formData.gender}
Nationality: ${formData.nationality}
Category: ${formData.category}
Aadhaar Number: ${formData.aadhaarNumber}

=== CONTACT INFORMATION ===
Mobile Number: ${formData.mobileNumber}
Alternate Mobile: ${formData.alternateMobileNumber}
Email Address: ${formData.emailAddress}
Permanent Address: ${formData.permanentAddress}
Correspondence Address: ${formData.correspondenceAddress}

=== EDUCATIONAL QUALIFICATIONS ===
10th Board: ${formData.class10Board} | Year: ${formData.class10Year} | Percentage: ${formData.class10Percentage}
12th Board: ${formData.class12Board} | Year: ${formData.class12Year} | Percentage: ${formData.class12Percentage}
Graduation: ${formData.graduationBoard} | Year: ${formData.graduationYear} | Percentage: ${formData.graduationPercentage}
Post-Graduation: ${formData.postGraduationBoard} | Year: ${formData.postGraduationYear} | Percentage: ${formData.postGraduationPercentage}

=== COURSE DETAILS ===
Course Applied For: ${formData.courseAppliedFor}
Test Series Subject: ${formData.testSeriesSubject}
Optional Subject: ${formData.optionalSubject}
Fee Payment Preference: ${formData.feePaymentPreference}

=== PAYMENT DETAILS ===
Mode of Payment: ${formData.modeOfPayment}
Transaction ID: ${formData.transactionId}
Amount Paid: ${formData.amountPaid}
Date of Payment: ${formData.dateOfPayment}
    `;

		// Map form data to template parameter object directly
		const templateParams = {
			name: formData.fullName,
			email: formData.emailAddress,
			phone: formData.mobileNumber,
			selectedCourse: formData.courseAppliedFor,
			message: detailedMessage.trim()
		};

		// Send email using emailjs.send (no need for temporary form)
		emailjs
			.send('contact_form_service', 'course_form', templateParams)
			.then(() => {
				console.log('Form submitted successfully via email');
				showSuccessModal = true;
				resetForm();
			})
			.catch((error) => {
				console.error('Failed to send email:', error);
				// Show specific error message if available
				const errorMessage = error?.text || error?.message || 'Unknown error occurred';
				alert(`Error submitting form: ${errorMessage}. Please try again or contact support.`);
			})
			.finally(() => {
				isSubmitting = false;
			});
	}

	// Confirm submission and send email
	function confirmSubmission() {
		showConfirmationModal = false;
		isSubmitting = true;
		sendEmail();
	}

	// Close confirmation modal
	function closeConfirmationModal() {
		showConfirmationModal = false;
	}

	// Close success modal
	function closeSuccessModal() {
		showSuccessModal = false;
	}

	// Reset form function
	function resetForm() {
		formData = {
			fullName: '',
			dateOfBirth: '',
			gender: '',
			nationality: '',
			category: '',
			aadhaarNumber: '',
			mobileNumber: '',
			alternateMobileNumber: '',
			emailAddress: '',
			permanentAddress: '',
			correspondenceAddress: '',
			class10Board: '',
			class10Year: '',
			class10Percentage: '',
			class12Board: '',
			class12Year: '',
			class12Percentage: '',
			graduationBoard: '',
			graduationYear: '',
			graduationPercentage: '',
			postGraduationBoard: '',
			postGraduationYear: '',
			postGraduationPercentage: '',
			courseAppliedFor: '',
			testSeriesSubject: '',
			optionalSubject: '',
			feePaymentPreference: '',
			modeOfPayment: '',
			transactionId: '',
			amountPaid: '',
			dateOfPayment: ''
		};
	}

	function copyPermanentAddress() {
		formData.correspondenceAddress = formData.permanentAddress;
	}
</script>

<div class="min-h-screen bg-gradient-to-br from-green-50/60 via-emerald-50/40 to-teal-100/50 pb-20 relative overflow-hidden">
	<!-- Decorative Ambient Background Blobs -->
	<div class="absolute top-[15%] left-[-15%] w-[45vw] h-[45vw] bg-emerald-300/20 rounded-full blur-3xl pointer-events-none"></div>
	<div class="absolute bottom-[20%] right-[-15%] w-[50vw] h-[50vw] bg-teal-300/20 rounded-full blur-3xl pointer-events-none"></div>
	<div class="absolute top-[55%] right-[10%] w-[35vw] h-[35vw] bg-amber-100/20 rounded-full blur-3xl pointer-events-none"></div>

	<!-- Admission Header (Vibrant Gradient Card) -->
	<div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl pt-12 pb-6 relative z-10">
		<div class="w-full bg-gradient-to-r from-green-700 via-emerald-800 to-teal-900 text-white rounded-3xl p-8 md:p-12 shadow-xl shadow-green-900/15 overflow-hidden relative border border-white/10">
			<!-- Glass decoration blobs inside header card -->
			<div class="absolute -top-12 -right-12 w-64 h-64 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none"></div>
			<div class="absolute -bottom-16 -left-16 w-80 h-80 bg-teal-400/20 rounded-full blur-3xl pointer-events-none"></div>
			
			<div class="relative z-10 max-w-3xl">
				<span class="inline-flex items-center px-3.5 py-1 rounded-full text-xs font-bold bg-white/10 text-emerald-200 border border-white/10 backdrop-blur-md mb-4 uppercase tracking-wider">
					Registration
				</span>
				<h1 class="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white via-green-100 to-emerald-50 bg-clip-text text-transparent">
					ADMISSION FORM
				</h1>
				<p class="text-green-100/90 mt-4 text-base md:text-lg font-medium leading-relaxed">
					Begin your journey towards civil services with Alpine IAS. Please fill out the detailed enrollment form below to register.
				</p>
			</div>
		</div>
	</div>

	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
		<!-- Form -->
		<form on:submit={handleSubmit} class="space-y-8">
			<!-- A. Personal Details -->
			<div class="rounded-3xl bg-white/95 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-gray-200/40 border border-white/60 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-emerald-500 before:to-green-600">
				<h3 class="mb-6 text-xl font-extrabold text-emerald-950 flex items-center gap-2 border-b border-emerald-50 pb-3">
					<span class="w-8 h-8 rounded-xl bg-emerald-500/10 text-emerald-700 flex items-center justify-center font-bold text-sm shrink-0">A</span>
					A. Personal Details:
				</h3>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					<div class="space-y-1.5">
						<label for="fullName" class="block text-sm font-semibold text-gray-700">1. Full Name: <span class="text-red-500">*</span></label>
						<input
							id="fullName"
							type="text"
							bind:value={formData.fullName}
							placeholder="Enter your full name"
							class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-gray-800 placeholder-gray-400"
							class:border-red-500={errors.fullName}
						/>
						{#if errors.fullName}<p class="mt-1 text-xs text-red-500">{errors.fullName}</p>{/if}
					</div>

					<div class="space-y-1.5">
						<label for="dateOfBirth" class="block text-sm font-semibold text-gray-700">2. Date of Birth: <span class="text-red-500">*</span></label>
						<input
							id="dateOfBirth"
							type="date"
							bind:value={formData.dateOfBirth}
							class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-gray-800"
							class:border-red-500={errors.dateOfBirth}
						/>
						{#if errors.dateOfBirth}<p class="mt-1 text-xs text-red-500">{errors.dateOfBirth}</p>{/if}
					</div>

					<div class="space-y-2">
						<span class="block text-sm font-semibold text-gray-700">3. Gender: <span class="text-red-500">*</span></span>
						<div class="flex flex-wrap gap-4 pt-1">
							<label for="genderMale" class="flex items-center cursor-pointer group">
								<input
									id="genderMale"
									type="radio"
									bind:group={formData.gender}
									value="Male"
									class="text-emerald-600 focus:ring-emerald-500 border-gray-300 w-4 h-4"
								/>
								<span class="ml-2 text-sm text-gray-700 group-hover:text-gray-900 font-medium">Male</span>
							</label>
							<label for="genderFemale" class="flex items-center cursor-pointer group">
								<input
									id="genderFemale"
									type="radio"
									bind:group={formData.gender}
									value="Female"
									class="text-emerald-600 focus:ring-emerald-500 border-gray-300 w-4 h-4"
								/>
								<span class="ml-2 text-sm text-gray-700 group-hover:text-gray-900 font-medium">Female</span>
							</label>
							<label for="genderOther" class="flex items-center cursor-pointer group">
								<input
									id="genderOther"
									type="radio"
									bind:group={formData.gender}
									value="Other"
									class="text-emerald-600 focus:ring-emerald-500 border-gray-300 w-4 h-4"
								/>
								<span class="ml-2 text-sm text-gray-700 group-hover:text-gray-900 font-medium">Other</span>
							</label>
						</div>
						{#if errors.gender}<p class="mt-1 text-xs text-red-500">{errors.gender}</p>{/if}
					</div>

					<div class="space-y-1.5">
						<label for="nationality" class="block text-sm font-semibold text-gray-700">4. Nationality:</label>
						<input
							id="nationality"
							type="text"
							bind:value={formData.nationality}
							placeholder="Indian"
							class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-gray-800 placeholder-gray-400"
						/>
					</div>

					<div class="space-y-1.5">
						<label for="category" class="block text-sm font-semibold text-gray-700">5. Category:</label>
						<div class="relative">
							<select
								id="category"
								bind:value={formData.category}
								class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-gray-800 appearance-none"
							>
								<option value="">Select Category</option>
								<option value="GEN">General</option>
								<option value="OBC">OBC</option>
								<option value="SC">SC</option>
								<option value="ST">ST</option>
								<option value="EWS">EWS</option>
							</select>
							<div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
								<svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
									<path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
								</svg>
							</div>
						</div>
					</div>

					<div class="space-y-1.5">
						<label for="aadhaarNumber" class="block text-sm font-semibold text-gray-700">6. Aadhaar Number:</label>
						<input
							id="aadhaarNumber"
							type="text"
							bind:value={formData.aadhaarNumber}
							placeholder="1234 5678 9012"
							class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10 transition-all outline-none text-gray-800 placeholder-gray-400"
						/>
					</div>
				</div>
			</div>

			<!-- B. Contact Information -->
			<div class="rounded-3xl bg-white/95 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-gray-200/40 border border-white/60 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-teal-500 before:to-emerald-600">
				<h3 class="mb-6 text-xl font-extrabold text-teal-950 flex items-center gap-2 border-b border-teal-50 pb-3">
					<span class="w-8 h-8 rounded-xl bg-teal-500/10 text-teal-700 flex items-center justify-center font-bold text-sm shrink-0">B</span>
					B. Contact Information:
				</h3>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					<div class="space-y-1.5">
						<label for="mobileNumber" class="block text-sm font-semibold text-gray-700">1. Mobile Number: <span class="text-red-500">*</span></label>
						<input
							id="mobileNumber"
							type="tel"
							bind:value={formData.mobileNumber}
							placeholder="98765 43210"
							class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none text-gray-800 placeholder-gray-400"
							class:border-red-500={errors.mobileNumber}
						/>
						{#if errors.mobileNumber}<p class="mt-1 text-xs text-red-500">{errors.mobileNumber}</p>{/if}
					</div>

					<div class="space-y-1.5">
						<label for="alternateMobileNumber" class="block text-sm font-semibold text-gray-700">2. Alternate Mobile Number:</label>
						<input
							id="alternateMobileNumber"
							type="tel"
							bind:value={formData.alternateMobileNumber}
							placeholder="98765 43210"
							class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none text-gray-800 placeholder-gray-400"
						/>
					</div>

					<div class="md:col-span-2 space-y-1.5">
						<label for="emailAddress" class="block text-sm font-semibold text-gray-700">3. Email Address: <span class="text-red-500">*</span></label>
						<input
							id="emailAddress"
							type="email"
							bind:value={formData.emailAddress}
							placeholder="student@example.com"
							class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none text-gray-800 placeholder-gray-400"
							class:border-red-500={errors.emailAddress}
						/>
						{#if errors.emailAddress}<p class="mt-1 text-xs text-red-500">{errors.emailAddress}</p>{/if}
					</div>

					<div class="md:col-span-2 space-y-1.5">
						<label for="permanentAddress" class="block text-sm font-semibold text-gray-700">4. Permanent Address:</label>
						<textarea
							id="permanentAddress"
							bind:value={formData.permanentAddress}
							placeholder="Enter your full permanent address"
							rows="3"
							class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none text-gray-800 placeholder-gray-400 h-24 resize-none"
						></textarea>
					</div>

					<div class="md:col-span-2 space-y-1.5">
						<div class="mb-1 flex items-center justify-between">
							<label for="correspondenceAddress" class="block text-sm font-semibold text-gray-700">5. Correspondence Address:</label>
							<button
								type="button"
								on:click={copyPermanentAddress}
								class="text-xs font-bold text-teal-600 hover:text-teal-800 flex items-center gap-1 bg-teal-50 px-2.5 py-1.5 rounded-lg border border-teal-100 transition-all"
							>
								Copy from Permanent
							</button>
						</div>
						<textarea
							id="correspondenceAddress"
							bind:value={formData.correspondenceAddress}
							placeholder="Enter your full correspondence address"
							rows="3"
							class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 transition-all outline-none text-gray-800 placeholder-gray-400 h-24 resize-none"
						></textarea>
					</div>
				</div>
			</div>

			<!-- C. Educational Qualifications -->
			<div class="rounded-3xl bg-white/95 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-gray-200/40 border border-white/60 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-amber-500 before:to-orange-500">
				<h3 class="mb-6 text-xl font-extrabold text-amber-950 flex items-center gap-2 border-b border-amber-50 pb-3">
					<span class="w-8 h-8 rounded-xl bg-amber-500/10 text-amber-700 flex items-center justify-center font-bold text-sm shrink-0">C</span>
					C. Educational Qualifications:
				</h3>

				<div class="overflow-x-auto rounded-2xl border border-gray-100">
					<table class="w-full border-collapse text-sm text-left">
						<thead>
							<tr class="bg-amber-50/80 text-amber-950 border-b border-gray-200">
								<th class="px-4 py-3.5 font-bold">Qualification</th>
								<th class="px-4 py-3.5 font-bold">Board/University</th>
								<th class="px-4 py-3.5 font-bold">Year of Passing</th>
								<th class="px-4 py-3.5 font-bold">Percentage/CGPA</th>
							</tr>
						</thead>
						<tbody class="divide-y divide-gray-100">
							<tr class="hover:bg-amber-50/20 transition-colors">
								<td class="px-4 py-3.5 font-semibold text-gray-900">10th</td>
								<td class="px-2 py-2">
									<input
										type="text"
										bind:value={formData.class10Board}
										placeholder="e.g. CBSE / ICSE"
										aria-label="10th Class Board or University"
										class="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-amber-500 focus:outline-none transition-all text-xs"
									/>
								</td>
								<td class="px-2 py-2">
									<input
										type="text"
										bind:value={formData.class10Year}
										placeholder="YYYY"
										aria-label="10th Class Passing Year"
										class="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-amber-500 focus:outline-none transition-all text-xs"
									/>
								</td>
								<td class="px-2 py-2">
									<input
										type="text"
										bind:value={formData.class10Percentage}
										placeholder="e.g. 92% / 9.5"
										aria-label="10th Class Percentage or CGPA"
										class="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-amber-500 focus:outline-none transition-all text-xs"
									/>
								</td>
							</tr>
							<tr class="hover:bg-amber-50/20 transition-colors">
								<td class="px-4 py-3.5 font-semibold text-gray-900">12th</td>
								<td class="px-2 py-2">
									<input
										type="text"
										bind:value={formData.class12Board}
										placeholder="e.g. CBSE / State Board"
										aria-label="12th Class Board or University"
										class="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-amber-500 focus:outline-none transition-all text-xs"
									/>
								</td>
								<td class="px-2 py-2">
									<input
										type="text"
										bind:value={formData.class12Year}
										placeholder="YYYY"
										aria-label="12th Class Passing Year"
										class="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-amber-500 focus:outline-none transition-all text-xs"
									/>
								</td>
								<td class="px-2 py-2">
									<input
										type="text"
										bind:value={formData.class12Percentage}
										placeholder="e.g. 88%"
										aria-label="12th Class Percentage"
										class="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-amber-500 focus:outline-none transition-all text-xs"
									/>
								</td>
							</tr>
							<tr class="hover:bg-amber-50/20 transition-colors">
								<td class="px-4 py-3.5 font-semibold text-gray-900">Graduation</td>
								<td class="px-2 py-2">
									<input
										type="text"
										bind:value={formData.graduationBoard}
										placeholder="University Name"
										aria-label="Graduation University Name"
										class="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-amber-500 focus:outline-none transition-all text-xs"
									/>
								</td>
								<td class="px-2 py-2">
									<input
										type="text"
										bind:value={formData.graduationYear}
										placeholder="YYYY"
										aria-label="Graduation Passing Year"
										class="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-amber-500 focus:outline-none transition-all text-xs"
									/>
								</td>
								<td class="px-2 py-2">
									<input
										type="text"
										bind:value={formData.graduationPercentage}
										placeholder="Percentage"
										aria-label="Graduation Percentage"
										class="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-amber-500 focus:outline-none transition-all text-xs"
									/>
								</td>
							</tr>
							<tr class="hover:bg-amber-50/20 transition-colors">
								<td class="px-4 py-3.5 font-semibold text-gray-900">Post-Graduation</td>
								<td class="px-2 py-2">
									<input
										type="text"
										bind:value={formData.postGraduationBoard}
										placeholder="University Name (optional)"
										aria-label="Post-Graduation University Name"
										class="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-amber-500 focus:outline-none transition-all text-xs"
									/>
								</td>
								<td class="px-2 py-2">
									<input
										type="text"
										bind:value={formData.postGraduationYear}
										placeholder="YYYY"
										aria-label="Post-Graduation Passing Year"
										class="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-amber-500 focus:outline-none transition-all text-xs"
									/>
								</td>
								<td class="px-2 py-2">
									<input
										type="text"
										bind:value={formData.postGraduationPercentage}
										placeholder="Percentage"
										aria-label="Post-Graduation Percentage"
										class="w-full px-3 py-2 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-amber-500 focus:outline-none transition-all text-xs"
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- D. Course Applied For -->
			<div class="rounded-3xl bg-white/95 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-gray-200/40 border border-white/60 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-green-500 before:to-emerald-600">
				<h3 class="mb-6 text-xl font-extrabold text-emerald-950 flex items-center gap-2 border-b border-green-50 pb-3">
					<span class="w-8 h-8 rounded-xl bg-green-500/10 text-green-700 flex items-center justify-center font-bold text-sm shrink-0">D</span>
					D. Course Applied For: <span class="text-red-500 ml-0.5">*</span>
				</h3>

				<div class="space-y-3.5">
					<label for="coursePrelimsOnly" class="flex items-center cursor-pointer group">
						<input
							id="coursePrelimsOnly"
							type="radio"
							bind:group={formData.courseAppliedFor}
							value="Prelims Only"
							class="text-green-600 focus:ring-green-500 w-4 h-4"
						/>
						<span class="ml-3 text-sm text-gray-700 group-hover:text-gray-900 font-medium">Prelims Only</span>
					</label>
					<label for="courseMainsOnly" class="flex items-center cursor-pointer group">
						<input
							id="courseMainsOnly"
							type="radio"
							bind:group={formData.courseAppliedFor}
							value="Mains Only"
							class="text-green-600 focus:ring-green-500 w-4 h-4"
						/>
						<span class="ml-3 text-sm text-gray-700 group-hover:text-gray-900 font-medium">Mains Only</span>
					</label>
					<label for="coursePrelimsMains" class="flex items-center cursor-pointer group">
						<input
							id="coursePrelimsMains"
							type="radio"
							bind:group={formData.courseAppliedFor}
							value="Prelims + Mains"
							class="text-green-600 focus:ring-green-500 w-4 h-4"
						/>
						<span class="ml-3 text-sm text-gray-700 group-hover:text-gray-900 font-medium">Prelims + Mains (Comprehensive)</span>
					</label>
					<label for="courseIGP" class="flex items-center cursor-pointer group">
						<input
							id="courseIGP"
							type="radio"
							bind:group={formData.courseAppliedFor}
							value="Interview Guidance Program"
							class="text-green-600 focus:ring-green-500 w-4 h-4"
						/>
						<span class="ml-3 text-sm text-gray-700 group-hover:text-gray-900 font-medium">Interview Guidance Program</span>
					</label>
					<div class="flex flex-col md:flex-row md:items-center gap-2">
						<label for="courseTestSeriesOnly" class="flex items-center cursor-pointer group">
							<input
								id="courseTestSeriesOnly"
								type="radio"
								bind:group={formData.courseAppliedFor}
								value="Test Series Only"
								class="text-green-600 focus:ring-green-500 w-4 h-4"
							/>
							<span class="ml-3 text-sm text-gray-700 group-hover:text-gray-900 font-medium">Test Series Only (Specify Subject):</span>
						</label>
						<input
							id="testSeriesSubject"
							type="text"
							bind:value={formData.testSeriesSubject}
							placeholder="Enter subject name"
							aria-label="Test Series Subject"
							class="ml-0 md:ml-2 px-3 py-2 bg-gray-50 border border-gray-200 rounded-xl focus:bg-white focus:border-green-500 focus:outline-none transition-all text-xs"
							disabled={formData.courseAppliedFor !== 'Test Series Only'}
						/>
					</div>
				</div>
				{#if errors.courseAppliedFor}<p class="mt-2 text-xs text-red-500">{errors.courseAppliedFor}</p>{/if}
			</div>

			<!-- E. Fee Payment Preference -->
			<div class="rounded-3xl bg-white/95 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-gray-200/40 border border-white/60 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-blue-500 before:to-indigo-600">
				<h3 class="mb-6 text-xl font-extrabold text-blue-950 flex items-center gap-2 border-b border-blue-50 pb-3">
					<span class="w-8 h-8 rounded-xl bg-blue-500/10 text-blue-700 flex items-center justify-center font-bold text-sm shrink-0">E</span>
					E. Fee Payment Preference:
				</h3>

				<div class="space-y-3.5">
					<label for="feePaymentOneTime" class="flex items-center cursor-pointer group">
						<input
							id="feePaymentOneTime"
							type="radio"
							bind:group={formData.feePaymentPreference}
							value="1 Time"
							class="text-blue-600 focus:ring-blue-500 w-4 h-4"
						/>
						<span class="ml-3 text-sm text-gray-700 group-hover:text-gray-900 font-medium">1 Time (Full Payment)</span>
					</label>
					<label for="feePayment5Installments" class="flex items-center cursor-pointer group">
						<input
							id="feePayment5Installments"
							type="radio"
							bind:group={formData.feePaymentPreference}
							value="5 Installments"
							class="text-blue-600 focus:ring-blue-500 w-4 h-4"
						/>
						<span class="ml-3 text-sm text-gray-700 group-hover:text-gray-900 font-medium">5 Installments</span>
					</label>
					<label for="feePayment10Installments" class="flex items-center cursor-pointer group">
						<input
							id="feePayment10Installments"
							type="radio"
							bind:group={formData.feePaymentPreference}
							value="10 Installments"
							class="text-blue-600 focus:ring-blue-500 w-4 h-4"
						/>
						<span class="ml-3 text-sm text-gray-700 group-hover:text-gray-900 font-medium">10 Installments</span>
					</label>
				</div>
			</div>

			<!-- F. Optional Subject -->
			<div class="rounded-3xl bg-white/95 backdrop-blur-md p-6 md:p-8 shadow-lg shadow-gray-200/40 border border-white/60 relative overflow-hidden before:absolute before:top-0 before:left-0 before:right-0 before:h-1 before:bg-gradient-to-r before:from-purple-500 before:to-violet-600">
				<h3 class="mb-6 text-xl font-extrabold text-purple-950 flex items-center gap-2 border-b border-purple-50 pb-3">
					<span class="w-8 h-8 rounded-xl bg-purple-500/10 text-purple-700 flex items-center justify-center font-bold text-sm shrink-0">F</span>
					F. Optional Subject (For Mains):
				</h3>

				<div class="space-y-1.5">
					<label for="optionalSubject" class="block text-sm font-semibold text-gray-700">Optional Subject:</label>
					<input
						id="optionalSubject"
						type="text"
						bind:value={formData.optionalSubject}
						placeholder="Enter your UPSC optional subject"
						class="w-full px-4 py-3 bg-gray-50/50 border border-gray-200 rounded-xl focus:bg-white focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all outline-none text-gray-800 placeholder-gray-400"
					/>
				</div>
			</div>

			<!-- Submit Button -->
			<div class="flex justify-center pt-8">
				<button
					type="submit"
					disabled={isSubmitting}
					class="w-full md:w-auto px-12 py-4 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white font-extrabold text-lg rounded-xl shadow-lg shadow-emerald-600/15 hover:shadow-emerald-600/25 active:scale-[0.99] transition-all disabled:opacity-50 duration-300"
				>
					{isSubmitting ? 'Submitting Application...' : 'Submit Application'}
				</button>
			</div>
		</form>

		<!-- Footer Note -->
		<div class="mt-8 text-center text-gray-500 text-sm leading-relaxed">
			<p>
				For any queries, contact us at <span class="font-bold text-emerald-700">9749033332, 8595391567</span> or
				email <span class="font-bold text-emerald-700">alpineias06@gmail.com</span>
			</p>
		</div>
	</div>
</div>

<!-- Confirmation Modal -->
{#if showConfirmationModal}
	<div transition:fade={{ duration: 200 }} class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-none">
		<div transition:scale={{ duration: 200, start: 0.95 }} class="bg-white rounded-3xl p-6 md:p-8 max-w-2xl w-full shadow-2xl border border-gray-100 relative overflow-hidden border-t-8 border-t-emerald-600 max-h-[85vh] overflow-y-auto">
			<div class="mb-4 flex items-center gap-3">
				<div class="p-2.5 bg-emerald-50 rounded-2xl text-emerald-600 shrink-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-6 w-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
						/>
					</svg>
				</div>
				<h3 class="text-xl font-black text-gray-900">Confirm Submission</h3>
			</div>

			<p class="mb-5 text-sm text-gray-500 leading-relaxed">Please review your registration details before final submission:</p>

			<div class="mb-6 space-y-3 rounded-2xl bg-gray-50 p-5 text-sm border border-gray-100 max-h-96 overflow-y-auto">
				<div class="grid grid-cols-3 gap-2">
					<span class="text-gray-400 font-bold">Full Name:</span>
					<span class="col-span-2 text-gray-800 font-extrabold">{formData.fullName}</span>
				</div>
				<div class="grid grid-cols-3 gap-2 border-t border-gray-100/50 pt-2.5">
					<span class="text-gray-400 font-bold">Date of Birth:</span>
					<span class="col-span-2 text-gray-800 font-extrabold">{formData.dateOfBirth}</span>
				</div>
				<div class="grid grid-cols-3 gap-2 border-t border-gray-100/50 pt-2.5">
					<span class="text-gray-400 font-bold">Gender:</span>
					<span class="col-span-2 text-gray-800 font-extrabold">{formData.gender}</span>
				</div>
				<div class="grid grid-cols-3 gap-2 border-t border-gray-100/50 pt-2.5">
					<span class="text-gray-400 font-bold">Mobile Number:</span>
					<span class="col-span-2 text-gray-800 font-extrabold">{formData.mobileNumber}</span>
				</div>
				<div class="grid grid-cols-3 gap-2 border-t border-gray-100/50 pt-2.5">
					<span class="text-gray-400 font-bold">Email Address:</span>
					<span class="col-span-2 text-gray-800 font-extrabold break-all">{formData.emailAddress}</span>
				</div>
				<div class="grid grid-cols-3 gap-2 border-t border-gray-100/50 pt-2.5">
					<span class="text-gray-400 font-bold">Course:</span>
					<span class="col-span-2 text-gray-800 font-extrabold uppercase">{formData.courseAppliedFor}</span>
				</div>
				{#if formData.testSeriesSubject}
					<div class="grid grid-cols-3 gap-2 border-t border-gray-100/50 pt-2.5">
						<span class="text-gray-400 font-bold">Subject:</span>
						<span class="col-span-2 text-gray-800 font-extrabold">{formData.testSeriesSubject}</span>
					</div>
				{/if}
				{#if formData.optionalSubject}
					<div class="grid grid-cols-3 gap-2 border-t border-gray-100/50 pt-2.5">
						<span class="text-gray-400 font-bold">Optional:</span>
						<span class="col-span-2 text-gray-800 font-extrabold">{formData.optionalSubject}</span>
					</div>
				{/if}
			</div>

			<div class="flex gap-3">
				<button
					class="flex-1 py-3 bg-gray-100 text-gray-600 font-bold rounded-2xl hover:bg-gray-200 active:scale-[0.98] transition-all duration-300"
					on:click={closeConfirmationModal}
				>
					Cancel
				</button>
				<button
					class="flex-1 py-3 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white font-extrabold rounded-2xl shadow-md shadow-green-600/10 active:scale-[0.98] transition-all duration-300"
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
	<div transition:fade={{ duration: 200 }} class="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-none">
		<div transition:scale={{ duration: 200, start: 0.95 }} class="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-100 text-center relative overflow-hidden border-t-8 border-t-emerald-600">
			<div class="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4 text-emerald-600">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="h-8 w-8"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
					/>
				</svg>
			</div>
			<h3 class="text-2xl font-black text-gray-900 mb-2">
				Submitted!
			</h3>
			<p class="text-sm text-gray-500 mb-6 leading-relaxed">Thank you for registering at Alpine IAS. Our coordinator will contact you soon to finalize your enrollment.</p>
			<button
				class="w-full py-3.5 bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 hover:from-green-700 hover:via-emerald-700 hover:to-teal-700 text-white font-extrabold rounded-2xl shadow-md shadow-green-600/10 active:scale-[0.98] transition-all duration-300"
				on:click={closeSuccessModal}
			>
				Done
			</button>
		</div>
	</div>
{/if}
