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

<section class="container pt-20 pb-10 flex flex-col lg:flex-row-reverse justify-between gap-16">
	<article
		class="w-1/2 prose prose-sm prose-ol:max-w-sm prose-li:m-0 prose-h1:text-blue-500 prose-h1:mb-2 prose-h2:mt-0 lg:prose"
	>
		<h1>{data.page?.title}</h1>
		<h2>{data.page?.subtitle}</h2>
		{@html resolveRichText(data.page?.content)}
	</article>
	<img src={requestDemoIllustration2} class="w-full lg:w-1/2" alt="Titan Request Demo" />
</section>

<section class="flex flex-col lg:flex-row py-10 gap-10 justify-between container">
	<div
		class="nimble-form min-h-[680px] min-w-[50%]"
		data-form-id="65d7bc143841fd0baf097895"
		data-company-id="5b261c76cef070b143c79181"
	></div>
	<img src={requestDemoIllustration} class="w-full lg:w-1/2" alt="Titan Request Demo" />
</section>


