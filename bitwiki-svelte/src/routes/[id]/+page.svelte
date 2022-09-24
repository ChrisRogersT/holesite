<script>
      /** @type {import('./$types').PageData} */
    export let data;

    import BitDetail from '$lib/bit/BitDetail.svelte';
</script>

<BitDetail fileName={data.id}/>