<script lang="ts">
	let title = 'Passive Safety (Crash)';
	let subtitle = 'No Margin For Error';
	let src =
		'https://static.wixstatic.com/media/454d4b_f78241a2c7e3436c839327796491aaa6~mv2.jpeg/v1/fill/w_848,h_516,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/powertrain-scaled-1-1920x1080.jpeg';
</script>

<section class="headerTemplate bg-blue-50   bg-no-repeat  bg-cover  py-7 lg:py-0 xl:bg-auto">
	<div class="container flex justify-between items-baseline ">
		<div class="flex flex-col justify-end gap-1 p-1  translate-y-8 md:translate-y-18 xl:translate-y-0 ">
			<h3 class="text-sm font-bold md:text-3xl xl:text-4xl  ">{title}</h3>
			<h5 class="text-xs xl:font-bold md:font-bold md:text-lg xl:text-xl  xl:py-4 ">
				{subtitle}
			</h5>
		</div>
		<div class="info translate-y-28 w-6/12  md:translate-y-60 rounded-md xl:translate-y-72 ">
			<img {src} alt="car img" class="block"/>
		</div>
	</div>
	
</section>

<section class="discription p-4 flex">
	<div class="detailDiscription mt-14 md:w-2/4 md:p-4 md:mt-0">
		<p class="text-justify text-xs md:text-sm xl:text-xl">
			It is a long established fact that a reader will be distracted by the readable content of a
			page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
			normal distribution of letters, as opposed to using 'Content here, content here', making it
			look like readable English. Many desktop publishing packages and web page editors now use
			Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web
			sites still in their infancy. Various versions have evolved over the years, sometimes by
			accident, sometimes on purpose (injected humour and the like). It is a long established fact
			that a reader will be distracted by the readable content of a page when looking at its layout.
			The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters,
			as opposed to using 'Content here, content here', making it look like readable English. Many
			desktop publishing packages and web page editors now use Lorem Ipsum as their default model
			text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
			Various versions have evolved over the years, sometimes by accident, sometimes on purpose
			(injected humour and the like).
		</p>
		<br />

		<p class="text-justify text-xs md:text-sm xl:text-xl">
			It is a long established fact that a reader will be distracted by the readable content of a
			page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
			normal distribution of letters, as opposed to using 'Content here, content here', making it
			look like readable English.
		</p>
	</div>
</section>

<style>
	.headerTemplate {
		
		background-image: url('https://static.wixstatic.com/media/454d4b_9cc8ee97f786412c8fb983ff9f28bb63~mv2.png/v1/fill/w_944,h_464,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/454d4b_9cc8ee97f786412c8fb983ff9f28bb63~mv2.png');
	}

	
</style>
