<script lang="ts">
    import { resolve } from "$app/paths";

    import {
        GithubSolid,
        FileLinesOutline,
        LinkedinSolid
    } from "flowbite-svelte-icons";

    import BoxButton from "$lib/components/BoxButton.svelte";
</script>


<main class="flex-1 flex flex-col justify-center items-center">
    <div class="w-xs">
        <h1 class="text-[3.5rem] font-medium  uppercase text-accent">Ryn<br/>Stewart</h1>
        <p class="text-lg font-light font-source-code-pro mt-1 leading-6">Artist and developer in Dallas, Texas.</p>

        <div id="social-grid" class="grid mt-3 gap-1.5">
            <BoxButton href="https://linkedin.com/in/rynstwrt"
                       target="_blank"
                       Icon={LinkedinSolid}
                       classes="aspect-square justify-center"/>
            <BoxButton href="https://github.com/rynstwrt"
                       target="_blank"
                       Icon={GithubSolid}
                       classes="aspect-square justify-center"/>
            <BoxButton href={resolve("/portfolio")}
                       Icon={FileLinesOutline}
                       text="View Portfolio"/>
            <BoxButton href={resolve("/resume")}
                       Icon={FileLinesOutline}
                       text="View Resume"
                       classes="col-span-full"/>
        </div>
    </div>
</main>


<style>
    #social-grid {
        grid-template-columns: auto auto 1fr;
    }
</style>