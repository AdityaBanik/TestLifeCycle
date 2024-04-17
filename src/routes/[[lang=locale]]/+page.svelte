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

			<h2 class="fluid-subtitle font-semibold  " in:fly|global={{ y: 100, delay: 900 }}>
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


<section>
	<h5 class="text-center">Our Clients</h5>
	<div class="flex overflow-x-auto items-center justify-center gap-3">
		
        <img src="src\lib\assets\svgIconForClientsLogo\Asset 1.svg" alt="logo1" >
        <img src="src/lib/assets/volkswaganLogo.webp" alt="logo2" >
        <img src="src/lib/assets/hondaLogo.webp" alt="logo3" >
        <img src="src/lib/assets/toyotoLogo.webp" alt="logo4" >
        <img src="src/lib/assets/canooLogo.webp" alt="logo5" >
        <img src="src/lib/assets/CalspanLogo.webp" alt="logo6">
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

</style>
