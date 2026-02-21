<script setup>
import IconButton from "../components/IconButton.vue";
import HomeIcon from "../assets/icon/home.svg?raw";
import {
    PDFViewer,
    ZoomMode,
    EmbedPdfContainer,
    CommandsPlugin,
    UIPlugin
} from '@embedpdf/vue-pdf-viewer';
import { ref } from "vue";

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
        defaultZoomLevel: ZoomMode.Automatic
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

const container = ref(null);

const onInit = cont => {
    container.value = cont;

    container.value.registerIcons({
        smiley: {
            viewBox: '0 0 24 24',
            paths: [
                { d: 'M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0', stroke: 'currentColor', fill: 'none' },
                { d: 'M9 10l.01 0', stroke: 'currentColor', fill: 'none' },
                { d: 'M15 10l.01 0', stroke: 'currentColor', fill: 'none' },
                { d: 'M9.5 15a3.5 3.5 0 0 0 5 0', stroke: 'currentColor', fill: 'none' }
            ]
        }
    });
};

const onReady = registry => {
    const commands = registry.getPlugin("commands").provides();
    const ui = registry.getPlugin("ui").provides;

    if (!commands || !ui) return;

    commands.registerCommand({
        id: "custom.meme",
        label: "MEME",
        icon: "smiley",
        action: () => {
            alert("asdf")
        }
    })
}
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

        <!--<div id="pdf-container">-->
        <!--    <object :data="props.url" type="application/json" width="100%" height="100%">-->
        <!--        <p>Pdf not found!!!!</p>-->
        <!--    </object>-->
        <!--</div>-->



        <div id="pdf-container">
            <PDFViewer
                @init="onInit"
                @ready="onReady"
                :config="PDF_VIEWER_CONFIG"
                :style="{ width: '100%', height: '100%' }"
            />
        <!--<PDFViewer-->
        <!--    :config="{-->
        <!--        src: props.url,-->
        <!--        theme: { preferences: 'system' }-->
        <!--    }"-->
        <!--    :style="{ width: '100%', height: '100%' }"/>-->
        </div>
    </main>
</template>


<style scoped lang="scss">

main {
    display: flex;
    flex-direction: column;
    align-items: center;
    //place-self: center;
    //place-items: center;
    //place-content: center;
    width: 100%;
    //flex: 1;
    height: 100%;
    //max-height: 100px;
    max-height: 100%;
    //max-width: 400px;
    padding: 10px;

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