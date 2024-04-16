<script lang="ts">
	import IconCard from '$lib/components/cards/IconCard.svelte';
	import SolutionsScrollable from '$lib/components/sections/SolutionsScrollable.svelte';
	import Cta from '$lib/components/shared/CTA.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	
</script>

{#if data.hero && data.hero.__typename === 'ComponentTestLifeCycleHeroSection'}
	<section class="bg-gradient-to-t from-sky-100 to-white sticky z-10 top-0">
		<div
			class="container text-center xl:min-h-screen 3xl:min-h-[1080px] flex flex-col gap-10 items-center justify-end pt-10"
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
			<h2 class="font-bold line-height md:text-2xl lg:text-4xl mb-2 md:mb-4 max-w-sm md:max-w-5xl">
				{@html data.highlights?.title}
			</h2>
			<p class="max-w-sm md:max-w-2xl text-xs md:text-base">
				{data.highlights?.subtitle}
			</p>
			<div
				class="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-16 md:py-20 py-10 place-items-center"
			>
				{#each data.highlights?.cards || [] as card}
					<IconCard
						imgSrc={card?.media?.data?.attributes?.url}
						imgAlt={card?.media?.data?.attributes?.alternativeText || ''}
						title={card?.title || ''}
						description={card?.description || ''}
					/>
				{/each}
			</div>
		</div>
	</section>
{/if}

{#if data.features && data.features?.__typename === 'ComponentTestLifeCycleFeatures'}

	<section class=" relative z-20 bg-white">
		<div class="container pt-10 md:pt-20">
			<h2 class="font-bold line-height md:text-2xl lg:text-4xl mb-2 md:mb-4">
				  {@html data.features?.title}
			</h2>
			
			<SolutionsScrollable data={data.features?.features || []} />
		</div>

	</section>
{/if}

<Cta
	title="REMOVE MUNDANE TESTING ASPECTS TO FOCUS ON WHAT MATTERS THE MOST WITH TITAN"
	description="Experience live with one of our experts"
	btnText="Request Demo"
	className="z-20 relative bg-sky-50 text-blue-950 "
/>

<style type="postcss">
	.shadow {
		box-shadow: 0 -10px 20px -10px rgba(0, 0, 0, 0.3);
	}

	.cover-img-shadow {
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	}


	.line-height {
		line-height: 1.2 !important;
	}
</style>
