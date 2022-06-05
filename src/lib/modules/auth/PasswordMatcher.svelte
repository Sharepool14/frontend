<script lang="ts">
	import { InputField } from '$lib/modules/other';
	import { afterUpdate } from 'svelte';
	let one: string;
	let two: string;
	let missmatch: boolean;
	let confirm: HTMLInputElement;

	export let value: string = undefined;

	afterUpdate(() => {
		if (one === two) {
			value = one;
			confirm.setCustomValidity('');
		} else {
			value = undefined;
			confirm.setCustomValidity('Passwords must match.');
		}
		missmatch = confirm.validity.customError;
	});
</script>

<InputField placeholder="Enter password" type="password" required={true} bind:value={one} />
<InputField
	placeholder="Confirm password"
	type="password"
	required={true}
	bind:value={two}
	bind:inputRef={confirm}
/>
