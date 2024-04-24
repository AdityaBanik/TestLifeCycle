<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	import TitanHome from '$lib/components/animation/TitanHome.svelte';
	import Button from '$lib/components/buttons/Button.svelte';
	import Cta from '$lib/components/shared/CTA.svelte';

	import monitorImage from '$lib/assets/Home/pc.png';
	import HomeFeatures from '$lib/components/sections/HomeFeatures.svelte';
	import type { PageData } from './$types';
	import Testimonial from '$lib/components/cards/Testimonial.svelte';
	import logo1 from '$lib/assets/svgIconForClientsLogo/Asset1.svg';
	import logo2 from '$lib/assets/svgIconForClientsLogo/Asset2.svg';
	import logo3 from '$lib/assets/svgIconForClientsLogo/Asset3.svg';
	import logo4 from '$lib/assets/svgIconForClientsLogo/Asset4.svg';
	import logo5 from '$lib/assets/svgIconForClientsLogo/Asset5.svg';
	import logo6 from '$lib/assets/svgIconForClientsLogo/Asset6.svg';
	import { onMount } from 'svelte';
	import Animate from '$lib/components/animation/animate.svelte';
	import LeftToRightAnimate from '$lib/components/animation/leftToRightAnimate.svelte';

	let animation = false;

	onMount(() => {
		if (window.matchMedia('(min-width: 768px)').matches) {
			animation = true;
		}
	});

	export let data: PageData;
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
				{@html data.page?.Hero?.description}
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
		<TitanHome lang={data.lang || ''} />
	</div>
{/key}

<Animate>
	<Cta
		title={data.page?.Cta?.title || ''}
		btnText={data.page?.Cta?.Button?.name || ''}
		btnLink={data.page?.Cta?.Button?.link || ''}
		className="bg-black text-white mt-10 md:mt-16 "
	/>
</Animate>
<section class="container pt-10">
	{#each data.page?.Features || [] as item, i}
		<HomeFeatures title={item?.title || ''} items={item?.features || []} alignRight={i == 1} />
	{/each}
</section>

<section class="py-3">
	<div class=" flex justify-center items-center gap-6 lg:gap-12 md:gap-16">
		<hr />
		<h5 class="text-center text-gray-500 font-medium lg:text-4xl md:text-2xl py-6">
			{data.lang === 'ja' ? 'TITANご愛用中のお客様' : 'Our Clients'}
		</h5>
		<hr />
	</div>

	<div class=" mt-2 marquee-container relative">
		<div class="marquee-content whitespace-nowrap">
			<div class="inline-flex box-border min-w-max items-center gap-10 mr-10 md:gap-32 md:mr-32">
				<img src={logo1} class="aspect-video w-20 lg:h-32" alt="lightyear" />
				<img src={logo2} class="aspect-video w-20 lg:w-32" alt="toyota" />
				<img src={logo3} class="aspect-video w-20 lg:w-32" alt="honda" />
				<img src={logo4} class="aspect-video w-20 lg:w-32" alt="lucid" />
				<img src={logo5} class="aspect-video w-20 lg:w-32" alt="canoo" />
				<img src={logo6} class="aspect-video w-20 lg:w-32" alt="volkswagen" />
			</div>
			<div class="inline-flex box-border min-w-max items-center gap-10 mr-10 md:gap-32 md:mr-32">
				<img src={logo1} class="aspect-video w-20 lg:h-32" alt="lightyear" />
				<img src={logo2} class="aspect-video w-20 lg:w-32" alt="toyota" />
				<img src={logo3} class="aspect-video w-20 lg:w-32" alt="honda" />
				<img src={logo4} class="aspect-video w-20 lg:w-32" alt="lucid" />
				<img src={logo5} class="aspect-video w-20 lg:w-32" alt="canoo" />
				<img src={logo6} class="aspect-video w-20 lg:w-32" alt="volkswagen" />
			</div>
		</div>
	</div>
</section>

<section class="container flex flex-col lg:flex-row justify-between lg:items-center py-20">
	<h2
		class="text-xl lg:text-3xl font-bold mb-6 md:mb-16"
		in:fly|global={{ y: 200, delay: 500, easing: backOut }}
	>
		See how our customers drive impact
	</h2>
	<Testimonial lang={data.lang || ''} />
</section>

<Animate>
	<Cta
		title={data.page?.Cta?.title || ''}
		btnText={data.page?.Cta?.Button?.name || ''}
		btnLink={data.page?.Cta?.Button?.link || ''}
		className="bg-sky-50 text-blue-950   "
	/>
</Animate>

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
	<div class="lg:block w-[55%] hidden">
	<LeftToRightAnimate>

			<img src={monitorImage} alt="Monitor" class="w-full" />
	
	</LeftToRightAnimate>
</div>
</section>

<style>
	.fluid-title {
		font-size: clamp(1.5rem, 4.8vw, 5rem) !important;
	}
	.fluid-subtitle {
		font-size: clamp(0.65rem, 1.8vw, 2rem) !important;
	}
	hr {
		width: clamp(5rem, 20vw, 20rem) !important;
	}

	.marquee-container {
		width: 100%;
		overflow: hidden;
	}

	.marquee-container::before {
		content: '';
		position: absolute;
		height: 100%;

		@apply bg-gradient-to-r md:w-52 w-20 from-white to-transparent z-30;
	}

	.marquee-container::after {
		content: '';
		position: absolute;
		height: 100%;

		top: 0;
		right: 0;
		@apply bg-gradient-to-l md:w-52 w-20 from-white to-transparent z-30;
	}
	.marquee-content {
		animation: marquee 30s linear infinite;
	}
	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}
</style>
