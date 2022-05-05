<script lang="ts">
	import Login from '$lib/components/auth/Login.svelte';
	import Navlink from '$lib/components/Navlink.svelte';
	import SignUp from '$lib/components/auth/SignUp.svelte';
	import Modal from '$lib/widgets/Modal.svelte';
	import Navbar from '$lib/widgets/Navbar.svelte';
	import { page } from '$app/stores';
	import '../scss/app.scss';
	import ParticlesBackground from '$lib/components/ParticlesBackground.svelte';
	import ProfileLink from '$lib/components/auth/ProfileLink.svelte';
	import { transitionCleanup } from '../typescript/ts/global';
	import { onMount } from 'svelte';
	let auth = false;
	let transitionCleaner: NodeJS.Timer;

	onMount(() => {
		transitionCleaner = setInterval(transitionCleanup, 10000);
	});
</script>

<svelte:head>
	<!-- prettier-ignore -->
	<meta name="description" content={$page.stuff.description}>
	<title>{$page.stuff.title}</title>
</svelte:head>

<svelte:body />

<ParticlesBackground />

<header>
	<Navbar>
		<Navlink href="/" navTitle="Home" />
		<Navlink href="/pools" navTitle="Pools" />
		<Navlink href="/communities" navTitle="Communities" />
		<Navlink href="/about" navTitle="About" />
		{#if auth}
			<ProfileLink href="/profile" />
		{/if}
	</Navbar>

	{#if !auth}
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
