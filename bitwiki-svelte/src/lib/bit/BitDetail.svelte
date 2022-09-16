<script lang='ts'>
    import { isEmpty } from "lodash";
    import type { Bit } from "./type";

    export let fileName = '';
    let bitPromise: Promise<Bit>;

    const getBitDetails = async (bitName: string) =>{
        const res = await fetch(`/api/bit-storage/${bitName}`);
        if(!res.ok){
            const message = await res.text();
            throw new Error(message);
        }
        const json = await res.json();
        return json;
    }

    const deleteBit = async(bitName: string) =>{
        const res = await fetch(`/api/bit-storage/${bitName}`, {method: 'DELETE'});
        if(!res.ok){
            const message = await res.text();
            throw new Error(message);
        }
        const json = await res.json();
        return json;
    }


    $: if(!isEmpty(fileName)){
        bitPromise = getBitDetails(fileName);
    }
</script>

<div>
    {#await bitPromise}
        <div>...loading</div>
    {:then bit}
        <div>
            <div>{bit.markdown}</div>
            <button on:click={()=>deleteBit(fileName)}>Delete</button>
        </div>
    {:catch error}
        <div>{error.message}</div>
    {/await}
</div>