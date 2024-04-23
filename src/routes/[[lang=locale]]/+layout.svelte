<script context="module" lang="ts">
	import '../../app.css';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/light.css';
	import 'remixicon/fonts/remixicon.css';
</script>

<script lang="ts">
	import type { LayoutData } from './$types';
	import { page } from '$app/stores';
	import logo from '$lib/assets/titanLogo.svg';
	import logo12thwonder from '$lib/assets/Home/12thwonderlogo.png';
	import Button from '$lib/components/buttons/Button.svelte';
	import tippy from 'tippy.js';
	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import Accordian from '$lib/components/accordian/Accordian.svelte';
	import AccordianItem from '$lib/components/accordian/AccordianItem.svelte';
	import { fly } from 'svelte/transition';
	import linkedin1 from '$lib/assets/linkedin-sqaure 1.webp';
	import twitter1 from '$lib/assets/twitter-square 1.webp';
	export let data: LayoutData;

	let isOpen: boolean;
	let selectedLocale: string = data.lang || '';

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
			hideOnClick: 'toggle',
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
	<section class="flex items-center gap-16">
		<a href="/">
			<img src={logo} alt="Titan Logo" class="logo" />
		</a>
		<nav class="gap-6 hidden lg:flex items-center">
			<div>
				<a
					class:highlight={$page.url.pathname === '/'}
					href={data.lang === 'ja' ? '/ja' : '/'}
					class="fluid-font capitalize hover:bg-blue-50 px-2 py-1 rounded-lg cursor-pointer"
				>
					{data.lang === 'ja' ? 'ホーム' : 'Home'}
				</a>
			</div>
			{#each data.navMenu || [] as navItem}
				<div>
					<button use:dropdown={navItem?.title || ''} class="capitalize fluid-font">
						{navItem?.title}
					</button>
					<div id={navItem?.title || ''} class="hidden">
						<section class="grid grid-cols-2 gap-x-28 gap-y-6 p-6">
							{#each navItem?.Links || [] as links}
								<a
									href={links?.link}
									class="link"
								>
									{links?.name}
								</a>
							{/each}
						</section>
					</div>
				</div>
			{/each}
		</nav>
	</section>

	<section class="flex items-center gap-5">
		<form bind:this={form} method="POST" action="/locale" class="flex form">
			<select
				name="locale"
				bind:value={selectedLocale}
				on:change={changeLocale}
				class=" fluid-font py-0 md:py-1 rounded-full focus:outline-2 focus:ring-1 focus:ring-blue-500 shadow-sm hover:shadow-md"
			>
				<option value="en">EN</option>
				<option value="ja">JA</option>
			</select>
		</form>

		<Button
			text={data.lang === 'ja' ? 'デモを依頼する' : 'Request Demo'}
			className="text-sm lg:px-6"

			link={data.lang === 'ja' ? '/ja/request-demo' : '/request-demo'}
		/>

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
		in:fly={{ x: -300, duration: 300, delay: 300 }}
		out:fly={{ x: 300, duration: 300 }}
		class:japanese-font={data.lang === 'ja'}
	>
		<slot />
	</main>
{/key}

<Sidebar {isOpen} on:closed={closeSidebar}>
	<nav class="container">
		<Accordian>
			<a href="/" on:click={closeSidebar} class="ml-8 capitalize text-md py-2 block pb-3">{data.lang === 'ja' ? 'ホーム' : 'Home'}</a>

			{#each data.navMenu || [] as navItem}
				<AccordianItem className="text-start capitalize py-2 flex gap-4" selected="font-semibold">
					<svelte:fragment slot="title">{navItem?.title}</svelte:fragment>
					<article class="flex flex-col text-xs pl-12 pb-3 pt-1 gap-3">
						{#each navItem?.Links || [] as links}
							<a href={links?.link} class="accordian-links" on:click={closeSidebar}>
								{links?.name}
							</a>
						{/each}
					</article>
				</AccordianItem>
			{/each}
		</Accordian>
	</nav>
	<div class="flex justify-end px-5 py-5">
		<form bind:this={form} method="POST" action="/locale" class="flex">
			<select
				name="locale"
				bind:value={selectedLocale}
				on:change={changeLocale}
				class=" fluid-font py-0 md:py-1 rounded-full"
			>
				<option value="en">EN</option>
				<option value="ja">JA</option>
			</select>
		</form>
	</div>
</Sidebar>

<footer class="min-h-96 bg-[#253858] py-10 md:py-20 text-xs md:text-sm 2xl:text-base">
	<div class="container">
		<section class="grid grid-cols-2 gap-y-8 gap-x-5 md:grid-cols-3 lg:grid-cols-4 capitalize">
			{#each data.navMenu || [] as navItem, index}
				<article
					class:order-3={index === 0}
					class:order-2={index === 1}
					class:order-4={index === 3}
				>
					<h4 class="text-amber-600 font-bold text-base 2xl:text-lg tracking-wider mb-3">
						{navItem?.title}
					</h4>
					<ul class="flex flex-col gap-3">
						{#each navItem?.Links || [] as links}
							<li>
								<a class:highlight={$page.url.pathname === links?.link} href={links?.link}>
									{links?.name}
								</a>
							</li>
						{/each}
					</ul>
				</article>
			{/each}
		</section>

		<div class=" text-white font-light mt-20 flex flex-col gap-5">
			<div class="flex items-center gap-4">
				<i class="ri-phone-fill text-3xl text-amber-600"></i>
				<a href="tel:+1-415-851-1284">+1 (415) 851-1284</a>
			</div>
			<div class="flex items-center gap-4">
				<i class="ri-map-2-line text-3xl text-amber-600"></i>
				<p>{data.lang === 'ja' ? '5890 ストーンリッジ ドクター、スイート 216|プレザントン | CA 94588 米国' : '5890 Stoneridge Dr, suite 216 | Pleasanton | CA 94588 United'} </p>
			</div>
			<div>
				<a href="mailto:info@12thwonder.com" class="flex items-center gap-4">
					<i class="ri-mail-line text-3xl text-amber-600"></i>
					info@12thwonder.com
				</a>
			</div>
		</div>

		<div class="flex justify-center items-center gap-4 mt-16">
			<span class="w-[400px] h-[1px] bg-white/70"></span>
			<a
				href="https://www.linkedin.com/products/12thwonder-titan"
				class="flex items-center text-base"
			>
				<!-- <i class="ri-linkedin-box-fill rounded-sm text-blue-500 text-5xl"></i> -->
				<img src={linkedin1} alt="LinkedIn Logo" class="w-10" />
			</a>
			<a href="https://twitter.com/TITANTLM" class="flex items-center text-base">
				<img src={twitter1} alt="twitter Logo" class="w-10" />
				<!-- <span>LinkedIn</span> -->
			</a>

			<span class="w-[400px] h-[1px] bg-white/70"></span>
		</div>

		<div class="flex flex-col gap-5 items-center md:flex-row justify-between mt-10 md:mt-20">
			<p class="text-white font-light"><i class="ri-copyright-line"></i> {data.lang === 'ja' ? '2021 12th Wonder、全著作権所有' : '2021 12th Wonder. All rights reserved.'}</p>
			
			<a href="https://www.12thwonder.com" class="flex items-center">
				<img src={logo12thwonder} alt="12th Wonder Logo" class="w-24 pb-0.5" />
				{data.lang === 'ja' ? '12 Th wandā no shōhin' : 'A product by 12th Wonder'}
			</a>
		</div>
	</div>
</footer>

<style type="postcss">
	.japanese-font {
		font-family: 'Noto Sans JP', sans-serif;
	}

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

	@media only screen and (max-width: 600px) {
		.form {
			display: none;
		}
	}
</style>
