<script lang="ts">
    import {
        GlobeSolid,
        HomeOutline,
        PenNibSolid
    } from "flowbite-svelte-icons";
    import { resolve } from "$app/paths";
    import BoxButton from "$lib/components/BoxButton.svelte";
</script>


<BoxButton href={resolve("/")}
           Icon={HomeOutline}
           text="Return Home"
           classes="w-fit place-self-center mt-8 mb-6"/>


<div class="h-5/12 flex justify-center items-center gap-4 *:w-40 *:justify-center">
    <BoxButton href={resolve("/portfolio/websites")}
               Icon={GlobeSolid}
               text="Websites"/>

    <BoxButton href={resolve("/portfolio/design")}
               Icon={PenNibSolid}
               text="Design"/>
</div>