<script lang="ts">
    import { Button, Heading, P, Card } from "flowbite-svelte";
    import { ArrowRightOutline, LinkOutline } from "flowbite-svelte-icons";

    const websites = [
        {
            title: "Andrew's Electronics",
            description: "A website created for Andrew's Electronics, a vintage electronics repair business.",
            href: "https://rynstwrt.github.io/andrewselectronics.us",
            img: "images/websites/andrewselectronics.png"
        },
        {
            title: "Off The Block",
            description: "A website created for a Minecraft server.",
            href: "https://offtheblock.lol",
            img: "images/websites/offtheblock.png"
        },
        {
            title: "Domain Dissidence",
            description: "Homepage of DomainDissidence, my project that generate a website to encourage mass boycotts of malicious brands — without any programming knowledge.",
            href: "https://domaindissidence.online",
            img: "images/websites/domaindissidence.png"
        },
        {
            title: "ilovefoxes.org",
            description: "Just for fun. Demonstrates web-based text and element animations using the anime.js library.",
            href: "https://ilovefoxes.org",
            img: "images/websites/ilovefoxes.png"
        },
        {
            title: "trojanhorse.zip",
            description: "Just for fun. Taunts the user with a suspicious download button and text saying \"Go ahead... download it...\"",
            href: "https://trojanhorse.zip",
            img: "images/websites/trojanhorse.zip.png"
        }
    ];
</script>


<div class="flex flex-col items-center pb-8 pt-4 px-4 gap-4">
    {#each websites as website}
        <Card img={website.img}
              size="lg"
              horizontal
              class="shadow-md">

            <div class="m-6">
                <Heading tag="h2"
                         class="mb-2 text-2xl! font-bold text-gray-900 tracking-tight">{website.title}</Heading>

                <P size="sm" class="text-gray-400! tracking-tight">{website.description}</P>

                <Button href={website.href}
                        target="_blank"
                        class="bg-accent w-35 mt-5 hover:shadow-xl transition-shadow">
                    Visit
                    <!--<ArrowRightOutline class="ms-2 h-6 w-6"/>-->
                    <LinkOutline class="ms-2 h-5 w-5"/>
                </Button>
            </div>
        </Card>
    {/each}
</div>


<!--<div class="flex flex-col items-center mt-2 px-4 gap-3">-->
<!--    {#each websites as website}-->
<!--        <Card class="p-4 sm:p-6 md:p-6 w-80">-->
<!--            <Heading tag="h2"-->
<!--                     class="mb-2 text-xl leading-none font-semibold text-gray-900 md:text-2xl">{website.title}</Heading>-->

<!--            <P size="sm" class="text-gray-400!">{website.description}</P>-->

<!--            <enhanced:img src={website.img}-->
<!--                          alt={`${website.title} preview`}-->
<!--                          class="my-4 rounded-lg  border border-gray-300/10"/>-->

<!--            <div class="flex items-center space-x-4">-->
<!--                <Button href={website.href}-->
<!--                        target="_blank"-->
<!--                        size="sm"-->
<!--                        class="bg-accent px-8">-->
<!--                    Visit-->
<!--                </Button>-->
<!--            </div>-->
<!--        </Card>-->
<!--    {/each}-->
<!--</div>-->


<!--<p class="text-center pt-7 pb-12 text-lg font-light">More websites will be added soon.</p>-->
