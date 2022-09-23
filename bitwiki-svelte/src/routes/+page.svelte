<script lang='ts'>
    import AddButton from "$lib/components/AddButton.svelte";
    import { onMount } from "svelte";
    let files: string[] = [];

    let filterString: string = '';

    let getBitListPromise: Promise<any> = new Promise(()=>null);

    const getBitListRequest = async ()=>{
        const res = await fetch(`/api/bit-storage/all`);
        const json = await res.json();
        if(Array.isArray(json)){
            files = json;
        } else {
            throw new Error('response isnt an array')
        }
    }
    
    const getBitList = ()=>{
        getBitListPromise = getBitListRequest();
    }

    onMount(getBitList);
</script>

<div class="main-container">
    <div>
        <input placeholder="FILTER BITS..." class="filter-input" bind:value={filterString}/>
    </div>
    <div class="bit-grid">
        {#await getBitListPromise}
        <div>...loading</div>
        {:then}        
        {#each files as file}
        <button on:click={()=>alert(file)}>{file}</button>
        {/each}
        {:catch error}
        <div>{error.message}</div>
        {/await}
    </div>
</div>
    
<AddButton />

<style>
    .main-container{
        display: flex;
        flex-flow: column nowrap;
    }
    .filter-input{
        color: lightgray;
        border: none;
        border-bottom: 2px solid lightgray;
    }
    .bit-grid{
        display: grid;
    }
</style>