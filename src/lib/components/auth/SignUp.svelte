<script lang="ts">
	import Form from '$lib/widgets/Form.svelte';
	import Input from '$lib/widgets/Input.svelte';
	import Password from '$lib/components/auth/PasswordMatcher.svelte';
	let signUp: Registration;

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
		alert(`
mail: ${signUp.email},
password: ${signUp.password},
first name: ${signUp.firstName},
last name: ${signUp.lastName},
city: ${signUp.city},
zip code: ${signUp.zipCode},
address: ${signUp.address}`)
	};
</script>

<Form title="Sign up" on:submitForm={handleSubmit}>
	<Input type="email" bind:value={signUp.email}>Email</Input>
	<Password bind:value={signUp.password}/>
	<Input type="text" bind:value={signUp.firstName}>First name</Input>
	<Input type="text" bind:value={signUp.lastName}>Last name</Input>
	<Input type="text" bind:value={signUp.city}>City</Input>
	<Input type="text" bind:value={signUp.zipCode}>Zip code</Input>
	<Input type="text" bind:value={signUp.address}>Street and number</Input>
</Form>
