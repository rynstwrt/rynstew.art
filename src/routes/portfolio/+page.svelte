<script lang="ts">
    import {
        // GlobeOutline,
        GlobeSolid,
        PenNibSolid
    } from "flowbite-svelte-icons";
    import { resolve } from "$app/paths";
    import PortfolioButton from "$lib/components/PortfolioButton.svelte";
</script>


<div class="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center h-full gap-15">
    <PortfolioButton Icon={GlobeSolid}
                     text="Websites"
                     href={resolve("/websites")}/>

    <PortfolioButton Icon={PenNibSolid}
                     text="Design"
                     href={resolve("/design")}/>
</div>