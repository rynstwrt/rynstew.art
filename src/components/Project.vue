<script setup>
const props = defineProps([
    "title",
    "desc",
    "url",
    "repo",
    "image"
]);
</script>



<template>
    <div class="website">
        <div v-if="props.image" class="website-img-container">
            <img :src="'portfolio/websites/' + image" alt="">
        </div>

        <div class="website-content">
            <h4>{{ props.title }}</h4>

            <p>{{ props.desc }}</p>

            <div class="links">
                <a :href="props.url" target="_blank">{{ props.url }}</a>
                •
                <a :href="props.repo" target="_blank">GitHub</a>
            </div>
        </div>
    </div>
</template>




<style scoped lang="scss">
.website {
    background-color: $color-surface-2;
    border-radius: 5px;
    //display: flex;
    //flex-direction: column;
    border: 1px solid rgba($color-light-2, 0.05);
    //box-sbadow: 0 0 5px black;
    overflow: hidden;

    .website-img-container {
        width: 100%;
        height: 200px;
        position: relative;

        &::after {
            content: "";
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            //mix-blend-mode: screen;
            //opacity: 0.4;
            //background: #2A7B9B;
            //background: linear-gradient(140deg,rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%);

        }

        img {
            //min-width: 100%;
            width: 100%;
            height: 100%;
            object-fit: cover;
            object-position: center
        }
    }

    .website-content {
        padding: 10px 10px;

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
    }
}
</style>