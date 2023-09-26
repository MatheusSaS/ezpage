<script lang="ts">
	import "../app.css";
	import { page } from "$app/stores";
	import Navbar from "$src/components/navbar.svelte";
	import Footer from "$src/components/footer.svelte";
    import SEO from "$src/components/SEO.svelte";
    import InformationTop from "$src/components/information_top.svelte";

	console.log($page.data.subdomain.split(".")[0]);
</script>

<SEO
  title="Ezpage"
  desc="Impulsione suas vendas e tenha seu negócio online"
/>
<InformationTop />
<div class="relative overflow-hidden">
	<Navbar />
	<slot />
</div>
<Footer />
