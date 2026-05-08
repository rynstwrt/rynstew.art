<script lang="ts">
    import { HomeOutline } from "flowbite-svelte-icons";
    import BoxButton from "$lib/components/BoxButton.svelte";
    import { resolve } from "$app/paths";
    import { PDFViewer } from "@embedpdf/svelte-pdf-viewer";

    let {src} = $props();
</script>


<BoxButton href={resolve("/")}
           Icon={HomeOutline}
           text="Return Home"
           classes="w-fit place-self-center mt-8 mb-6"/>


<main class="w-full flex-1 rounded-lg overflow-hidden max-w-5xl place-self-center">
    <PDFViewer
        config={{
            src: src,
            theme: {
                preference: 'dark',
                dark: {
                    accent: {
                        primary: "#ff6000"
                    }
                }
            },
            disabledCategories: [
                "annotation",
                "form",
                "annotation-shape",
                "redaction",
                "document-open",
                "document-close",
                "document-print",
                "document-protect",
                "panel",
                "tools",
                "selection",
                "history",
                "insert"
            ]
        }}
        class="w-full h-full"/>
</main>