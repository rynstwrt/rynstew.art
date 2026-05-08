<script lang="ts">
    import {
        Card,
        Button
    } from "flowbite-svelte";

    let {title, href, preview = ""} = $props();
</script>


<Card class="p-3">
    <h3 class="text-2xl font-light tracking-wide">{title}</h3>
    <a {href} class="text-sm font-thin text-accent tracking-wide wrap-anywhere">[Click to visit]</a>
    <!--<Button class="bg-accent">Visit</Button>-->
    <div class="w-full h-50 mt-2">
        <img src={preview}
             alt="Preview of {href}"
             class="w-full h-full object-cover object-top"/>
    </div>
</Card>