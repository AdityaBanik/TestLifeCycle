<script lang="ts">
	import { serverUrl } from '$lib';

	import BlogCard from '$lib/components/cards/BlogCard.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	export let blogs: any[] ;
    

</script>


<h1 class="container text-3xl font-bold mt-10 md:mt-15" >All Blogs</h1>
<section class="container grid md:grid-cols-2 items-stretch lg:grid-cols-3 2xl:grid-cols-4 gap-10 py-10">
    
	{#each data.blogs|| [] as blog}
		<BlogCard
			title={blog.attributes?.title || ''}
			date={blog.attributes?.date || ''}
			description={blog.attributes?.description || ''}
			image={blog.attributes?.coverImage?.data?.attributes?.url || ''}
			imageAlt={blog.attributes?.coverImage?.data?.attributes?.alternativeText || ''}
			
		/>
	{/each}
</section>