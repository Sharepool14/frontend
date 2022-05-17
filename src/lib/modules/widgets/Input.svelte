<script lang="ts">
	export let type: string;
	export let value: string | number | Date;
	export let required = true;
	export let inputRef: HTMLInputElement = undefined;

	const setType = (node) => {
		if (['submit', 'reset', 'button'].includes(type)) {
			console.error(`'${type}' is an invalid input type, use a button instead`);
			type = 'text';
		}
		node.type = type;
	};
</script>

<label class="mb-x1">
	<slot />
	<input use:setType bind:value {required} bind:this={inputRef} />
</label>

<style lang="scss">
	label {
		display: flex;
		flex-direction: column;
		width: 100%;
		input {
			&[type='text'],
			&[type='email'],
			&[type='password'] {
				width: min(100px, 100%);
			}
		}
	}
</style>
