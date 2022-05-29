<script lang="ts">
	import { page } from '$app/stores';

	import { Card } from '$lib/modules/Cards';
	import { CircularProgressBar } from '$lib/modules/svgs';
	import { Button } from '$lib/modules/widgets';

	export let id: number;
	export let title: string;
	export let description: string;
	export let borrowed: boolean;
	export let startDate: Date;
	export let returnDate: Date;

	const handleClick = async () => {
		console.log($page.url.pathname);
		const res = await fetch($page.url.pathname, {
			method: 'post',
			body: JSON.stringify({
				postID: id,
			}),
		});
	};
</script>

<Card hoverable={true}>
	<div>
		<h1>{title}</h1>
		<CircularProgressBar {startDate} {returnDate} />
		<p>{description}</p>
		<Button>Request item (NYI)</Button>
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
