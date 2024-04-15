<script>
	import { getContext, onMount } from 'svelte';
	import { ACCORDION } from './Accordian.svelte';
	import { fade, fly, slide } from 'svelte/transition';

	const { registerItem, selectItem, openItem, items } = getContext(ACCORDION);
   export let key=0;
  export let className = '';
  export let selected = '';
  export let openfirst = false;


	// This component's unique id
	let id = Math.random();

	// Register this component with the parent
	registerItem(id);

	function toggle() {
		if ($openItem === id) {
      selectItem(null);
    } else {
      selectItem(id);
    }
	}

  onMount(() => {
    if (openfirst && items.length === 1) {
      selectItem(id);
    }
  });

	
</script>

<button on:click={toggle} class="w-full {className} {$openItem === id ? selected : ''}"  >
	{#if $openItem === id}
		<i class="ri-arrow-down-s-line"></i>
	{:else}
		<i class="ri-arrow-right-s-line"></i>
	{/if}

	<slot name="title" />
	
</button>

{#if $openItem === id}
	<section in:slide={{ duration: 200 }} out:slide={{ duration: 200 }}>
		<slot />
	</section>
{/if}


