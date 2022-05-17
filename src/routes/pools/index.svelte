<script lang="ts" context="module">
	export async function load({ stuff, props }) {
		stuff.title = 'Pools';
		stuff.description =
			'Groups of like-minded people who share common household items between them';

		return {
			stuff,
			props,
		};
	}
</script>

<script lang="ts">
	import { Block as Animate } from '$lib/modules/anim';
	import { CardColored } from '$lib/modules/cards';
	import { hasAccess } from '$lib/data/auth.store';
	import { NewInvite } from '$lib/modules/other';
	export let communities: any[];
	$: communities?.sort((a, b) => a.id - b.id);
</script>

<Animate>
	{#if communities?.length > 0}
		<main>
			{#each communities as community, key (key)}
				<CardColored --color={'var(--primary)'} --dark={'var(--primary-dark)'}>
					<h2>{community.name}</h2>
					<NewInvite communityName={community.name} communityID={community.id} />
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
