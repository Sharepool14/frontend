<script lang="ts">
	import Input from '$lib/widgets/Input.svelte';
	import Form from '$lib/widgets/Form.svelte';
	let login: Authentication;
	login = { password: '', email: '' } 
</script>

<Form title="Log in">
	<Input type="email" bind:value={login.email}>Email</Input>
	<Input type="password" bind:value={login.password}>Password</Input>
</Form>
