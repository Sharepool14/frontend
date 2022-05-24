<script lang="ts">
	import { Form, Input } from '$lib/modules/widgets';
	import { PasswordMatcher as Password } from './';
	import { InputField } from '$lib/modules/other';
	import { authenticate, register } from '$lib/data/auth.store';
	import { formPostHandler } from '$lib/ts/api';
	import { afterUpdate } from 'svelte';

	interface Passwords {
		first: HTMLInputElement;
		firstVal: string;
		second: HTMLInputElement;
		secondVal: string;
	}
	let passwords: Passwords = {
		first: null,
		firstVal: '',
		second: null,
		secondVal: '',
	};

	const signUp: User = {
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
		await authenticate();
	};

	afterUpdate(() => {
		const { firstVal, second, secondVal } = passwords;
		if (firstVal === secondVal) {
			second.setCustomValidity('');
		} else {
			second.setCustomValidity('Passwords must match.');
		}
	});
</script>

<Form
	title="Sign up"
	method="post"
	action="auth/register"
	on:submit={async (e) => {
		await formPostHandler(e);
		authenticate();
		e.preventDefault();
	}}
>
	<Input placeholder="Enter email" type="email" name="username" required first />
	<div>
		<Input
			placeholder="Enter password"
			type="password"
			required
			bind:input={passwords.first}
			bind:value={passwords.firstVal}
		/>
		<Input
			placeholder="Enter password"
			type="password"
			name="password"
			required
			bind:input={passwords.second}
			bind:value={passwords.secondVal}
		/>
	</div>
	<div>
		<Input placeholder="Enter first name" type="text" name="firstname" required />
		<Input placeholder="Enter last name" type="text" name="lastname" required />
	</div>
	<Input placeholder="Enter phone number" type="phone" name="phone" required />
	<Input placeholder="Enter city" type="text" name="city" required />
	<Input placeholder="Enter zip code" type="text" name="zipcode" required />
	<Input placeholder="Enter address" type="text" name="address" required last />
</Form>

<style lang="scss">
	div {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	}
</style>
