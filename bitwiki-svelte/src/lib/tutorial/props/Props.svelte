<script lang="ts">
	import Card from '$lib/layout/Card.svelte';
	import ComponentWithProps from './ComponentWithProps.svelte';

	const exampleProps = { prop: 'prop from spread', defaultedProp: 'overriden from spread' };
</script>

<Card>
	<h1>Props</h1>
	<ComponentWithProps prop="just prop passed in" />
	<hr />
	<ComponentWithProps prop="prop and default prop passed in" defaultedProp="overriden prop" />
	<hr />
	<ComponentWithProps {...exampleProps} />
</Card>
