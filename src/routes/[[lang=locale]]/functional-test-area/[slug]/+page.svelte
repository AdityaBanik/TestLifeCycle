<script lang="ts">
	import type { PageData } from './$types';
	import { resolveRichText } from '$lib';
	import Cta from '$lib/components/shared/CTA.svelte';

	export let data: PageData;
</script>

<section class="bg-sky-50">
	<div class="container background flex justify-between items-end md:gap-12">
		<div class="flex flex-col py-1 md:py-2">
			<h1 class="fluid-title font-bold tracking-wide">{data.page?.hero?.title}</h1>
			<h2 class="fluid-subtitle font-semibold">{data.page?.hero?.subtitle}</h2>
		</div>

		<img
			src={data.page?.hero?.coverImage?.data?.attributes?.url}
			alt={data.page?.hero?.coverImage?.data?.attributes?.alternativeText}
			class=" translate-y-1/3 aspect-video w-[48%]"
		/>
	</div>
</section>

<section class="container">
	<div class="text-justify prose  prose-sm 2xl:prose mt-16 md:mt-6 md:max-w-[48%]">
		{@html resolveRichText(data.page?.content)}
	</div>
</section>

<Cta
	title={data.cta?.title || ""}
	description={data.cta?.description || ""}
	btnText={data.cta?.Button?.name || ""}
	btnLink={data.cta?.Button?.link || ""}
	className="bg-sky-50 text-blue-950 mt-10 md:mt-16 "
/>

<style type="postcss">
	.background {
		background: url($lib/assets/functionalTestBg.webp);
		background-size: 45%;
		@apply bg-no-repeat bg-left-bottom;
	}

	.fluid-title {
		font-size: clamp(0.875rem, 2.5vw, 2rem);
	}

	.fluid-subtitle {
		font-size: clamp(0.75rem, 1.5vw, 1.75rem);
	}
</style>
