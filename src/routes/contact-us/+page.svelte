<script lang="ts">
	import { onMount } from 'svelte';

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://app.nimble.com/web-form/bundle.js';
		document.body.appendChild(script);
	});
</script>

<div class="backImg">
	<section
		class="container  prose prose-sm prose-h4:py-2 prose-h4:m-0 prose-p:mt-8 md:container max-auto md:prose-p:text-lg md:prose-h4:py-3 xl:flex-row lg:flex lg:justify-between lg:gap-9"
	>
		<article class="lg:w-[60%] xl:w-[60%]">
			<h4>Contact our Support Team or make an appointment with our consultant</h4>

			<p>
				If you’re looking for the latest test lifecycle management tool, a TITAN expert can help
				guide you to the service you requiren.
			</p>

			<section class="flex flex-col gap-3 py-4 md:gap-5">
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
			</section>
		</article>
		<div
			class="nimble-form rounded-md bg-white shadow-md lg:w-[40%] xl:w-[40%]"
			data-form-id="65d7bc143841fd0baf097895"
			data-company-id="5b261c76cef070b143c79181"
		></div>
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

	.backImg {
		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url('https://static.wixstatic.com/media/454d4b_c9b32a84459b47c293ce262ae0bf71df~mv2.jpg/v1/fill/w_429,h_1234,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/454d4b_c9b32a84459b47c293ce262ae0bf71df~mv2.jpg');
	}
</style>
