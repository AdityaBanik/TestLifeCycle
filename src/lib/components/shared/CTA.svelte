<script lang="ts">
	import Button from '$lib/components/buttons/Button.svelte';
	export let btnText: string;
	export let title: string;
	export let className = 'bg-black text-white';
	export let description = '';
	export let BtnClass = '';
</script>

<section class="{className} text-center lg:py-10 p-6 md:px-14 md:py-10 ">
	<div class="container flex flex-col items-center gap-4 md:gap-7">
		<div>
			<h3 class="leading-normal">
				{title}
			</h3>
			<p>{description}</p>
		</div>
		<Button text={btnText} className={BtnClass} />
	</div>
</section>

<style type="postcss">
	h3 {
		font-size: clamp(1rem, 2.5vw, 2.5rem);
		font-family: 'Bebas Neue', sans-serif;
	}

	p {
		font-size: clamp(0.75rem, 1.5vw, 1rem);
		@apply italic;
	}
</style>
