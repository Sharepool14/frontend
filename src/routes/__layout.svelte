<script lang="ts">
	import '$lib/scss/app.scss';
	import * as Nav from '$lib/modules/navigation';
	import * as Auth from '$lib/modules/auth';
	import { Particles } from '$lib/modules/anim';
	import { Modal } from '$lib/modules/cards';
	import { navigating, page } from '$app/stores';
	import { onMount } from 'svelte';
	import { Logo } from '$lib/modules/svgs';
	import { authenticate, hasAccess } from '$lib/data/auth.store';

	$: console.log($navigating);
	onMount(() => {
		authenticate();
	});
</script>

<svelte:head>
	<meta name="description" content={$page.stuff.description} />
	<title>{$page.stuff.title}</title>
</svelte:head>

<svelte:body />

<Particles />
<Nav.Loading />
<header>
	<div class="logo mr-auto">
		<Logo width="10rem" />
	</div>

	<Nav.Bar>
		<Nav.Link href="/" navTitle="Home" />
		<Nav.Link href="/feed" navTitle="Feed" />
		<Nav.Link href="/pools" navTitle="Pools" />
		<Nav.Link href="/guide" navTitle="Guide" />
		{#if $hasAccess}
			<Nav.Profile href="/profile" />
		{:else}
			<div class="mr-x1 ml-x2 mt-auto mb-auto">
				<Modal modalButtonTitle="Log in" important={false}>
					<Auth.Login />
				</Modal>
				<Modal modalButtonTitle="Sign up">
					<Auth.Register />
				</Modal>
			</div>
		{/if}
	</Nav.Bar>
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
