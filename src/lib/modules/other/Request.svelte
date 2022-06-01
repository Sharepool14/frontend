<script lang="ts">
	import { Button } from '$lib/modules/widgets';
	import { invalidate } from '$app/navigation';

	export let requester: number;
	export let item: string;
	export let communityName: string;
</script>

<li>
	<span>
		{requester} from {communityName} requested your {item}
	</span>
</li>

<style lang="scss">
	li {
		span {
			display: inline-flex;
			gap: 1rem;
		}
	}
</style>
