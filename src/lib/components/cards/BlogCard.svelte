<script lang="ts">
	export let title: string;
	export let date: string;
	export let description: string;
	export let image: string;
	export let imageAlt: string;
	import bgimage from '$lib/assets/titanLogo.jpg';
	export let slug: string = '#';
</script>

<a href={slug}>
	<article class="flex flex-col h-full shadow-sm rounded-md cursor-pointer group blog">
		<img src={image} alt={imageAlt} class="w-full h-[15em] border-b rounded-t-md bg-slate-300" />
		<div class="card-content p-6 flex flex-col gap-2 pb-6">
			<div class="flex justify-between items-center">
				<div class="flex gap-2 items-center -translate-x-4">
					<img src={bgimage} alt={imageAlt} class="w-12 rounded-full" />
					<div>
						<p class="text-xs">TITAN</p>
						<p class="text-xs">{date}</p>
					</div>
				</div>
			</div>
			<h2 class="text-base font-bold group-hover:text-blue-500">{title}</h2>
			<p class="text-sm">{description}...</p>
		</div>
	</article>
</a>

<style>
	.blog {
		box-shadow:
			rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
			rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
	}
</style>
