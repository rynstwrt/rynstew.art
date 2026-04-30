<script lang="ts">
    import './layout.css';
    let {children} = $props();
</script>


<svelte:head>
    <title>rynstew.art</title>
    <meta name="description" content="The homepage of rynstew.art."/>
</svelte:head>


{@render children()}