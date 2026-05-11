<script lang="ts">
    import { resolve } from "$app/paths";

    import {
        GithubSolid,
        FileLinesOutline,
        GlobeOutline,
        PenNibOutline
    } from "flowbite-svelte-icons";

    import SocialButton from "$lib/components/SocialButton.svelte";
</script>


<main class="absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-center items-center">
    <div class="w-xs">
        <h1 class="text-[3.5rem] font-medium  uppercase text-accent tracking-wide">Ryn<br/>Stewart</h1>

        <p class="text-lg font-light font-source-code-pro mt-1 leading-6">Artist and developer in Dallas, Texas.</p>

        <div class="flex flex-col mt-3 gap-1.5 *:gap-1.5">
            <div class="flex">
                <!--<SocialButton Icon={LinkedinSolid}-->
                <!--              href="https://linkedin.com/in/rynstwrt"-->
                <!--              target="_blank"-->
                <!--              classes="w-fit"/>-->
                <SocialButton Icon={GithubSolid}
                              href="https://github.com/rynstwrt"
                              target="_blank"
                              classes="w-fit"/>
                <SocialButton Icon={FileLinesOutline}
                              text="View Resume"
                              href={resolve("/resume")}
                              classes="w-full"/>
            </div>
            <div class="flex">
                <SocialButton Icon={GlobeOutline}
                              text="Websites"
                              href={resolve("/websites")}/>
                <SocialButton Icon={PenNibOutline}
                              text="Design Portfolio"
                              href={resolve("/portfolio")}
                              classes="w-full"/>
            </div>
        </div>
    </div>
</main>