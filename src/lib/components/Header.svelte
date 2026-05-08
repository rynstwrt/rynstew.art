<script lang="ts">
    import {
        Navbar,
        NavUl,
        NavLi,
        NavHamburger,
        NavBrand
    } from "flowbite-svelte";
    import { resolve } from "$app/paths";
</script>


<Navbar class="px-5 py-4 z-100">
    <NavBrand href={resolve("/")} class="flex items-center">
        <img src="/src/lib/images/logo.svg"
             class="me-3 h-7 pt-0.5"
             alt="Ryn Logo" />
        <span class="self-center text-xl font-semibold tracking-wide whitespace-nowrap text-white">Ryn.</span>
    </NavBrand>

    <NavHamburger/>

    <NavUl>
        <NavLi href={resolve("/")}>Home</NavLi>
        <NavLi href={resolve("/resume")}>Resume</NavLi>
        <NavLi href={resolve("/websites")}>Websites</NavLi>
        <NavLi href={resolve("/design")}>Design</NavLi>
        <!--<NavLi href={resolve("/portfolio")}>Portfolio</NavLi>-->
    </NavUl>
</Navbar>