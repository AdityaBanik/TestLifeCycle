<script lang="ts">
	import { resolveRichText } from '$lib';
	import { onMount } from 'svelte';

	onMount(() => {
		const script = document.createElement('script');
		script.src = 'https://app.nimble.com/web-form/bundle.js';

		document.body.appendChild(script);
	});
</script>

<div class="">
	<section
		class="container flex flex-col py-10 justify-between items-center gap-12 lg:flex-row lg:px-4"
	>
		<article
			class="  text-justify prose prose-sm prose-h2:m-0 prose-h1:m-0 prose-h1:text-blue-500 prose-p:mt-4 xl:prose-lg 3xl:prose-xl"
		>
			<h1>Get a demo</h1>
			<h2>Seeing is Believing</h2>

			<p>
				For years parents have espoused the health benefits of eating garlic bread with cheese to
				their children, with the food earning such an iconic status in our culture that kids will
				often dress up as warm, cheesy loaf for Halloween.
			</p>
			<ol>
				<li>
					But a recent study shows that the celebrated appetizer may be linked to a series of rabies
					cases
				</li>
				<li>springing up around the country.</li>
			</ol>
		</article>
		<div
			class="nimble-form min-h-[680px] min-w-[50%] shadow-md rounded-2xl"
			data-form-id="65d7bc143841fd0baf097895"
			data-company-id="5b261c76cef070b143c79181"
		></div>
	</section>
</div>

<style>
	.backImg {
		background-position: center;
		background-size: contain;
		background-repeat: no-repeat;
		background-image: url($lib/assets/backgroundImage.webp);
	}
	.table-shadow {
		box-shadow:
			rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
			rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	}
</style>
