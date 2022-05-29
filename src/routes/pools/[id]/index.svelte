<script lang="ts" context="module">
	export const load = async ({ params, props, stuff }) => {
		stuff.title = 'A pool';
		return {
			params,
			props,
			stuff,
		};
	};
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { pools } from '$lib/data/pools.store';
	import { Block as Animate } from '$lib/modules/anim';
	import { Modal } from '$lib/modules/Cards';
	import { Form, Input } from '$lib/modules/widgets';
	import { formPostHandler } from '$lib/ts/api';
	import { invalidate } from '$app/navigation';
	import { BorrowPost as Post } from '$lib/modules/other';

	export let members;
	export let posts;
	export let items;
	let thisCommunity;
	let modalInvite: Modal;
	let modalPosts: Modal;
	let value: string;

	onMount(() => {
		[thisCommunity] = $pools.filter((pool) => pool.id == $page.params.id);
		console.log(posts);
	});
</script>

<Animate>
	{#if members}
		<h1>{thisCommunity?.name}</h1>
		<ol class="ml-x2 mb-x2">
			{#each members as { username }}
				<li>{username}</li>
			{/each}
		</ol>
		<Modal modalButtonTitle="Invite a new member" bind:this={modalInvite} secondaryColor>
			<Form
				title={`Invite new a member to ${thisCommunity?.name}`}
				method="post"
				on:submit={async (e) => {
					e.preventDefault();
					await formPostHandler(e);
					modalInvite.startClose();
				}}
			>
				<Input
					placeholder="Enter another users email"
					type="email"
					name="email"
					required={true}
					bind:value
					first
					last
				/>
			</Form>
		</Modal>
	{/if}
	{#if posts}
		{#if posts?.length > 0}
			<section class="m-x2">
				{#each posts as post}
					<Post
						id={post.id}
						title={post.itemName}
						description={post.description}
						startDate={new Date(post.start_date)}
						returnDate={new Date(post.return_date)}
						borrowed={false}
					/>
				{/each}
			</section>
		{/if}
		<Modal modalButtonTitle="Create a new post" bind:this={modalPosts} secondaryColor>
			<Form
				title={`Post an item to ${thisCommunity?.name}`}
				method="post"
				on:submit={async (e) => {
					e.preventDefault();
					await formPostHandler(e);
					modalPosts.startClose();
					await invalidate($page.url.pathname);
				}}
			>
				<Input type="select" name="itemID" required first>
					<option value="">Please select an item</option>
					{#each items as item}
						<option value={item.id}>{item.name}</option>
					{/each}
				</Input>
				<Input type="date" name="startDate" required />
				<Input type="date" name="returnDate" required last />
			</Form>
		</Modal>
	{/if}
</Animate>

<style lang="scss">
	section {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 1.5rem;
	}
</style>
