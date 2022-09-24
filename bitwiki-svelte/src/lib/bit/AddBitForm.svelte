<script lang="ts">
	import Card from '$lib/layout/Card.svelte';
	import type { Bit } from './type';

	export let mutateFunction: () => void;

	let newBitName = '';
	let newBitMarkdown = '';

	let isLoading = false;

	const upload = async () => {
		isLoading = true;
		const newBitData: Bit = {
			markdown: newBitMarkdown,
			metadata: {}
		};
		const options = {
			method: 'PUT',
			body: new Blob([JSON.stringify(newBitData)], { type: 'application/json' })
		};
		try {
			await fetch(`/api/bit-storage/${newBitName}`, options);
			newBitName = '';
			newBitMarkdown = '';
			mutateFunction();
		} finally {
			isLoading = false;
		}
	};
</script>

<Card>
	<div class="add-form-container">
		<label>
			Bit Name:
			<input bind:value={newBitName} />
		</label>
		<label>
			Bit:
			<textarea bind:value={newBitMarkdown} />
		</label>
		<button on:click={upload} disabled={isLoading}>Add bit</button>
	</div>
</Card>

<style>
	.add-form-container {
		display: flex;
		flex-flow: column nowrap;
	}
</style>
