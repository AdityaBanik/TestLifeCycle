<script lang="ts">
	import { inview } from 'svelte-inview';
	import type { ObserverEventDetails, Options } from 'svelte-inview';
	type Direction = 'up' | 'down' | 'left' | 'right' | undefined;

	let isInView: boolean;
	let scrollDirection: Direction;
	const options: Options = {
		rootMargin: '0px',
        unobserveOnEnter: true,
	};

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
		scrollDirection = detail.scrollDirection.vertical;
	};
</script>

<div use:inview={options} on:inview_change={handleChange}>
	<div class:animate={isInView}>
		<slot></slot>
	</div>
</div>

<style>
	.animate {
		animation: 1s bounce;
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
</style>
