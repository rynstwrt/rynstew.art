<script setup>
import '@splidejs/vue-splide/css';


// const SPLIDE_OPTIONS = {
//     autoplay: false,
//     rewind: true,
//     // autoHeight: true,
//     // fixedWidth: 500,
//     fixedHeight: 300,
//     // fixedWidth: 100
//     // autoW: true
//
// }


const SPLIDE_OPTIONS = {
    rewind : true,
    // perPage: 2,
    // gap    : '1rem',
    // height : '15rem',
    // breakpoints: {
        // 1000: {
        //     perPage: 1,
        // },
    // },
};


const props = defineProps([
    "title",
    "desc",
    "url",
    "repo",
    "imageURLs"
]);
</script>



<template>
    <div class="website">
        <h4>{{ props.title }}</h4>

        <p>{{ props.desc }}</p>

        <div class="links">
            <a :href="props.url" target="_blank">{{ props.url }}</a>
            •
            <a :href="props.repo" target="_blank">GitHub</a>
        </div>

        <Splide v-if="imageURLs.length > 1" :options="SPLIDE_OPTIONS" aria-label="asdf">
            <SplideSlide v-for="url in imageURLs">
                <img :src="url" alt="">
            </SplideSlide>
        </Splide>

        <img v-else :src="imageURLs[0]" alt="">
    </div>
</template>




<style scoped lang="scss">
.website {
    background-color: $color-surface-2;
    padding: 13px 10px;
    border-radius: 5px;

    h4 {
        color: $color-primary;
        font-size: 1.3rem;
        font-weight: 300;
        letter-spacing: 1px;
    }

    p {
        font-weight: 100;
    }

    .links {
        display: flex;
        align-items: center;
        gap: 10px;
        margin-top: 5px;

        a {
            color: $color-primary;
            font-weight: 100;
            letter-spacing: 1px;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .splide, & > img {
        margin-top: 15px;
    }


    img {
        max-width: 100%;
        max-height: 100%;
    }
}
</style>