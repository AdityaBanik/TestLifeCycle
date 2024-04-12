<script lang="ts">
	import Accordian from '$lib/components/accordian/Accordian.svelte';
	import AccordianItem from '$lib/components/accordian/AccordianItem.svelte';
	import TitanHome from '$lib/components/animation/TitanHome.svelte';
	import IconCard from '$lib/components/cards/IconCard.svelte';
	import Button from '$lib/components/buttons/Button.svelte';
	export let btnText: string = 'Learn more';
</script>

<section class="text-center lg:py-10 p-3 md:px-14 md:py-10">
	<div class="container flex flex-col items-center gap-4 md:gap-7">
		<div>
	
				<h1 class=" leading-normal text-lg   font-bold">
					Test Lifecycle Simplified
				</h1>
	
			<h2 class=" font-bold">The adaptable platform that lets you validate products,<strong>your way!</strong></h2>
		</div>

		<Button text={btnText} />
	</div>
</section>
<section class=" relative z-20 bg-white">
	<div class="container pt-10 md:pt-20">
		<h2 class="font-bold line-height md:text-2xl lg:text-4xl mb-2 md:mb-4 max-w-sm md:max-w-xl">
			Where Gear Management Meets Effortless Excellence.
		</h2>
		<p class="max-w-sm md:max-w-2xl text-xs md:text-base">
			For engineers and management teams, our valued customers, TITAN's Equipment Management feature
			offers the following benefits:
		</p>
	</div>
</section>

<TitanHome />

<style>


.fluid-title{

}
h1 {
   font-size: clamp(0.6rem,2.5vw,2rem) !important;
}
</style>
