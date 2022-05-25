<script lang="ts" context="module">
	export async function load({ stuff, props }) {
		stuff.title = 'Your items';
		stuff.description = 'A users collection of items';

		return {
			stuff,
			props,
		};
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';
	import { Block as Animate } from '$lib/modules/anim';
	import { Card, Modal } from '$lib/modules/cards';
	import { Form, Input } from '$lib/modules/widgets';
	import { formPostHandler } from '$lib/ts/api';
	import { invalidate } from '$app/navigation';

	export let items: any[];
	let newItem: Modal;
</script>

<Animate>
	<section class="items minl-auto mb-x2">
		{#each items as item}
			<Card hoverable>
				<section class="p-x1">
					<h1>{item.name}</h1>
					<h2>{item.category.type}</h2>
					<p>{item.description}</p>
				</section>
			</Card>
		{/each}
	</section>
	<section class="new-item minl-auto mb-x2">
		<Modal modalButtonTitle="New item" bind:this={newItem} secondaryColor>
			<Form
				title="Create a new item"
				method="post"
				on:submit={async (e) => {
					e.preventDefault();
					await formPostHandler(e);
					newItem.startClose();
					await invalidate('/profile/items');
				}}
			>
				<Input
					placeholder="Enter the name of your new item"
					name="name"
					type="text"
					required
					first
				/>
				<Input
					placeholder="Describe your item"
					name="description"
					type="textarea"
					rows="5"
					cols="20"
					minlength="10"
					maxlength="100"
					wrap="hard"
					required
				/>
				<Input type="select" name="category" required last>
					<option value="">Please select a category</option>
					<option value="1">Möbler</option>
					<option value="2">Elektronik</option>
				</Input>
			</Form>
		</Modal>
	</section>
</Animate>

<style lang="scss">
	.items {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(30ch, 1fr));
		gap: 2rem;
		width: 80vw;

		& > * {
			max-width: 35ch !important;
		}

		@media screen and (min-width: 1440px) {
			width: 70vw;
		}
	}
</style>
