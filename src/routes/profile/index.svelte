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
	import { Request, Invite } from '$lib/modules/other';
	import { afterNavigate, beforeNavigate, invalidate } from '$app/navigation';
	import { afterUpdate, onMount } from 'svelte';
	import { formPostHandler } from '$lib/ts/api';
	import Fa from 'svelte-fa';
	import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';

	const refreshIcon = faArrowsRotate;

	export let info: any;
	export let communities: any[];
	export let items: any[];
	export let invites: any[];
	export let requests: any[];
	export let posts: any[];
	let requestData = [];

	interface ModalForm {
		modal: Modal;
		value: string | number | Date;
	}

	let newPool: Modal;
	let newItem: Modal;
	$: {
		if (communities?.length > 0) communities.sort((a, b) => a.id - b.id);
		if (items?.length > 0) items.sort((a, b) => a.id - b.id);
		if (invites?.length > 0) invites.sort((a, b) => a.id - b.id);
		if (requests?.length > 0) requests.sort((a, b) => a.id - b.id);
	}
</script>

<Animate>
	<header>
		<h1>{info?.firstname}'s profile</h1>
		<Button on:buttonClicked={async () => await invalidate('/profile')}
			><Fa icon={refreshIcon} scale={1.35} fw /></Button
		>
	</header>

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
			{#if communities?.length > 0}
				<ul class="ml-x2 mb-x1">
					{#each communities as community}
						<li>{community?.name}</li>
					{/each}
				</ul>
			{:else}
				<h2 class="mb-x1">You are not a member of any pools</h2>
			{/if}
			<Modal modalButtonTitle="New pool" bind:this={newPool} secondaryColor>
				<Form
					title="Create a new pool"
					method="post"
					on:submit={async (e) => {
						e.preventDefault();
						await formPostHandler(e);
						newPool.startClose();
						await invalidate('/profile');
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
				{#if items?.length > 0}
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
			<h2>Requests</h2>
			{#if requests && requests?.length > 0}
				{#each requests as request}
					<Request
						requestID={request.requestID}
						requester={request.requester}
						item={request.item}
						communityName={request.community}
					/>
				{/each}
			{:else}
				<p>You have no requests at the moment</p>
			{/if}
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
			{#if invites?.length > 0}
				<ul class="ml-x2">
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
		</Card>
	</main>
	<Button on:buttonClicked={() => logOut()}>Log out</Button>
</Animate>

<style lang="scss">
	header {
		display: flex;
		gap: 1rem;
	}
	main {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(60ch, 1fr));
		gap: 1rem;
	}
</style>
