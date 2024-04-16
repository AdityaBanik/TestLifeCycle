<script lang="ts">
	import Accordian from '../accordian/Accordian.svelte';
	import AccordianItem from '../accordian/AccordianItem.svelte';
	import { fade } from 'svelte/transition';

	export let items: any[] = [];

	export let title: string = '';
	export let alignRight: boolean = false;

	let currentAlt = items?.[0]?.media?.data?.attributes?.alternativeText;
	let currentImage = items?.[0]?.media?.data?.attributes?.url;
</script>

<section class="py-5 md:py-12">
	<div class="flex items-center gap-10" class:flex-row-reverse={alignRight}>
		<div
			class="w-full lg:h-[520px] lg:w-1/2 flex flex-col gap-5 md:gap-16 {alignRight ? 'end' : ''}"
		>
			<h2 class="text-xl font-bold max-w-lg lg:text-3xl">
				{@html title}
			</h2>
			<Accordian>
				{#each items || [] as item}
					<AccordianItem
						keepOpen={true}
						className="text-base tracking-wide  p-4   rounded-t-xl transition-colors {alignRight
							? 'text-left md:text-right'
							: 'text-left '} "
						selected="bg-gray-100 font-semibold {alignRight
							? 'text-violet-400 '
							: 'text-blue-500 '}"
						onClick={() => {
							currentImage = item?.media?.data?.attributes?.url;

							currentAlt = item?.media?.data?.attributes?.alternativeText;
						}}
					>
						<svelte:fragment slot="title">{item?.title}</svelte:fragment>
						<article
							class=" bg-gray-100 rounded-b-xl px-9 pb-6 flex flex-col gap-10 items-center lg:items-start"
						>
							<p class="text-sm">{item?.description}</p>
							<img
								src={item?.media?.data?.attributes?.url}
								alt={item?.media?.data?.attributes?.alternativeText}
								class="w-[80%] shadow-lg lg:hidden rounded-lg border"
							/>
						</article>
					</AccordianItem>
				{/each}
			</Accordian>
		</div>
		{#key currentAlt}
			<div class="w-1/2 hidden lg:block shadow-lg rounded-xl" in:fade>
				<img src={currentImage} alt={currentAlt} class="w-full" />
			</div>
		{/key}
	</div>
</section>

<style lang="postcss">
	.end {
		@apply lg:text-right lg:items-end;
	}
</style>
