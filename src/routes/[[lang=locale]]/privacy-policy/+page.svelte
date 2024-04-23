<script lang="ts">
	import bgimage from '$lib/assets/privacy.webp';
	import { resolveRichText } from '$lib';
	import type { PageData } from './$types';
	export let data: PageData;
</script>

<section class="bg-contain flex items-center mb-10 h-80" style="background-image: url({bgimage})">
	<div class="container">
		<div class="text-black">
			<h1 class="text-4xl font-bold mb-4">{data.page?.title}</h1>
			<p class="text-lg">{data.page?.date}</p>
		</div>
	</div>
</section>

<article
	class="articalDiv py-2 prose  container text-justify lg:prose-li:text-lg lg:prose-h2:text-xl lg:prose-p:text-lg prose-h2:text-sm prose-h2:font-normal prose-p:text-xs prose-ul:text-xs"
>
	{@html resolveRichText(data.page?.content)}
</article>

<style>
	h1 {
		font-size: clamp(1rem, 3vw, 4rem) !important;
	}
	p {
		font-size: clamp(0.5rem, 3vw, 1rem) !important;
	}
	.articalDiv{
		@apply container !important;
	}
</style>
