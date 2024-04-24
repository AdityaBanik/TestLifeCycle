<script lang="ts">
	import { serverUrl } from '$lib';

	import BlogCard from '$lib/components/cards/BlogCard.svelte';
	import { onMount } from 'svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="py-4 px-4 xl:container">
	<h1
		class="  text-base md:text-3xl mt-10 md:mt-15 p-4 font-bold border-l-blue-500 border-l-[6px] mb-6 drop-shadow-md"
	>
		All Blogs
	</h1>
</div>
<section
	class="px-4 xl:container grid md:grid-cols-2 items-stretch lg:grid-cols-3 2xl:grid-cols-4 gap-10 py-10"
>
	{#each data.blogs || [] as blog}
		<BlogCard
			title={blog.attributes?.title || ''}
			date={blog.attributes?.date || ''}
			description={blog.attributes?.description || ''}
			image={blog.attributes?.coverImage?.data?.attributes?.url || ''}
			imageAlt={blog.attributes?.coverImage?.data?.attributes?.alternativeText || ''}
			slug={'/ja/post/' + blog.attributes?.slug || ''}
		/>
	{/each}
</section>
