<script>
	import Nav from '$lib/nav/Nav.svelte';
</script>

<div class="main-layout-container">
	<Nav />
	<slot />
</div>

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
	<style>
		body {
			font-family: 'Inter';
			margin: 0;
			background-color: #fefefe;
		}
		.main-layout-container {
			height: 100vh;
			width: 100vw;
			display: flex;
			flex-flow: column nowrap;
		}
	</style>
</svelte:head>
