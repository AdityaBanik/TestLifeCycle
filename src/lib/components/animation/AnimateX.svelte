<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	type Direction = 'up' | 'down' | 'left' | 'right' | undefined;

	let isInView: boolean;
	export let direction = 'left';
	let scrollDirection: Direction;
	const options: Options = {
		rootMargin: '-100px',
		unobserveOnEnter: true,
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
		scrollDirection = detail.scrollDirection.vertical;
	};
</script>
<div use:inview={options} on:inview_change={handleChange}>
	<div 
	class="invisible"
	class:animate={isInView && direction=="left"}
	class:animate1={isInView && direction=="right"}
	>
		<slot></slot>
	</div>
</div>

<style>
	
	.animate {
		animation: 2s bounce  ;
		visibility: visible;
	}
	@keyframes bounce {
		from {
			opacity: 0;

			transform: translateX(-100px);
		}
		to {
			opacity: 1;

			transform: translateX(0);
		}
	}

	.animate1 {
		animation: 2s bounce1 ;
		visibility: visible;
	}

	@keyframes bounce1 {
		from {
			opacity: 0;

			transform: translateX(100px);
		}
		to {
			opacity: 1;

			transform: translateX(0);
		}
	}
</style>
