<script lang="ts">
	let hovering: boolean = false;

	function enter() {
		hovering = true;
	}

	function leave() {
		hovering = false;
	}
</script>

<div on:mouseenter={enter} on:mouseleave={leave}>
	<slot {hovering} />
</div>
