<script lang="ts">
    import {
        Navbar,
        NavUl,
        NavLi,
        NavHamburger,
        NavBrand
    } from "flowbite-svelte";
    import { resolve } from "$app/paths";
    import { page } from "$app/state";

    let activeUrl = $derived(page.url.pathname);
</script>


<Navbar class="px-4 py-4 z-100">
    <NavBrand href={resolve("/")} class="flex items-center">
        <enhanced:img src={"images/logo.svg"} alt="Ryn Logo" class="me-3 h-7 pt-0.5"/>
        <span class="self-center text-xl font-semibold tracking-wide whitespace-nowrap text-white">Ryn.</span>
    </NavBrand>

    <NavHamburger/>

    <NavUl {activeUrl} class="*:font-normal">
        <NavLi href={resolve("/")}>Home</NavLi>
        <NavLi href={resolve("/resume")}>Resume</NavLi>
        <NavLi href={resolve("/websites")}>Websites</NavLi>
        <NavLi href={resolve("/design")}>Design</NavLi>
    </NavUl>
</Navbar>