<script context="module">
	export async function load({ stuff, props }) {
		stuff.title = 'Your Profile';
		stuff.description = 'user profile';

		return {
			stuff,
			props,
		};
	}
</script>

<script lang="ts">
	import { Block as Animate } from '$lib/modules/anim';
	import { Button } from '$lib/modules/widgets';
	import { CardColored as Card, Modal } from '$lib/modules/cards';
	import { Form, Input } from '$lib/modules/widgets';
	import { logOut } from '$lib/data/auth.store';
	import { NewPool, Invite } from '$lib/modules/other';
	import { afterNavigate, beforeNavigate, invalidate } from '$app/navigation';
	import { afterUpdate, onMount } from 'svelte';
	import { formPostHandler } from '$lib/ts/api';

	export let info: any;
	export let communities: any[];
	export let items: any[];
	export let invites: any[];
	export let message;

	interface ModalForm {
		modal: Modal;
		value: string | number | Date;
	}

	let newPool: Modal;
	let newItem: Modal;
	$: {
		//console.log(communities);
		communities.sort((a, b) => a.id - b.id);
		items.sort((a, b) => a.id - b.id);
		invites.sort((a, b) => a.id - b.id);
	}
</script>

<Animate>
	<h1>{info?.firstname}'s profile</h1>
	<main class="mblk-x1">
		<Card --color={'var(--primary)'} --dark={'var(--primary-dark)'}>
			<h2>Information</h2>
			<p>
				<strong>First name:</strong>
				{info?.firstname}<br />
				<strong>Last name:</strong>
				{info?.lastname}<br />
				<strong>Phone number:</strong>
				{info?.phone}<br />
				<strong>City:</strong>
				{info?.city}<br />
				<strong>Zip code:</strong>
				{info?.zipcode}<br />
				<strong>Street:</strong>
				{info?.street}
			</p>
		</Card>

		<Card --color={'var(--primary)'} --dark={'var(--primary-dark)'}>
			<h2>Pools</h2>
			{#if communities.length > 0}
				<ul class="ml-x2">
					{#each communities as community}
						<li>{community?.name}</li>
					{/each}
				</ul>
			{:else}
				<h2>You are not a member of any pools</h2>
			{/if}
			<Modal modalButtonTitle="New pool" bind:this={newPool} secondaryColor>
				<Form
					title="Create a new pool"
					method="post"
					on:submit={(e) => {
						formPostHandler(e);
						newPool.startClose();
						e.preventDefault();
					}}
				>
					<Input
						placeholder="Enter the name of your new pool"
						name="poolName"
						type="text"
						required
						first
						last
					/>
				</Form>
			</Modal>
		</Card>

		<Card --color={'var(--primary)'} --dark={'var(--primary-dark)'}>
			<a href="/profile/items">
				<h2>My Items</h2>
				{#if items.length > 0}
					<ul class="ml-x2">
						{#each items as item}
							<li>{item.name}</li>
						{/each}
					</ul>
				{:else}
					<p>You have no items listed</p>
				{/if}
			</a>
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
			{#if invites.length > 0}
				<ul>
					{#each invites as invite}
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
			<Button
				on:buttonClicked={async () => await invalidate('/profile')}
				--button-color={'var(--secondary)'}>Reload invites</Button
			>
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
