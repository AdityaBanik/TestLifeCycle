<!-- Page.svelte -->
<script>
	import AccordianItem from '$lib/components/accordian/AccordianItem.svelte'; // Import the AccordionItem component
	import Accordian from '$lib/components/accordian/Accordian.svelte'; // Import the Accordion component
	
	// Define static questions and answers
	const accordionItems = [
		{
			question: 'What differentiates TITAN from other tools?',
			answer:
				'TITAN has been tailor-made for test lifecycle management. It was built based on our experience with implementing test life-cycle management systems for various OEM’S, Tier-1 suppliers, and Test labs. One of the core design goals of TITAN is to reduce the pain points in planning, scheduling test activities, data storage, and retrieval. It improves efficiency by improving collaboration. TITAN eliminates the need for excel based scheduling and planning. It standardizes testing thereby reducing human errors. TITAN provides seamless integration with existing enterprise tools.'
		},
		{
			question: 'Is TITAN Secure?',
			answer:
				'TITAN is secure by design; it can be hosted on the cloud or on-premises. It’s built with Enterprise-grade security in mind.'
		},
		{
			question: 'Can TITAN leverage AD for Authentication?',
			answer: 'Yes, TITAN can use AD for Authentication.'
		},
		{
			question: 'Can TITAN talk to other enterprise systems?',
			answer: 'TITAN can be easily integrated with systems that expose an API.'
		},
		{
			question: 'What is the time required to onboard?',
			answer: 'The onboarding time is about a week.'
		},
		{
			question: 'Can TITAN support multiple languages?',
			answer:
				'Yes, out of the box it supports English, Japanese and French. Additional languages can be supported if required.'
		},
		{
			question: 'What are the support options?',
			answer:
				'We have a ticketing system in place to handle support requests. And optionally onsite support is also available. Support can be customized to meet your needs.'
		},
		{
			question: 'Do you provide training?',
			answer:
				'We offer training for both Admins and end-users. The training can be offered online or onsite.'
		},
		{
			question: 'What are the pricing options?',
			answer: 'Please reach out to our sales team sales@12thwonder.com for more details.'
		}
	];
	let formData = {
		name: '',
		email: '',
		message: ''
	};

	function handleSubmit() {
		console.log(formData);
		// Here you can perform form submission or any other action with formData
	}
</script>

<div class="p-20 border-2 border-black">

	<h1 class="text-white font-bold text-3xl text-center mb-10">FAQs - Frequently Asked Questions</h1>
	<div class="flex justify-between ">
		<div class=" border bg-white rounded p-4 flex-1 mr-4 ml-10 lg:w-[70%]">
			<Accordian>
				{#each accordionItems as { question, answer }, i}
					<AccordianItem  selected="font-bold" className="text-left font-bold p-3">
						<!-- Apply custom style to left-align the title -->
						<svelte:fragment slot="title">{question}</svelte:fragment>
						<div class="ml-5">{answer}</div>
					</AccordianItem>
				{/each}
			</Accordian>
		</div>
		<div class="border bg-white rounded p-4 flex-1 mr-10 lg:w-[30%]">
			<h2 class="text-3xl font-bold mb-4">Have a specific question?</h2>
			<p>Please fill out this form and we will respond as soon as we can.</p>
			<form on:submit|preventDefault={handleSubmit}>
				<div class="mb-4 mt-5">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="name"
						type="text"
						placeholder="Your Name"
						bind:value={formData.name}
					/>
				</div>
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="email"
						type="email"
						placeholder="Your Email"
						bind:value={formData.email}
					/>
				</div>
				<div class="mb-6">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="message">Message</label>
					<textarea
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="message"
						placeholder="Your Message"
						rows="5"
						bind:value={formData.message}
					></textarea>
				</div>
				<div class="flex items-center justify-between">
					<button
						class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
						type="submit"
					>
						Submit
					</button>
				</div>
			</form>
		</div>
	</div>
</div>
