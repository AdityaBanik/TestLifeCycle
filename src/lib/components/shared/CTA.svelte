<script lang="ts">
	import Button from '$lib/components/buttons/Button.svelte';
	export let btnText:string;
	export let title:string;
	export let className = 'bg-black';
    export let description='';
	export let BtnClass = '';
</script>

<section
	class="{className} text-center lg:py-10 p-3  md:px-14 md:py-10"
>
	<div class="container flex flex-col items-center gap-7 md:gap-7">
        <div>

            <h3 class=" text-white leading-normal">
                {title}
            </h3>
           <p class=" text-white">{description}</p>
        </div>
		

		<Button text={btnText} className={BtnClass}/>
	</div>
</section>

<style>
	h3 {
		font-size: clamp(1rem, 3vw, 2rem) !important;
		font-family: 'Bebas Neue', sans-serif;
		font-weight: 200;
		font-style: normal;
	}


    p{
   
        font-size: clamp(0.5rem, 1.5vw, 1rem) !important;
		font-family: 'Bebas Neue', sans-serif;
		font-weight: 100;
		font-style: normal;
    }
</style>
