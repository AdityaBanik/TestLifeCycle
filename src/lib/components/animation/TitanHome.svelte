
<script>
	import img1 from '$lib/assets/TitanAnimation/img1.webp';
	import img2 from '$lib/assets/TitanAnimation/img2.webp';
	import img3 from '$lib/assets/TitanAnimation/img3.webp';
	import img4 from '$lib/assets/TitanAnimation/img4.webp';
	import img5 from '$lib/assets/TitanAnimation/img5.webp';
	import img6 from '$lib/assets/TitanAnimation/img6.webp';
	import pinimg from '$lib/assets/TitanAnimation/pinimg.webp';
	import animationimg from '$lib/assets/TitanAnimation/animationimg.webp';

</script>


<section>
	<div class="image-container">
		<div class="hover-container" id="hover-zone-1"></div>
		<div class="hover-container" id="hover-zone-2"></div>
		<div class="hover-container" id="hover-zone-3"></div>
		<div class="hover-container" id="hover-zone-4"></div>
		<div class="hover-container" id="hover-zone-5"></div>
		<div class="hover-container" id="hover-zone-6"></div>
		<div class="hover-container" id="pulse-container">
			<div class="pulse">
				<span style="--i:0"></span>
				<span style="--i:1"></span>
				<span style="--i:2"></span>
				<span style="--i:3"></span>
				<span style="--i:4"></span>
				<span style="--i:5"></span>
				<span style="--i:6"></span>
			</div>
		</div>

		<img
			src={img1}
			id="img-1"
			alt="animation"
		/>
		<img
			src={img2}
			id="img-2"
			alt="animation"
		/>
		<img
			src={img3}
			id="img-3"
			alt="animation"
		/>
		<img
			src={img4}
			id="img-4"
			alt="animation"
		/>
		<img
			src={img5}
			id="img-5"
			alt="animation"
		/>
		<img
			src={img6}
			id="img-6"
			alt="animation"
		/>
		<img
			src={pinimg}
			style="opacity: 1; z-index: 30;"
			alt="animation"
		/>
		<img
			src={animationimg}
			id="frame"
			alt="animation"
		/>

		<svg id="path" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1624 1121">
			<defs>
				<style>
					.cls-1 {
						stroke: #6dc2e5;
						stroke-miterlimit: 10;
						stroke-width: 1.16px;
					}

					.cls-1,
					.cls-2 {
						fill: none;
					}

					.cls-2 {
						stroke-width: 0px;
					}
				</style>
			</defs>
			<path
				id="arrow-path"
				class="cls-1"
				d="M420.84,511.3a363.26,214.05 0 1,0 726.52,0a363.26,214.05 0 1,0 -726.52,0"
			/>
			<polygon
				id="arrow"
				fill="#00f6ff"
				points="16.06 4.82 0 9.64 0 0 16.06 4.82"
				transform="translate(-6 -6) scale(1.2)"
			>
				<animateMotion dur="8s" repeatCount="indefinite" rotate="auto">
					<mpath href="#arrow-path" />
				</animateMotion>
			</polygon>
		</svg>
	</div>
</section>

<style>
	section {
		display: flex;
		justify-content: center;
	}

	.image-container {
		position: relative;
	}

	.image-container #frame {
		position: relative;
		display: block;
		z-index: 20;
		opacity: 1;
	}

	.image-container #path {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 10;
	}

	.image-container img {
		position: absolute;
		width: 100%;
		height: 100%;
		opacity: 0;
		z-index: 100;
	}

	.hover-container {
		position: absolute;
		z-index: 200;
		border-radius: 50%;
		width: 10%;
		height: 12%;
		cursor: pointer;
	}

	#pulse-container {
		top: 38%;
		left: 42.4%;
		width: 12%;
		height: 11%;
		z-index: 20;
	}

	#hover-zone-1 {
		top: 22%;
		left: 29%;
	}

	#hover-zone-2 {
		top: 40%;
		left: 22.5%;
	}

	#hover-zone-3 {
		top: 57%;
		left: 32.5%;
	}

	#hover-zone-4 {
		top: 56%;
		left: 55%;
	}

	#hover-zone-5 {
		top: 40%;
		left: 65%;
	}

	#hover-zone-6 {
		top: 22%;
		left: 56%;
	}

	#hover-zone-1:hover ~ #img-1 {
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
	}

	#hover-zone-2:hover ~ #img-2 {
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
	}

	#hover-zone-3:hover ~ #img-3 {
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
	}

	#hover-zone-4:hover ~ #img-4 {
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
	}

	#hover-zone-5:hover ~ #img-5 {
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
	}

	#hover-zone-6:hover ~ #img-6 {
		opacity: 1;
		transition: opacity 0.3s ease-in-out;
	}

	.pulse {
		position: relative;
		height: 100%;
		border-radius: inherit;
	}

	.pulse span {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: inherit;
		background: skyblue;
		opacity: 0.2;
		animation: pulse 8s ease-in-out infinite;
		animation-delay: calc(1s * var(--i));
	}

	@keyframes pulse {
		100% {
			transform: scale(4);
			opacity: 0;
		}
	}
</style>
