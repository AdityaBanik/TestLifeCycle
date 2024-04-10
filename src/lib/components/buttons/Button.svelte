<script lang="ts">
	export let text: string;
	export let className: string = '';
	export let link: string = '#';
</script>

<a href={link} class="fluid-font px-3 py-1 lg:px-4 lg:py-2 font-medium  bg-blue-500 text-white rounded-full hover:bg-blue-700 active:bg-gray-400 {className}">
	{text}
</a>

