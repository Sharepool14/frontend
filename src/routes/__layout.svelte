<script lang="ts" context="module">
	import '$lib/scss/app.scss';
</script>

<script lang="ts">
	import Login from '$lib/components/auth/Login.svelte';
	import Navlink from '$lib/components/navigation/Navlink.svelte';
	import SignUp from '$lib/components/auth/SignUp.svelte';
	import Modal from '$lib/widgets/Modal.svelte';
	import Navbar from '$lib/widgets/Navbar.svelte';
	import { page } from '$app/stores';
	import ParticlesBackground from '$lib/components/anim/ParticlesBackground.svelte';
	import ProfileLink from '$lib/components/navigation/ProfileLink.svelte';
	import { transitionCleanup } from '$lib/typescript/ts/global';
	import { onMount } from 'svelte';
	import Logo from '$lib/components/svgs/Logo.svelte';
	import { hasAccess } from '$lib/typescript/data/auth.store';
	let transitionCleaner: NodeJS.Timer;

	onMount(() => {
		transitionCleaner = setInterval(transitionCleanup, 20000);
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
	<div class="logo mr-auto">
		<Logo width="10rem" />
	</div>

	<Navbar>
		<Navlink href="/" navTitle="Home" />
		<Navlink href="/feed" navTitle="Feed" />
		<Navlink href="/pools" navTitle="Pools" />
		<Navlink href="/guide" navTitle="Guide" />
		{#if $hasAccess}
			<ProfileLink href="/profile" />
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
	</Navbar>
</header>

<main class="minl-x2">
	<slot />
</main>

<style lang="scss">
	header {
		font-size: 1.1rem;
		display: flex;
		div {
			display: flex;
			gap: 0.5rem;
		}
	}
	main {
		display: flex;
		flex-direction: column;
	}

	.logo {
		width: auto;
	}
</style>
