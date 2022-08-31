<script lang='ts'>
import Card from "$lib/layout/Card.svelte";
import { onMount } from "svelte";
    let data = '...loading';

    onMount(async ()=>{
        const res = await fetch(`/tutorial/api/random-number`);
        const json = await res.json();
        data = json;
    });
</script>

<Card>
    <h1>Server</h1>
    data: {data}
</Card>