<script context="module" lang="ts">
	export const ACCORDION = {};
</script>

<script lang="ts">
	import { setContext, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

	const items: any[] = [];
	const openItem = writable(null);

	setContext(ACCORDION, {
		registerItem: (item: any) => {
			items.push(item);
			onDestroy(() => {
				const i = items.indexOf(item);
				items.splice(i, 1);
				openItem.update((current) =>
					current === item ? items[i] || items[items.length - 1] : current
				);
			});
		},
		selectItem: (item: any) => {
			openItem.set(item);
		},
		openItem,
		items
	});
</script>

<div>
	<slot />
</div>
