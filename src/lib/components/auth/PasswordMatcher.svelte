<script lang="ts">
	import Animate from '$lib/widgets/animation/AnimateInline.svelte';
	import Input from '$lib/widgets/Input.svelte';
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

<Input type="password" bind:value={one}>
	<span
		>Password
		{#if missmatch}
			<Animate><i>*</i></Animate>
		{/if}
	</span>
</Input>
<Input type="password" bind:value={two} bind:inputRef={confirm}>
	<span
		>Confirm Password
		{#if missmatch}
			<Animate><i>*</i></Animate>
		{/if}
	</span>
</Input>

<style lang="postcss">
	i {
		color: var(--secondary);
	}
</style>
