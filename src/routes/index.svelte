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
	<p>some stuff</p>
	<p>
		Our goal is to make people's lives easier, we have developed a product to make everyday life
		easier for people.
	</p>
	<p>
		Our goal is to make people's lives easier, we have developed a product to make everyday life
		easier for people.
	</p>
	<p>
		Our product gives the opportunity for people to lend or to borrow items from each other.
		Sharepool has thought of creating groups called communities, on our site we love to belong to a
		community, so after a long time we came to introduce in our product. Our vision is to reduce
		consumption in society and contribute to sustainable consumption. Sharepool's product
		contributes to a more social, economic and environmental consumption
	</p>
</Animate>
