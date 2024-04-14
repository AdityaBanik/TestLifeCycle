<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';
	import { onMount } from 'svelte';

	import TitanHome from '$lib/components/animation/TitanHome.svelte';
	import Button from '$lib/components/buttons/Button.svelte';
	import Cta from '$lib/components/shared/CTA.svelte';

	import icon1 from '$lib/assets/Home/icon 1.png';
	import icon2 from '$lib/assets/Home/icon 2.png';
	import icon3 from '$lib/assets/Home/icon 3.png';
	import icon4 from '$lib/assets/Home/icon 4.png';
	import icon5 from '$lib/assets/Home/icon 5.png';
	import icon6 from '$lib/assets/Home/icon 6.png';
	import img1 from '$lib/assets/Home/pc.png';

	let animation = false;

	onMount(() => {
		if (window.matchMedia('(min-width: 768px)').matches) {
			animation = true;
		}
	});
</script>

{#key animation}
	<section
		class="text-center lg:pt-10 md:t-10 container flex flex-col items-center justify-center gap-4 md:gap-8"
	>
		<div>
			<h1
				in:fly|global={{ y: 200, delay: 500, easing: backOut }}
				class="fluid-title leading-normal text-lg font-bold"
			>
				Test Lifecycle Simplified
			</h1>

			<h2 class="fluid-subtitle font-semibold" in:fly|global={{ y: 100, delay: 900 }}>
				The adaptable platform that lets you validate products,<br />
				<strong class="font-bold">YOUR WAY!</strong>
			</h2>
		</div>
		<div in:fade|global={{ delay: 1100, easing: backOut }}>
			<Button text="Learn more" className="lg:py-3" />
		</div>
	</section>
	<div in:fly|global={{ y: 200, delay: 1100, easing: backOut }}>
		<TitanHome />
	</div>
{/key}

<Cta
	title="REMOVE MUNDANE TESTING ASPECTS TO FOCUS ON WHAT MATTERS THE MOST WITH TITAN
"
	btnText="Request Personalized Demo !"
	className="bg-black text-white mt-10 md:mt-16 "
/>

<style>
	.fluid-title {
		font-size: clamp(1.2rem, 4.8vw, 5rem) !important;
	}
	.fluid-subtitle {
		font-size: clamp(0.5rem, 1.8vw, 2rem) !important;
	}
</style>
