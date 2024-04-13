<script lang="ts">
	import { beforeUpdate, createEventDispatcher } from 'svelte';

	export let isOpen: boolean;
    beforeUpdate(() => {
        if (isOpen) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
    });

	
	const dispatch = createEventDispatcher();
</script>

<svelte:body class:overflow-hidden={isOpen} />

{#if isOpen}
	<div class="bg-indigo-900/80 backdrop-blur-sm fixed w-full h-screen top-0 z-[200]">
		<div class="bg-white absolute w-[60%] top-0 h-full right-0 py-14 rounded-l-lg">
			<button
				class="absolute top-4 right-4 px-1 rounded-md border hover:bg-red-500 hover:text-white"
				on:click={() => dispatch('closed')}
			>
				<i class="ri-close-line text-2xl"></i>
			</button>
			<slot />
		</div>
	</div>
{/if}
