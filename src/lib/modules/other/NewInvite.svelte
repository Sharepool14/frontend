<script lang="ts">
	import { Form } from '$lib/modules/widgets';
	import { InputField } from './';
	import Cookies from 'js-cookie';
	import { Modal } from '$lib/modules/Cards';

	export let communityID: number;
	export let communityName: string;

	let value: string;
	let modal;

	const handleSubmit = async (id: number) => {
		console.log(`api/communities/${id}/members/invite`);
		const res = await fetch(`api/communities/${id}/members/invite`, {
			method: 'POST',
			headers: {
				access_token: Cookies.get('access_token'),
			},
			body: JSON.stringify({
				communityID: id,
				invitee: value,
			}),
		});
		if (res.ok) {
			value = '';
			modal.startClose();
		}
	};
</script>

<Modal modalButtonTitle="Invite a new member" bind:this={modal} secondaryColor>
	<Form
		title={`Invite new a member to ${communityName}`}
		on:submit={() => handleSubmit(communityID)}
	>
		<InputField
			placeholder="Enter another users email"
			type="email"
			required={true}
			bind:value
			first
			last
		/>
	</Form>
</Modal>
