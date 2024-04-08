<script lang="ts">
	export let text: string;
	export let className: string = '';
	export let link: string = '#';
</script>

<a href={link} class="fluid-font inline-flex items-center md:text-xs gap-2 px-6 py-2 md:py-1 md:px-16 lg:py-3 lg:text-sm lg:px-12 lg:font-normal bg-blue-500 text-white rounded-full hover:bg-blue-700 active:bg-gray-400 {className}">
	{text}
</a>

