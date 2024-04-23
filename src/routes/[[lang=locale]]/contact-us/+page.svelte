<script lang="ts">
	import { onMount } from 'svelte';
	import question1 from '$lib/assets/contactus.svg';

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://app.nimble.com/web-form/bundle.js';
		document.body.appendChild(script);
	});
</script>

<div class="">
	<section
		class="container md:container max-auto xl:flex-row lg:flex lg:justify-between lg:gap-9 mb-10"
	>
		<article
			class="lg:w-[60%] xl:w-[60%] prose prose-sm prose-h4:py-2 prose-h4:m-0 prose-p:mt-2 md:prose-p:text-lg md:prose-h4:py-3"
		>
			<h4>Contact our Support Team or make an appointment with our consultant</h4>
			<p>
				If you’re looking for the latest test lifecycle management tool, a TITAN expert can help
				guide you to the service you requiren.
			</p>

			<section class="flex justify-center items-center gap-20 flex-col lg:flex-row mb-20">
				<!-- Form Section -->
				<div class="lg:w-[500px] lg:ml-4 rounded-2xl border shadow-sm lg:mb-2">
					<div
						class="nimble-form rounded-2xl"
						data-form-id="662731738f6fb0b941254724"
						data-company-id="5b261c76cef070b143c79181"
					></div>
				</div>
			</section>
		</article>
		<!-- Image Section -->
		<div class="w-[250px] lg:w-[500px] lg:mr-4 mb-5 lg:mt-32">
			<img src={question1} alt="Image2" />
		</div>
	</section>
	<section class="container flex justify-center items-center mb-10">
		<div class="flex flex-col gap-3 md:gap-5">
			<div class="location flex items-center gap-3">
				<i class="ri-map-pin-line ri-xl text-blue-500"></i>
				<span> 5890 Stoneridge Dr, Suite 216 Pleasanton CA 94588 USA +1 (415) 851-1284 </span>
			</div>
			<div class="email flex items-center gap-3">
				<i class="ri-mail-line ri-xl text-blue-500"></i>
				<span>info@12thwonder.com</span>
			</div>
			<div class="contact flex items-center gap-3">
				<i class="ri-phone-line ri-xl text-blue-500"></i>
				<span>+1 (415) 851-1284</span>
			</div>
			<!-- Form Section -->
			<!-- <div class="lg:w-[700px] lg:ml-4 rounded-2xl border shadow-sm lg:mb-5">
				<div
					class="nimble-form min-h-[630px] rounded-2xl"
					data-form-id="65d7bc143841fd0baf097895"
					data-company-id="5b261c76cef070b143c79181"
				></div>
			</div>  -->

			<!-- Image Section -->
			<!-- <div class="w-[250px] lg:w-[500px] lg:mr-4 mb-5 ">
				<img src={question1} alt="Image2" />
			</div>  -->
		</div>
	</section>
</div>

<style>
	i {
		font-size: clamp(1.1rem, 3.5vw, 2rem) !important;
	}

	p,
	span {
		font-size: clamp(0.7rem, 2.2vw, 1rem) !important;
	}

	h4 {
		font-size: clamp(0.75rem, 2.5vw, 2rem) !important;
	}

	.table-shadow {
		box-shadow:
			rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
			rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	}
</style>
