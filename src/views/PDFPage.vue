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

        <embed
            :src="props.url"
            type="application/pdf"
        />
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
        font-family: $header-font;
    }

    embed {
        width: 100%;
        height: 100%;
        box-shadow: 0 0 10px black;
        margin-bottom: 5px;

    }
}
</style>