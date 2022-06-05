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
	import { page } from '$app/stores';
	import { Block as Animate } from '$lib/modules/anim';
	import { Modal } from '$lib/modules/Cards';
	import { Form, Input } from '$lib/modules/widgets';
	import { formPostHandler } from '$lib/ts/api';
	import { invalidate } from '$app/navigation';
	import { BorrowPost as Post } from '$lib/modules/other';

	export let community;
	export let members;
	export let posts;
	export let items;
	let modalInvite: Modal;
	let modalPosts: Modal;
	let value: string;
</script>

<Animate>
	{#if members}
		<h1>{community?.name}</h1>
		<ol class="ml-x2 mb-x1">
			{#each members as { username }}
				<li>{username}</li>
			{/each}
		</ol>
		<div class="mblk-x1">
			<Modal modalButtonTitle="Invite a new member" bind:this={modalInvite}>
				<Form
					title={`Invite new a member to ${community?.name}`}
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
		</div>
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
						endDate={new Date(post.return_date)}
						borrowed={false}
					/>
				{/each}
			</section>
		{/if}
		<Modal modalButtonTitle="Create a new post" bind:this={modalPosts}>
			<Form
				title={`Post an item to ${community?.name}`}
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
				<Input type="date" name="endDate" required last />
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
