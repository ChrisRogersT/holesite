<script>
import Card from "$lib/layout/Card.svelte";
import ComponentWithDefaultSlot from "./ComponentWithDefaultSlot.svelte";
import ComponentWithNamedSlots from "./ComponentWithNamedSlots.svelte";
import ComponentWithSlotProps from "./ComponentWithSlotProps.svelte";

</script>
<Card>
    <div class='container'>
        <h1 style:grid-column='1 / 3'>Slots</h1>
        <div>
            <h3>Component with default slot</h3>
            <ComponentWithDefaultSlot/>
        </div>
        <div>
            <h3>Component with default slot overriden</h3>
            <ComponentWithDefaultSlot>
                Child override!
            </ComponentWithDefaultSlot>
        </div>
        <div>
            <h3>Component with slot props</h3>
            <ComponentWithSlotProps let:hovering={active}>
                <div class:active>
                    {#if active}
                        <p>I am being hovered upon.</p>
                    {:else}
                        <p>Hover over me!</p>
                    {/if}
                </div>
            </ComponentWithSlotProps>
        </div>
        <div style:grid-row='2 / 5' style:grid-column='2 / 3'>
            <h3>Component with named slots</h3>
            <ComponentWithNamedSlots>
                <span slot='header'>I'm overriding the header</span>
                <span slot='body' style:display='flex' style:flex-flow="column nowrap">
                    body is a cat pic now
                    <img alt='kitty pic' height='90px' width='160px' src='https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-icRUNzUAego%2FUSWC9OcRp5I%2FAAAAAAAAIWU%2FNSi-9HErIfU%2Fs1600%2F1970_hd_cat_wallpaper.gif&f=1&nofb=1'>
                </span>
            </ComponentWithNamedSlots>
        </div>
    </div>
</Card>

<style>
    .container {
        display: grid;
        column-gap: 12px;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr 1fr;
    }

    @keyframes active-flash {
        from {background-color: lightyellow;}
        to {background-color: lightslategray}
    }
    .active {
        animation-name: active-flash;
        animation-duration: 2s;
        animation-direction: alternate;
        animation-iteration-count: infinite;
    }
</style>