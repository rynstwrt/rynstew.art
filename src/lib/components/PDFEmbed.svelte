<script lang="ts">
    import { onMount } from "svelte";

    let {src} = $props();

    let PDFViewer: typeof import('@embedpdf/svelte-pdf-viewer').PDFViewer | undefined = $state();

    onMount(async () => {
        const module = await import("@embedpdf/svelte-pdf-viewer");
        PDFViewer = module.PDFViewer;
    });
</script>


<div class="h-full mx-1 sm:mx-2 md:mx-3 rounded-sm overflow-hidden">
    {#if PDFViewer}
        <PDFViewer class="w-full h-full" config={{
            src: src,
            theme: {
                preference: "dark",
                dark: {
                    accent: {
                        primary: "#ff6000"
                    }
                }
            },
            disabledCategories: [
                "annotation",
                "panel",
                "redaction",
                "form",
                "shapes",
                "insert",
                "pointer",
                "pan",
                "document-protect",
                "rotate"
            ]
        }}/>
    {/if}
</div>