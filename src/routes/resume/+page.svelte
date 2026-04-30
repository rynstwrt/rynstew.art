<script lang="ts">
    import PDFEmbed from "$lib/components/PDFEmbed.svelte";
</script>


<svelte:head>
    <title>rynstew.art - Resume</title>
    <meta name="description" content="The résumé of Ryn Stewart."/>
</svelte:head>


<div class="h-11/12">
    <PDFEmbed src="/resume.pdf"/>
</div>