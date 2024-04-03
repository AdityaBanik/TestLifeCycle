<script>
	import '../app.css';
	import logo from '$lib/assets/titanLogo.svg';
	import Button from '$lib/components/buttons/Button.svelte';
	import NavDropdown from '$lib/components/shared/NavDropdown.svelte';
</script>

<header class="flex justify-between items-center container p-4">
	<img src={logo} alt="Titan Logo" class="logo" />
	<nav>
		<ul class="flex gap-5">
			<li>home</li>
			<li>solutions</li>
			<li>customer service</li>
			<li>
        <NavDropdown />
      </li>
			<li>functional test area</li>
		</ul>
	</nav>

	<Button text="Request Demo" className="text-sm" />
</header>

<slot />

<style type="postcss">
	nav ul li {
		@apply capitalize hover:bg-blue-50 px-2 py-1 rounded-lg text-sm cursor-pointer;
	}

	.logo {
		width: clamp(100px, 10vw, 200px);
	}
</style>
