<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { Button } from './';

	const dispatch = createEventDispatcher();

	const notify = () => {
		dispatch('submitForm');
	};
	export let title: string;
	export let width: string = 'clamp(200px, 50vw, 500px)';
</script>

<h1 class="mb-x1">{title}</h1>
<form on:submit|preventDefault={notify} style:width>
	<slot />
	<Button type="submit" styling="mt-x1 ml-auto mr-auto">Confirm</Button>
</form>

<style lang="scss">
	form {
		display: flex;
		flex-direction: column;

		&:invalid button {
			cursor: not-allowed;
		}
	}
</style>
