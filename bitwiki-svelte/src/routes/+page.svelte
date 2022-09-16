<script lang='ts'>
    import AddBitForm from "$lib/bit/AddBitForm.svelte";
    import BitDetail from "$lib/bit/BitDetail.svelte";
    import Card from "$lib/layout/Card.svelte";
    import { onMount } from "svelte";
    let files: string[] = [];

    let selectedFile = '';

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
    
    <Card>
        <h1>Files</h1>
        {#await getBitListPromise}
            <div>...loading</div>
        {:then}        
            {#each files as file}
                <button on:click={()=>selectedFile=file}>{file}</button>
            {/each}
        {:catch error}
            <div>{error.message}</div>
        {/await}
    </Card>
    {#if selectedFile}
        <Card>
            <h1>{selectedFile}</h1>
            <BitDetail fileName={selectedFile}/>
        </Card>
    {/if}
    <AddBitForm mutateFunction={getBitList}/>