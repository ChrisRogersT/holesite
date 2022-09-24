<script lang="ts">
	import { tick, onMount } from 'svelte';
	import Card from '$lib/layout/Card.svelte';

	let isButtonDisabled = true; //this and the onMount function are so that the button doesn't appear ready before it is interactable
	onMount(async () => {
		await tick();
		isButtonDisabled = false;
	});

	type voidFn = () => void;
	let count: number = 1;
	$: doubledReferenceCount = count * 2; //reactive references will re-evaluate if a variable in them is updated
	let countWarning: boolean = false;
	$: if (count > 4) {
		//could be done as a one line reactive variable but this is just to show conditionals can too
		countWarning = true;
	} else {
		countWarning = false;
	}
	let countArray: number[] = [1];
	const increment: voidFn = () => {
		count = count + 1;
		countArray = [...countArray, count]; //arrays and objects need to update source reference to update reactive references
	};
</script>

<Card>
	<h1>Reactive Statements</h1>
	<p>{count}*2={doubledReferenceCount}</p>
	<p>the count is greater than 4: {countWarning}</p>
	<p>countArray: {countArray}</p>
	<button on:click={increment} disabled={isButtonDisabled}>increment</button>
</Card>
