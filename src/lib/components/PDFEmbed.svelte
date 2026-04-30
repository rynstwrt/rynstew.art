<script lang="ts">
    import { PDFViewer } from "@embedpdf/svelte-pdf-viewer";

    let {src} = $props();
</script>


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