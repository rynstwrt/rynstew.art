<script lang="ts">
    import { page } from "$app/state";
</script>


<main class="w-full h-full flex flex-col justify-center items-center">
    <h1 class="text-7xl font-normal tracking-wide text-accent">{page.status}</h1>
    <p class="text-lg font-light tracking-wide mt-1">{page.error!.message}</p>
</main>