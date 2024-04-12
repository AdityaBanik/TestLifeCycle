<script lang="ts">
	export let title:string;
	export let description:string;
	export let imgSrc = '';
	export let imgAlt = '';
	export let className = '';
</script>

<article class="{className} flex flex-col gap-2 p-4 md:p-6 border rounded-lg md:rounded-2xl max-w-80 hover:bg-slate-50 transition-colors">
	<img class="md:w-24 w-12 " src={imgSrc} alt={imgAlt} />
	<h3 class="font-medium text-xs md:text-base">{title}</h3>
	<p class="fluid-description font-normal">{description}</p>
</article>


<style>
    .fluid-description{
        font-size: clamp(0.6rem, 1.5vw, 0.875rem);
    }
</style>