<script lang="ts">
    let {Icon, text = undefined, href, target = undefined, classes = ""} = $props();
</script>


<a {href} {target}
   class="border border-gray-400 p-1.75 opacity-80 hover:opacity-100 transition-opacity {classes}">
    <span class="flex items-center">
        <Icon class="w-5 h-5 text-accent"/>
        {#if text}
            <span class="font-thin text-gray-200 tracking-tight ms-1.5">{text}</span>
        {/if}
    </span>
</a>