<script lang="ts">
    import {
        HomeOutline,
        ArrowLeftOutline
    } from "flowbite-svelte-icons";
    import { resolve } from "$app/paths";
    import BoxButton from "$lib/components/BoxButton.svelte";
    import DesignGallery from "$lib/components/DesignGallery.svelte";
</script>


<div class="flex justify-center gap-2 mt-8 mb-6 *:min-w-25 *:justify-center">
    <BoxButton href={resolve("/portfolio")}
               Icon={ArrowLeftOutline}
               text="Back"/>

    <BoxButton href={resolve("/")}
               Icon={HomeOutline}
               text="Return Home"/>
</div>


