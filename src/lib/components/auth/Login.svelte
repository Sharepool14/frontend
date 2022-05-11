<script lang="ts">
	import Input from '$lib/widgets/Input.svelte';
	import Form from '$lib/widgets/Form.svelte';
	import { hasAccess, authenticate } from '../../../typescript/data/auth.store';
	import Button from '$lib/widgets/Button.svelte';
	import InputField from '../InputField.svelte';
	import { afterUpdate } from 'svelte';
	let login: Authentication;
	login = { password: '', username: '' };
</script>

{#if !$hasAccess}
	<Form title="Log in" on:submitForm={() => authenticate(login)}>
		<InputField
			placeholder="Enter email"
			type="email"
			required={true}
			bind:value={login.username}
			first={true}
		/>
		<InputField
			placeholder="Enter password"
			type="password"
			required={true}
			bind:value={login.password}
			last={true}
		/>
	</Form>
{:else}
	<h1>You are logged in</h1>
{/if}
