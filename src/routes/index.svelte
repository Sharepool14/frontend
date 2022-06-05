<script lang="ts" context="module">
	export async function load({ stuff }) {
		stuff.title = 'Home';
		stuff.description =
			"The landing page of Sharepool, a website for borrowing and shareing household items within trusted 'pools'";

		return {
			stuff,
		};
	}
</script>

<script lang="ts">
	import { Block as Animate } from '$lib/modules/anim';
</script>

<Animate>
	<h1>Home</h1>
	<p>
		Our product gives the opportunity for people to lend or to borrow items from each other.
		Sharepool has thought of creating groups called communities, on our site we love to belong to a
		community, so after a long time we came to introduce in our product. Our vision is to reduce
		consumption in society and contribute to sustainable consumption. Sharepool's product
		contributes to a more social, economic and environmental consumption
	</p>
</Animate>
