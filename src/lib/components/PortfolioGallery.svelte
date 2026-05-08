<script lang="ts">
    import {
        ArrowLeftOutline,
        ArrowRightOutline
    } from "flowbite-svelte-icons";
    import { Button } from "flowbite-svelte";
    import useEmblaCarousel from 'embla-carousel-svelte';

    let {images} = $props();

    let index = $state(0);
    let altText = $derived(images[index].alt);

    let emblaApi: any;

    // const options = {
        // loop: false,
        // align: "center",
        // startIndex: index,
        // plugins: []
    // }

    function onEmblaInit(event: any) {
        emblaApi = event.detail;
        console.log(emblaApi)
    }

    function onPrev() {
        if (emblaApi?.canScrollPrev())
            --index;
        emblaApi?.scrollPrev();
    }

    function onNext() {
        if (emblaApi?.canScrollNext())
            ++index;
        emblaApi?.scrollNext();
    }
</script>


<div class="embla bg-gray-800 p-3 mx-2 mt-10 sm:mx-5 rounded-md max-w-150 place-self-center">
    <div class="embla__viewport bg-gray-700 overflow-hidden"
         use:useEmblaCarousel
         onemblaInit={onEmblaInit}>
        <div class="embla__container flex items-center touch-pan-y touch-pinch-zoom">
            {#each images as image}
                <div class="embla__slide h-full flex justify-center">
                    <img src={image.src} alt={image.alt}/>
                </div>
            {/each}
        </div>
    </div>

    <div class="flex justify-between items-center mt-3 select-none">
        <Button pill
                class="embla__prev bg-gray-700 hover:bg-gray-600 p-2"
                onclick={onPrev}>
            <ArrowLeftOutline/>
        </Button>

        <div class="*:text-center *:font-light *:mt-1">
            <p class="text-gray-300 italic">{altText}</p>
            <p class="text-gray-400 text-sm">({index + 1}/{images.length})</p>
        </div>

        <Button pill
                class="embla__next bg-gray-700 hover:bg-gray-600 p-2"
                onclick={onNext}>
            <ArrowRightOutline/>
        </Button>
    </div>
</div>


<style>
    .embla__slide {
        flex: 0 0 100%;
        min-width: 0;
    }
</style>