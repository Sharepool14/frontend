<script lang="ts">
	import Form from '$lib/widgets/Form.svelte';
	import InputField from '$lib/components/InputField.svelte';
	import Cookies from 'js-cookie';
	import { reFetchPools } from '../../typescript/data/communities.store';
	import Modal from '$lib/widgets/Modal.svelte';

	let value: string;
	let modal;

	const handleSubmit = async () => {
		const res = await fetch(`api/user/communities/create`, {
			method: 'POST',
			headers: {
				access_token: Cookies.get('access_token'),
			},
			body: JSON.stringify({
				name: value,
			}),
		});
		if (res.ok) {
			reFetchPools();
			modal.startClose();
			value = '';
		}
	};
</script>

<Modal modalButtonTitle="New pool" bind:this={modal}>
	<Form title="Create a new pool" on:submitForm={() => handleSubmit()}>
		<InputField
			placeholder="Enter the name of your new pool"
			type="text"
			required={true}
			bind:value
			first
			last
		/>
	</Form>
</Modal>
