<script lang="ts">
    import {
        GlobeSolid,
        PenNibSolid
    } from "flowbite-svelte-icons";
    import { resolve } from "$app/paths";
    import BoxButton from "$lib/components/BoxButton.svelte";
</script>


<div class="h-5/12 flex justify-center items-center gap-4 *:w-40 *:justify-center">
    <BoxButton href={resolve("/websites")}
               Icon={GlobeSolid}
               text="Websites"/>

    <BoxButton href={resolve("/design")}
               Icon={PenNibSolid}
               text="Design"/>
</div>