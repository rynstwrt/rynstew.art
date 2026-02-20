<script setup>
import IconButton from "../components/IconButton.vue";
import HomeIcon from "../assets/icon/home.svg?raw";

const props = defineProps(["url", "title"]);
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

        <div id="pdf-container">
            <object :data="props.url" type="application/json" width="100%" height="100%">
                <p>Pdf not found!!!!</p>
            </object>
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
    height: 100%;
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

#pdf-container {
    //background-color: red;
    width: 100%;
    height: 100%;

    @media (screen and min-width: 540px) {
        padding: 0 10px;
    }

    object {
        //display: none;
    }
}
</style>