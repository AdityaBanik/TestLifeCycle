<script lang="ts">
	import { resolveRichText } from '$lib';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';
	import requestDemoIllustration from '$lib/assets/request-demo.svg';
	import requestDemoIllustration2 from '$lib/assets/request-demo2.svg';

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://app.nimble.com/web-form/bundle.js';

		document.body.appendChild(script);
	});
	export let data: PageData;
</script>

<section class=" py-20 ">
	<div class="container flex flex-col lg:flex-row justify-between gap-16">
		<div class="pt-7">
			<h1 class=" text-4xl capitalize highlight font-extrabold text-center pb-10">
				{data.page?.title}
			</h1>

			<img src={requestDemoIllustration2} class=" w-full" alt="Titan Request Demo" />
		</div>

		<div
			class="nimble-form min-h-[680px] min-w-[50%] "
			data-form-id="65d7bc143841fd0baf097895"
			data-company-id="5b261c76cef070b143c79181"
		></div>
	</div>
</section>

<section
	class="flex flex-col pb-20 justify-between text-justify prose prose-sm prose-h3:text-3xl prose-h3:text-blue-500 prose-h3:mb-10 prose-li:m-0 lg:prose content"
>
	<h3>{data.page?.subtitle}</h3>

	{@html resolveRichText(data.page?.content)}
</section>

<style>
	.content {
		@apply container !important;
	}

	.web-form-component{
		@apply bg-transparent !important;
	}
</style>
