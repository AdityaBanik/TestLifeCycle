<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import { backOut } from 'svelte/easing';

	import TitanHome from '$lib/components/animation/TitanHome.svelte';
	import Button from '$lib/components/buttons/Button.svelte';
	import Cta from '$lib/components/shared/CTA.svelte';

	import monitorImage from '$lib/assets/Home/pc.png';
	import HomeFeatures from '$lib/components/sections/HomeFeatures.svelte';
	import type { PageData } from './$types';
	import Testimonial from '$lib/components/cards/Testimonial.svelte';
	import logo1 from '$lib/assets/svgIconForClientsLogo/Asset1.svg';
	import logo2 from '$lib/assets/svgIconForClientsLogo/Asset2.svg';
	import logo3 from '$lib/assets/svgIconForClientsLogo/Asset3.svg';
	import logo4 from '$lib/assets/svgIconForClientsLogo/Asset4.svg';
	import logo5 from '$lib/assets/svgIconForClientsLogo/Asset5.svg';
	import logo6 from '$lib/assets/svgIconForClientsLogo/Asset6.svg';

	import Animate from '$lib/components/animation/animate.svelte';
	import AnimateX from '$lib/components/animation/AnimateX.svelte';
	import Fade from '$lib/components/animation/fade.svelte';

	export let data: PageData;


	const buttons = [
		'Automated Reports',
		'Project Insights',
		'Data Management',
		'Incident Management',
		'KPI Dashboard'
	];
// let background:string;
	let currentSlide: number;
	const changeSlide = (index: number) => {
		currentSlide = index + 1;
		// Remove 'can-zoom' class from all slides
		document.querySelectorAll('.zoom-container').forEach((container) => {
			container.classList.remove('can-zoom');
		});

		// Set the active slide
		const activeSlide = document.getElementById(`s${currentSlide}`);
		activeSlide!.checked = true;

		
		const activeContainer = document.querySelector(`.zoom-container[data-slide="${currentSlide}"]`);
		if (activeContainer) {
			activeContainer.classList.add('can-zoom');
		}

		// Move to the next slide
		currentSlide++;
		if (currentSlide > 5) {
			currentSlide = 0;
		}
// background="bg-white"
	};
</script>

{#key data.url}
	<section
		class="text-center pt-10 container flex flex-col items-center justify-center gap-4 md:gap-8"
	>
		<div>
			<h1
				in:fly|global={{ y: 200, delay: 500, easing: backOut }}
				class="leading-normal text-lg font-bold {data.lang === 'ja'
					? 'titleForJa '
					: 'fluid-title'}"
			>
				{data.page?.Hero?.title}
			</h1>

			<h2 class="fluid-subtitle font-semibold" in:fly|global={{ y: 100, delay: 900 }}>
				{@html data.page?.Hero?.description}
			</h2>
		</div>
		<div in:fade|global={{ delay: 1100, easing: backOut }}>
			<Button
				text={data.page?.Hero?.Button?.name +
					(data.lang === 'ja' ? ' タイタンについて' : ' about titan') || ''}
				link={data.page?.Hero?.Button?.link || ''}
				className="lg:py-3 capitalize"
			/>
		</div>
	</section>
	<div in:fly|global={{ y: 200, delay: 1100, easing: backOut }}>
		<TitanHome lang={data.lang || ''} />
	</div>
{/key}

<Cta
	title={data.page?.Cta?.title || ''}
	btnText={data.page?.Cta?.Button?.name || ''}
	btnLink={data.page?.Cta?.Button?.link || ''}
	className="bg-black text-white mt-10 md:mt-16 "
/>

