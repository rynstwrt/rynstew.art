<script lang="ts">
    import { Button, Heading, P, Card } from "flowbite-svelte";

    const websites = [
        {
            title: "Andrew's Electronics",
            description: "A website created for Andrew's Electronics, a vintage electronics repair business.",
            href: "https://rynstwrt.github.io/andrewselectronics.us",
            img: "/images/websites/andrewselectronics.png"
        },
        {
            title: "Off The Block",
            description: "A website created for a Minecraft server.",
            href: "https://offtheblock.lol",
            img: "/images/websites/offtheblock.png"
        }
    ];

    // let imgRefs = $state([]);
</script>


<!--<p class="text-center mt-10 text-xl font-light">Coming soon.</p>-->

<div class="flex flex-col items-center mt-2 px-4 gap-3">
<!--<div class="flex flex-col items-center mt-2 px-4">-->
    {#each websites as website}
        <Card class="p-4 sm:p-6 md:p-6 w-80">
            <Heading tag="h2"
                     class="mb-2 text-xl leading-none font-semibold text-gray-900 md:text-2xl">{website.title}</Heading>

            <P size="sm" class="text-gray-400!">{website.description}</P>

            <enhanced:img src={website.img}
                          alt={`${website.title} preview`}
                          class="my-4 rounded-lg  border border-gray-300/10"/>

            <div class="flex  items-center space-x-4">
                <Button href={website.href}
                        target="_blank"
                        size="sm"
                        class="bg-accent px-8">
                    Visit
                </Button>
            </div>
        </Card>
    {/each}
</div>

<p class="text-center pt-7 pb-12 text-lg font-light">More entries coming soon.</p>
