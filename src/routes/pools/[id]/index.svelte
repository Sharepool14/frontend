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

	export let members;
	let thisCommunity;
	let modal: Modal;
	let value: string;
	onMount(() => {
		[thisCommunity] = $pools.filter((pool) => pool.id == $page.params.id);
	});
</script>

<Animate>
	{#if members}
		<h1>{thisCommunity?.name}</h1>
		<ol class="ml-x2">
			{#each members as { username }}
				<li>{username}</li>
			{/each}
		</ol>
		<Modal modalButtonTitle="Invite a new member" bind:this={modal} secondaryColor>
			<Form
				title={`Invite new a member to ${thisCommunity?.name}`}
				on:submit={(e) => {
					formPostHandler(e);
					modal.startClose();
					e.preventDefault();
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
</Animate>
