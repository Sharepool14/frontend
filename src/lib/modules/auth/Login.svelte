<script lang="ts">
	import { Form } from '$lib/modules/widgets';
	import { hasAccess, authenticate } from '$lib/data/auth.store';
	import { InputField } from '$lib/modules/other';
	let login: Authentication;
	login = { password: '', username: '' };
</script>

{#if !$hasAccess}
	<Form
		title="Log in"
		on:submitForm={() => {
			authenticate(login);
		}}
	>
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
