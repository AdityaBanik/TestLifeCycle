<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte';
	import TitanHome from '$lib/components/animation/TitanHome.svelte';
	import Button from '$lib/components/buttons/Button.svelte';
	import Cta from '$lib/components/shared/CTA.svelte';
	import monitorImage from '$lib/assets/Home/pc.png';
	import HomeFeatures from '$lib/components/sections/HomeFeatures.svelte';
	import type { PageData } from './$types';
	export let data: PageData;
	export let btnText: string = 'Learn more';
	let animation = false;

	onMount(() => {
		if (window.matchMedia('(min-width: 768px)').matches) {
			animation = true;
		}
	});

	let currentSlide = 0;
	let previousSlide = 0;
	let direction = 'next';

	const slides = [
		'src/lib/assets/automated reports 2.png',
		'src/lib/assets/project insights 2.png',
		'src/lib/assets/data mgmt 2.png',
		'src/lib/assets/incident mgmt 2.png',
		'src/lib/assets/kpi 2.png'
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

{#key animation}
	<section
		class="text-center pt-10 container flex flex-col items-center justify-center gap-4 md:gap-8"
	>
		<div>
			<h1
				in:fly|global={{ y: 200, delay: 500, easing: backOut }}
				class="fluid-title leading-normal text-lg font-bold"
			>
				{data.page?.Hero?.title}
			</h1>

			<h2 class="fluid-subtitle font-semibold" in:fly|global={{ y: 100, delay: 900 }}>
				The adaptable platform that lets you validate products,<br />
				<strong class="font-bold">YOUR WAY!</strong>
			</h2>
		</div>
		<div in:fade|global={{ delay: 1100, easing: backOut }}>
			<Button
				text={data.page?.Hero?.Button?.name || ''}
				link={data.page?.Hero?.Button?.link || ''}
				className="lg:py-3"
			/>
		</div>
	</section>
	<div in:fly|global={{ y: 200, delay: 1100, easing: backOut }}>
		<TitanHome />
	</div>
{/key}

<Cta
	title={data.page?.Cta?.title || ''}
	btnText={data.page?.Cta?.Button?.name || ''}
	btnLink={data.page?.Cta?.Button?.link || ''}
	className="bg-black text-white mt-10 md:mt-16 "
/>

<section class="container py-10">
	{#each data.page?.Features || [] as item, i}
		<HomeFeatures title={item?.title || ''} items={item?.features || []} alignRight={i == 1} />
	{/each}
</section>

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

<Cta
	title={data.page?.Cta?.title || ''}
	btnText={data.page?.Cta?.Button?.name || ''}
	btnLink={data.page?.Cta?.Button?.link || ''}
	className="bg-sky-50 text-blue-950   "
/>

<section class=" py-10 md:py-28 container flex items-center">
	<div class=" flex flex-col gap-10">
		<div>
			<h2
				class=" border-orange-400 text-xl md:text-3xl text-gray-600 border-l-4 pl-5 font-semibold mb-2"
			>
				{@html data.page?.acceleratingSection?.title || ''}
			</h2>
			<p class="text-gray-600 text-sm md:text-base lg:text-lg max-w-xl font-semibold pt-3 pl-6">
				{data.page?.acceleratingSection?.subtitle || ''}
			</p>
		</div>

		<img src={monitorImage} alt="img1" class="w-full lg:hidden" />

		<div class="grid grid-cols-3 md:grid-cols-2 gap-2 md:gap-4 pt-5">
			{#each data.page?.acceleratingSection?.cards || [] as iconCard}
				<article class="flex fluid-font items-center">
					<img
						class="w-10 md:w-24"
						src={iconCard?.media?.data?.attributes?.url}
						alt={iconCard?.media?.data?.attributes?.alternativeText}
					/>
					<p>
						<span class=" text-orange-400 font-bold block text-xs md:text-2xl">
							{iconCard?.title}%
						</span>
						{iconCard?.description}
					</p>
				</article>
			{/each}
		</div>
	</div>

	<img src={monitorImage} alt="Monitor" class="hidden lg:block w-[55%]" />
</section>

<style>
	.fluid-title {
		font-size: clamp(1.5rem, 4.8vw, 5rem) !important;
	}
	.fluid-subtitle {
		font-size: clamp(0.65rem, 1.8vw, 2rem) !important;
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
