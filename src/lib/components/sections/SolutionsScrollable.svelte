<script >
	import { onDestroy, onMount } from 'svelte';
	import Accordian from '../accordian/Accordian.svelte';
	import AccordianItem from '../accordian/AccordianItem.svelte';
    /**
	 * @type {any[]}
	 */
     export let data = [];
	/**
	 * @type {any[]}
	 */
	let sections = [];
	let selected = 0;
	/**
	 * @type {IntersectionObserver[]}
	 */
	let observers = [];
	let isClicking = false;
	/**
	 * @type {HTMLElement}
	 */
	let scrollable;
	/**
	 * @param {number} index
	 */
     function scrollIntoView(index) {
    isClicking = true;
    sections[index].scrollIntoView({
        behavior: 'smooth', // You can also set this to 'auto' for immediate scrolling
        block: 'nearest'
    });
    selected = index;
    setTimeout(() => (isClicking = false), 500);
}

	onMount(() => {
		const options = {
			root: null,
			rootMargin: '0px',
			threshold: 0.65
		};

		sections.forEach((section, index) => {
			const observer = new IntersectionObserver((entries, observer) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting && !isClicking) {
						selected = index;
					}
				});
			}, options);

			observer.observe(section);
			observers.push(observer);
		});
	});

	onDestroy(() => {
		observers.forEach((observer) => observer.disconnect());
	});
</script>


	<div class="scroll-container py-20 ">
		<div class="features">
			<h3>Jump to feature</h3>
			{#each data as item, i}
				<button class:selected={selected === i} on:click={() => scrollIntoView(i)}
					>{item.title}
				</button>
			{/each}
		</div>
		<section class="scrollable" bind:this={scrollable}>
			{#each data as item, i}
				<article class="panel px-20" class:selected={selected === i} bind:this={sections[i]}>
					<h3>{item.title}</h3>
					<p>{item.description}</p>
                    <img src={item.media.data.attributes.url} alt={item.media.data.attributes.alternativeText} /> 
				</article>
			{/each}
		</section>
	</div>

	<!-- <section class="accordian">
		<Accordian>
			{#each data as item, i}
				<AccordianItem>
					<svelte:fragment slot="title">{item.title}</svelte:fragment>
					<p>{item.description}</p>
					<img src={item.image} alt={item.title} />
				</AccordianItem>
			{/each}
		</Accordian>
	</section> -->


<style>
	::-webkit-scrollbar {
		width: 6px; /* Set the width of the scrollbar */
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: orangered; /* Color of the scrollbar thumb */
		border-radius: 10px; /* Roundness of the scrollbar thumb */
	}
	.scrollable {
		height: 560px;
		overflow-y: scroll;
		margin-top: 4.5em;
	}
	.features {
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.scrollable .panel {
		height: 100%;

		padding: 2.5em 1em;

		display: flex;
		align-items: center;
		flex-direction: column;
	}

	.panel h3 {
		color: #33333377;
		margin: 0;
		letter-spacing: 0.8px;
		font-weight: 400;
	}

	.panel p {
		color: #333333ce;
		text-align: left;
		margin-top: 0.75em;
		margin-bottom: 2.5em;

		
		text-align: center;
	}

	.features button {
		font-family: 'Montserrat', sans-serif;
		display: block;
		font-weight: semibold;
		font-size: 16px;
		background-color: transparent;

		border: none;
		padding: 1em 32px;
		cursor: pointer;

		border-left: 2px solid #cccccc20;
		letter-spacing: 0.4px;
		white-space: nowrap;
		width: 100%;
		text-align: left;

		color: #717171;
		position: relative;
		transition: color 0.5s ease-in-out;
	}

	.features h3 {
		text-transform: uppercase;
		margin-bottom: 2.3em;

		color: #717171;
	}

	.features button::after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 6px;
		height: 0;
		background-color: orangered;
		/* Transition effect for height */
		transition: height 0s;
	}
	.features button.selected::after {
		height: 100%; /* Sets the height to 100% when button is selected */
		transition: height 1s ease;
	}

	.features .selected {
		color: orangered;
	}

	.container {
		font-family: 'Montserrat', sans-serif;
		background: white;
	}
	* {
		box-sizing: border-box;
	}

	.container {
		font-size: 16px;
	}

	.scroll-container {
		display: flex;
		
		align-items: center ;
		border-radius: 20px;
		
	}
	.accordian {
		display: none;
	}

	p {
		text-align: center;
		color: #333333;
	}
	img {
		width: 100%;

		height: 80%;

		object-fit: contain;
	}

	.panel {
		transition: opacity 0.5s ease-in-out;
		opacity: 0.2;
	}

	article.panel.selected {
		opacity: 1;
	}

	@media (min-width: 1600px) {
		.container {
			font-size: 18px;
		}
		.features button {
			font-size: 20px;
		}

		.panel p {
			font-size: 18px;
		}
	}

	@media (max-width: 1000px) {
		.container {
			font-size: 14px; /* Decrease the font size for mobile */
		}

		.scrollable {
			height: 400px;
		}
		.features button {
			font-size: 12px;
		}
	}

	@media (max-width: 795px) {
		.container {
			font-size: 12px; /* Decrease the font size for mobile */
		}
		img {
			height: 250px;
		}
		.accordian {
			display: block;
		}
		.scroll-container {
			display: none;
		}
	}
</style>
