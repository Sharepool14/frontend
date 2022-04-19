<script lang="ts">
	import Navlink from '$lib/components/Navlink.svelte';
	import Modal from '$lib/widgets/Modal.svelte';
	import Navbar from '$lib/widgets/Navbar.svelte';
</script>

<header>
	<Navbar>
		<Navlink href="/" navTitle="Home" />
		<Navlink href="/pools" navTitle="Pools" />
		<Navlink href="/about" navTitle="About" />
		<Navlink href="/contact" navTitle="Contact" />
	</Navbar>
	<div class="mr-x1">
		<Modal modalButtonTitle="Log in" />
		<Modal modalButtonTitle="Sign up" />
	</div>
</header>

<main class="pl-x4 pr-x4">
	<slot />
</main>

<style lang="postcss">
	header {
		display: flex;
		justify-content: right;
		div {
			display: flex;
			gap: 1rem;
		}
	}

	:global(*, *::before, *::after) {
		box-sizing: border-box;
		margin: 0;
		border: 0;
		padding: 0;
		text-decoration: none;
	}

	:global(html) {
		overflow: hidden;
	}

	:global(ol, ul) {
		list-style: none;
	}

	:global(button) {
		background: unset;
		border-width: 0;
		cursor: pointer;
		width: fit-content;
	}

	:global(button[disabled]) {
		cursor: not-allowed;
	}
</style>
