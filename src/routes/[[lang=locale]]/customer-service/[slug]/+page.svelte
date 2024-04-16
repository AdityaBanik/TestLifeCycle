<script lang="ts">
	import IconCard from '$lib/components/cards/IconCard.svelte';
	import Cta from '$lib/components/shared/CTA.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<section class="card py-20  bg-gradient-to-b from-purple-600 to-white">
	<div class="container">
		<div class="border-l-pink-500 border-l-8 pl-8">
			<h1 class="fluid-title text-white font-bold mb-3">{data.page?.title}</h1>
			<h2 class="max-w-xl fluid-subtitle text-white">
				{data.page?.subtitle}
			</h2>
		</div>

		<div class="mt-10 md:mt-28 grid grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 xl:gap-y-16">
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
        font-size: clamp(0.85rem, 1.125vw, 1.5rem);
    }

</style>
