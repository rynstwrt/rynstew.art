<script lang="ts">
    import {
        GithubSolid,
        FileLinesOutline,
        LinkedinSolid
    } from "flowbite-svelte-icons";

    import LandingButton from "$lib/components/LandingButton.svelte";
</script>


<svelte:head>
    <title>rynstew.art - Home</title>
    <meta name="description" content="The homepage of Ryn Stewart."/>
</svelte:head>


<main>
    <div class="w-xs">
        <h1 class="text-6xl font-normal uppercase text-accent">Ryn<br/>Stewart</h1>
        <p class="text-xl font-light font-source-code-pro mt-1">Artist and developer in Dallas, Texas.</p>

        <div id="social-grid" class="grid mt-3 gap-1.5">
            <LandingButton href="https://linkedin.com/in/rynstwrt"
                           target="_blank"
                           Icon={LinkedinSolid}
                           classes="aspect-square justify-center"/>
            <LandingButton href="https://github.com/rynstwrt"
                           target="_blank"
                           Icon={GithubSolid}
                           classes="aspect-square justify-center"/>
            <LandingButton href="/portfolio"
                           Icon={FileLinesOutline}
                           text="View Portfolio"/>
            <LandingButton href="/resume"
                           Icon={FileLinesOutline}
                           text="View Resume"
                           classes="col-span-full"/>
        </div>
    </div>
</main>

<style>
    /*:global(body)*/

    #social-grid {
        grid-template-columns: auto auto 1fr;
    }
</style>