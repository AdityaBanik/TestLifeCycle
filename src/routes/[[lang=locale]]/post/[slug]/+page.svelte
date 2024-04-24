<script lang="ts">
	import { resolveRichText } from '$lib';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<article
	class=" prose-sm prose prose-h2:font-normal  prose-h3:font-normal md:prose-base lg:prose-h1:mb-20 2xl:prose-lg container py-10 lg:py-20"
>
	<h1>{data.blog?.title}</h1>
	<img
		class="aspect-video"
		src={data.blog?.coverImage?.data?.attributes?.url}
		alt={data.blog?.coverImage?.data?.attributes?.alternativeText}
	/>
	<div class="text-justify">
		{@html resolveRichText(data.blog?.content)}

		<p class="text-black font-bold text-md text-center">Request a demo and see it Titan in action</p>
		<div class="flex justify-center items-center">
			<a
				href={data.lang === "ja"?"/ja/request-demo":"/request-demo" }
				class=" inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded no-underline"
				>{data.lang === "ja"?"デモを依頼する":"Request Demo" }</a
			>
		</div>
	</div>
</article>

<style>
	.prose{
		max-width: 80ch;
	}
</style>


