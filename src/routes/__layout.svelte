<script lang="ts">
	import Login from '$lib/components/auth/Login.svelte';
	import Navlink from '$lib/components/Navlink.svelte';
	import SignUp from '$lib/components/auth/SignUp.svelte';
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
		<Modal modalButtonTitle="Log in">
			<Login />
		</Modal>
		<Modal modalButtonTitle="Sign up">
			<SignUp />
		</Modal>
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

	:global(:root){
		--bg-color: hsl(291 70% 10%);
		--text-color: hsl(0 100% 100%);
		--secondary: hsl();
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

	:global(body) {
		background-color: var(--bg-color);
	}

	:global(h1, h2, h3, h4, a, p, button, label) {
		color: var(--text-color);
		font-family: sans-serif;
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
