<script setup>
import { LightGallery } from "vue-light-gallery";

const props = defineProps(['title', 'index']);

// import VueGallery from 'vue-gallery';

const letterRTypographyExamples = Object.keys(import.meta.glob('@/assets/img/typography/*.png'))
                                        .map(imgPath => {
                                            return {
                                                path: imgPath,
                                                title: imgPath.replaceAll(/.+\/(.+-(\d+)\.\S+)/g, 'Example #$2')
                                            }
                                        });

const images = Object.keys(import.meta.glob('@/assets/img/typography/*.png'));

props.index = 1;


// export default {
//     data: () => {
//         return {
//             images: [
//                 'asdf'
//             ],
//             index: null
//         }
//     },
//     components: {
//         'gallery': VueGallery
//     }
// }
</script>


<template>
    <div class="portfolio-section-gallery">
        <h4>{{ props.title }}</h4>

        <!--<div class="portfolio-section-gallery-grid">-->
        <!--    <figure v-for="exampleData in letterRTypographyExamples">-->
        <!--        <img :src="exampleData.path" :alt=exampleData.name />-->
        <!--        <figcaption>{{ exampleData.name }}</figcaption>-->
            <!--</figure>-->
        <!--</div>-->
        <!--<VueGallery :images="images" :index="0" @close="index = null"></VueGallery>-->

        <!--<div>-->
            <LightGallery
                :images="images"
                :index="index"
                :disable-scroll="true"
                @close="index = null"
            />
            <!--<ul>-->
            <!--    <li-->
            <!--        v-for="(thumb, thumbIndex) in images"-->
            <!--        :key="thumbIndex"-->
            <!--        @click="index = thumbIndex"-->
            <!--    >-->
            <!--        <img :src="thumb">-->
            <!--    </li>-->
            <!--</ul>-->
        <!--</div>-->

        <!--<div-->
        <!--    class="image"-->
        <!--    v-for="(image, imageIndex) in images"-->
        <!--    :key="imageIndex"-->
        <!--    @click="index = imageIndex"-->
        <!--    :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"-->
        <!--&gt;</div>-->
    </div>
</template>



<style lang="scss" scoped>
@use '@/css/constants' as *;

.portfolio-section-gallery {
    h4 {
        //text-transform: uppercase;
        text-transform: capitalize;
        font-family: $font-2;
        letter-spacing: 1px;
        margin-bottom: 5px;
        font-weight: 200;
    }

    .portfolio-section-gallery-grid {
        display: grid;
        grid-auto-flow: row dense;
        grid-template-columns: repeat(3, 1fr);
        gap: 20px;
    }

    figure {
        background-color: $color-surface-2;
        padding: 5px;
        border-radius: 3px;
        max-width: 150px;

        img {
            width: 100%;
            height: 100%;
            //border: 1px solid rgba($color-light-2, .3);
            //padding: 10px;
            //border-radius: 5px;
        }

        //figcaption {
        //    text-align: center;
        //    font-size: .9rem;
        //    margin-top: 5px;
        //    letter-spacing: 1px;
        //}
    }
}

.image {
    float: left;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;
    margin: 5px;
}
</style>