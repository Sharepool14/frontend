<script lang="ts">
	import { Card } from '$lib/modules/Cards';
	import { CircularProgressBar } from '$lib/modules/svgs';

	export let title: string;
	export let description: string;
	export let borrowed: boolean;
	export let startDate: Date;
	export let returnDate: Date;
</script>

<Card hoverable={true}>
	<div>
		<h1>{title}</h1>
		<CircularProgressBar {startDate} {returnDate} />
		<p>{description}</p>
	</div>
</Card>

<style lang="scss">
	div {
		padding: 1.75rem;
		display: flex;
		flex-direction: column;
		gap: 1.125rem;
	}
</style>
