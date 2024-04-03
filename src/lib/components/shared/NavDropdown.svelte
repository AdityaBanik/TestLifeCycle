<script>
	let open = false;
</script>


	<button on:mouseenter={() => (open = true)} on:mouseleave={()=> (open = false)}> company </button>

	{#if open}
		<section class="p-4 border cursor-default bg-white absolute top-16 translate-x-[-50%]  z-50 shadow-md rounded-md">
			<ul  class="grid grid-cols-2 gap-5 ">
				<li>Equipment Management</li>
				<li>Asset Management</li>
				<li>Inventory Management</li>
				<li>Work Order Management</li>
				<li>Preventive Maintenance</li>
			</ul>
		</section>
	{/if}

