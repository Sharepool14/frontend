<script lang="ts">
	import Input from '$lib/widgets/Input.svelte';
	import Form from '$lib/widgets/Form.svelte';
	import Button from '$lib/widgets/Button.svelte';
	import InputField from '$lib/components/InputField.svelte';
	import Cookies from 'js-cookie';

	export let communityID: number;

	let value: string;

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
		alert(res.status);
	};
</script>

<Form title="Log in" on:submitForm={() => handleSubmit(communityID)}>
	<InputField
		placeholder="Enter another users email"
		type="email"
		required={true}
		bind:value
		first
		last
	/>
</Form>
