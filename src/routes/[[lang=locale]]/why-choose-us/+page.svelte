<script lang="ts">
	import IconCard from '$lib/components/cards/IconCard.svelte';
	import Cta from '$lib/components/shared/CTA.svelte';
	import type { PageData } from './$types';
	import bgimage from '$lib/assets/white-titan-logo.webp';
	

	export let data: PageData;
</script>

<div class="gradient min-h-screen flex flex-col justify-center items-center text-center">
	<h1 class="hidden">{data.page?.highlights?.title}</h1>
       
            <img src={bgimage} alt="Image1" class="w-64 h-64 mx-auto mb-2 rounded-full" />
            <p class={data.lang === "ja"?"text-white fluid-subtitle text-left w-2/5":"text-white fluid-subtitle w-2/5 "}>
				{data.page?.highlights?.subtitle}
            </p>
        
    <section class="grid sm:grid-cols-2 lg:grid-cols-3 gap-16 p-14">
        {#each data.page?.highlights?.cards || [] as card}
            <IconCard
                title={card?.title || ''}
                description={card?.description || ''}
                imgSrc={card?.media?.data?.attributes?.url}
                imgAlt={card?.media?.data?.attributes?.alternativeText || ''}
                className="items-center gap-5 md:py-10 shadow border bg-white {data.lang === "ja" ? "text-left":"text-center"}"
            />
        {/each}
    </section>

</div>

<Cta
title={data.cta?.title || ""}
description={data.cta?.description || ""}
btnText={data.cta?.Button?.name || ""}
btnLink={data.cta?.Button?.link || ""}
className="bg-sky-50 text-blue-950"
/>

<style type="postcss">
	.fluid-subtitle {
		font-size: clamp(0.9rem, 1.25vw, 2.5rem);
	}

	.gradient {
		background-color: #c799ff;
		background-image: radial-gradient(at 91% 92%, hsla(0, 0%, 100%, 1) 0px, transparent 50%),
			radial-gradient(at 19% 100%, hsla(0, 0%, 100%, 1) 0px, transparent 50%),
			radial-gradient(at 60% 58%, hsla(271, 75%, 70%, 1) 0px, transparent 50%),
			radial-gradient(at 98% 44%, hsla(172, 95%, 72%, 1) 0px, transparent 50%),
			radial-gradient(at 32% 81%, hsla(206, 86%, 79%, 1) 0px, transparent 50%),
			radial-gradient(at 80% 88%, hsla(160, 62%, 75%, 1) 0px, transparent 50%),
			radial-gradient(at 22% 33%, hsla(297, 79%, 77%, 1) 0px, transparent 50%),
			radial-gradient(at 34% 14%, hsla(247, 83%, 79%, 1) 0px, transparent 50%),
			radial-gradient(at 91% 66%, hsla(236, 94%, 61%, 1) 0px, transparent 50%),
			radial-gradient(at 10% 74%, hsla(19, 69%, 70%, 1) 0px, transparent 50%);
	}
</style>
