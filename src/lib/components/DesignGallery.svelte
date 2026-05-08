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
    import PSGallery from "$lib/components/PSGallery.svelte";
    import { onMount } from "svelte";


    let images = [
        {alt: "Glitch Headshot", src: "OrangeCyanHeadshot.jpg", width: 1500, height: 1500},
        {alt: "Nutriwise Company Logo", src: "NutriwiseLogo.png", width: 1000, height: 1000},
        // {alt: "Alphabet Designs", src: "AlphabetDesign.png", width: 4200, height: 2100},
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

    let index = $state(0);

    const transition = (node: HTMLElement) => scale(node, {duration: 500, easing: quintOut});

    // onMount(() => {
    //     let bp = BiggerPicture({
    //         target: document.body
    //     });
    // })



</script>

<Gallery items={images} class="grid-cols-2 md:grid-cols-3 gap-4 p-4" />



<!--<div id="design-gallery-images">-->
<!--    {#each images as image}-->
<!--        <a href={image.src}-->
<!--           data-img={image.src}-->
<!--           data-thumb={image.src}-->
<!--           data-alt={image.alt}-->
<!--           data-height={image.height}-->
<!--           data-width={image.width}>-->
<!--            <img src={image.src} alt={image.alt} />-->
<!--        </a>-->
<!--    {/each}-->
<!--</div>-->


<!--<PSGallery id="design-gallery" {images}/>-->


<!--<div class="max-w-4xl space-y-4">-->
<!--    <Carousel bind:index={designPortfolioIdx}-->
<!--              images={designPortfolioImages}>-->
<!--        <Controls/>-->
<!--        <CarouselIndicators/>-->
<!--    </Carousel>-->
<!--    <Thumbnails images={designPortfolioImages} bind:index={designPortfolioIdx}/>-->
<!--</div>-->


<!--<div class="max-w-4xl m-3">-->
<!--    <Carousel {images} {transition} bind:index class="min-h-full">-->
<!--        <Controls />-->
<!--        &lt;!&ndash;<CarouselIndicators />&ndash;&gt;-->
<!--    </Carousel>-->

<!--    <Thumbnails {images} bind:index class="bg-transparent" />-->

<!--</div>-->