<script lang="ts">
    import {
        Tabs,
        TabItem,
    } from "flowbite-svelte";
    import {
        GlobeSolid,
        HomeOutline,
        PenNibSolid
    } from "flowbite-svelte-icons";
    import { resolve } from "$app/paths";
    import BoxButton from "$lib/components/BoxButton.svelte";
    import DesignGallery from "$lib/components/DesignGallery.svelte";
</script>


<BoxButton href={resolve("/")}
           Icon={HomeOutline}
           text="Return Home"
           classes="w-fit place-self-center mt-8 mb-6"/>


<DesignGallery />


<!--<div class="p-3 h-full">-->
    <!--<Tabs tabStyle="full" class="flex divide-x shadow-sm rtl:divide-x-reverse divide-gray-700">-->
    <!--    <TabItem class="w-full">-->
    <!--        {#snippet titleSlot()}-->
    <!--            <div class="flex justify-center items-center gap-2">-->
    <!--                <GlobeSolid size="md"/>-->
    <!--                Websites-->
    <!--            </div>-->
    <!--        {/snippet}-->
    <!--        <p>WEBSITES</p>-->
    <!--    </TabItem>-->

    <!--    <TabItem open class="w-full">-->
    <!--        {#snippet titleSlot()}-->
    <!--            <div class="flex justify-center items-center gap-2">-->
    <!--                <PenNibSolid size="md"/>-->
    <!--                Design-->
    <!--            </div>-->
    <!--        {/snippet}-->
    <!--        <p>DESIGN</p>-->
    <!--    </TabItem>-->
    <!--</Tabs>-->
<!--</div>-->