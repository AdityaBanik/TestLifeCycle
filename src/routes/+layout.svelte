<script context="module" lang="ts">
	import '../app.css';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/light.css';
	import 'remixicon/fonts/remixicon.css';
</script>

<script lang="ts">
	import type { LayoutData } from './$types';

	import logo from '$lib/assets/titanLogo.svg';
	import logo12thwonder from '$lib/assets/Home/12thwonderlogo.png';

	import Button from '$lib/components/buttons/Button.svelte';
	import tippy from 'tippy.js';

	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import Accordian from '$lib/components/accordian/Accordian.svelte';
	import AccordianItem from '$lib/components/accordian/AccordianItem.svelte';
	import { fade, fly } from 'svelte/transition';
	export let data: LayoutData;

	let isOpen: boolean;
	let selectedLocale: string = data.lang || 'en';

	let form: HTMLFormElement;
	function closeSidebar() {
		isOpen = false;
	}

	function changeLocale(event: Event) {
		form.submit();
	}

	//ToDo improve focs
	function dropdown(element: HTMLElement, id: string) {
		const contentElement = document.getElementById(id);

		const tooltip = tippy(element, {
			arrow: false,
			content: contentElement?.innerHTML,
			placement: 'bottom',
			interactive: true,
			maxWidth: 1200,
			allowHTML: true,
			theme: 'light',
			offset: [0, 28],
			appendTo: () => document.body,

			onShown(instance) {
				const content = instance.popper.querySelector('.tippy-content');
				const clickHandler = (e: any) => {
					if (e.target && (e.target as HTMLElement).tagName === 'A') {
						tooltip.hide();
						content?.removeEventListener('click', clickHandler);
					}
				};
				content?.addEventListener('click', clickHandler);
			}
		});

		return {
			destroy() {
				tooltip.destroy();
			}
		};
	}

	
</script>

<header class="flex justify-between items-center py-4 px-4 xl:container">
	<section class="flex items-center gap-16 ">
		<a href="/">
			<img src={logo} alt="Titan Logo" class="logo" />
		</a>
		<nav class="gap-6 hidden lg:flex items-center">
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
		<form bind:this={form} method="POST" action="/locale" class="flex" >
			<select name="locale" bind:value={selectedLocale}  on:change={changeLocale} class=" fluid-font py-0 md:py-1 rounded-full " >
				<option value="en">EN</option>
				<option value="ja">JA</option>
			</select>
		</form>

		<Button text="Request Demo" className="text-sm" link="/request-demo" />

		<button
			class="lg:hidden px-2 p-1 border rounded-md hover:bg-slate-200 active:bg-slate-50"
			on:click={() => (isOpen = true)}
		>
			<i class="ri-menu-line"></i>
		</button>
	</section>
</header>

{#key data.url}
	<main in:fly={{ x: -300, duration: 300, delay: 300 }} out:fly={{ x: 300, duration: 300 }}>
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

<footer class="min-h-96 bg-[#253858] py-10 md:py-20 text-xs md:text-sm 2xl:text-base">
	<div class="container">
		<section class="grid grid-cols-2 gap-y-8 gap-x-5 md:grid-cols-3 lg:grid-cols-4 capitalize">
			<article>
				<h4 class="text-amber-600 font-bold text-base 2xl:text-lg tracking-wider mb-3">company</h4>
				<ul class="flex flex-col gap-3">
					<li><a href="/about-us">about us</a></li>
					<li><a href="/why-choose-us">why choose us?</a></li>
					<li><a href="/blog">blog</a></li>
					<li><a href="/faq">faqs</a></li>
					<li><a href="/resource-center">resource center</a></li>
					<li><a href="/contact-us">contact us</a></li>
					<li><a href="/news-and-events">news and events</a></li>
				</ul>
			</article>
			{#each Object.entries(data.navLinks || []) as [key, value], index}
				<article class:order-1={index === 0} class:order-2={index === 2}>
					<h4 class="text-amber-600 font-bold text-base 2xl:text-lg tracking-wider mb-3">{key}</h4>
					<ul class="flex flex-col gap-3">
						{#each value || [] as links}
							<li>
								<a href={`/${key.split(' ').join('-')}/` + links?.slug}>
									{links?.name}
								</a>
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</section>

		<div class=" text-white font-light mt-20">
			<div class="flex items-center gap-4">
				<i class="ri-phone-fill text-2xl text-amber-600"></i>
				<a href="tel:+1-415-851-1284">+1 (415) 851-1284</a>
			</div>
			<div class="flex items-center gap-4">
				<i class="ri-map-2-line text-2xl text-amber-600"></i>
				<p>5890 Stoneridge Dr, suite 216 | Pleasanton | CA 94588 United</p>
			</div>
		</div>

		<div class="flex justify-center items-center gap-10 mt-16">
			<span class="w-[400px] h-[1px] bg-white/70"></span>
			<a href="https://www.linkedin.com/products/12thwonder-titan"
				><i class="ri-linkedin-box-fill bg-white rounded-sm text-blue-500 text-4xl"></i></a
			>
			<span class="w-[400px] h-[1px] bg-white/70"></span>
		</div>

		<div class="flex flex-col gap-5 items-center md:flex-row justify-between mt-20">
			<p class="text-white font-light">&copy; 2021 12th Wonder. All rights reserved.</p>
			<a href="https://www.12thwonder.com" class="flex items-center">
				<img src={logo12thwonder} alt="12th Wonder Logo" class="w-24 pb-0.5" />
				A 12th Wonder Product
			</a>
		</div>
	</div>
</footer>

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

	footer a {
		@apply text-white/90 hover:text-orange-300  transition-colors  cursor-pointer;
	}
</style>
