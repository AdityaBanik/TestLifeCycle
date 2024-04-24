<script lang="ts">
	import { resolveRichText } from '$lib';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<article
	class="prose-sm prose prose-h2:font-normal  prose-h3:font-normal md:prose-base lg:prose-h1:mb-20 2xl:prose-lg container py-10 lg:py-20"
>
	<h1>{data.blog?.attributes?.title}</h1>
	<img
		class="aspect-video"
		src={data.blog?.attributes?.coverImage?.data?.attributes?.url}
		alt={data.blog?.attributes?.coverImage?.data?.attributes?.alternativeText}
	/>
	<div class="text-justify">
		{@html resolveRichText(data.blog?.attributes?.content)}
	</div>
</article>


