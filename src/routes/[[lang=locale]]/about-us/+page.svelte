<script lang="ts">
	import { resolveRichText } from '$lib';
	import type { PageData } from './$types';
	import aboutUsIllustration from '$lib/assets/about.svg';
	export let data: PageData;
</script>

<section class="pt-10 lg:py-20 bg-gradient-to-t from-violet-50 to-white">
	<div class="flex lg:flex-row flex-col gap-10  container ">
		<div class="lg:w-1/2">
			<h1 class="text-base md:text-3xl  p-4 font-bold border-l-blue-500 border-l-[6px] mb-10 drop-shadow-md">
				{data.page?.title}
			</h1>
			<article class="prose prose-sm  prose-h2:font-semibold prose-h2:lg:text-xl prose-h2:text-blue-500 prose-h2:text-base lg:prose text-justify">
				{@html resolveRichText(data.page?.content)}
			</article>
		</div>
		<img src={aboutUsIllustration} class="lg:w-1/2 w-full" alt="About Us Illustration" />
	</div>
</section>
