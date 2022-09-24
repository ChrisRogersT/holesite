<script>
    import Nav from '$lib/nav/Nav.svelte';
</script>

<div class="main-layout-container">
    <Nav />
    <slot></slot>
</div>

<svelte:head>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter">
    <style>
        body{
            font-family: 'Inter';
            margin: 0;
            background-color: #fefefe;
        }
        .main-layout-container {
            height: 100vh;
            width: 100vw;
            display: flex;
            flex-flow: column nowrap;
        }
    </style>
</svelte:head>
