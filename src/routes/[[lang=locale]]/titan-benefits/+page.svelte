<script lang="ts">
	import type { PageData } from './$types';
	import Button from '$lib/components/buttons/Button.svelte';
	import { resolveRichText } from '$lib';
	import bgimage from '$lib/assets/benefits.png';

	export let data: PageData;
</script>

 <section class="container flex flex-col items-start py-10 lg:gap-8 lg:py-20">
	<h1 class="fluid-title font-bold max-w-5xl">
		{@html data.page?.Hero?.title}
	</h1>
	<Button
		text={data.page?.Hero?.Button?.name || ''}
		link={data.page?.Hero?.Button?.link || ''}
		className="no-underline"
	/>

	<div class="prose py-5 lg:py-9">
		{@html data.page?.Hero?.description}
	</div>
</section> 



<section class="container pb-20">
	{#each data.page?.features || [] as feature, index}
		<article
			class="p-2 flex justify-between flex-col {index % 2 == 0
				? 'lg:flex-row'
				: 'lg:flex-row-reverse'}  lg:gap-7 items-center pb-16"
		>
			<div class="lg:w-1/2">
				<h2 class="font-bold fluid-subtitle mb-5">
					{@html feature?.title}
				</h2>
				<div class="prose prose-a:text-orange-500 prose-a:font-medium prose-sm text-justify">
					{@html resolveRichText(feature?.content)}
				</div>
			</div>

			<img
				class="w-full lg:w-1/2 max-h-[400px] object-contain p-4 "
				src={feature?.image?.data?.attributes?.url}
				alt={feature?.image?.data?.attributes?.alternativeText || ''}
			/>
		</article>
	{/each}
</section>

<style>
	.fluid-title {
		font-size: clamp(1.2rem, 2.5vw, 2.5rem) !important;
	}

	.fluid-subtitle {
		font-size: clamp(1rem, 2.5vw, 2rem);
	}
</style>
