<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	type Direction = 'up' | 'down' | 'left' | 'right' | undefined;

	let isInView: boolean;
	let scrollDirection: Direction;
	const options: Options = {
		rootMargin: '-50px',
		unobserveOnEnter: true
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
		scrollDirection = detail.scrollDirection.vertical;
	};
</script>

<div use:inview={options} on:inview_change={handleChange}>
	<div class="hidden" class:animate={isInView}>
		<slot></slot>
	</div>
</div>

<style>
	.animate {
		animation: 3s bounce ease-out;
		display: block;
	}
	@keyframes bounce {
		from {
			opacity: 0;
		}
		to {
			opacity: 1;
		}
	}
</style>
