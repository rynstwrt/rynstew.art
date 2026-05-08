<script lang="ts">
    import PortfolioGallery from "$lib/components/PortfolioGallery.svelte";

    let images = [
        {alt: "Glitch Headshot", src: "/images/portfolio/design/OrangeCyanHeadshot.jpg", width: 1500, height: 1500},
        {alt: "Nutriwise Company Logo", src: "/images/portfolio/design/NutriwiseLogo.png", width: 1000, height: 1000},
        {alt: "Alphabet Designs", src: "/images/portfolio/design/AlphabetDesign.png", width: 4200, height: 2100},
        {alt: "Glitch Design", src: "/images/portfolio/design/glitch1.jpg", width: 2048, height: 2048},
        {alt: "Glitch Design 2", src: "/images/portfolio/design/glitch2.jpg", width: 2048, height: 2048},
        {alt: "Glitch Design 3", src: "/images/portfolio/design/glitch3.jpg", width: 2048, height: 2048},
        {alt: "Letter R Design 1", src: "/images/portfolio/design/r_designs/1.png", width: 450, height: 450},
        {alt: "Letter R Design 2", src: "/images/portfolio/design/r_designs/2.png", width: 450, height: 450},
        {alt: "Letter R Design 3", src: "/images/portfolio/design/r_designs/3.png", width: 450, height: 450},
        {alt: "Letter R Design 4", src: "/images/portfolio/design/r_designs/4.png", width: 450, height: 450},
        {alt: "ScurryDog Company Logo", src: "/images/portfolio/design/ScurryDog.png", width: 1500, height: 1500},
        {alt: "Letter R Design 5", src: "/images/portfolio/design/r_designs/5.png", width: 450, height: 450},
        {alt: "Letter R Design 6", src: "/images/portfolio/design/r_designs/6.png", width: 450, height: 450},
        {alt: "Letter R Design 7", src: "/images/portfolio/design/r_designs/7.png", width: 450, height: 450},
        {alt: "Letter R Design 8", src: "/images/portfolio/design/r_designs/8.png", width: 450, height: 450},
        // {alt: "Letter R Design 9", src: "/images/portfolio/design/r_designs/9.png", width: 450, height: 450},
    ];
</script>


<PortfolioGallery {images} />