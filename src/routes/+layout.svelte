<script lang="ts">
	import "../app.css";
	import { page } from "$app/stores";
	import Navbar from "$src/components/navbar.svelte";
	import Footer from "$src/components/footer.svelte";

	console.log($page.data.subdomain.split(".")[0]);
</script>

<div class="flex min-h-full flex-col">
	<Navbar />
	<slot />
	<Footer />
</div>
