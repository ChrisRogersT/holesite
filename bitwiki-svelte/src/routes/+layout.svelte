<script>
    import Nav from '$lib/nav/Nav.svelte';
</script>

<Nav />
<slot></slot>

<svelte:head>
    <style>
        body{
            margin: 0;
            background-color:lightgoldenrodyellow;
        }
    </style>
</svelte:head>
