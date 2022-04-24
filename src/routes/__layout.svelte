<script lang="ts">
	import Login from '$lib/components/auth/Login.svelte';
	import Navlink from '$lib/components/Navlink.svelte';
	import SignUp from '$lib/components/auth/SignUp.svelte';
	import Modal from '$lib/widgets/Modal.svelte';
	import Navbar from '$lib/widgets/Navbar.svelte';
	import { page } from '$app/stores';
</script>

<svelte:head>
	<!-- prettier-ignore -->
	<meta name="description" content={$page.stuff.description}>
	<title>{$page.stuff.title}</title>
</svelte:head>

<header>
	<Navbar>
		<Navlink href="/" navTitle="Home" />
		<Navlink href="/pools" navTitle="Pools" />
		<Navlink href="/about" navTitle="About" />
		<Navlink href="/contact" navTitle="Contact" />
	</Navbar>
	<div class="mr-x1 ml-x2 mt-auto mb-auto">
		<Modal modalButtonTitle="Log in" important={false}>
			<Login />
		</Modal>
		<Modal modalButtonTitle="Sign up">
			<SignUp />
		</Modal>
	</div>
</header>

<main class="ml-x2 mr-x2">
	<slot />
</main>

<style lang="postcss">
	header {
		font-size: 1.1rem;
		display: flex;
		justify-content: right;
		div {
			display: flex;
			gap: 0.5rem;
		}
	}
	main {
		display: flex;
		flex-direction: column;
	}

	:global {
		:root {
			--text-color: hsl(0 100% 100%);
			--stage: hsl(291 70% 10%);
			--primary: hsl(291 90% 60%);
			--secondary: hsl(176 90% 60%);
		}

		* {
			max-width: 100%;
			max-width: 100%;
			z-index: unset;
		}

		*,
		*::before,
		*::after {
			box-sizing: border-box;
			margin: 0;
			border: 0;
			padding: 0;
			text-decoration: none;
			-webkit-font-smoothing: antialiased;
			-moz-osx-font-smoothing: grayscale;
		}

		html {
			scroll-behavior: smooth;
		}

		body {
			background-color: var(--stage);
			overflow-x: hidden;
			overflow-y: scroll;
		}

		h1,
		h2,
		h3,
		h4,
		a,
		p,
		button,
		label {
			color: var(--text-color);
			font-family: sans-serif;
		}

		ol,
		ul {
			list-style: none;
		}

		button {
			background: unset;
			border-width: 0;
			cursor: pointer;
			width: fit-content;
		}

		button[disabled] {
			cursor: not-allowed;
		}
	}
</style>
