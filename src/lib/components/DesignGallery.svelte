<script lang="ts">
    import {
        Gallery,
        Carousel,
        CarouselIndicators,
        Controls,
        Thumbnails
    } from "flowbite-svelte";
    import { scale } from "svelte/transition";
    import { quintOut } from "svelte/easing";

    let images = [
        {alt: "Glitch Headshot", src: "OrangeCyanHeadshot.jpg"},
        {alt: "Nutriwise Company Logo", src: "NutriwiseLogo.png"},
        {alt: "Alphabet Designs", src: "AlphabetDesign.png"},
        {alt: "Glitch Design", src: "glitch1.jpg"},
        {alt: "Glitch Design 2", src: "glitch2.jpg"},
        {alt: "Glitch Design 3", src: "glitch3.jpg"},
        {alt: "Letter R Design 1", src: "r_designs/1.png"},
        {alt: "Letter R Design 2", src: "r_designs/2.png"},
        {alt: "Letter R Design 3", src: "r_designs/3.png"},
        {alt: "Letter R Design 4", src: "r_designs/4.png"},
        {alt: "ScurryDog Company Logo", src: "ScurryDog.png"},
        {alt: "Letter R Design 5", src: "r_designs/5.png"},
        {alt: "Letter R Design 6", src: "r_designs/6.png"},
        {alt: "Letter R Design 7", src: "r_designs/7.png"},
        {alt: "Letter R Design 8", src: "r_designs/8.png"},
        {alt: "Letter R Design 9", src: "r_designs/9.png"},
    ];

    images.forEach(image => image.src = `/src/lib/images/portfolio/${image.src}`)

    let index = $state(0);

    const transition = (node: HTMLElement) => scale(node, { duration: 500, easing: quintOut });

</script>


<!--<div class="max-w-4xl space-y-4">-->
<!--    <Carousel bind:index={designPortfolioIdx}-->
<!--              images={designPortfolioImages}>-->
<!--        <Controls/>-->
<!--        <CarouselIndicators/>-->
<!--    </Carousel>-->
<!--    <Thumbnails images={designPortfolioImages} bind:index={designPortfolioIdx}/>-->
<!--</div>-->


<div class="max-w-4xl m-3">
    <Carousel {images} {transition} bind:index class="min-h-full">
        <Controls />
        <!--<CarouselIndicators />-->
    </Carousel>

    <Thumbnails {images} bind:index class="bg-transparent" />

</div>