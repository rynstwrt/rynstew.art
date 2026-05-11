<script lang="ts">
    import { PDFViewer } from "@embedpdf/svelte-pdf-viewer";

    let {src} = $props();
</script>


<main class="h-full sm:mx-2 md:mx-5 lg:mx-10 xl:mx-20 rounded-sm overflow-hidden">
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
        class="h-full"/>
</main>