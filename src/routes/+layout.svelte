<script lang="ts">
	import './layout.css';

	let { children } = $props();
</script>


<svelte:head>
	<title>rynstew.art</title>
	<meta name="description" content="The homepage of rynstew.art." />
</svelte:head>


<div class="app">
	<main>{@render children()}</main>
</div>


<style>
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		/*max-width: 64rem;*/
		margin: 0 auto;
		box-sizing: border-box;
	}
</style>
