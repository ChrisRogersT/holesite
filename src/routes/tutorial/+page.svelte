<script>
    import AdvancedStyles from "$lib/tutorial/AdvancedStyles.svelte";
    import Bindings from "$lib/tutorial/Bindings.svelte";
    import DisplayLogic from "$lib/tutorial/DisplayLogic.svelte";
    import Props from "$lib/tutorial/props/Props.svelte";
    import ReactiveStatements from "$lib/tutorial/ReactiveStatements.svelte";
    import Slots from "$lib/tutorial/slots/Slots.svelte";
    import Stores from "$lib/tutorial/stores/Stores.svelte";
</script>

<h1>Tutorial Page</h1>
<div class="grid">
    <AdvancedStyles />
    <Bindings />
    <DisplayLogic />
    <Props />
    <ReactiveStatements/>
    <Slots />
    <Stores />
</div>

<style>
    .grid {
        display: flex;
        flex-flow: row wrap;
        align-content: stretch;
    }
</style>