<script lang='ts'>
    import AddButton from "$lib/components/AddButton.svelte";
	import { filter } from "lodash";
    import { onMount } from "svelte";
    let files: string[] = [];

    let filterString: string = '';

    $: filteredFiles = filter(files, (value)=>value.includes(filterString));

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

<div class="main-page-container">
    <input placeholder="FILTER BITS..." class="filter-input" bind:value={filterString}/>
    <div class="bit-grid">
        {#await getBitListPromise}
            <div>...loading</div>
        {:then}        
        {#each filteredFiles as file}
            <a class="bit-link" href={`/${file}`}>{file}</a>
        {/each}
        {:catch error}
            <div>{error.message}</div>
        {/await}
    </div>
</div>
    
<AddButton />

<style>
    .main-page-container{
        margin: 4rem 4rem 0 4rem;
        
        flex: 1 1 auto;
        align-self: stretch;

        display: flex;
        flex-flow: column nowrap;
        align-items: stretch;
    }
    .filter-input{
        flex: 0 0 auto;
        color: lightgray;
        border: none;
        border-bottom: 2px solid lightgray;
        margin-bottom: 2rem;
    }
    .bit-grid{
        flex: 1 1 auto;
        display: grid;
        grid-gap: 1rem;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        align-items: start;
    }
    .bit-link{
        text-decoration: none;
        color: black;
    }
</style>