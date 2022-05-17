<script lang="ts">
	import { Form } from '$lib/modules/widgets';
	import { InputField } from './';
	import Cookies from 'js-cookie';
	import { reFetchPools } from '$lib/data/communities.store';
	import { Modal } from '$lib/modules/Cards';

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

<Modal modalButtonTitle="New pool" bind:this={modal} secondaryColor>
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
