<script lang="ts">
	import { Form, Input } from '$lib/modules/widgets';
	import { Modal } from '$lib/modules/Cards';
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
			e.preventDefault();
		}}
	>
		<Input
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
