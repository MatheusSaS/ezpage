<script lang="ts">
	import '../app.css';
	import { page } from "$app/stores";


	console.log($page.data.subdomain.split('.')[0]);
</script>

<slot />