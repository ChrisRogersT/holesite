<script lang='ts'>
    import AddBitForm from "$lib/bit/AddBitForm.svelte";
    import BitDetail from "$lib/bit/BitDetail.svelte";
    import Card from "$lib/layout/Card.svelte";
    import { onMount } from "svelte";
    let isFilesLoading = true;
    let errorMessage = '';
    let files: string[] = []; //TODO the promise pattern would simplify this but I think you are supposed to run network requests in on mount so not certain how to simplify that

    let selectedFile = '';

    const getBitList = async ()=>{
        try {
            const res = await fetch(`/api/bit-storage/all`);
            const json = await res.json();
            if(Array.isArray(json)){
                files = json;
            } else {
                throw new Error('response isnt an array')
            }
        } catch (e:any){
            errorMessage = JSON.parse(e);
        }
    }

    onMount(async()=>{
        try{
            await getBitList();
        } finally {
            isFilesLoading = false;
        }
    });
</script>
    
    <Card>
        <h1>Files</h1>
        {#if isFilesLoading}
            <div>...loading</div>
        {:else}
            {#if errorMessage}
                <div>{errorMessage}</div>
            {:else}
                {#each files as file}
                    <button on:click={()=>selectedFile=file}>{file}</button>
                {/each}
            {/if}
        {/if}
    </Card>
    {#if selectedFile}
        <Card>
            <h1>{selectedFile}</h1>
            <BitDetail fileName={selectedFile}/>
        </Card>
    {/if}
    <AddBitForm mutateFunction={getBitList}/>