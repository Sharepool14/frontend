<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	const notify = () => {
		dispatch('submitForm');
	};

	export let title: string;
	export let width: string = 'clamp(200px, 50vw, 500px)';
</script>

<h1 class="mb-x1">{title}</h1>
<form on:submit|preventDefault={notify} style="width: {width}">
	<slot />
	<button type="submit" class="ml-auto mr-auto">Confirm</button>
</form>

<style lang="postcss">
	form {
		display: flex;
		flex-direction: column;
		&:invalid button {
			cursor: not-allowed;
		}
	}
</style>
