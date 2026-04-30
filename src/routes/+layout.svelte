<script lang="ts">
    import './layout.css';

    import ParticleBg from "$lib/components/ParticleBG.svelte";

    let {children} = $props();
</script>


<svelte:head>
    <title>rynstew.art</title>
    <meta name="description" content="The homepage of Ryn Stewart."/>
    <meta property="og:title" content="rynstew.art"/>
    <meta property="og:description" content="The homepage of Ryn Stewart."/>
    <meta property="og:url" content="https://rynstew.art"/>
    <meta property="og:image" content="https://rynstew.art/preview.png"/>
    <meta name="twitter:image" content="https://rynstew.art/preview.png"/>
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>


<ParticleBg/>
{@render children()}
