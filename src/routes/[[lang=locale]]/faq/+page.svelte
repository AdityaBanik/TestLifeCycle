<script lang="ts">
	import AccordianItem from '$lib/components/accordian/AccordianItem.svelte';
	import Accordian from '$lib/components/accordian/Accordian.svelte';
	import { onMount } from 'svelte';
	import question1 from '$lib/assets/faqquestion.svg';
	import form1 from '$lib/assets/faqform.svg';

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://app.nimble.com/web-form/bundle.js';

		document.body.appendChild(script);
	});

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
</script>

<div class="text-blue-500 font-bold text-3xl text-center p-12">
	<h1>FAQs - Frequently Asked Questions</h1>
</div>
<section class="container">
	<div class="flex justify-center items-center gap-20 flex-col lg:flex-row h-[743px]">
	
		<div class=" border shadow-sm md:w-[100%] bg-white rounded-lg  flex-1 lg:w-[50%] p-8">
			<Accordian>
				{#each accordionItems as { question, answer }}
					<div class="accordion-item p-3 lg:text-sm border-b">
						<AccordianItem selected="font-bold" className="  text-left font-bold p-1">
							<!-- Apply custom style to left-align the title -->
							<svelte:fragment slot="title">{question}</svelte:fragment>
							<div class="ml-5">{answer}</div>
						</AccordianItem>
					</div>
				{/each}
			</Accordian>
		</div>
		<div class="lg:w-[50%] mb-5">
			<img src={question1} alt="Image1"/>
		</div>
	</div>
</section>

<section class="container lg:mt-40 mt-20">
	<div class="flex justify-center items-center gap-20 flex-col-reverse lg:flex-row">
		
		<div class="lg:w-[50%] lg:mr-4 mb-5">
			<img src={form1} alt="Image2" class="w-full h-auto rounded-md" />
		</div>
		<!-- Form Section -->

		<div class="lg:w-[50%] lg:ml-10 rounded-lg border shadow-sm  mb-5 w-[100%]">
			<div
				class="nimble-form min-h-[630px] rounded-2xl"
				data-form-id="65d7bc143841fd0baf097895"
				data-company-id="5b261c76cef070b143c79181"
			></div>
		</div>
		
	</div>
</section>

