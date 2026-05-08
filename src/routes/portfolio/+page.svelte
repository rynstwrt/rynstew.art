<script lang="ts">
    import { Tabs, TabItem, Gallery } from "flowbite-svelte";
    import { GlobeSolid, HomeOutline, PenNibSolid } from "flowbite-svelte-icons";
    import { resolve } from "$app/paths";
    import BoxButton from "$lib/components/BoxButton.svelte";

    const imageCol1 = [
        {alt: "Glitch Headshot", src: "OrangeCyanHeadshot.jpg"},
        {alt: "Nutriwise Company Logo", src: "NutriwiseLogo.png"},
        {alt: "Alphabet Designs", src: "AlphabetDesign.png"},
        {alt: "Glitch Design", src: "glitch1.jpg"},
        {alt: "Glitch Design 2", src: "glitch2.jpg"},
    ]

    const imageCol2 = [
        {alt: "Glitch Design 3", src: "glitch3.jpg"},
        {alt: "Letter R Design 1", src: "r_designs/1.png"},
        {alt: "Letter R Design 2", src: "r_designs/2.png"},
        {alt: "Letter R Design 3", src: "r_designs/3.png"},
        {alt: "Letter R Design 4", src: "r_designs/4.png"},
    ]

    const imageCol3 = [
        {alt: "ScurryDog Company Logo", src: "ScurryDog.png"},
        {alt: "Letter R Design 5", src: "r_designs/5.png"},
        {alt: "Letter R Design 6", src: "r_designs/6.png"},
        {alt: "Letter R Design 7", src: "r_designs/7.png"},
        {alt: "Letter R Design 8", src: "r_designs/8.png"},
        // {alt: "Letter R Design 9", src: "r_designs/9.png"},
    ]

    for (const imageCol of [imageCol1, imageCol2, imageCol3]) {
        for (const image of imageCol) {
            image.src = `/src/lib/images/portfolio/${image.src}`
        }
    }
</script>


<BoxButton href={resolve("/")}
           Icon={HomeOutline}
           text="Return Home"
           classes="w-fit place-self-center mt-8 mb-6"/>


<div class="p-3">
    <Tabs tabStyle="full" class="flex divide-x shadow-sm rtl:divide-x-reverse divide-gray-700">
        <TabItem class="w-full flex justify-center">
            {#snippet titleSlot()}
                <div class="flex justify-center items-center gap-2">
                    <GlobeSolid size="md"/>
                    Websites
                </div>
            {/snippet}
            <p>WEBSITES</p>
        </TabItem>

        <TabItem open class="w-full">
            {#snippet titleSlot()}
                <div class="flex justify-center items-center gap-2">
                    <PenNibSolid size="md"/>
                    Design
                </div>
            {/snippet}
            <Gallery class="grid-cols-2 md:grid-cols-3 gap-4">
                <Gallery items={imageCol1}/>
                <Gallery items={imageCol2}/>
                <Gallery items={imageCol3}/>
            </Gallery>
        </TabItem>
    </Tabs>
</div>