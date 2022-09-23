<script>
    import Nav from '$lib/nav/Nav.svelte';
</script>

<Nav />
<slot></slot>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
    <style>
        body{
            font-family: 'Inter';
            margin: 0;
            background-color: #fefefe;
        }
    </style>
</svelte:head>
