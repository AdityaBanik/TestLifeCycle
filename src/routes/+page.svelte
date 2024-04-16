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
	import HomeFeatures from '$lib/components/sections/HomeFeatures.svelte';

	let animation = false;

	onMount(() => {
		if (window.matchMedia('(min-width: 768px)').matches) {
			animation = true;
		}
	});

	const items = [
		{
			title: 'Requirement Analysis',
			description:
				'Trace, record, analyze, and prioritize the requirements to successfully fulfill all product testing goals.',
			image: 'https://static.wixstatic.com/media/43794f_bbc6cbbe424c4c8ebe4ac6b519cbd45d~mv2.png'
		},
		{
			title: 'Verification Planning',
			description:
				"Easily verify your product's performance as per the requirements defined by engineers during the design phase. You can also easily track progress while the test is going on.",
			image: 'https://static.wixstatic.com/media/43794f_cca6ab06d6a8420aacec8e823436c90d~mv2.png'
		},
		{
			title: 'Maximum Test Coverage',
			description:
				'Test coverage improves the quality of test cases while you create and reuse the same test cases several times. All you have to do is change the testing parameters with different values.',
			image: 'https://static.wixstatic.com/media/43794f_1e87966fdfbc4982b002bcb988717bab~mv2.png'
		},
		{
			title: 'Traceability Matrix',
			description:
				'The TITAN traceability matrix helps keep track of every level of testing, enables 100% test coverage for all business and functional requirements, updates all requirements status in real-time, and analyzes the impact of requirement changes.',
			image: 'https://static.wixstatic.com/media/43794f_cca6ab06d6a8420aacec8e823436c90d~mv2.png'
		}
	];
</script>

{#key animation}
	<section
		class="text-center   pt-10 container flex flex-col items-center justify-center gap-4 md:gap-8"
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

<section class="container py-10">
	<HomeFeatures
		title="<span class='highlight'>All-in-one</span> verification hub to optimize your product testing process"
		{items}
	/>
	<HomeFeatures 
		alignRight={true}
		title="<span class='highlight'>All-in-one</span> verification hub to optimize your product testing process"
		{items}
	/>
</section>


<Cta
	title="REMOVE MUNDANE TESTING ASPECTS TO FOCUS ON WHAT MATTERS THE MOST WITH TITAN
"
	btnText="Request Personalized Demo !"
	className="bg-sky-50 text-blue-950   "
/>

<section class=" py-10 md:py-20 container flex items-center">
	<div class=" flex flex-col gap-10">
		<div>
			<h2 class=" border-orange-400 text-xl md:text-3xl text-gray-600 border-l-4 pl-5 font-semibold mb-2">
				<span class="text-orange-400 font-bold">TITAN</span> is accelerating digital transformation
			</h2>
			<p class="text-gray-600 text-sm md:text-base lg:text-lg max-w-xl font-semibold pt-3 pl-6">
				It's all about creating engaging experiences, fostering collaboration, and building a
				happier workplace
			</p>
		</div>

		<img src={img1} alt="img1" class="w-full lg:hidden" />

		<div class="grid grid-cols-3 md:grid-cols-2 gap-2 md:gap-4 pt-5">
			<article class="flex fluid-font items-center">
				<img class="w-10 md:w-24" src={icon1} alt="Icon" />
				<p>
					<span class=" text-orange-400 font-bold block text-xs md:text-2xl">25%</span>Turnaround
					time reduced.
				</p>
			</article>
			<article class="flex fluid-font items-center">
				<img class="w-10 md:w-24" src={icon2} alt="Icon" />
				<p>
					<span class="text-orange-400 font-bold block text-xs md:text-2xl">70%</span> Increase in collaboration
					productivity
				</p>
			</article>
			<article class="flex fluid-font items-center">
				<img class="w-10 md:w-24" src={icon6} alt="Icon" />
				<p>
					<span class="text-orange-400 font-bold block text-xs md:text-2xl">50%</span> Time saved to
					search & reuse information
				</p>
			</article>
			<article class="flex fluid-font items-center">
				<img class="w-10 md:w-24" src={icon4} alt="Icon" />
				<p>
					<span class="text-orange-400 font-bold block text-xs md:text-2xl">30%</span> Decrease in quality
					issues
				</p>
			</article>
			<article class="flex fluid-font items-center">
				<img class="w-10 md:w-24" src={icon5} alt="Icon" />
				<p>
					<span class="text-orange-400 font-bold block text-xs md:text-2xl">20%</span> Increase in operational
					efficiency
				</p>
			</article>
			<article class="flex fluid-font items-center">
				<img class="w-10 md:w-24" src={icon3} alt="Icon" />
				<p>
					<span class=" text-orange-400 font-bold block text-xs md:text-2xl">40%</span> Reduction in
					error rate
				</p>
			</article>
		</div>
	</div>

	<img src={img1} alt="dimg" class="hidden lg:block w-[55%]" />
</section>

<style>
	.fluid-title {
		font-size: clamp(1.5rem, 4.8vw, 5rem) !important;
	}
	.fluid-subtitle {
		font-size: clamp(.65rem, 1.8vw, 2rem) !important;
	}
</style>
