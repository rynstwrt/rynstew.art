<script lang="ts">
    import { Button, Heading, P, Card } from "flowbite-svelte";
    import { LinkOutline } from "flowbite-svelte-icons";

    const websites = [
        // {
        //     title: "Andrew's Electronics",
        //     description: "A website created for Andrew's Electronics, a vintage electronics repair business.",
        //     href: "https://rynstwrt.github.io/andrewselectronics.us",
        //     img: "images/websites/andrewselectronics.png"
        // },
        // {
        //     title: "Off The Block",
        //     description: "A website created for a Minecraft server.",
        //     href: "https://offtheblock.lol",
        //     img: "images/websites/offtheblock.png"
        // },
        {
            title: "WebResumeBuilder",
            description: "A web app to create a résumé online for free.",
            href: "https://rynstwrt.github.io/WebResumeBuilder",
            img: "images/websites/webresumebuilder.png"
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
              class="shadow-md rounded-sm">
            <div class="m-6">
                <Heading tag="h2"
                         class="mb-2 text-2xl! font-bold text-gray-900 tracking-tight">{website.title}</Heading>

                <P size="sm" class="text-gray-400! tracking-tight">{website.description}</P>

                <Button href={website.href}
                        target="_blank"
                        size="sm"
                        class="w-35 mt-5 shadow-sm transition-shadow">
                    Visit
                    <LinkOutline class="ms-2 h-5 w-5"/>
                </Button>
            </div>
        </Card>
    {/each}
</div>