<script lang="ts" context="module">
	export async function load({ stuff }) {
		stuff.title = 'Your Profile';
		stuff.description = 'user profile';
		return {
			stuff,
		};
	}
</script>

<script lang="ts">
	import Animate from '$lib/widgets/animation/AnimateBlock.svelte';
	import Card from '$lib/widgets/Card.svelte';
</script>

<Animate>
	<p>some stuff</p>
	<Card hoverable>
		<p>
			Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti nobis quaerat natus nemo
			obcaecati, quae voluptatem provident earum incidunt quod animi sint, ea facere. Quisquam autem
			ipsa nesciunt repudiandae assumenda!
		</p>
	</Card>
</Animate>
