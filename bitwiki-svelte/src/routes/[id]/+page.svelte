<script lang='ts'>
    export let data: import('$lib/bit/type').Bit & {id: string};

	import AddButton from '$lib/components/AddButton.svelte';
</script>

<div class="bit-detail-container">
    <div class="bit-title">{data.id}</div>
    <div class="bit-author">{data.author}</div>
    <div class="bit-markdown">{data.markdown}</div>
    <div class="bit-media">placeholder media</div>
</div>
<AddButton />

<style>
    .bit-detail-container {
        margin: 2rem 12rem 0 12rem;

        flex: 1 1 auto;

        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: min-content min-content 1fr;
        grid-template-areas:
            "title title"
            "author author"
            "markdown media";
    }
    .bit-title {
        justify-self: center;
        grid-area: title;
        font-size: 5rem;
    }
    .bit-author {
        justify-self: center;
        grid-area: author;
        font-size: 3rem;
    }
    .bit-markdown {
        grid-area: markdown;
    }
    .bit-media {
        grid-area: media;
    }
</style>