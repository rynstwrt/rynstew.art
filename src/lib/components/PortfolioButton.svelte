<script lang="ts">
    import { Button } from "flowbite-svelte";
    let {Icon, text, href} = $props();
</script>


<div class="flex flex-col items-center">
    <Button pill class="border border-gray-400 text-accent p-3.5 opacity-80 hover:opacity-100 transition-opacity" {href}>
        <Icon class="w-8 h-8"/>
    </Button>

    <p class="text-center font-light text-gray-300 mt-2.5 tracking-wider uppercase text-sm">{text}</p>
</div>