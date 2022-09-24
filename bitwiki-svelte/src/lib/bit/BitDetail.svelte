<script lang="ts">
	import isEmpty from 'lodash/isEmpty';
	import type { Bit } from './type';

	export let fileName = '';
	let bitPromise: Promise<Bit>;

	const getBitDetails = async (fileName: string) => {
		const res = await fetch(`/api/bit-storage/${fileName}`);
		if (!res.ok) {
			const message = await res.text();
			throw new Error(message);
		}
		const json = await res.json();
		return json;
	};

	$: if (!isEmpty(fileName)) {
		bitPromise = getBitDetails(fileName);
	}
</script>

<div>
	{#await bitPromise}
		<div>...loading</div>
	{:then bit}
		<div>{bit.markdown}</div>
	{:catch error}
		<div>{error.message}</div>
	{/await}
</div>
