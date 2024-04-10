<script lang="ts">
	import type { PageData } from './$types';
    
	import { onMount } from 'svelte';
	import Cta from '$lib/components/shared/CTA.svelte';
	
    export let data: PageData;
	
</script>

<section class="bg-sky-50">
	<div class="container background flex justify-between items-end md:gap-12">
		<div class="flex flex-col py-1 md:py-2">
			<h1 class="fluid-title font-bold">{data.page?.hero.title}</h1>
			<h2 class="fluid-subtitle font-semibold">{data.page?.hero.subtitle}</h2>
		</div>

		<img alt="car img" class=" translate-y-1/3 aspect-video w-[48%]" />
	</div>
</section>

<div class="container">
	<div class="mt-16 md:mt-6 md:max-w-[48%]">
		<p class="text-justify fluid-font">
			It is a long established fact that a reader will be distracted by the readable content of a
			page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
			normal distribution of letters, as opposed to using 'Content here, content here', making it
			look like readable English. Many desktop publishing packages and web page editors now use
			Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
			sites still in their infancy. Various versions have evolved over the years, sometimes by
			accident, sometimes on purpose (injected humour and the like). It is a long established fact
			that a reader will be distracted by the readable content of a page when looking at its layout.
			The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
			as opposed to using 'Content here, content here', making it look like readable English. Many
			desktop publishing packages and web page editors now use Lorem Ipsum as their default model
			text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
			Various versions have evolved over the years, sometimes by accident, sometimes on purpose
			(injected humour and the like).
		</p>
	</div>
</div>

<!-- <Cta/> -->

<style type="postcss">
	.background {
		background: url($lib/assets/functionalTestBg.webp);
		background-size: 45%;
		@apply bg-no-repeat bg-left-bottom;
	}

	.fluid-title {
		font-size: clamp(0.75rem, 2vw, 2rem);
	}

	.fluid-subtitle {
		font-size: clamp(0.65rem, 1.5vw, 1.75rem);
	}
</style>
