<script lang="ts">
	import { Form } from '$lib/modules/widgets';
	import { InputField } from './';
	import Cookies from 'js-cookie';
	import { reFetchPools } from '$lib/data/communities.store';
	import { Modal } from '$lib/modules/Cards';
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import { formPostHandler } from '$lib/ts/api';

	let value: string;
	let modal: Modal;

	const handleSubmit = async () => {
		modal.startClose();
	};
</script>

<Modal modalButtonTitle="New pool" bind:this={modal} secondaryColor>
	<Form
		title="Create a new pool"
		method="post"
		on:submit={(e) => {
			formPostHandler(e);
			modal.startClose();
		}}
	>
		<InputField
			placeholder="Enter the name of your new pool"
			name="newPoolName"
			type="text"
			required={true}
			bind:value
			first
			last
		/>
	</Form>
</Modal>
