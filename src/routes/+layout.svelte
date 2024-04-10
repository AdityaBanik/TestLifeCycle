<script context="module" lang="ts">
	import '../app.css';
	import 'tippy.js/dist/tippy.css';
	import 'tippy.js/themes/light.css';
	import 'remixicon/fonts/remixicon.css';
</script>

<script lang="ts">
	import logo from '$lib/assets/titanLogo.svg';
	import Button from '$lib/components/buttons/Button.svelte';
	import tippy from 'tippy.js';
	import Page from './+page.svelte';

	import Sidebar from '$lib/components/sidebar/Sidebar.svelte';
	import Accordian from '$lib/components/accordian/Accordian.svelte';
	import AccordianItem from '$lib/components/accordian/AccordianItem.svelte';

	let isOpen: boolean;

	function closeSidebar() {
		isOpen = false;
	}

	//ToDo improve focs
	function dropdown(element: HTMLElement, id: string) {
		const contentElement = document.getElementById(id);
		const tooltip = tippy(element, {
			arrow: true,
			content: contentElement?.innerHTML,
			placement: 'bottom',
			interactive: true,
			maxWidth: 1200,
			allowHTML: true,
			theme: 'light',
			appendTo: document.body
		});
		return {
			destroy() {
				tooltip.destroy();
			}
		};
	}
</script>

<header class="flex justify-between items-center py-4 container ">
	<section class="flex items-center gap-24">
		<img src={logo} alt="Titan Logo" class="logo" />
		<nav class="gap-8 hidden font-normal lg:flex">
			<div>
				<a href="/" class="fluid-font">Home</a>
			</div>

			<div>
				<button use:dropdown={'solutions'} class="capitalize fluid-font"> solutions </button>
			</div>

			<div>
				<button use:dropdown={'customer-service'} class="capitalize fluid-font">
					customer service
				</button>
			</div>

			<div>
				<button use:dropdown={'company'} class="capitalize fluid-font"> company </button>
			</div>

			<div>
				<button use:dropdown={'functional-test-area'} class="capitalize fluid-font">
					functional test area
				</button>
			</div>
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

<!--  Dropdown PopUps -->
<div id="solutions" class="hidden">
	<section class="grid grid-cols-2 gap-x-28 gap-y-6 p-6">
		<a class="link" href="#">equipment management</a>
		<a class="link" href="#">reporting</a>
		<a class="link" href="#">test scheduling</a>
		<a class="link" href="#">test planning</a>
		<a class="link" href="#">test lab management </a>
		<a class="link" href="#">customization</a>
		<a class="link" href="#">issue management</a>
		<a class="link" href="#">integration</a>
		<a class="link" href="#">test catalog management</a>
	</section>
</div>

<div id="customer-service" class="hidden">
	<section class="grid grid-cols-2 gap-x-28 gap-y-6 p-6">
		<a class="link" href="#">adoption service</a>
		<a class="link" href="#">support</a>
		<a class="link" href="#">techinical service</a>
	</section>
</div>

<div id="company" class="hidden">
	<section class="grid grid-cols-2 gap-x-28 gap-y-6 p-6">
		<a class="link" href="#">about us</a>
		<a class="link" href="#">blog</a>
		<a class="link" href="#">faqs</a>
		<a class="link" href="#">resource center</a>
		<a class="link" href="#">why choose us?</a>
		<a class="link" href="#">news and events</a>
	</section>
</div>

<div id="functional-test-area" class="hidden">
	<section class="grid grid-cols-2 gap-x-28 gap-y-6 p-6">
		<a class="link" href="#">vehicle testing</a>
		<a class="link" href="#">reliability testing</a>
		<a class="link" href="#">powertain testing</a>
		<a class="link" href="#">passive safety (Crash)</a>
		<a class="link" href="#">battery & HV testing</a>
		<a class="link" href="#">chassis testing</a>
		<a class="link" href="#">thermal testing</a>
		<a class="link" href="#">homologation testing</a>
	</section>
</div>

<slot />

<Sidebar {isOpen} on:closed={closeSidebar}>
	<nav class="container">
		<Accordian>
			<AccordianItem className="text-start capitalize py-2 flex gap-4 " selected="font-semibold">
				<svelte:fragment slot="title">Solutions</svelte:fragment>
				<article class="flex flex-col text-xs pl-12 pb-3 pt-1 gap-3">
					<a class="accordian-links" href="#">equipment management</a>
					<a class="accordian-links" href="#">reporting</a>
					<a class="accordian-links" href="#">test scheduling</a>
					<a class="accordian-links" href="#">test planning</a>
					<a class="accordian-links" href="#">test lab management </a>
					<a class="accordian-links" href="#">customization</a>
					<a class="accordian-links" href="#">issue management</a>
					<a class="accordian-links" href="#">integration</a>
					<a class="accordian-links" href="#">test catalog management</a>
				</article>
			</AccordianItem>
			<AccordianItem className="text-start capitalize py-2 flex gap-4" selected="font-semibold">
				<svelte:fragment slot="title">customer service</svelte:fragment>
				<article class="flex flex-col text-xs pl-12 pb-3 pt-1 gap-3">
					<a class="accordian-links" href="#">adoption service</a>
					<a class="accordian-links" href="#">support</a>
					<a class="accordian-links" href="#">techinical service</a>
				</article>
			</AccordianItem>
			<AccordianItem className="text-start capitalize py-2 flex gap-4" selected="font-semibold">
				<svelte:fragment slot="title">company</svelte:fragment>
				<article class="flex flex-col text-xs pl-12 pb-3 pt-1 gap-3">
					<a class="accordian-links" href="#">about us</a>
					<a class="accordian-links" href="#">blog</a>
					<a class="accordian-links" href="#">faqs</a>
					<a class="accordian-links" href="#">resource center</a>
					<a class="accordian-links" href="#">why choose us?</a>
					<a class="accordian-links" href="#">news and events</a>
				</article>
			</AccordianItem>
			<AccordianItem className="text-start capitalize py-2 flex gap-4" selected="font-semibold">
				<svelte:fragment slot="title">functional test area</svelte:fragment>
				<article class="flex flex-col text-xs pl-12 pb-3 pt-1 gap-3">
					<a class="accordian-links" href="#">vehicle testing</a>
					<a class="accordian-links" href="#">reliability testing</a>
					<a class="accordian-links" href="#">powertain testing</a>
					<a class="accordian-links" href="#">passive safety (Crash)</a>
					<a class="accordian-links" href="#">battery & HV testing</a>
					<a class="accordian-links" href="#">chassis testing</a>
					<a class="accordian-links" href="#">thermal testing</a>
					<a class="accordian-links" href="#">homologation testing</a>
				</article>
			</AccordianItem>
		</Accordian>
	</nav>
</Sidebar>

<style type="postcss">
	nav > div {
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
