<script lang="ts">
	import { resolveRichText } from '$lib';
	import IconCard from '$lib/components/cards/IconCard.svelte';
	import Cta from '$lib/components/shared/CTA.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="gradient">
	<section class=" pt-16 pb-10">
		<div class="container">
			<div class="border-l-blue-500 border-l-8 pl-8 drop-shadow-md">
				<h1 class="fluid-title text-white font-bold mb-3">{data.page?.title}</h1>
				<h2 class="max-w-xl fluid-subtitle text-white">
					{data.page?.subtitle}
				</h2>
			</div>

			<div
				class="mt-10 md:mt-28 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-y-14"
			>
				{#each data.page?.cards || [] as card}
					<IconCard
						title={card?.title || ''}
						description={card?.description || ''}
						imgSrc={card?.media?.data?.attributes?.url}
						imgAlt={card?.media?.data?.attributes?.alternativeText || ''}
						className="items-center text-center gap-5 md:py-10  shadow-lg border-none bg-white"
					/>
				{/each}
			</div>
		</div>
	</section>

	{#if data.page?.content}
		<section
			class="container drop-shadow-xl prose prose-sm md:prose prose-img:shadow-md prose-img:bg-white prose-img:p-6 prose-img:rounded-xl pb-20"
		>
			{@html resolveRichText(data.page?.content)}
		</section>
	{/if}
</div>
<Cta
	title="Know more about TITAN"
	description="Experience live with one of our experts"
	btnText="Request Personalized Demo !"
	className="bg-sky-50 text-blue-950  "
/>

<style type="postcss">
	.fluid-title {
		font-size: clamp(1rem, 2.5vw, 2rem);
	}

	.fluid-subtitle {
		font-size: clamp(0.85rem, 1.125vw, .85rem);
	}

	.prose {
		@apply container;
	}

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
