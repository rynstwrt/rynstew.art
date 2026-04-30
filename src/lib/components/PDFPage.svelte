<script lang="ts">
    import { HomeOutline } from "flowbite-svelte-icons";
    import LandingButton from "$lib/components/LandingButton.svelte";
    import PDFEmbed from "$lib/components/PDFEmbed.svelte";
    import { base } from "$app/paths";

    let {src} = $props();
</script>


<LandingButton href="{base}/"
               Icon={HomeOutline}
               text="Return Home"
               classes="w-fit place-self-center mt-8 mb-6"/>


<main class="flex-1 rounded-md overflow-hidden">
    <PDFEmbed {src}/>
</main>