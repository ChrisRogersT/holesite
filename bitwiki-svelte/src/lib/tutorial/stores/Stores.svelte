<script lang='ts'>
import Card from "$lib/layout/Card.svelte";
import { name } from "./writableStore";
import { time } from "./readableStore";
import { elapsed } from "./derivedStore";
import { count } from "./customStore";
</script>

<Card>
    <h1>Stores</h1>
    <div>
        The name store is {$name}
        <input bind:value={$name}>
        <button on:click="{() => $name += '!'}">
            Add exclamation mark!
        </button>
    </div>
    <div>
        The readable time store is {$time}
    </div>
    <div>
        The derived elapsed time store is {$elapsed}
    </div>
    <div>
        The custom count store is {$count}
        <button on:click={count.increment}>increment</button>
        <button on:click={count.decrement}>decrement</button>
        <button on:click={count.reset}>reset</button>
    </div>
</Card>