<script context="module" lang="ts">
	export interface UserType {
		text: string;
		name: string;
		designation: string;
		image: string;
	}
	
</script>

<script lang="ts">
export let UserArray: Array<UserType>;


// for(let item of UserArray){
// console.log(item)
// }

</script>

<section
	class="mr-12 md:mr-24 mb-10 md:mb-24 text-white relative max-w-xl 2xl:max-w-2xl p-6 md:p-12 bg-gradient-to-br rounded-2xl from-sky-500 to-indigo-500"
>
	<p class="mb-5 fluid-font md:text-sm 2xl:text-base font-light">
		
 {#each UserArray  as user}
	{user.text}
{/each}
	
		
		

	</p>

	<div class="flex items-center mr-8 md:mr-16">
		<p
			class="not-italic font-medium whitespace-nowrap text-xs md:text-lg border-r-2 pr-3 md:pr-10 py-2 mr-3"
		>
			<!-- Crag Hopkins -->
			{UserArray[0].name}
			{UserArray[1].name}
		</p>
		<p class="italic fluid-font md:text-sm">
			<!-- Senior Manager, <br /> Vehicle Testing & Fleet Management -->
			{UserArray[0].designation}
			{UserArray[1].designation}
		</p>
	</div>

	<img
		src={UserArray[0].image}
		class="w-28 md:w-48 absolute bottom-0 translate-y-1/2 translate-x-1/2 right-0 rounded-2xl shadow-lg"
		alt="profilePic"
	/>
</section>

