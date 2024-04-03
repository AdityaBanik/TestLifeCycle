<script lang="ts">
    export let text:string;
    export let className:string =''; 
    export let link:string = '#';
</script>



<a href={link} class="group fluid-font inline-flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-full  hover:bg-blue-700 active:bg-gray-400 {className}">
	{text}
</a>
