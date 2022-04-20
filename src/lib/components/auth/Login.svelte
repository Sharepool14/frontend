<script lang="ts">
	import Input from '$lib/widgets/Input.svelte';
	import Form from '$lib/widgets/Form.svelte';
	import {hasAccess} from '../../../typescript/data/auth.store'
	let login: Authentication;
	login = { password: '', email: '' } 
	const url = "http://localhost:8080";

	const handleLogin = async () => {
		try{
			let response = await fetch(url + '/login', {
				method: 'POST',
				headers: {
					Host: url,
					'contnent-type': 'application/json'
				},
				body: JSON.stringify(login)
			})
			let data = await response.json();
			console.log(data);
		}catch (err) {
			console.error(err);
		}
		
	}
</script>

{#if !$hasAccess}
<Form title="Log in" on:submitForm={handleLogin}>
	<Input type="text" bind:value={login.email}>Email</Input>
	<Input type="password" bind:value={login.password}>Password</Input>
</Form>
{:else}
	<h1>You are logged in</h1>
{/if}

