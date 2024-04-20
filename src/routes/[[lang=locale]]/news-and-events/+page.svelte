<script lang="ts">
	import { serverUrl } from '$lib';

	import BlogCard from '$lib/components/cards/BlogCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	
    

</script>


<h1 class="container text-center text-3xl font-bold mt-10 md:mt-15">Latest news</h1>
<section class=" container grid max-w-4xl md:grid-cols-2   gap-10 py-10">
    
	{#each data.blogs|| [] as blog}
		<BlogCard
			title={blog.attributes?.title || ''}
			date={blog.attributes?.date || ''}
			description={blog.attributes?.description || ''}
			image={blog.attributes?.coverImage?.data?.attributes?.url || ''}
			imageAlt={blog.attributes?.coverImage?.data?.attributes?.alternativeText || ''}
			slug={'/post/'+ blog.attributes?.slug || ''}
		/>
	{/each}
</section>