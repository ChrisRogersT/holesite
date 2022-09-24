<script>
	import Slots from './Slots.svelte';
</script>

<div class="container">
	<div class="slot">
		<slot name="header">default header</slot>
	</div>
	<div class="slot">
		<slot name="body">default body</slot>
	</div>
	<div class="slot">
		<slot name="footer">default footer</slot>
	</div>
</div>

<style>
	.container {
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 3fr 1fr;
		gap: 3px;
	}
	.slot {
		background-color: lightseagreen;
		border-radius: 9px;
	}
</style>
