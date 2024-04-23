<script lang="ts">
	import bgimage from '$lib/assets/privacy.webp';
	import { resolveRichText } from '$lib';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<section>
	<div
		class="text-black bg-cover  container bg-no-repeat bg-center py-8 md:py-20 lg:py-36"
		style="background-image: url({bgimage})"
	>
		<h1 class="font-bold text-cyan-900">{data.page?.title}</h1>
		<p class="text-lg">{data.page?.date}</p>
	</div>
	<article
		class="py-2  prose px-4 md:container text-justify lg:prose-li:text-lg lg:prose-h2:text-xl lg:prose-p:text-lg  prose-h2:text-sm prose-h2:font-normal prose-p:text-xs prose-ul:text-xs"
	>
		{@html resolveRichText(data.page?.content)}
	</article>
</section>

<style>
	h1 {
		font-size: clamp(1rem, 3vw, 4rem) !important;
	}
	p {
		font-size: clamp(0.5rem, 3vw, 1rem) !important;
	}
</style>
