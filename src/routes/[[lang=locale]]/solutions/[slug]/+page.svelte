<script lang="ts">
	import IconCard from '$lib/components/cards/IconCard.svelte';

	import Cta from '$lib/components/shared/CTA.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import { inview } from 'svelte-inview';

	import Animate from '$lib/components/animation/animate.svelte';

	export let data: PageData;
	let scrollable: HTMLElement;
	let selected = 0;
	let sections: HTMLElement[] = [];

	const options = {
		root: null as HTMLElement | null,
		rootMargin: '0px',
		threshold: 0.1
	};
	onMount(() => {
		options.root = scrollable;
	});

	function handleView(index: number): void {
		selected = index;
	}

	function jumpToSection(index: number): any {
		const section = sections[index];
		scrollable.scrollTop = section.offsetTop - scrollable.offsetTop;
	}
</script>

{#if data.hero && data.hero.__typename === 'ComponentTestLifeCycleHeroSection'}
	<section class="bg-gradient-to-t from-sky-100 to-white sticky z-10 top-0">
		<!-- Circle shape -->
		<div
			class=" absolute top-[48%] lg:top-[22%] left-[2%] lg:left-[3%] transform -translate-y-[10%] lg:-translate-y-[25%] translate-x-[30%] bg-blue-200 bg-opacity-50 circle1 rounded-full"
		></div>
		<div
			class="absolute top-[60%] lg:top-[32%] left-[3%] transform -translate-x-[12%] lg:-translate-x-[18%] bg-blue-200 bg-opacity-70 circle2 rounded-full"
		></div>
		<!-- rightc corcle shape  -->

		<div
			class="bgcolor absolute top-[70%] lg:top-[50%] right-[2%] lg:right-[7%] transform -translate-y-[30%] bg-blue-200 bg-opacity-50 circle1 rounded-full"
		></div>

		<div
			class="container text-center xl:min-h-screen 3xl:min-h-[1080px] flex flex-col gap-10 items-center justify-end pt-10 relative"
		>
			<div>
				<h1 class="font-bold md:text-2xl lg:text-5xl mb-2">
					{data.hero?.title}
				</h1>
				<p class="md:max-w-[700px] text-xs md:text-base 2xl:text-lg font-light">
					{data.hero?.subtitle}
				</p>
			</div>
			<img
				class="w-[75%] aspect-video bg-white cover-img-shadow border border-gray-100 rounded-t-xl"
				src={data.hero?.coverImage?.data?.attributes?.url}
				alt={data.hero?.coverImage?.data?.attributes?.alternativeText}
			/>
		</div>
	</section>
{/if}

{#if data.highlights && data.highlights.__typename === 'ComponentTestLifeCycleHighlights'}
	<section class=" relative z-20 bg-white" class:shadow={data.hero}>
		<div class="container pt-10 md:pt-20">
			<Animate>
				<h2
					class="font-bold line-height md:text-2xl lg:text-4xl mb-2 md:mb-4 max-w-sm md:max-w-5xl"
				>
					{@html data.highlights?.title}
				</h2>
			</Animate>
			<Animate>
				<p class="max-w-sm md:max-w-2xl text-xs md:text-base">
					{data.highlights?.subtitle}
				</p>
			</Animate>
			<div
				class="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-16 md:py-20 py-10 place-items-center"
			>
				{#each data.highlights?.cards || [] as card}
					<Animate>
						<IconCard
							imgSrc={card?.media?.data?.attributes?.url}
							imgAlt={card?.media?.data?.attributes?.alternativeText || ''}
							title={card?.title || ''}
							description={card?.description || ''}
						/>
					</Animate>
				{/each}
			</div>
		</div>
	</section>
{/if}

{#if data.features && data.features?.__typename === 'ComponentTestLifeCycleFeatures'}
	<section class="relative z-20 bg-white hidden lg:block pb-20">
		<div class="container pt-10">
			<Animate>
				<h4 class="font-bold text-orange-500">{data.lang === 'ja' ? '機能' : 'Features'}</h4>
			</Animate>
			<Animate>
				<h2 class="font-bold line-height md:text-2xl lg:text-4xl pb-16">
					{@html data.features?.title}
				</h2>
			</Animate>
			<Animate>
				<section class="scroll-section pt-14 px-10 rounded-2xl">
					<p class="font-bold text-gray-500/90 text-lg">JUMP TO FEATURE</p>
					<div class="flex gap-10 justify-between py-10">
						<ul class="flex flex-col justify-between">
							{#each data.features?.features || [] as feature, i}
								<li>
									<button
										on:click={() => jumpToSection(i)}
										class:selected={selected === i}
										class="px-5 py-3.5 whitespace-nowrap text-base 2xl:text-lg text-gray-500/80"
										>{feature?.title}</button
									>
								</li>
							{/each}
						</ul>
						<section
							bind:this={scrollable}
							class=" scroll-y overflow-scroll h-[520px] 2xl:h-[700px] mx-auto snap-y snap-mandatory"
							style=" overflow-x: hidden;"
						>
							{#each data.features?.features || [] as feature, index}
								<article
									bind:this={sections[index]}
									use:inview={options}
									on:inview_enter={() => handleView(index)}
									class="snap-center flex flex-col bg-white h-full justify-center items-center container text-center"
								>
									<div>
										<h3 class="font-semibold tracking-wide mb-3">{feature?.title}</h3>
										<p class="max-w-2xl font-light">{feature?.description}</p>
									</div>
									<img
										class="max-w-xl 2xl:max-w-4xl aspect-video object-contain"
										src={feature?.media?.data?.attributes?.url}
										alt={feature?.media?.data?.attributes?.alternativeText}
									/>
								</article>
							{/each}
						</section>
					</div>
				</section>
			</Animate>
		</div>
	</section>
{/if}

<Cta
	title={data.cta?.title || ''}
	description={data.cta?.description || ''}
	btnText={data.cta?.Button?.name || ''}
	btnLink={data.cta?.Button?.link || ''}
	className="z-20 relative bg-sky-50 text-blue-950 "
/>

<style type="postcss">
	.shadow {
		box-shadow: 0 -10px 20px -10px rgba(0, 0, 0, 0.3);
	}

	.scroll-section {
		box-shadow: 0px 0px 8px 0px #00000020;
	}

	.cover-img-shadow {
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	}

	.line-height {
		line-height: 1.2 !important;
	}

	.selected {
		@apply relative transition-colors;
		color: orangered;
	}

	button::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 6px;
		height: 0;
		background-color: orangered;
		/* Transition effect for height */
		transition: height 0s;
	}
	button.selected::after {
		height: 100%;
		background-color: orangered; /* Sets the height to 100% when button is selected */
		transition: height 1s ease;
	}

	.circle1 {
		width: clamp(4rem, 15vw, 15rem);
		height: clamp(4rem, 15vw, 15rem);
	}
	.circle2 {
		width: clamp(2rem, 12vw, 10rem);
		height: clamp(2rem, 12vw, 10rem);
	}

	.scroll-y::-webkit-scrollbar {
		overflow-y: hidden;
	}
</style>
