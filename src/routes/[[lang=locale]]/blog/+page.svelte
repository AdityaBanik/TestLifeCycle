<script lang="ts">
	import BlogCard from '$lib/components/cards/BlogCard.svelte';
	import type { PageData } from './$types';
	import { goto } from '$app/navigation';

	export let data: PageData;

	$: totalPages = Array(data.totalPages).fill('');
	$: currentPage = data.currentPage || 1;

	function navigateToPage(pageNumber: any) {
        if (selectedCategories.length === 0) {
            goto(`/blog?page=${pageNumber}`);
        } else {
            goto(`/blog?page=${pageNumber}&category=${selectedCategories.join(',')}`);
        }
    }

	const categories = ['Engineering', 'Design', 'Marketing', 'Sales'];
	let selectedCategories:string[] = [];
	$: {
        const url = new URL(data.url);
        selectedCategories = url.searchParams.get('category')?.split(',') || [];
    }

	function toggleCategory(category: string) {
        const index = selectedCategories.indexOf(category);
        if (index === -1) {
            selectedCategories.push(category);
        } else {
            selectedCategories.splice(index, 1);
        }
        filterByCategory();
    }

	
	function filterByCategory() {
        if (selectedCategories.length === 0) {
            goto('/blog');
        } else {
            goto(`/blog?category=${selectedCategories.join(',')}`);
        }
    }
</script>

<section class="py-4 px-4 xl:container">
	<h1
		class="  text-base md:text-3xl mt-10 md:mt-15 p-4 font-bold border-l-blue-500 border-l-[6px] mb-10 drop-shadow-md"
	>
		{data.lang === 'ja' ? 'すべてのブログ' : 'All Blogs'}
	</h1>

	<div class="inline-flex items-center gap-4 flex-wrap">
		<span class="text-sm mr-4 font-medium">Categories :</span>
		{#each categories as category}
			<button
				on:click={() => toggleCategory(category)}
				class:selected={selectedCategories.includes(category)}
				class="border text-rose-500  font-medium  px-4 py-2  text-xs    uppercase  rounded-full  hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
				type="button"
			>
				{category}
			</button>
		{/each}
	</div>
</section>

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
			slug={data.lang === 'ja'
				? '/ja/post/' + blog.attributes?.slug
				: 'post/' + blog.attributes?.slug}
		/>
	{/each}
</section>

<section class="my-20 container">
	<div class="flex items-center justify-center gap-4">
		<button
			on:click={() => navigateToPage(currentPage - 1)}
			disabled={currentPage === 1}
			class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
			type="button"
		>
			Previous
		</button>
		<div class="flex items-center gap-2">
			{#each totalPages as _, index (index)}
				<a
					href="/blog?page={index + 1}"
					class="relative h-10 max-h-[40px] w-10 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
					class:active={currentPage === index + 1}
					type="button"
				>
					<span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
						{index + 1}
					</span>
				</a>
			{/each}
		</div>
		<button
			on:click={() => navigateToPage(currentPage + 1)}
			disabled={currentPage === totalPages.length}
			class="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none hover:bg-gray-900/10 active:bg-gray-900/20 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
			type="button"
		>
			Next
		</button>
	</div>
</section>

<style lang="postcss">
	.active {
		@apply text-white bg-gray-900;
	}

	.selected{
		@apply bg-rose-500 text-white border-rose-500;
	}
</style>
