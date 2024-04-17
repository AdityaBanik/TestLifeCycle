<script lang="ts">
	import TitanHome from '$lib/components/animation/TitanHome.svelte';

	import Button from '$lib/components/buttons/Button.svelte';
	import Cta from '$lib/components/shared/CTA.svelte';

	export let btnText: string = 'Learn more';

	let currentSlide = 0;
	let previousSlide = 0;
	let direction = 'next';

	const slides = [
		'https://static.wixstatic.com/media/454d4b_f10d028ff64c40c88714a1946769b321~mv2.png',
		'https://static.wixstatic.com/media/454d4b_bc43930910954f1bb609ef6272dcd8be~mv2.png',
		'https://static.wixstatic.com/media/454d4b_37b4f865d11645aba4c9dc56ee2d603d~mv2.png',
		'https://static.wixstatic.com/media/454d4b_c60b3face6594c989633f674d1a28083~mv2.png',
		'https://static.wixstatic.com/media/454d4b_11a433609b06446d9dd7ed0e8bbb6578~mv2.png'
	];

	const buttons = [
		'Automated Reports',
		'Project Insights',
		'Data Management',
		'Incident Management',
		'KPI Dashboard'
	];

	function changeSlide(index: any) {
		previousSlide = currentSlide;
		currentSlide = index;
		direction = index > previousSlide ? 'next' : 'prev';
	}
</script>

<section class="text-center lg:pt-10 p-3 md:px-14 md:t-10">
	<div class="container flex flex-col items-center gap-4 md:gap-7">
		<div>
			<h1 class="fluid-title leading-normal text-lg font-bold">Test Lifecycle Simplified</h1>

			<h2 class="fluid-subtitle font-semibold">
				The adaptable platform that lets you validate products,<br /><strong>YOUR WAY!</strong>
			</h2>
		</div>

		<Button text={btnText} />
	</div>
</section>

<TitanHome />

<Cta
	title="REMOVE MUNDANE TESTING ASPECTS TO FOCUS ON WHAT MATTERS THE MOST WITH TITAN
"
	btnText="Request Personalized Demo !"
	className="bg-black text-white mt-10 md:mt-16 "
/>

<section class="bg-gradient-to-b from-indigo-500 to-purple-700 prose">
	<div class="container py-6 flex flex-col items-center">
		<div class="submainone flex flex-col">
			<div class="title&bullets flex flex-col gap-4">
				<div class="title">
					<h3 class="font-bold text-sm">
						<span class="text-yellow-500 font-bold"
							>One platform to monitor your Test Lifecycle Insights
						</span><span class="font-bold text-white"
							>in real-time, analyze data, generate value-added reports, and more.</span
						>
					</h3>
				</div>
				<div class="bullets px-4">
					<h4 class="font-bold text-white ml-3">{buttons[currentSlide]}</h4>
					<ul>
						{#each ['Use multiple report templates', 'Review and Approved/Reject using Titan', 'Store & release in the system'] as bullet}
							<li class="text-white p-0 m-0">{bullet}</li>
						{/each}
					</ul>
				</div>
			</div>

			<div class="slide-container">
				<div class="slide {direction}">
					{#each slides as slide, index}
						<img
							class={direction === 'next' ? 'slide-in-up' : 'slide-in-down'}
							src={slide}
							alt={'Slide ' + (index + 1)}
							style="display: {index === currentSlide
								? 'block'
								: 'none'}; animation-delay: {index === currentSlide ? '0s' : '0.2s'};"
						/>
					{/each}
				</div>
			</div>
		</div>

		<div class="allBtns flex flex-col gap-4 w-[50%] text-center">
			{#each buttons as button, index}
				<button
					on:click={() => changeSlide(index)}
					class="bg-cyan-500 no-underline py-2.5 fluid-font px-4 lg:px-10 lg:py-2 font-medium text-white rounded-full hover:bg-blue-700 active:bg-gray-400"
					>{button}</button
				>
			{/each}
		</div>
	</div>
</section>

<style>
	.fluid-title {
		font-size: clamp(1.2rem, 4.8vw, 5rem) !important;
	}
	.fluid-subtitle {
		font-size: clamp(0.5rem, 1.8vw, 4rem) !important;
	}

	li {
		font-size: clamp(0.7rem, 1.8vw, 4rem) !important;
	}

	.slide {
		display: flex;
		position: relative;
		overflow: hidden;
	}

	.slide-in-up {
		animation: slide-in-up 0.5s ease forwards;
		
	}

	.slide-in-down {
		animation: slide-in-down 0.5s ease forwards;
	}

	@keyframes slide-in-up {
		from {
			transform: translateX(100%);
		}
		to {
			transform: translateX(0);
		}

	
	}

	@keyframes slide-in-down {
		from {
			transform: translateX(-100%);
		}
		to {
			transform: translateX(0);
		}

	
	}

</style>
