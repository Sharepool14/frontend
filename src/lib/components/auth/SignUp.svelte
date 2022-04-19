<script lang="ts">
	import Form from '$lib/widgets/Form.svelte';
	import Input from '$lib/widgets/Input.svelte';
	import PasswordMatcher from '$lib/components/auth/PasswordMatcher.svelte';
	let signUp: Registration;
	let password: string;

	signUp = {
		email: '',
		password: '',
		firstName: '',
		lastName: '',
		city: '',
		zipCode: '',
		address: ''
	};

	const handleSubmit = () => {
		if (signUp.password!=undefined) {
			console.log(JSON.stringify(signUp));
		}
	};
</script>

<Form title="Sign up" on:submitForm={handleSubmit}>
	<Input type="email" bind:value={signUp.email}>Email</Input>
	<PasswordMatcher bind:value={signUp.password}/>
	<Input type="text" bind:value={signUp.firstName}>First name</Input>
	<Input type="text" bind:value={signUp.lastName}>Last name</Input>
	<Input type="text" bind:value={signUp.city}>City</Input>
	<Input type="text" bind:value={signUp.zipCode}>Zip code</Input>
	<Input type="text" bind:value={signUp.address}>Street and number</Input>
</Form>
