<script lang="ts">
    import PhotoSwipeLightbox from "photoswipe/lightbox";
    import "photoswipe/style.css";
    import { onMount } from "svelte";

    let {id, images} = $props();

    onMount(() => {
        let lightbox = new PhotoSwipeLightbox({
            gallery: `#${id}`,
            children: "a",
            pswpModule: () => import("photoswipe")
        });

        lightbox.init();
    });
</script>


<div class="pswp-gallery h-screen" id={id}>
    {#each images as image}
        <a href={image.src}
           data-pswp-width={500}
           data-pswp-height={500}
           target="_blank"
           rel="noreferrer">
            <img src={image.src} alt={image.alt}/>
        </a>
    {/each}
</div>