<script>
	import { getContext, onMount } from 'svelte';
	import { ACCORDION } from './Accordian.svelte';
	import { slide } from 'svelte/transition';

	const { registerItem, selectItem, openItem, items } = getContext(ACCORDION);

	export let className = '';
	export let selected = '';
	export let onClick = () => {};
	export let keepOpen = false;

	// This component's unique id
	let id = Math.random();

	// Register this component with the parent
	registerItem(id);

	function toggle() {
		if ($openItem === id && !keepOpen) {
			selectItem(null);
		} else {
			selectItem(id);
		}
	}
	if (keepOpen && items.length === 1) {
		selectItem(id);
	}
</script>

<button on:click={toggle}  on:click={onClick} class="w-full {className} {$openItem === id ? selected : ''}">
	{#if $openItem === id}
		<i class="ri-arrow-down-s-line"></i>
	{:else}
		<i class="ri-arrow-right-s-line"></i>
	{/if}

	<slot name="title" />
</button>

{#key $openItem === id}
	<section
		class="hidden"
		class:show={$openItem === id}
		in:slide={{ duration: 200 }}
		out:slide={{ duration: 200 }}
	>
		<slot />
	</section>
{/key}

<style>
	.show {
		@apply block;
	}
</style>
