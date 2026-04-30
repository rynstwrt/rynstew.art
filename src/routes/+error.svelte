<script lang="ts">
    import { page } from "$app/state";
    import { resolve } from "$app/paths";
</script>


<main class="w-full h-full flex flex-col justify-center items-center">
    <div class="border border-white/50 px-8 py-7 backdrop-brightness-90 backdrop-blur-xs">
        <div class="flex items-center">
            <h1 class="text-4xl font-medium uppercase text-gray-300 tracking-wide">Error</h1>
            <div class="h-9 w-0.5 mx-3 bg-white/30"></div>
            <h2 class="text-4xl font-medium text-accent">{page.status}</h2>
        </div>
        <p class="text-base font-light text-gray-300 mt-0.5">{page.error!.message}</p>
        <a href={resolve("/")} class="text-base font-normal text-accent mt-2 block">Click to return home.</a>
    </div>
</main>