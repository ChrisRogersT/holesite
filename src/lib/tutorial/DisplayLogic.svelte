<script lang='ts'>
    import {tick, onMount} from 'svelte';
    import Card from "$lib/layout/Card.svelte";

    let isButtonDisabled = true; //this and the onMount function are so that the button doesn't appear ready before it is interactable
    onMount( async ()=>{
        await tick();
        isButtonDisabled = false;
    });

    let shouldShow: boolean = false;
    const toggleShouldShow: ()=>void=()=>shouldShow=!shouldShow;

    let collectionOfNumbers: {number:number}[] = [];
    const addEntry: ()=>void=()=>{
        collectionOfNumbers = [...collectionOfNumbers, {number: collectionOfNumbers.length*50}];
    }

    const promise = new Promise((resolve)=>setTimeout(()=>resolve(5),5000));
</script>

<Card>
    <h1>Display Logic</h1>
    <div class='twoColumns'>
        <div>
            <h1>Conditional</h1>
            {#if shouldShow}
                <p>I'm showing</p>
            {:else}
                <p>I'm hiding</p>
            {/if}
            <button on:click={toggleShouldShow} disabled={isButtonDisabled}>Toggle!</button>
        </div>
        <div>
            <h1>Iteration</h1>
            <button on:click={addEntry} disabled={isButtonDisabled}>Add entry</button>
            {#each collectionOfNumbers as {number} (number)}
                <div style={`background-color:rgba(${number%255},${number%255},${number%255},0.3);`}>{number}</div>
            {/each}
        </div>
        <div>
            <h1>Async</h1>
            {#await promise}
	            <p>...waiting</p>
            {:then number}
	            <p>The number is {number}</p>
            {/await}
        </div>
    </div>
</Card>

<style>
    .twoColumns {
        display: grid;
        gap: 9px;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;
    }
</style>