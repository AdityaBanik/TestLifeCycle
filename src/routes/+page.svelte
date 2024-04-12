<script lang="ts">
	import Accordian from '$lib/components/accordian/Accordian.svelte';
	import AccordianItem from '$lib/components/accordian/AccordianItem.svelte';
import IconCard from '$lib/components/cards/IconCard.svelte';
import Ctc from '$lib/components/shared/CTC.svelte';

</script>
<Ctc btnText="Learn more" title="Test Lifecycle Simplified" description="The adaptable platform that lets you validate products,"/>
<section class="bg-gradient-to-t from-sky-100 to-white sticky z-10 top-0">
	<div class="container text-center xl:min-h-screen flex flex-col gap-10 items-center justify-end pt-10">
		<div>
			<h1 class="font-bold md:text-2xl lg:text-5xl mb-2">Equipment Management</h1>
			<p class="md:max-w-[700px] text-xs md:text-base lg:text-lg font-light">
				Our Equipment Management feature streamlines the process of tracking, maintaining, and
				utilizing your valuable assets, ensuring optimal performance and minimal downtime.
			</p>
		</div>
		<img
			class="w-[70%] cover-img-shadow border border-gray-100 rounded-t-xl"
			src="https://static.wixstatic.com/media/454d4b_7f982811ab5f4f15898a14fcac1d62aa~mv2.png/v1/fill/w_1672,h_800,fp_0.48_0.12,q_90,usm_0.66_1.00_0.01,enc_auto/Titan%20%20App%20UI%20(Equipment%20V1).png"
			alt=""
		/>
	</div>
</section>

<section class="shadow relative z-20 bg-white min-h-[100vh]">
	<div class="container pt-10 md:pt-20">
		<h2 class="font-bold line-height md:text-2xl lg:text-4xl mb-2 md:mb-4 max-w-sm md:max-w-xl">
			Where Gear Management Meets Effortless Excellence.
		</h2>
		<p class="max-w-sm md:max-w-2xl text-xs md:text-base">
			For engineers and management teams, our valued customers, TITAN's Equipment Management feature
			offers the following benefits:
		</p>
		<div class="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-16 md:py-20 py-10 place-items-center">
			<IconCard
				imgSrc="https://static.wixstatic.com/media/454d4b_d8eec91f91d04b99b3bb02ca3b51b14f~mv2.png/v1/fill/w_142,h_142,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Layer%201702.png"
				title="Effortless Organization"
				description="Easily trace equipment locations, ensuring no movement goes unsupervised. "
			/>
			<IconCard
				imgSrc="https://static.wixstatic.com/media/454d4b_d8eec91f91d04b99b3bb02ca3b51b14f~mv2.png/v1/fill/w_142,h_142,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Layer%201702.png"
				title="Effortless Organization"
				description="Easily trace equipment locations, ensuring no movement goes unsupervised. "
			/>
			<IconCard
				imgSrc="https://static.wixstatic.com/media/454d4b_d8eec91f91d04b99b3bb02ca3b51b14f~mv2.png/v1/fill/w_142,h_142,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Layer%201702.png"
				title="Effortless Organization"
				description="Easily trace equipment locations, ensuring no movement goes unsupervised. "
			/>
			<IconCard
				imgSrc="https://static.wixstatic.com/media/454d4b_d8eec91f91d04b99b3bb02ca3b51b14f~mv2.png/v1/fill/w_142,h_142,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/Layer%201702.png"
				title="Effortless Organization"
				description="Easily trace equipment locations, ensuring no movement goes unsupervised. "
			/>


		</div>
	</div>
</section>




<style lang="post-css">
	.shadow {
		box-shadow: 0 -10px 20px -10px rgba(0, 0, 0, 0.3);
	}

	.line-height {
		line-height: 1.2 !important;
	}
	.cover-img-shadow {
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	}
</style>
