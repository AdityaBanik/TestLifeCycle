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

<section
	class="container pt-20 pb-5 flex flex-col lg:flex-row  justify-between gap-16"
>


	<div class="prose  prose-h1:text-blue-500 prose-h1:mb-2 prose-h2:mt-0 prose-h1:px-0 prose-h2:px-0 ">
		<h1 class="container text-center">{data.page?.title}</h1>
		
		<img src={requestDemoIllustration2} class="w-full" alt="Titan Request Demo" />
	</div>

	<div
	class="nimble-form min-h-[680px] min-w-[50%]"
	data-form-id="65d7bc143841fd0baf097895"
	data-company-id="5b261c76cef070b143c79181"
></div>

	
</section>

<section class="flex flex-col  pb-20 gap-10 justify-between container  prose prose-sm prose-h3:text-3xl prose-h3:text-blue-500 prose-h3:mb-10 prose-li:m-0 lg:prose ">
	
	<article
		class="w-full "
	>
	<h3 class="text-center">{data.page?.subtitle}</h3>
	<img src={requestDemoIllustration} class="w-full " alt="Titan Request Demo" />
		{@html resolveRichText(data.page?.content)}

	</article>
	
</section>
