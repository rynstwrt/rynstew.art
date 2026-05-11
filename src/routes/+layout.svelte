<script lang="ts">
    import './layout.css';

    import ParticleBg from "$lib/components/ParticleBG.svelte";
    import { resolve } from "$app/paths";
    import { Navbar, NavBrand, NavHamburger, NavLi, NavUl } from "flowbite-svelte";
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
    <meta property="og:image" content="https://rynstew.art/images/preview.png"/>
    <meta name="twitter:image" content="https://rynstew.art/images/preview.png"/>
    <meta name="twitter:card" content="summary_large_image"/>
</svelte:head>


<ParticleBg/>

<Navbar class="px-4 py-4 z-100">
    <NavBrand href={resolve("/")} class="flex items-center">
        <enhanced:img src={"images/logo.svg"} alt="Ryn Logo" class="me-3 h-7 pt-0.5"/>
        <span class="self-center text-xl font-semibold tracking-wide whitespace-nowrap text-white">Ryn.</span>
    </NavBrand>

    <NavHamburger/>

    <NavUl {activeUrl}>
        <NavLi href={resolve("/")}>Home</NavLi>
        <NavLi href={resolve("/resume")}>Resume</NavLi>
        <NavLi href={resolve("/websites")}>Websites</NavLi>
        <NavLi href={resolve("/portfolio")}>Portfolio</NavLi>
    </NavUl>
</Navbar>

{@render children()}