<script lang="ts">
	import Login from '$lib/components/auth/Login.svelte';
	import Navlink from '$lib/components/Navlink.svelte';
	import SignUp from '$lib/components/auth/SignUp.svelte';
	import Modal from '$lib/widgets/Modal.svelte';
	import Navbar from '$lib/widgets/Navbar.svelte';
	import { page } from '$app/stores';
	import '../scss/app.scss';
	import ParticlesBackground from '$lib/components/ParticlesBackground.svelte';
	import Profile from '$lib/components/auth/Profile.svelte';
	let auth = false;
</script>

<svelte:head>
	<!-- prettier-ignore -->
	<meta name="description" content={$page.stuff.description}>
	<title>{$page.stuff.title}</title>
</svelte:head>
<ParticlesBackground />
<header>
	<Navbar>
		<Navlink href="/" navTitle="Home" />
		<Navlink href="/pools" navTitle="Pools" />
		<Navlink href="/about" navTitle="About" />
		<Navlink href="/contact" navTitle="Contact" />
	</Navbar>
	{#if auth}
		<Profile userName="hello" />
	{:else}
		<div class="mr-x1 ml-x2 mt-auto mb-auto">
			<Modal modalButtonTitle="Log in" important={false}>
				<Login />
			</Modal>
			<Modal modalButtonTitle="Sign up">
				<SignUp />
			</Modal>
		</div>
	{/if}
</header>

<main class="minl-x2">
	<slot />
</main>

<footer class="pinl-x2">
	<button on:click={() => (auth = !auth)}>toggle auth</button>
</footer>

<style lang="scss">
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
</style>
