<script lang="ts">
    import {
        HomeOutline,
        ArrowLeftOutline
    } from "flowbite-svelte-icons";
    import { resolve } from "$app/paths";
    import BoxButton from "$lib/components/BoxButton.svelte";
    import PortfolioGallery from "$lib/components/PortfolioGallery.svelte";

    let images = [
        {alt: "Glitch Headshot", src: "OrangeCyanHeadshot.jpg", width: 1500, height: 1500},
        {alt: "Nutriwise Company Logo", src: "NutriwiseLogo.png", width: 1000, height: 1000},
        {alt: "Alphabet Designs", src: "AlphabetDesign.png", width: 4200, height: 2100},
        {alt: "Glitch Design", src: "glitch1.jpg", width: 2048, height: 2048},
        {alt: "Glitch Design 2", src: "glitch2.jpg", width: 2048, height: 2048},
        {alt: "Glitch Design 3", src: "glitch3.jpg", width: 2048, height: 2048},
        {alt: "Letter R Design 1", src: "r_designs/1.png", width: 450, height: 450},
        {alt: "Letter R Design 2", src: "r_designs/2.png", width: 450, height: 450},
        {alt: "Letter R Design 3", src: "r_designs/3.png", width: 450, height: 450},
        {alt: "Letter R Design 4", src: "r_designs/4.png", width: 450, height: 450},
        {alt: "ScurryDog Company Logo", src: "ScurryDog.png", width: 1500, height: 1500},
        {alt: "Letter R Design 5", src: "r_designs/5.png", width: 450, height: 450},
        {alt: "Letter R Design 6", src: "r_designs/6.png", width: 450, height: 450},
        {alt: "Letter R Design 7", src: "r_designs/7.png", width: 450, height: 450},
        {alt: "Letter R Design 8", src: "r_designs/8.png", width: 450, height: 450},
        // {alt: "Letter R Design 9", src: "r_designs/9.png", width: 450, height: 450},
    ];

    images.forEach(image => image.src = `/src/lib/images/portfolio/${image.src}`)
</script>


<div class="flex justify-center gap-2 mt-8 mb-6 *:min-w-25 *:justify-center">
    <BoxButton href={resolve("/portfolio")}
               Icon={ArrowLeftOutline}
               text="Back"/>

    <BoxButton href={resolve("/")}
               Icon={HomeOutline}
               text="Return Home"/>
</div>


<PortfolioGallery {images} />