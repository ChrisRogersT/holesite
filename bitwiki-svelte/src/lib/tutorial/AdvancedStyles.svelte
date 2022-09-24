<script lang="ts">
	import Card from '$lib/layout/Card.svelte';

	let isClassDirectiveExample: boolean = false;
	let styleDirectiveExampleBackgroundColor: string = 'lightblue';
</script>

<Card>
	<h1>Advanced Styling</h1>
	<div>
		<button class:classDirectiveExample={isClassDirectiveExample} on:click={() => (isClassDirectiveExample = !isClassDirectiveExample)}>class directive example: toggle me</button>
	</div>
	<div>
		<label style:background-color={styleDirectiveExampleBackgroundColor}>
			Style directive example, type a background color:
			<input bind:value={styleDirectiveExampleBackgroundColor} />
		</label>
	</div>
</Card>

<style>
	.classDirectiveExample {
		background-color: lightcoral;
	}
</style>
