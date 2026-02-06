<script setup>

</script>


<template>
    <main>
        <h1>Ryn Stewart</h1>

        <p>Select which portfolio to view:</p>

        <div id="buttons">
            <router-link to="tech">Tech</router-link>
            <router-link to="Art">Art</router-link>
        </div>
    </main>
</template>


<style lang="scss" scoped>
@use "@/css/_constants.scss";
main {
    background-color: gray;
    padding: 30px;
    z-index: 3;

    h1 {
        font-weight: 100 !important;
    }

    #buttons {
        display: flex;
        justify-content: space-around;

        a {
            border: 1px solid $color-primary;
        }
    }
}
</style>