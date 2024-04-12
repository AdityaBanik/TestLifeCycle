<script context="module" lang="ts">
	import '../app.css';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/light.css';
	import 'remixicon/fonts/remixicon.css';
</script>

<script lang="ts">
	import type { LayoutData } from './$types';

	import logo from '$lib/assets/titanLogo.svg';
	import Button from '$lib/components/buttons/Button.svelte';
	import tippy from 'tippy.js';

	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import Accordian from '$lib/components/accordian/Accordian.svelte';
	import AccordianItem from '$lib/components/accordian/AccordianItem.svelte';
	import { fly } from 'svelte/transition';

	let isOpen: boolean;

	function closeSidebar() {
		isOpen = false;
	}

	//ToDo improve focs
	function dropdown(element: HTMLElement, id: string) {
		const contentElement = document.getElementById(id);
		element?.addEventListener('click', (e) => {
			console.log('hello');
			if (e.target && (e.target as HTMLElement).tagName === 'A') {
				
			}
		});
		const tooltip = tippy(element, {
			arrow: false,
			content: contentElement?.innerHTML,
			placement: 'bottom',
			interactive: true,
			maxWidth: 1200,
			allowHTML: true,
			theme: 'light',
			offset: [0, 28],
			trigger: 'click'
		});
		return {
			destroy() {
				tooltip.destroy();
			}
		};
	}

	export let data: LayoutData;
</script>

<header class="flex justify-between items-center py-4 container">
	<section class="flex items-center md:gap-20 xl:gap-32">
		<a href="/">
			<img src={logo} alt="Titan Logo" class="logo" />
		</a>
		<nav class="gap-8 hidden lg:flex items-center">
			<div>
				<a
					href="/"
					class="fluid-font capitalize hover:bg-blue-50 px-2 py-1 rounded-lg cursor-pointer">home</a
				>
			</div>
			{#each Object.entries(data.navLinks || []) as [key, value], index}
				<div>
					<button use:dropdown={key} class="capitalize fluid-font"> {key} </button>
					<div id={key} class="hidden">
						<section class="grid grid-cols-2 gap-x-28 gap-y-6 p-6">
							{#each value || [] as links}
								<a href={`/${key.split(' ').join('-')}/` + links?.slug} class="link">
									{links?.name}
								</a>
							{/each}
						</section>
					</div>
				</div>
				{#if index === 1}
					<div>
						<button use:dropdown={'company'} class="capitalize fluid-font"> company </button>

						<div id="company" class="hidden">
							<section class="grid grid-cols-2 gap-x-28 gap-y-6 p-6">
								<a class="link" href="/about-us">about us</a>
								<a class="link" href="/blog">blog</a>
								<a class="link" href="/faq">faqs</a>
								<a class="link" href="/resource-center">resource center</a>
								<a class="link" href="/why-choose-us">why choose us?</a>
								<a class="link" href="/news-and-events">news and events</a>
							</section>
						</div>
					</div>
				{/if}
			{/each}
		</nav>
	</section>

	<section class="flex items-center gap-5">
		<Button text="Request Demo" className="text-sm" />

		<button
			class="lg:hidden px-2 p-1 border rounded-md hover:bg-slate-200 active:bg-slate-50"
			on:click={() => (isOpen = true)}
		>
			<i class="ri-menu-line"></i>
		</button>
	</section>
</header>

{#key data.url}
	<main
		class="min-h-screen"
		in:fly={{ x: -200, duration: 300, delay: 300 }}
		out:fly={{ x: 200, duration: 300 }}
	>
		<slot />
	</main>
{/key}

<Sidebar {isOpen} on:closed={closeSidebar}>
	<nav class="container">
		<Accordian>
			{#each Object.entries(data.navLinks || []) as [key, value]}
				<AccordianItem className="text-start capitalize py-2 flex gap-4" selected="font-semibold">
					<svelte:fragment slot="title">{key}</svelte:fragment>
					<article class="flex flex-col text-xs pl-12 pb-3 pt-1 gap-3">
						{#each value || [] as links}
							<a href={`/${key.split(' ').join('-')}/` + links?.slug} class="accordian-links"
								>{links?.name}</a
							>
						{/each}
					</article>
				</AccordianItem>
			{/each}

			<AccordianItem className="text-start capitalize py-2 flex gap-4" selected="font-semibold">
				<svelte:fragment slot="title">company</svelte:fragment>
				<article class="flex flex-col text-xs pl-12 pb-3 pt-1 gap-3">
					<a class="accordian-link" href="/about-us">about us</a>
					<a class="accordian-link" href="/blog">blog</a>
					<a class="accordian-link" href="/faq">faqs</a>
					<a class="accordian-link" href="/resource-center">resource center</a>
					<a class="accordian-link" href="/why-choose-us">why choose us?</a>
					<a class="accordian-link" href="/news-and-events">news and events</a>
				</article>
			</AccordianItem>
		</Accordian>
	</nav>
</Sidebar>

<style type="postcss">
	nav div button {
		@apply capitalize hover:bg-blue-50 px-2 py-1 rounded-lg cursor-pointer;
	}

	.link {
		@apply capitalize hover:text-blue-500 font-medium text-sm cursor-pointer;
	}

	.accordian-links {
		@apply capitalize hover:text-blue-500 hover:font-medium text-xs cursor-pointer;
	}
	.logo {
		width: clamp(100px, 10vw, 200px);
	}
</style>
