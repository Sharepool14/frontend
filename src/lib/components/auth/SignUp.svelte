<script lang="ts">
	import Form from '$lib/widgets/Form.svelte';
	import Input from '$lib/widgets/Input.svelte';
	import Password from '$lib/components/auth/PasswordMatcher.svelte';
	import InputField from '../InputField.svelte';
	import { register } from '../../../typescript/data/auth.store';
	let signUp: Registration;

	signUp = {
		username: '',
		password: '',
		firstName: '',
		lastName: '',
		phoneNumber: '',
		address: {
			street: '',
			city: '',
			zipCode: '',
		},
	};

	const handleSubmit = () => {
		register(signUp);
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
	<InputField
		placeholder="Enter phone number"
		type="phone"
		required={true}
		bind:value={signUp.phoneNumber}
	/>
	<InputField
		placeholder="Enter city"
		type="text"
		required={true}
		bind:value={signUp.address.city}
	/>
	<InputField
		placeholder="Enter Zip Code"
		type="text"
		required={true}
		bind:value={signUp.address.zipCode}
	/>
	<InputField
		placeholder="Enter address"
		type="text"
		required={true}
		bind:value={signUp.address.street}
		last={true}
	/>
</Form>

<style lang="postcss">
	div {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	}
</style>
