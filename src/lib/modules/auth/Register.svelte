<script lang="ts">
	import { Form } from '$lib/modules/widgets';
	import { PasswordMatcher as Password } from './';
	import { InputField } from '$lib/modules/other';
	import { authenticate, register } from '$lib/data/auth.store';
	let signUp: User;

	signUp = {
		username: '',
		password: '',
		userInformation: {
			firstname: '',
			lastname: '',
			phone: '',
			city: '',
			zipcode: '',
			street: '',
		},
	};

	const handleSubmit = async () => {
		await register(signUp);
		await authenticate({ username: signUp.username, password: signUp.password });
	};
</script>

<Form title="Sign up" on:submit={handleSubmit}>
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
			bind:value={signUp.userInformation.firstname}
		/>
		<InputField
			placeholder="Enter last name"
			type="text"
			required={true}
			bind:value={signUp.userInformation.lastname}
		/>
	</div>
	<InputField
		placeholder="Enter phone number"
		type="phone"
		required={true}
		bind:value={signUp.userInformation.phone}
	/>
	<InputField
		placeholder="Enter city"
		type="text"
		required={true}
		bind:value={signUp.userInformation.city}
	/>
	<InputField
		placeholder="Enter Zip Code"
		type="text"
		required={true}
		bind:value={signUp.userInformation.zipcode}
	/>
	<InputField
		placeholder="Enter address"
		type="text"
		required={true}
		bind:value={signUp.userInformation.street}
		last={true}
	/>
</Form>

<style lang="scss">
	div {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	}
</style>
