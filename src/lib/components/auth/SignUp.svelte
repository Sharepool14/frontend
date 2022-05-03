<script lang="ts">
	import Form from '$lib/widgets/Form.svelte';
	import Input from '$lib/widgets/Input.svelte';
	import Password from '$lib/components/auth/PasswordMatcher.svelte';
	import InputField from '../InputField.svelte';
	let signUp: Registration;

	signUp = {
		username: '',
		password: '',
		firstName: '',
		lastName: '',
		city: '',
		zipCode: '',
		address: '',
	};

	const handleSubmit = () => {
		alert(`
mail: ${signUp.username},
password: ${signUp.password},
first name: ${signUp.firstName},
last name: ${signUp.lastName},
city: ${signUp.city},
zip code: ${signUp.zipCode},
address: ${signUp.address}`);
	};
</script>

<Form title="Sign up" on:submitForm={handleSubmit}>
	<InputField
		placeholder="Enter email"
		type="email"
		required={true}
		bind:value={signUp.username}
		first={true}
	/>
	<div>
		<Password bind:value={signUp.password} />
	</div>
	<div>
		<InputField
			placeholder="Enter first name"
			type="text"
			required={true}
			bind:value={signUp.firstName}
		/>
		<InputField
			placeholder="Enter last name"
			type="text"
			required={true}
			bind:value={signUp.lastName}
		/>
	</div>
	<InputField placeholder="Enter city" type="text" required={true} bind:value={signUp.city} />
	<InputField
		placeholder="Enter Zip Code"
		type="text"
		required={true}
		bind:value={signUp.zipCode}
	/>
	<InputField
		placeholder="Enter address"
		type="text"
		required={true}
		bind:value={signUp.address}
		last={true}
	/>
</Form>

<style lang="postcss">
	div {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	}
</style>
