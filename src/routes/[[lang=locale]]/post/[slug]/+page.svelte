<script lang="ts">
	import { resolveRichText } from '$lib';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<article class="prose-sm prose md:prose-base lg:prose-h1:mb-20 2xl:prose-lg blog-width container py-10  lg:py-20">
	<h1>{data.blog?.title}</h1>
	<img
		class="aspect-video"
		src={data.blog?.coverImage?.data?.attributes?.url}
		alt={data.blog?.coverImage?.data?.attributes?.alternativeText}
	/>
	<div>
		{@html resolveRichText(data.blog?.content)}
	</div>
</article>

<style>
	.blog-width {
		max-width: 90ch !important;
	}
</style>
