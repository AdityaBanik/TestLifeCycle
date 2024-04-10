<script lang="ts">
	import { resolveRichText } from '$lib';
	import { onMount } from 'svelte';

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://app.nimble.com/web-form/bundle.js';
		
		document.body.appendChild(script);
	});
</script>


	<div class="backImg">
		<section class="container  flex flex-col py-10  gap-12 lg:flex-row xl:flex-row lg:px-4 xl:px-4"
		>
			<article class="xl:w-[50%] lg:w-[50%] text-justify prose  prose-sm prose-h2:m-0 prose-h1:m-0 prose-h1:text-blue-500 prose-p:mt-4  md:prose-md  xl:prose-xl">
				<h1>Get a demo</h1>
				<h2>Seeing is Believing</h2>

				<p>
					For years parents have espoused the health benefits of eating garlic bread with cheese to
					their children, with the food earning such an iconic status in our culture that kids will
					often dress up as warm, cheesy loaf for Halloween.
				</p>
				<ol>
					<li>
						But a recent study shows that the celebrated appetizer may be linked to a series of
						rabies cases
					</li>
					<li>springing up around the country.</li>
				</ol>
			</article>
			<div
				class="nimble-form xl:w-[50%] lg:w-[50%] shadow-lg rounded-md"
				data-form-id="65d7bc143841fd0baf097895"
				data-company-id="5b261c76cef070b143c79181"
			></div>
		</section>
	</div>


<style>
	.backImg {

		background-position: center;
		background-size: cover;
		background-repeat: no-repeat;
		background-image: url('https://static.wixstatic.com/media/454d4b_c9b32a84459b47c293ce262ae0bf71df~mv2.jpg/v1/fill/w_429,h_1234,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/454d4b_c9b32a84459b47c293ce262ae0bf71df~mv2.jpg');
	
	}


</style>
