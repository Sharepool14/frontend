<script lang="ts">
	import { Form, Input } from '$lib/modules/widgets';
	import { hasAccess, authenticate } from '$lib/data/auth.store';
	import { formPostHandler } from '$lib/ts/api';
</script>

{#if !$hasAccess}
	<Form
		title="Log in"
		method="post"
		action="/auth/login"
		on:submit={async (e) => {
			e.preventDefault();
			await formPostHandler(e);
			authenticate();
		}}
	>
		<Input placeholder="Enter email" type="email" name="username" required first />
		<Input placeholder="Enter password" type="password" name="password" required last />
	</Form>
{:else}
	<h1>You are logged in</h1>
{/if}
