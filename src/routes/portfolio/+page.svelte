<script lang="ts">
    // import { resolve } from "$app/paths";
    // import DesignGallery from "$lib/components/DesignGallery.svelte";
    //
    // import * as Select from "$lib/components/ui/select/index.js";
    // import { Button } from "$lib/components/ui/button/index.js";
    // import House from "@lucide/svelte/icons/house"
    // import WebsiteGallery from "$lib/components/WebsiteGallery.svelte";

    // const sections = [
    //     {value: "websites", label: "Website Portfolio"},
    //     {value: "design", label: "Design Portfolio"}
    // ]
    //
    // let selectValue = $state("design");
    //
    // const triggerContent = $derived(
    //     sections.find((s) => s.value === selectValue)?.label ?? "Select a section"
    // );

    import * as UnderlineTabs from "$lib/components/ui/underline-tabs";
</script>


<div class="relative w-full">
    <UnderlineTabs.Root value="design">
        <UnderlineTabs.List>
            <UnderlineTabs.Trigger value="websites">Websites</UnderlineTabs.Trigger>
            <UnderlineTabs.Trigger value="design">Design</UnderlineTabs.Trigger>
        </UnderlineTabs.List>
    </UnderlineTabs.Root>
</div>


<!--<div class="flex justify-center items-center my-10">-->
<!--    <Button variant="outline"-->
<!--            size="icon-lg"-->
<!--            aria-label="Return Home"-->
<!--            class="me-2 bg-gray-800!"-->
<!--            href={resolve("/")}>-->
<!--        <House/>-->
<!--    </Button>-->

<!--    <Select.Root type="single"-->
<!--                 name="portfolioSection"-->
<!--                 bind:value={selectValue}>-->
<!--        <Select.Trigger class="w-45 bg-gray-800">-->
<!--            {triggerContent}-->
<!--        </Select.Trigger>-->
<!--        <Select.Content>-->
<!--            <Select.Group>-->
<!--                <Select.Label>Sections</Select.Label>-->
<!--                {#each sections as section}-->
<!--                    <Select.Item value={section.value} label={section.label}>{section.label}</Select.Item>-->
<!--                {/each}-->
<!--            </Select.Group>-->
<!--        </Select.Content>-->
<!--    </Select.Root>-->
<!--</div>-->


<!--{#if selectValue === "websites"}-->
<!--    <WebsiteGallery/>-->
<!--{:else if selectValue === "design"}-->
<!--    <DesignGallery/>-->
<!--{/if}-->
