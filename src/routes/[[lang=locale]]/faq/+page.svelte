<script lang="ts">
	import AccordianItem from '$lib/components/accordian/AccordianItem.svelte';
	import Accordian from '$lib/components/accordian/Accordian.svelte';
	import { resolveRichText } from '$lib';
	import { onMount } from 'svelte';

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

<div class=" gradient md:p-20">
	<h1 class="text-white font-bold text-3xl text-center mb-10">FAQs - Frequently Asked Questions</h1>
	<div class="flex justify-between">
		<div class=" border bg-white rounded p-4 flex-1 mr-4 ml-10 lg:w-[70%]">
			<Accordian>
				{#each accordionItems as { question, answer }, i}
					<AccordianItem key={i} selected="font-bold" className="text-left font-bold p-3">
						<!-- Apply custom style to left-align the title -->
						<svelte:fragment slot="title">{question}</svelte:fragment>
						<div class="ml-5">{answer}</div>
					</AccordianItem>
				{/each}
			</Accordian>
		</div>
		<div
			class="nimble-form min-h-[630px] min-w-[50%]  rounded-2xl"
			data-form-id="65d7bc143841fd0baf097895"
			data-company-id="5b261c76cef070b143c79181"
		></div>
	</div>
</div>

<style>
	.gradient {
		background-color: #c799ff;
		background-image: radial-gradient(at 91% 92%, hsla(0, 0%, 100%, 1) 0px, transparent 50%),
			radial-gradient(at 19% 100%, hsla(0, 0%, 100%, 1) 0px, transparent 50%),
			radial-gradient(at 60% 58%, hsla(271, 75%, 70%, 1) 0px, transparent 50%),
			radial-gradient(at 98% 44%, hsla(172, 95%, 72%, 1) 0px, transparent 50%),
			radial-gradient(at 32% 81%, hsla(206, 86%, 79%, 1) 0px, transparent 50%),
			radial-gradient(at 80% 88%, hsla(160, 62%, 75%, 1) 0px, transparent 50%),
			radial-gradient(at 22% 33%, hsla(297, 79%, 77%, 1) 0px, transparent 50%),
			radial-gradient(at 34% 14%, hsla(247, 83%, 79%, 1) 0px, transparent 50%),
			radial-gradient(at 91% 66%, hsla(236, 94%, 61%, 1) 0px, transparent 50%),
			radial-gradient(at 10% 74%, hsla(19, 69%, 70%, 1) 0px, transparent 50%);
	}
	
</style>
