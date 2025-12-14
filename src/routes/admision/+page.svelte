<script>
	import { onMount } from 'svelte';
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

<div class="min-h-screen bg-gray-50 py-8">
	<div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
		<!-- Form -->
		<form on:submit={handleSubmit} class="space-y-8">
			<!-- A. Personal Details -->
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<h3 class="mb-6 border-b-2 border-green-600 pb-2 text-xl font-bold text-gray-900">
					A. Personal Details:
				</h3>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					<div>
						<label class="mb-2 block text-sm font-medium text-gray-700">1. Full Name: *</label>
						<input
							type="text"
							bind:value={formData.fullName}
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
							class:border-red-500={errors.fullName}
						/>
						{#if errors.fullName}<p class="mt-1 text-sm text-red-500">{errors.fullName}</p>{/if}
					</div>

					<div>
						<label class="mb-2 block text-sm font-medium text-gray-700"
							>2. Date of Birth (DD/MM/YYYY): *</label
						>
						<input
							type="date"
							bind:value={formData.dateOfBirth}
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
							class:border-red-500={errors.dateOfBirth}
						/>
						{#if errors.dateOfBirth}<p class="mt-1 text-sm text-red-500">
								{errors.dateOfBirth}
							</p>{/if}
					</div>

					<div>
						<label class="mb-2 block text-sm font-medium text-gray-700">3. Gender: *</label>
						<div class="flex space-x-4">
							<label class="flex items-center">
								<input
									type="radio"
									bind:group={formData.gender}
									value="Male"
									class="text-green-600 focus:ring-green-500"
								/>
								<span class="ml-2">Male</span>
							</label>
							<label class="flex items-center">
								<input
									type="radio"
									bind:group={formData.gender}
									value="Female"
									class="text-green-600 focus:ring-green-500"
								/>
								<span class="ml-2">Female</span>
							</label>
							<label class="flex items-center">
								<input
									type="radio"
									bind:group={formData.gender}
									value="Other"
									class="text-green-600 focus:ring-green-500"
								/>
								<span class="ml-2">Other</span>
							</label>
						</div>
						{#if errors.gender}<p class="mt-1 text-sm text-red-500">{errors.gender}</p>{/if}
					</div>

					<div>
						<label class="mb-2 block text-sm font-medium text-gray-700">4. Nationality:</label>
						<input
							type="text"
							bind:value={formData.nationality}
							placeholder="Indian"
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
						/>
					</div>

					<div>
						<label class="mb-2 block text-sm font-medium text-gray-700"
							>5. Category (GEN/OBC/SC/ST/EWS):</label
						>
						<select
							bind:value={formData.category}
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
						>
							<option value="">Select Category</option>
							<option value="GEN">General</option>
							<option value="OBC">OBC</option>
							<option value="SC">SC</option>
							<option value="ST">ST</option>
							<option value="EWS">EWS</option>
						</select>
					</div>

					<div>
						<label class="mb-2 block text-sm font-medium text-gray-700"
							>6. Aadhaar Number (Optional):</label
						>
						<input
							type="text"
							bind:value={formData.aadhaarNumber}
							placeholder="1234 5678 9012"
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
						/>
					</div>
				</div>
			</div>

			<!-- B. Contact Information -->
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<h3 class="mb-6 border-b-2 border-green-600 pb-2 text-xl font-bold text-gray-900">
					B. Contact Information:
				</h3>

				<div class="grid grid-cols-1 gap-6 md:grid-cols-2">
					<div>
						<label class="mb-2 block text-sm font-medium text-gray-700">1. Mobile Number: *</label>
						<input
							type="tel"
							bind:value={formData.mobileNumber}
							placeholder="9876543210"
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
							class:border-red-500={errors.mobileNumber}
						/>
						{#if errors.mobileNumber}<p class="mt-1 text-sm text-red-500">
								{errors.mobileNumber}
							</p>{/if}
					</div>

					<div>
						<label class="mb-2 block text-sm font-medium text-gray-700"
							>2. Alternate Mobile Number:</label
						>
						<input
							type="tel"
							bind:value={formData.alternateMobileNumber}
							placeholder="9876543210"
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
						/>
					</div>

					<div class="md:col-span-2">
						<label class="mb-2 block text-sm font-medium text-gray-700">3. Email Address: *</label>
						<input
							type="email"
							bind:value={formData.emailAddress}
							placeholder="example@email.com"
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
							class:border-red-500={errors.emailAddress}
						/>
						{#if errors.emailAddress}<p class="mt-1 text-sm text-red-500">
								{errors.emailAddress}
							</p>{/if}
					</div>

					<div class="md:col-span-2">
						<label class="mb-2 block text-sm font-medium text-gray-700">4. Permanent Address:</label
						>
						<textarea
							bind:value={formData.permanentAddress}
							rows="3"
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
						></textarea>
					</div>

					<div class="md:col-span-2">
						<div class="mb-2 flex items-center justify-between">
							<label class="block text-sm font-medium text-gray-700"
								>5. Correspondence Address (if different):</label
							>
							<button
								type="button"
								on:click={copyPermanentAddress}
								class="text-sm text-green-600 hover:text-green-800"
							>
								Copy from Permanent Address
							</button>
						</div>
						<textarea
							bind:value={formData.correspondenceAddress}
							rows="3"
							class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
						></textarea>
					</div>
				</div>
			</div>

			<!-- C. Educational Qualifications -->
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<h3 class="mb-6 border-b-2 border-green-600 pb-2 text-xl font-bold text-gray-900">
					C. Educational Qualifications:
				</h3>

				<div class="overflow-x-auto">
					<table class="w-full border-collapse border border-gray-300">
						<thead>
							<tr class="bg-gray-50">
								<th class="border border-gray-300 px-4 py-3 text-left">Qualification</th>
								<th class="border border-gray-300 px-4 py-3 text-left">Board/University</th>
								<th class="border border-gray-300 px-4 py-3 text-left">Year of Passing</th>
								<th class="border border-gray-300 px-4 py-3 text-left">Percentage/CGPA</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td class="border border-gray-300 px-4 py-3 font-medium">10th</td>
								<td class="border border-gray-300 px-4 py-3">
									<input
										type="text"
										bind:value={formData.class10Board}
										class="w-full border-0 px-2 py-1 focus:ring-0"
									/>
								</td>
								<td class="border border-gray-300 px-4 py-3">
									<input
										type="text"
										bind:value={formData.class10Year}
										class="w-full border-0 px-2 py-1 focus:ring-0"
									/>
								</td>
								<td class="border border-gray-300 px-4 py-3">
									<input
										type="text"
										bind:value={formData.class10Percentage}
										class="w-full border-0 px-2 py-1 focus:ring-0"
									/>
								</td>
							</tr>
							<tr>
								<td class="border border-gray-300 px-4 py-3 font-medium">12th</td>
								<td class="border border-gray-300 px-4 py-3">
									<input
										type="text"
										bind:value={formData.class12Board}
										class="w-full border-0 px-2 py-1 focus:ring-0"
									/>
								</td>
								<td class="border border-gray-300 px-4 py-3">
									<input
										type="text"
										bind:value={formData.class12Year}
										class="w-full border-0 px-2 py-1 focus:ring-0"
									/>
								</td>
								<td class="border border-gray-300 px-4 py-3">
									<input
										type="text"
										bind:value={formData.class12Percentage}
										class="w-full border-0 px-2 py-1 focus:ring-0"
									/>
								</td>
							</tr>
							<tr>
								<td class="border border-gray-300 px-4 py-3 font-medium">Graduation</td>
								<td class="border border-gray-300 px-4 py-3">
									<input
										type="text"
										bind:value={formData.graduationBoard}
										class="w-full border-0 px-2 py-1 focus:ring-0"
									/>
								</td>
								<td class="border border-gray-300 px-4 py-3">
									<input
										type="text"
										bind:value={formData.graduationYear}
										class="w-full border-0 px-2 py-1 focus:ring-0"
									/>
								</td>
								<td class="border border-gray-300 px-4 py-3">
									<input
										type="text"
										bind:value={formData.graduationPercentage}
										class="w-full border-0 px-2 py-1 focus:ring-0"
									/>
								</td>
							</tr>
							<tr>
								<td class="border border-gray-300 px-4 py-3 font-medium"
									>Post-Graduation (if any)</td
								>
								<td class="border border-gray-300 px-4 py-3">
									<input
										type="text"
										bind:value={formData.postGraduationBoard}
										class="w-full border-0 px-2 py-1 focus:ring-0"
									/>
								</td>
								<td class="border border-gray-300 px-4 py-3">
									<input
										type="text"
										bind:value={formData.postGraduationYear}
										class="w-full border-0 px-2 py-1 focus:ring-0"
									/>
								</td>
								<td class="border border-gray-300 px-4 py-3">
									<input
										type="text"
										bind:value={formData.postGraduationPercentage}
										class="w-full border-0 px-2 py-1 focus:ring-0"
									/>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>

			<!-- D. Course Applied For -->
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<h3 class="mb-6 border-b-2 border-green-600 pb-2 text-xl font-bold text-gray-900">
					D. Course Applied For (Tick the Appropriate Box): *
				</h3>

				<div class="space-y-3">
					<label class="flex items-center">
						<input
							type="radio"
							bind:group={formData.courseAppliedFor}
							value="Prelims Only"
							class="text-green-600 focus:ring-green-500"
						/>
						<span class="ml-3">Prelims Only</span>
					</label>
					<label class="flex items-center">
						<input
							type="radio"
							bind:group={formData.courseAppliedFor}
							value="Mains Only"
							class="text-green-600 focus:ring-green-500"
						/>
						<span class="ml-3">Mains Only</span>
					</label>
					<label class="flex items-center">
						<input
							type="radio"
							bind:group={formData.courseAppliedFor}
							value="Prelims + Mains"
							class="text-green-600 focus:ring-green-500"
						/>
						<span class="ml-3">Prelims + Mains</span>
					</label>
					<label class="flex items-center">
						<input
							type="radio"
							bind:group={formData.courseAppliedFor}
							value="Interview Guidance Program"
							class="text-green-600 focus:ring-green-500"
						/>
						<span class="ml-3">Interview Guidance Program</span>
					</label>
					<div class="flex items-center">
						<input
							type="radio"
							bind:group={formData.courseAppliedFor}
							value="Test Series Only"
							class="text-green-600 focus:ring-green-500"
						/>
						<span class="ml-3">Test Series Only (Specify Subject):</span>
						<input
							type="text"
							bind:value={formData.testSeriesSubject}
							class="ml-2 rounded border border-gray-300 px-2 py-1 focus:ring-1 focus:ring-green-500 focus:outline-none"
							disabled={formData.courseAppliedFor !== 'Test Series Only'}
						/>
					</div>
				</div>
				{#if errors.courseAppliedFor}<p class="mt-2 text-sm text-red-500">
						{errors.courseAppliedFor}
					</p>{/if}
			</div>

			<!-- E. Fee Payment Preference -->
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<h3 class="mb-6 border-b-2 border-green-600 pb-2 text-xl font-bold text-gray-900">
					E. Fee Payment Preference:
				</h3>

				<div class="space-y-3">
					<label class="flex items-center">
						<input
							type="radio"
							bind:group={formData.feePaymentPreference}
							value="1 Time"
							class="text-green-600 focus:ring-green-500"
						/>
						<span class="ml-3">1 Time (Full Payment)</span>
					</label>
					<label class="flex items-center">
						<input
							type="radio"
							bind:group={formData.feePaymentPreference}
							value="5 Installments"
							class="text-green-600 focus:ring-green-500"
						/>
						<span class="ml-3">5 Installments</span>
					</label>
					<label class="flex items-center">
						<input
							type="radio"
							bind:group={formData.feePaymentPreference}
							value="10 Installments"
							class="text-green-600 focus:ring-green-500"
						/>
						<span class="ml-3">10 Installments</span>
					</label>
				</div>
			</div>

			<!-- F. Optional Subject -->
			<div class="rounded-lg bg-white p-6 shadow-lg">
				<h3 class="mb-6 border-b-2 border-green-600 pb-2 text-xl font-bold text-gray-900">
					F. Optional Subject (For Mains):
				</h3>

				<div>
					<label class="mb-2 block text-sm font-medium text-gray-700">1.</label>
					<input
						type="text"
						bind:value={formData.optionalSubject}
						placeholder="Enter your optional subject"
						class="w-full rounded-md border border-gray-300 px-3 py-2 focus:border-green-500 focus:ring-2 focus:ring-green-500 focus:outline-none"
					/>
				</div>
			</div>

			<!-- Submit Button -->
			<div class="flex justify-center pt-8">
				<button
					type="submit"
					disabled={isSubmitting}
					class="rounded-lg bg-green-600 px-8 py-3 text-lg font-bold text-white shadow-lg transition-colors duration-200 hover:bg-green-700 disabled:bg-green-400"
				>
					{isSubmitting ? 'Submitting...' : 'Submit Application'}
				</button>
			</div>
		</form>

		<!-- Footer Note -->
		<div class="mt-8 text-center text-gray-600">
			<p class="text-sm">
				For any queries, contact us at <span class="font-medium">9749033332, 8595391567</span> or
				email <span class="font-medium">alpineias06@gmail.com</span>
			</p>
		</div>
	</div>
</div>

<!-- Confirmation Modal -->
{#if showConfirmationModal}
	<div class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
		<div class="mx-4 max-h-[80vh] w-full max-w-2xl overflow-y-auto rounded-lg bg-white p-6">
			<div class="mb-4 flex items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mr-2 h-6 w-6 text-green-600"
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
				<h3 class="text-lg font-semibold text-gray-800">Confirm Submission</h3>
			</div>

			<p class="mb-6 text-gray-600">Please review your information before submitting:</p>

			<div class="mb-6 space-y-2 rounded-md bg-gray-50 p-4 text-sm">
				<div><strong>Full Name:</strong> {formData.fullName}</div>
				<div><strong>Date of Birth:</strong> {formData.dateOfBirth}</div>
				<div><strong>Gender:</strong> {formData.gender}</div>
				<div><strong>Mobile Number:</strong> {formData.mobileNumber}</div>
				<div><strong>Email Address:</strong> {formData.emailAddress}</div>
				<div><strong>Course Applied For:</strong> {formData.courseAppliedFor}</div>
				{#if formData.testSeriesSubject}
					<div><strong>Test Series Subject:</strong> {formData.testSeriesSubject}</div>
				{/if}
				{#if formData.optionalSubject}
					<div><strong>Optional Subject:</strong> {formData.optionalSubject}</div>
				{/if}
			</div>

			<div class="flex gap-3">
				<button
					class="flex-1 rounded-md bg-gray-300 px-4 py-2 text-gray-700 transition-colors hover:bg-gray-400"
					on:click={closeConfirmationModal}
				>
					Cancel
				</button>
				<button
					class="flex-1 rounded-md bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
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
	<div class="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black">
		<div class="mx-4 w-full max-w-md rounded-lg bg-white p-6">
			<div class="text-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="mx-auto mb-4 h-16 w-16 text-green-600"
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
				<h3 class="mb-2 text-lg font-semibold text-gray-800">
					Application Submitted Successfully!
				</h3>
				<p class="mb-6 text-gray-600">Thank you for your application. We will contact you soon.</p>
				<button
					class="rounded-md bg-green-600 px-6 py-2 text-white transition-colors hover:bg-green-700"
					on:click={closeSuccessModal}
				>
					OK
				</button>
			</div>
		</div>
	</div>
{/if}
