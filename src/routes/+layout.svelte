<script lang="ts">
    import './layout.css';

    import {
        Navbar,
        NavBrand,
        NavHamburger,
        NavLi,
        NavUl
    } from "flowbite-svelte";

    import ParticleBg from "$lib/components/ParticleBG.svelte";
    import { resolve } from "$app/paths";
    import { page } from "$app/state";

    let {children} = $props();

    let activeUrl = $derived(page.url.pathname);
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

<Navbar>
    <NavBrand href={resolve("/")}>
        <img src="/favicon.svg" alt="Logo" class="me-2 h-6" />
        <span class="text-lg font-medium whitespace-nowrap">rystew.art</span>
    </NavBrand>
    <NavHamburger/>
    <NavUl {activeUrl}>
        <NavLi href={resolve("/")}>Home</NavLi>
        <NavLi href={resolve("/resume")}>Resume</NavLi>
        <NavLi href={resolve("/portfolio")}>Design</NavLi>
        <NavLi href={resolve("/websites")}>Websites</NavLi>
    </NavUl>
</Navbar>

{@render children()}
