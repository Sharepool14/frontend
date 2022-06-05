<script lang="ts">
	import { Form, Input } from '$lib/modules/widgets';
	import { authenticate } from '$lib/data/auth.store';
	import { formPostHandler } from '$lib/ts/api';
	import { afterUpdate } from 'svelte';
	import { invalidate } from '$app/navigation';
	import { page } from '$app/stores';

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

	let username: string;

	const login = async () => {
		const res = await fetch('/auth/login', {
			method: 'post',
			body: JSON.stringify({
				username,
				password: passwords.secondVal,
			}),
		});
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
	action="/auth/register"
	on:submit={async (e) => {
		e.preventDefault();
		await formPostHandler(e);
		await login();
		await authenticate();
	}}
>
	<Input
		placeholder="Enter email"
		type="email"
		name="username"
		bind:value={username}
		required
		first
	/>
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
	<Input placeholder="Enter address" type="text" name="street" required last />
</Form>

<style lang="scss">
	div {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
	}
</style>
