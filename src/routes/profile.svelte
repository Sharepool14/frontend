<script lang="ts" context="module">
	export async function load({ stuff, session }) {
		stuff.title = 'Your Profile';
		stuff.description = 'user profile';

		return {
			stuff,
		};
	}
</script>

<script lang="ts">
	import Animate from '$lib/widgets/animation/AnimateBlock.svelte';
	import Button from '$lib/widgets/Button.svelte';
	import Card from '$lib/widgets/CardColored.svelte';
	import { items } from '../typescript/data/items.store';
	import { logOut } from '../typescript/data/auth.store';
	import { user } from '../typescript/data/user.store';
	import { communities } from '../typescript/data/communities.store';
	import NewPool from '$lib/components/NewPool.svelte';
	import { invites, reFetchInvites } from '../typescript/data/invites.store';
	import Invite from '$lib/components/Invite.svelte';
</script>

<Animate>
	<h1>My profile</h1>
	<main class="mblk-x1">
		<Card --color={'var(--primary)'} --dark={'var(--primary-dark)'}>
			<h2>Information</h2>
			<p>
				<strong>First name:</strong>
				{$user.firstname}<br />
				<strong>Last name:</strong>
				{$user.lastname}<br />
				<strong>Phone number:</strong>
				{$user.phone}<br />
				<strong>City:</strong>
				{$user.city}<br />
				<strong>Zip code:</strong>
				{$user.zipcode}<br />
				<strong>Street:</strong>
				{$user.street}
			</p>
		</Card>
		<Card --color={'var(--primary)'} --dark={'var(--primary-dark)'}>
			<h2>Pools</h2>
			{#if $communities.length > 0}
				<ul class="ml-x2">
					{#each $communities as community}
						<li>{community.name}</li>
					{/each}
				</ul>
			{:else}
				<h2>You are not a member of any pools</h2>
			{/if}
			<NewPool />
		</Card>
		<Card --color={'var(--primary)'} --dark={'var(--primary-dark)'}>
			<h2>My Items</h2>
			{#if $items.length > 0}
				<ul class="ml-x2">
					{#each $items as item}
						<li>{item.name}</li>
					{/each}
				</ul>
			{:else}
				<p>You have no items listed</p>
			{/if}
		</Card>
		<Card --color={'var(--primary)'} --dark={'var(--primary-dark)'}>
			<h2>Messages</h2>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nobis quaerat natus nemo
				obcaecati, quae voluptatem provident earum incidunt quod animi sint, ea facere. Quisquam
				autem ipsa nesciunt repudiandae assumenda!
			</p>
		</Card>
		<Card --color={'var(--primary)'} --dark={'var(--primary-dark)'}>
			<h2>Borrowed Items</h2>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nobis quaerat natus nemo
				obcaecati, quae voluptatem provident earum incidunt quod animi sint, ea facere. Quisquam
				autem ipsa nesciunt repudiandae assumenda!
			</p>
		</Card>
		<Card --color={'var(--primary)'} --dark={'var(--primary-dark)'}>
			<h2>Invites</h2>
			{#if $invites.length > 0}
				<ul>
					{#each $invites as invite}
						<Invite
							inviteID={invite.id}
							inviter={invite.inviter}
							communityName={invite.community}
						/>
					{/each}
				</ul>
			{:else}
				<p>You have no invites at the moment</p>
			{/if}
			<Button on:buttonClicked={() => reFetchInvites()}>Reload invites</Button>
		</Card>
	</main>
	<Button on:buttonClicked={() => logOut()}>Log out</Button>
</Animate>

<style lang="scss">
	main {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(50ch, 1fr));
		gap: 1rem;
	}
</style>
