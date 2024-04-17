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
			<div class="border-l-white border-l-[6px] pl-8 drop-shadow-md">
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
		font-size: clamp(0.85rem, 1.125vw, 0.85rem);
	}

	.prose {
		@apply container;
	}

	.gradient {
		background-color: hsla(292, 89%, 48%, 1);
		background-image: radial-gradient(at 97% 100%, hsla(305, 0%, 100%, 1) 0px, transparent 50%),
			radial-gradient(at 72% 100%, hsla(251, 0%, 100%, 1) 0px, transparent 50%),
			radial-gradient(at 43% 100%, hsla(251, 0%, 100%, 1) 0px, transparent 50%),
			radial-gradient(at 86% 58%, hsla(224, 100%, 70%, 0.99) 0px, transparent 50%),
			radial-gradient(at 7% 94%, hsla(251, 0%, 100%, 1) 0px, transparent 50%),
			radial-gradient(at 9% 53%, hsla(270, 85%, 62%, 1) 0px, transparent 50%),
			radial-gradient(at 68% 81%, hsla(99, 0%, 100%, 1) 0px, transparent 50%),
			radial-gradient(at 51% 60%, hsla(180, 100%, 50%, 0.49) 0px, transparent 50%),
			radial-gradient(at 9% 18%, hsla(238, 100%, 76%, 1) 0px, transparent 50%),
			radial-gradient(at 82% 21%, hsla(169, 93%, 52%, 0.45) 0px, transparent 50%);
	}
</style>
