<script lang="ts">
	import { resolveRichText } from '$lib';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<article class="prose-sm prose md:prose-base lg:prose-h1:mb-20 2xl:prose-lg blog-width container py-10  lg:py-20 ">
	<h1>{data.blog?.title}</h1>
	<img
		class="aspect-video"
		src={data.blog?.coverImage?.data?.attributes?.url}
		alt={data.blog?.coverImage?.data?.attributes?.alternativeText}
	/>
	<div>
		{@html resolveRichText(data.blog?.content)}

		<p class="text-black font-bold text-sm">Request a demo and see it Titan in action</p>
		<div class="flex justify-center items-center">
		<a href="/request-demo" class=" inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded no-underline">Request demo</a>
	   
	</div>
	</div>
</article>

<style>
	.blog-width {
		@apply container !important;
	}
</style>
