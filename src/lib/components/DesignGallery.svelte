<script lang="ts">
    import * as Carousel from "$lib/components/ui/carousel/index.js";
    import type { CarouselAPI } from "$lib/components/ui/carousel/context.js";

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

    images.forEach(image => image.src = `/src/lib/images/portfolio/${image.src}`);

    // let api = $state<CarouselAPI>();

    // const count = $derived(api ? api.scrollSnapList().length : 0);
    let current = $state(0);

    // $effect(() => {
    //     if (api) {
    //         current = api.selectedScrollSnap() + 1;
    //         api.on("select", () => {
    //             current = api!.selectedScrollSnap() + 1;
    //         });
    //     }
    // });
</script>


<Carousel.Root
        class="w-full max-w-xs mx-auto"
        opts={{
            align: "center"
        }}
        orientation="vertical">
    <Carousel.Content class="h-[40vh]">
        {#each images as image}
            <Carousel.Item>
                <div class="p-1 h-full flex items-center">
                    <img src={image.src} alt={image.alt}/>
                </div>
            </Carousel.Item>
        {/each}
    </Carousel.Content>
    <Carousel.Previous/>
    <Carousel.Next/>
</Carousel.Root>

<!--<div class="text-muted-foreground py-2 text-center text-sm">-->
<!--    Slide {current} of {count}-->
<!--</div>-->