<section class="container pt-10">
	{#each data.page?.Features || [] as item, i}
		<AnimateX direction={i === 1 ? 'right' : 'left'}>
			<HomeFeatures title={item?.title || ''} items={item?.features || []} alignRight={i == 1} />
		</AnimateX>
	{/each}
</section>

<section class="py-3">
	<div class=" flex justify-center items-center gap-6 lg:gap-12 md:gap-16">
		<hr />
		<h3 class="text-center text-gray-500 font-medium lg:text-4xl md:text-2xl py-6">
			{data.lang === 'ja' ? 'TITANご愛用中のお客様' : 'Our Clients'}
		</h3>
		<hr />
	</div>

	<div class=" mt-2 marquee-container relative">
		<div class="marquee-content whitespace-nowrap">
			<div class="inline-flex box-border min-w-max items-center gap-10 mr-10 md:gap-32 md:mr-32">
				<img src={logo1} class="aspect-video w-20 lg:h-32" alt="lightyear" />
				<img src={logo2} class="aspect-video w-20 lg:w-32" alt="toyota" />
				<img src={logo3} class="aspect-video w-20 lg:w-32" alt="honda" />
				<img src={logo4} class="aspect-video w-20 lg:w-32" alt="lucid" />
				<img src={logo5} class="aspect-video w-20 lg:w-32" alt="canoo" />
				<img src={logo6} class="aspect-video w-20 lg:w-32" alt="volkswagen" />
			</div>
			<div class="inline-flex box-border min-w-max items-center gap-10 mr-10 md:gap-32 md:mr-32">
				<img src={logo1} class="aspect-video w-20 lg:h-32" alt="lightyear" />
				<img src={logo2} class="aspect-video w-20 lg:w-32" alt="toyota" />
				<img src={logo3} class="aspect-video w-20 lg:w-32" alt="honda" />
				<img src={logo4} class="aspect-video w-20 lg:w-32" alt="lucid" />
				<img src={logo5} class="aspect-video w-20 lg:w-32" alt="canoo" />
				<img src={logo6} class="aspect-video w-20 lg:w-32" alt="volkswagen" />
			</div>
		</div>
	</div>
</section>

<section
	class="bg-gradient-to-b from-blue-500 to-indigo-700 lg:h-[800px] lg:flex lg:flex-col lg:justify-center"
>
	<div class="container lg:flex lg:flex-col lg:items-center">
		<div class="flex flex-col lg:flex-row lg:py-10">
			<div class="lg:flex lg:flex-col lg:justify-center lg:px-10 lg:w-[50%]">
				<div>
					<h2 class="font-bold lg:text-2xl text-sm">
						<span class="text-yellow-500 font-bold"
							>One platform to monitor your Test Lifecycle Insights
						</span><span class="font-bold text-white"
							>in real-time, analyze data, generate value-added reports, and more.</span
						>
					</h2>
				</div>
				<div class="lg:px-4 lg:mt-6">
					<h2 class="font-bold text-white lg:text-xl text-sm">{buttons[currentSlide]}</h2>
					<ul class="text-xs">
						{#each ['Use multiple report templates', 'Review and Approved/Reject using Titan', 'Store & release in the system'] as bullet}
							<li class="text-white p-0 m-0">{bullet}</li>
						{/each}
					</ul>
				</div>
			</div>

			<div class="lg:w-[90%]" id="slider">
				<input type="radio" name="slider" id="s1" data-slide="1" checked/>
				<input type="radio" name="slider" id="s2" data-slide="2" />
				<input type="radio" name="slider" id="s3" data-slide="3" />
				<input type="radio" name="slider" id="s4" data-slide="4" />
				<input type="radio" name="slider" id="s5" data-slide="5" />
				<label for="s1" id="slide1">
					<div class="zoom-container" data-slide="1">
						<img
							src="https://static.wixstatic.com/media/454d4b_f10d028ff64c40c88714a1946769b321~mv2.png"
							alt="Image1"
						/>
					</div>
				</label>
				<label for="s2" id="slide2">
					<div class="zoom-container" data-slide="2">
						<img
							src="https://static.wixstatic.com/media/454d4b_bc43930910954f1bb609ef6272dcd8be~mv2.png"
							alt="Image2"
						/>
					</div>
				</label>
				<label for="s3" id="slide3">
					<div class="zoom-container" data-slide="3">
						<img
							src="https://static.wixstatic.com/media/454d4b_37b4f865d11645aba4c9dc56ee2d603d~mv2.png"
							alt="Image3"
						/>
					</div>
				</label>
				<label for="s4" id="slide4">
					<div class="zoom-container" data-slide="4">
						<img
							src="https://static.wixstatic.com/media/454d4b_c60b3face6594c989633f674d1a28083~mv2.png"
							alt="Image4"
						/>
					</div>
				</label>
				<label for="s5" id="slide5">
					<div class="zoom-container" data-slide="5">
						<img
							src="https://static.wixstatic.com/media/454d4b_11a433609b06446d9dd7ed0e8bbb6578~mv2.png"
							alt="Image5"
						/>
					</div>
				</label>
			</div>
		</div>

		<div class="flex lg:flex-row lg:gap-4 text-center lg:py-14 flex-col gap-4">
			{#each buttons as button, index}
				<button
					on:click={() => changeSlide(index)}
					class="bg-cyan-500 no-underline lg:text-sm font-medium lg:px-6  lg:py-2 text-white rounded-full hover:bg-white hover:text-blue-500 active:bg-gray-400"
					>{button}</button
				>
			{/each}
		</div>
	</div>
</section>

<section
	class="container flex flex-col lg:flex-row justify-between lg:items-center py-20 lg:gap-20"
>
	<Fade>
		<h2 class="text-xl lg:text-3xl font-bold mb-6 md:mb-16">
			{data.lang === 'ja'
				? '当社の顧客がどのように影響を及ぼしているかをご覧ください'
				: 'See how our customers drive impact'}
		</h2>
	</Fade>
	<Testimonial lang={data.lang || ''} />
</section>

<Animate>
	<Cta
		title={data.page?.Cta?.title || ''}
		btnText={data.page?.Cta?.Button?.name || ''}
		btnLink={data.page?.Cta?.Button?.link || ''}
		className="bg-sky-50 text-blue-950   "
	/>
</Animate>

<section class=" py-10 md:py-28 container flex items-center">
	<div class=" flex flex-col gap-10">
		<div>
			<Animate>
				<h2
					class=" border-orange-400 text-xl md:text-3xl text-gray-600 border-l-4 pl-5 font-semibold mb-2"
				>
					{@html data.page?.acceleratingSection?.title || ''}
				</h2>
			</Animate>
			<Animate>
				<p class="text-gray-600 text-sm md:text-base lg:text-lg max-w-xl font-semibold pt-3 pl-6">
					{data.page?.acceleratingSection?.subtitle || ''}
				</p>
			</Animate>
		</div>

		<img src={monitorImage} alt="img1" class="w-full lg:hidden" />

		<Animate>
			<div class="grid grid-cols-3 md:grid-cols-2 gap-2 md:gap-4 pt-5">
				{#each data.page?.acceleratingSection?.cards || [] as iconCard}
					<article class="flex fluid-font items-center">
						<img
							class="w-10 md:w-24"
							src={iconCard?.media?.data?.attributes?.url}
							alt={iconCard?.media?.data?.attributes?.alternativeText}
						/>
						<p>
							<span class=" text-orange-400 font-bold block text-xs md:text-2xl">
								{iconCard?.title}%
							</span>
							{iconCard?.description}
						</p>
					</article>
				{/each}
			</div>
		</Animate>
	</div>
	<div class="lg:block w-[55%] hidden">
		<AnimateX>
			<img src={monitorImage} alt="Monitor" class="w-full" />
		</AnimateX>
	</div>
</section>

<style lang="postcss">
	.fluid-title {
		font-size: clamp(1.5rem, 4.8vw, 5rem) !important;
	}

	.titleForJa {
		font-size: clamp(1.5rem, 4.8vw, 4rem) !important;
	}
	.fluid-subtitle {
		font-size: clamp(0.65rem, 1.8vw, 2rem) !important;
	}
	hr {
		width: clamp(5rem, 20vw, 20rem) !important;
	}

	.marquee-container {
		width: 100%;
		overflow: hidden;
	}

	.marquee-container::before {
		content: '';
		position: absolute;
		height: 100%;

		@apply bg-gradient-to-r md:w-52 w-20 from-white to-transparent z-30;
	}

	.marquee-container::after {
		content: '';
		position: absolute;
		height: 100%;

		top: 0;
		right: 0;
		@apply bg-gradient-to-l md:w-52 w-20 from-white to-transparent z-30;
	}
	.marquee-content {
		animation: marquee 30s linear infinite;
	}
	@keyframes marquee {
		0% {
			transform: translateX(0);
		}
		100% {
			transform: translateX(-100%);
		}
	}

	.slide {
		display: flex;
		position: relative;
		overflow: hidden;
	}

	#slider {
		position: relative;
	    height: 30vw;
	    perspective: 500px;
		transform-style: preserve-3d;
		border-radius: 12px;
}

.active{
	background-color: white;
}

	input[type='radio'] {
		display: none;
		position: relative;
		top: 108%;
		left: 50%;
		width: 20px;
		height: 20px;
		margin: 0 15px 0 0;
		background: #ccc;
		border: 2px solid #ccc;
		border-radius: 50%;
		cursor: pointer;
		transform: translateX(-83px);
		transition:
			background 300ms ease,
			border 300ms ease;
	}

	input[type='radio']:checked {
		background: #ff5a5f;
		border: 2px solid #ff5a5f;
	}

	#slider label,
	#slider label img {
		position: absolute;
		width: 100%;
		/* height: 100%; */
		left: 0;
		top: 0;
		border-radius: 12px;
		transition:
			transform 400ms ease,
			opacity 400ms ease;
	}

	.zoom-container {
		overflow: hidden; 
	}

	/* Zoom effect */
	.zoom-container:hover {
		cursor: default; /* Change cursor to zoom-in icon */
	}

	/* .zoom-container.can-zoom:hover img {
		transform: scale(1.4);
		transition: transform 0.5s ease-in-out;
	} */

	#s1:checked ~ #slide1,
	#s2:checked ~ #slide2,
	#s3:checked ~ #slide3,
	#s4:checked ~ #slide4,
	#s5:checked ~ #slide5 {
		transform: translate3d(0%, 0, 0px);
	}

	#s1:checked ~ #slide2,
	#s2:checked ~ #slide3,
	#s3:checked ~ #slide4,
	#s4:checked ~ #slide5,
	#s5:checked ~ #slide1 {
		transform: translate3d(20%, 0, -100px);
	}

	#s1:checked ~ #slide3,
	#s2:checked ~ #slide4,
	#s3:checked ~ #slide5,
	#s4:checked ~ #slide1,
	#s5:checked ~ #slide2 {
		transform: translate3d(40%, 0, -250px);
	}

	#s1:checked ~ #slide4,
	#s2:checked ~ #slide5,
	#s3:checked ~ #slide1,
	#s4:checked ~ #slide2,
	#s5:checked ~ #slide3 {
		transform: translate3d(-40%, 0, -250px);
	}

	#s1:checked ~ #slide5,
	#s2:checked ~ #slide1,
	#s3:checked ~ #slide2,
	#s4:checked ~ #slide3,
	#s5:checked ~ #slide4 {
		transform: translate3d(-20%, 0, -100px);
	}
</style>
