<script lang="ts">
	import IconCard from '$lib/components/cards/IconCard.svelte';
	import Cta from '$lib/components/shared/CTA.svelte';
	import type { PageData } from './$types';
	import bgimage from '$lib/assets/white-titan-logo.webp';
	import bgimage1 from '$lib/assets/gradient.webp';
	import iconImage from '$lib/assets/1.webp';
	import iconImage1 from '$lib/assets/2.webp';
	import iconImage2 from '$lib/assets/3.webp';
</script>

<main
	class="min-h-screen flex flex-col justify-center items-center"
	style="background-image: url({bgimage1});"
>
	<section class="mb-4 lg:text-center">
		<img src={bgimage} alt="Image1" class="w-64 h-64 mx-auto mb-2 rounded-full" />
		<div class="lg:w-[50%] sm:p-5  mx-auto">
			<h2 class="text-lg text-white mb-10 pr-10 fluid-subtitle ">
				A streamlined, robust, and transparent testing process can save your enterprise 1000s of
				hours. TITAN does this and more, without the need for expensive testing infrastructure
				upgrades.
			</h2>
		</div>
	</section>

	<section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 p-10">
		<!-- Card 1 -->
		<div class="bg-white p-6 rounded-lg shadow-md">
			<div class="flex items-center justify-center mb-4">
				<!-- Center align the icon image -->
				<img src={iconImage} alt="Icon" class="w-12 h-12" />
				<!-- Icon image -->
			</div>
			<h2 class="text-md text-center font-semibold text-gray-800 mb-2">SEAMLESS INTEGRATION</h2>
			<p class="text-gray-600 text-center fluid-subtitle">
				TITAN can be seamlessly integrated with your organization’s existing database infrastructure
				as well as project management and simulation tools
			</p>
		</div>

		<!-- Card 2 -->
		<div class="bg-white p-6 rounded-lg shadow-md">
			<div class="flex items-center justify-center mb-4">
				<!-- Center align the icon image -->
				<img src={iconImage1} alt="Icon" class="w-12 h-12" />
				<!-- Icon image -->
			</div>
			<h2 class="text-md text-center font-semibold text-gray-800 mb-2">EXTREMELY CONFIGURABLE</h2>
			<p class="text-gray-600 text-center fluid-subtitle">
				TITAN can be Configured to match your organization’s unique and specific requirements to
				synergize your organization’s processes, testing activities, and data management
			</p>
		</div>

		<!-- Card 3 -->
		<div class="bg-white p-6 rounded-lg shadow-md">
			<div class="flex items-center justify-center mb-4">
				<img src={iconImage2} alt="Icon" class="w-12 h-12" />
			</div>
			<h2 class="text-md text-center font-semibold text-gray-800 mb-2">24 x 7 SUPPORT</h2>
			<p class="text-gray-600 text-center fluid-subtitle">
				TITAN’s dedicated support team is available 24 X 7 to address your issues with a guaranteed
				turnaround time of fewer than 48 hours.
			</p>
		</div>
	</section>
</main>

<Cta
	title="Know more about TITAN"
	description="Experience live with one of our experts"
	btnText="Request Personalized Demo !"
	className="bg-sky-50 text-blue-950  "
/>

<style type="postcss">
	.fluid-subtitle {
		font-size: clamp(0.85rem, 1.125vw, 1.5rem);
	}
</style>
