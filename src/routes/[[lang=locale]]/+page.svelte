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
	import logo1 from '$lib/assets/svgIconForClientsLogo/Asset1.svg';
	import logo2 from '$lib/assets/svgIconForClientsLogo/Asset2.svg';
	import logo3 from '$lib/assets/svgIconForClientsLogo/Asset3.svg';
	import logo4 from '$lib/assets/svgIconForClientsLogo/Asset4.svg';
	import logo5 from '$lib/assets/svgIconForClientsLogo/Asset5.svg';
	import logo6 from '$lib/assets/svgIconForClientsLogo/Asset6.svg';
	import logo7 from '$lib/assets/svgIconForClientsLogo/Asset7.svg';

	export let data: PageData;
	export let btnText: string = 'Learn more';
	let animation = false;

	onMount(() => {
		if (window.matchMedia('(min-width: 768px)').matches) {
			animation = true;
		}
	});
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

<Cta
	title={data.page?.Cta?.title || ''}
	btnText={data.page?.Cta?.Button?.name || ''}
	btnLink={data.page?.Cta?.Button?.link || ''}
	className="bg-sky-50 text-blue-950  "
/>
<section class="pt-6">
	<div class=" flex justify-center items-center gap-6 lg:gap-12 md:gap-16">
		<hr class="w-14">
		<h5 class="text-center text-xs text-gray-800 font-medium lg:text-4xl md:text-2xl">Our Clients</h5>
		<hr class="w-14">
	</div>
	<div class="flex items-center justify-around gap-3 px-3 py-2">
		<!-- <img src={logo1} alt="logo1" class="h-14 w-14 md:h-24 md:w-24"/>
		<img src={logo2} alt="logo2" class="h-7 w-7 md:h-20 md:w-20"/>
		<img src={logo3} alt="logo3" class="h-9 w-9 md:h-20 md:w-20"/>
		<img src={logo4} alt="logo4" class="h-14 w-14 md:h-20 md:w-20" />
		<img src={logo5} alt="logo5" class="h-10 w-10 md:h-20 md:w-20" />
		<img src={logo6} alt="logo6" class="h-10 w-10 md:h-20 md:w-20" />
		<img src={logo7} alt="logo7" class="h-10 w-10 md:h-20 md:w-20" /> -->

		<img src={logo1} alt="logo1" class="logo"/>
		<img src={logo2} alt="logo2" class="logo"/>
		<img src={logo3} alt="logo3" class="logo"/>
		<!-- <img src={logo4} alt="logo4" class="logo" /> -->
		<img src={logo5} alt="logo5" class="logo" />
		<img src={logo6} alt="logo6" class="logo" />
		<img src={logo7} alt="logo7" class="logo" />
	</div>
</section>
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

	.logo{
	height: clamp(2.8rem, 11vw, 10rem) !important;
	width: clamp(2.8rem,11vw, 10rem) !important;
	}

	hr{
		width: clamp(5rem, 20vw,20rem) !important;
	}
</style>
