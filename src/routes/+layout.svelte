<script lang="ts">
    import './layout.css';
    import ParticleBg from "$lib/components/ParticleBG.svelte";
    let {children} = $props();
</script>


<svelte:head>
    <title>rynstew.art</title>
    <meta name="description" content="The homepage of rynstew.art."/>
</svelte:head>


<ParticleBg/>

{@render children()}
