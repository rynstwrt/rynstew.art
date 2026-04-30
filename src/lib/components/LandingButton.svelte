<script lang="ts">
    let {
        Icon,
        text=undefined,
        href="",
        target="_self",
        classes=""
    } = $props();
</script>


<a {href} {target} class="{classes} border border-gray-400 p-1.25 flex items-center opacity-80 hover:opacity-100 transition-opacity">
    <Icon size="md" class="text-accent"/>

    {#if text}
        <span class="text-base font-thin text-gray-200 tracking-wide ms-1 text-nowrap break-after-avoid">{text}</span>
    {/if}
</a>