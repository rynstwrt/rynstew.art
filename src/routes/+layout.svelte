<script lang="ts">
    import './layout.css';

    import { page } from "$app/state";

    import {
        Navbar,
        NavBrand,
        NavLi,
        NavUl,
        NavHamburger
    } from "flowbite-svelte";

    import ParticleBg from "$lib/components/ParticleBG.svelte";

    let {children} = $props();

    let activeUrl = $derived(page.url.pathname);
</script>


<ParticleBg/>

<Navbar class="">
    <NavBrand href="/">
        <img src="/src/lib/images/logo.svg" alt="Ryn Stewart logo" class="me-3 h-6 sm:h-9"/>
        <span class="self-center text-xl font-semibold whitespace-nowrap">Ryn.</span>
    </NavBrand>
    <NavHamburger/>
    <NavUl {activeUrl}>
        <NavLi href="/">Home</NavLi>
        <NavLi href="/resume">Resume</NavLi>
        <NavLi href="/portfolio">Portfolio</NavLi>
    </NavUl>
</Navbar>

{@render children()}
