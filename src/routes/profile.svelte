<script lang="ts" context="module">
	export async function load({ stuff, fetch }) {
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
	import { hasAccess, logOut } from '../typescript/data/auth.store';
	import { page } from '$app/stores';
	import Cookies from 'js-cookie';
	import { user } from '../typescript/data/user.store';
	$: {
		console.log($user);
	}
</script>

<Animate>
	<h1>My profile</h1>
	<main class="mblk-x1">
		<Card --color={'var(--primary)'} --dark={'var(--primary-dark)'}>
			<h2>Information</h2>
			<!--

			<p>
				<strong>First name:</strong>
				{user.data.firstName}<br />
				<strong>Last name:</strong>
				{user.data.lastName}<br />
				<strong>Phone number:</strong>
				{user.data.phone}<br />
				<strong>City:</strong>
				{user.data.city}<br />
				<strong>Zip code:</strong>
				{user.data.zipCode}<br />
				<strong>Street:</strong>
				{user.data.street}
			</p>
			-->
		</Card>
		<Card --color={'var(--secondary)'} --dark={'var(--secondary-dark)'}>
			<h2>Pools</h2>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nobis quaerat natus nemo
				obcaecati, quae voluptatem provident earum incidunt quod animi sint, ea facere. Quisquam
				autem ipsa nesciunt repudiandae assumenda!
			</p>
		</Card>
		<Card --color={'var(--secondary)'} --dark={'var(--secondary-dark)'}>
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
		<Card --color={'var(--secondary)'} --dark={'var(--secondary-dark)'}>
			<h2>Borrowed Items</h2>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nobis quaerat natus nemo
				obcaecati, quae voluptatem provident earum incidunt quod animi sint, ea facere. Quisquam
				autem ipsa nesciunt repudiandae assumenda!
			</p>
		</Card>
		<Card --color={'var(--primary)'} --dark={'var(--primary-dark)'}>
			<h2>Invites</h2>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nobis quaerat natus nemo
				obcaecati, quae voluptatem provident earum incidunt quod animi sint, ea facere. Quisquam
				autem ipsa nesciunt repudiandae assumenda!
			</p>
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
