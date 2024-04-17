<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	const title = ['Test', 'Lifecycle', 'Simplified'];
	let animate = true;
</script>

<label>
	<input type="checkbox" bind:checked={animate} />
	Animate
</label>
{#if animate}
	<p transition:fade>
		{#each title as item, i}
            {#key item}
            <div transition:fly|global={{ y: 100, delay: 400 * i }}>{item}</div>
            {/key}
        {/each}
	</p>
{/if}


<!-- 					{#each title as word, i}
						<span
							class="inline-block"
							in:fly|global={{ y: 200, delay: 1000 * (i/2), easing: backOut }}
						>
							{word}
						</span>
						{i !== title.length - 1 ? ' ' : ''}
					{/each} -->
<style>
	.lines {
		max-width: 800px;
		font-size: 3rem;
		font-weight: 900;
		text-align: center;
	}
	.lines .overflow {
		display: inline-block;
		overflow: hidden;
		vertical-align: bottom;
	}

	.lines .line {
		display: inline-block;
		margin: 0.2rem;
		text-transform: uppercase;
		text-shadow: 2px 0 10px hsl(0 0% 0% / 20%);
	}
</style>
