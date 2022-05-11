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
	import { communities } from '../typescript/data/communities.store';
	import { hasAccess } from '../typescript/data/auth.store';
	import InviteForm from '$lib/components/Invite.svelte';
</script>

<Animate>
	{#if $communities.length > 0}
		<main>
			{#each $communities as community, key (key)}
				<CardColored --color={'var(--primary)'} --dark={'var(--primary-dark)'}>
					<h2>{community.name}</h2>
					<InviteForm communityName={community.name} communityID={community.id} />
				</CardColored>
			{/each}
		</main>
	{:else}
		<CardColored --color={'var(--primary)'} --dark={'var(--primary-dark)'}>
			{#if $hasAccess}
				<h2>You are not a member of any pools</h2>
			{:else}
				<h2>You have to be logged in to see this page</h2>
			{/if}
		</CardColored>
	{/if}
</Animate>

<style lang="scss">
	main {
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 1rem;
	}
</style>
