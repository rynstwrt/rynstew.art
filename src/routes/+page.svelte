<script lang="ts">
    import { resolve } from "$app/paths";

    import {
        GithubSolid,
        FileLinesOutline,
        LinkedinSolid,
        GlobeOutline,
        SwatchbookOutline
    } from "flowbite-svelte-icons";

    import BoxButton from "$lib/components/BoxButton.svelte";
</script>


<main class="flex-1 flex flex-col justify-center items-center">
    <div class="w-xs">
        <h1 class="text-[3.5rem] font-medium  uppercase text-accent">Ryn<br/>Stewart</h1>
        <p class="text-lg font-light font-source-code-pro mt-1 leading-6">Artist and developer in Dallas, Texas.</p>


        <div id="social-grid" class="grid gap-1.5 mt-3">
            <BoxButton href="https://linkedin.com/in/rynstwrt"
                       target="_blank"
                       Icon={LinkedinSolid}
                       classes="w-fit aspect-square justify-center"/>

            <BoxButton href="https://github.com/rynstwrt"
                       target="_blank"
                       Icon={GithubSolid}
                       classes="w-fit aspect-square justify-center"/>

            <BoxButton href={resolve("/websites")}
                       Icon={GlobeOutline}
                       text="Websites"/>

            <BoxButton href={resolve("/resume")}
                       Icon={FileLinesOutline}
                       text="View Resume"
                       classes="col-span-full"/>
            <!--<BoxButton href={resolve("/portfolio")}-->
            <!--           Icon={SwatchbookOutline}-->
            <!--           text="Design Portfolio"/>-->

            <!--<BoxButton href="https://linkedin.com/in/rynstwrt"-->
            <!--           Icon={LinkedinSolid}-->
            <!--           text="LinkedIn" />-->

            <!--<BoxButton href="https://github.com/rynstwrt"-->
            <!--           Icon={GithubSolid}-->
            <!--           text="GitHub"/>-->
        </div>

        <!--<div class="mt-4">-->
        <!--    <a href="https://github.com/rynstwrt" class="block">-->
        <!--        <GithubSolid class="shrink-0 h-7 w-7 text-gray-300 opacity-80 hover:opacity-100 transition-opacity" />-->
        <!--    </a>-->
        <!--</div>-->
    </div>
</main>


<style>
    #social-grid {
        /*grid-template-columns: auto 1fr 1fr;*/
        grid-template-columns: auto auto 1fr;
    }
</style>