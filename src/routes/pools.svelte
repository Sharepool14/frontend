<script lang="ts" context="module">
	export async function load({ stuff }) {
		stuff.title = 'Pools';
		stuff.description =
			'Groups of like-minded people who share common household items between them';

		return {
			stuff,
		};
	}
</script>

<script lang="ts">
	import Animate from '$lib/widgets/animation/AnimateBlock.svelte';
	import CardColored from '$lib/widgets/CardColored.svelte';
	import Cookies from 'js-cookie';
	import { communities } from '../typescript/data/communities.store';
	import { onMount } from 'svelte';
	import { hasAccess } from '../typescript/data/auth.store';
	import Form from '$lib/widgets/Form.svelte';
	import InputField from '$lib/components/InputField.svelte';
	import Modal from '$lib/widgets/Modal.svelte';
	import InviteForm from '$lib/components/InviteForm.svelte';
	import { identity } from 'svelte/internal';

	$: {
		console.log($communities);
	}
</script>

<Animate>
	<main>
		{#if $communities.length > 0}
			{#each $communities as community, key (key)}
				<CardColored --color={'var(--primary)'} --dark={'var(--primary-dark)'}>
					<h2>{community.name}</h2>
					<Modal modalButtonTitle="Invite a new member">
						<InviteForm communityID={community.id} />
					</Modal>
				</CardColored>
			{/each}
		{:else}
			<CardColored --color={'var(--primary)'} --dark={'var(--primary-dark)'}>
				{#if $hasAccess}
					<h2>You are not a member of any pools</h2>
				{:else}
					<h2>You have to be logged in to see this page</h2>
				{/if}
			</CardColored>
		{/if}
	</main>
</Animate>

<style lang="scss">
	main {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
</style>
