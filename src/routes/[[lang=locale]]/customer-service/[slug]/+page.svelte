<script lang="ts">
	import { resolveRichText } from '$lib';
    import IconCard from '$lib/components/cards/IconCard.svelte';
	import Cta from '$lib/components/shared/CTA.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="pt-10 xl:py-20 md:pt-20 bg-gradient-to-t from-violet-50 to-white">
	<div class="container ">
		
		<section class="flex flex-col xl:flex-row gap-10 items-start justify-between ">
			<div>
				<h1 class="text-base md:text-3xl  p-4 font-bold border-l-blue-500 border-l-[6px] mb-10 drop-shadow-md">
					{data.page?.title}
				</h1>
				<h2 class="max-w-xl  text-sm md:text-base 2xl:text-lg text-justify ">
					{data.page?.subtitle}
				</h2>

				{#if data.page?.cards}
				<div
					class="mt-10 md:mt-28 grid grid-cols-2  gap-4 md:gap-6 xl:gap-y-14"
				>
					{#each data.page?.cards || [] as card}
						<IconCard
							title={card?.title || ''}
							description={card?.description || ''}
							imgSrc={card?.media?.data?.attributes?.url}
							imgAlt={card?.media?.data?.attributes?.alternativeText || ''}
							className="items-center text-center gap-5 md:py-10  shadow border  bg-white"
						/>
					{/each}
				</div>
			{/if}
			</div>

			<img class="lg:max-w-xl md:max-w-md" src={data.page?.image?.url} alt={data.page?.image?.alternativeText}>
		</section>

		{#if data.page?.content}
	<section
		class=" drop-shadow-xl prose prose-sm md:prose prose-img:shadow-md prose-img:bg-white prose-img:p-6 prose-img:rounded-xl pb-20"
	>
		{@html resolveRichText(data.page?.content)}
	</section>
{/if}

	</div>
</section>

<Cta
	title={data.cta?.title || ""}
	description={data.cta?.description || ""}
	btnText={data.cta?.Button?.name || ""}
	btnLink={data.cta?.Button?.link || ""}
	className="bg-sky-50 text-blue-950"
/>

<style type="postcss">
	.fluid-title {
		font-size: clamp(1rem, 2.5vw, 2rem);
	}

	.fluid-subtitle {
		font-size: clamp(0.85rem, 1.125vw, 0.85rem);
	}

	.prose {
		@apply container;
	}

	.shadow{
		box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px, rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
	}

</style>
