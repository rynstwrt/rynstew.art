<script setup>
import IconButton from "../components/IconButton.vue";
import HomeIcon from "../assets/icon/home.svg?raw";
import { PDFViewer, ZoomMode } from '@embedpdf/vue-pdf-viewer';

const props = defineProps(["url", "title"]);

const PDF_VIEWER_CONFIG = {
    src: props.url,
    disabledCategories: [
        "annotation",
        "redaction",
        "panel",
        "tools",
        "document-capture",
        "document-protect",
        "page",
        "navigation"
    ],
    zoom: {
        defaultZoomLevel: ZoomMode.FitWidth
    },
    theme: {
        preference: "dark",
        dark: {
            accent: {
                primary: '#ea580c',        // Lighter purple for dark mode
                primaryHover: '#c2410c',
                primaryActive: '#9a3412',
                primaryLight: '#ffedd5',
                primaryForeground: '#fff'
            }
        }
    }
};
</script>

<template>
    <main>
        <div class="header">
            <h1>{{ props.title }}</h1>
            <IconButton
                :icon="HomeIcon"
                text="Return Home"
                url="/"
                useRouter="true" />
        </div>

        <embed
            :src="props.url"
            type="application/pdf"
        />


        <!--<div id="pdf-container">-->
        <!--    <PDFViewer-->
        <!--        :config="PDF_VIEWER_CONFIG"-->
        <!--        :style="{ width: '100%', height: '100%' }"-->
        <!--    />-->
        <!--</div>-->
    </main>
</template>


<style scoped lang="scss">

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
    max-height: 100%;
    padding: 10px;
    //background-color: red;

    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin: 15px 0;
        padding: 0 10px;
    }

    h1 {
        color: $color-light-2;
        text-decoration: underline;
        text-decoration-color: $color-primary;
        text-decoration-thickness: 1px;
        text-underline-offset: 4px;
        font-size: 1.6rem;
        font-weight: 300;
        letter-spacing: 2px;
        place-self: start;
        @include default-font("header");
    }

    embed {
        width: 100%;
        height: 100%;
        //border: 1px solid rgba($color-primary, 1);
        box-shadow: 0 0 10px black;
        margin-bottom: 5px;

        @media (screen and min-width: 540px) {
            //padding: 0 10px;
            //margin: {
            //    left: 10px;
            //    right: 10px;
            //    bottom: 10px;
            //}
        }
    }
}

//
//#pdf-container {
////<!--class="h-[600px]
////w-full
////overflow-hidden
////rounded-xl
////border
////border-gray-300
////shadow-lg
////dark:border-gray-600"-->
//
//    //background-color: red;
//    width: 100%;
//    height: 600px;
//    max-height: 100%;
//    overflow: hidden;
//    border: 1px solid gray;
//    //flex: 1;
//    //max-height: 100%;
//    //overflow: clip;
//
//    @media (screen and min-width: 540px) {
//        //padding: 0 10px;
//    }
//
//    object {
//        //display: none;
//    }
//
//    & > div {
//        background-color: blue;
//        //height: 100%;
//        //display: none;
//    }
//}
</style>