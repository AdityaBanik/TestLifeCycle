<script lang="ts">

	import TitanHome from '$lib/components/animation/TitanHome.svelte';
	
	import Button from '$lib/components/buttons/Button.svelte';
	import Cta from '$lib/components/shared/CTA.svelte';
	export let btnText: string = 'Learn more';
</script>

<section class="text-center lg:pt-10 p-3 md:px-14 md:t-10">
	<div class="container flex flex-col items-center gap-4 md:gap-7">
		<div>
			<h1 class="fluid-title leading-normal text-lg font-bold">Test Lifecycle Simplified</h1>

			<h2 class="fluid-subtitle font-semibold">
				The adaptable platform that lets you validate products,<br /><strong>YOUR WAY!</strong>
			</h2>
		</div>

		<Button text={btnText} />
	</div>
</section>

<TitanHome />

<Cta title="REMOVE MUNDANE TESTING ASPECTS TO FOCUS ON WHAT MATTERS THE MOST WITH TITAN
" btnText="Request Personalized Demo !" className="bg-black text-white mt-10 md:mt-16 " />


<style>
	.fluid-title {
		font-size: clamp(1.2rem, 4.8vw, 5rem) !important;
	}
	.fluid-subtitle {
		font-size: clamp(0.5rem, 1.8vw, 4rem) !important;
	}
</style>
