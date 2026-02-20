<script setup>
import IconButton from "../components/IconButton.vue";
import ResumeIcon from "../assets/icon/resume.svg?raw";
</script>

<template>
    <main>
        <h1>404</h1>
        <p>This page was not found.</p>
        <IconButton
        :icon="ResumeIcon"
        text="Return to Homepage"
        url="/"
        useRouter="true" />
    </main>
</template>


<style scoped lang="scss">
    main {
        height: 100%;
        //background-color: red;

        //place-self: center;
        place-content: center;
        place-items: center;

        & > * {
            //border: 1px solid black;
            //font-family: $header-font;
        }

        h1 {
            font-size: 8rem;
            color: $color-primary;
            font-weight: 200;
            @include default-font("header");
            //background-color: red;
            line-height: 6.5lh;
        }

        p {
            font-size: 1.1rem;
            font-weight: 200;
            letter-spacing: 1px;
        }

        a.icon-btn {
            margin-top: 40px;
            //font-size: 10rem !important;
            //height: 100%;
            padding: 10px 20px;

            :deep(p) {
                font-size: 1.1rem;
            }
        }

        .icon-btn {
            //font-size: 4rem !important;
            //background-color: blue;
        }
    }

    object {
        //display: none;
    }
</style>