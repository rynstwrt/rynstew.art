<template>
    <main>
        <h1>Ryn Stewart</h1>

        <p>Select which portfolio to view.</p>

        <div id="buttons">
            <router-link to="tech">Tech</router-link>
            <router-link to="Art">Art</router-link>
        </div>
    </main>
</template>


<style lang="scss" scoped>
@use "@/css/_constants.scss" as *;

header {
    display: none !important;
}

main {
    background-color: $color-surface-2;
    padding: 30px;
    border-radius: 5px;

    h1 {
        font-weight: 300;
        font-size: 3rem;
        margin-bottom: 5px;
        letter-spacing: 2px;
        color: $color-primary;
        font-family: $font-2;
    }

    p {
        font-size: 1.1rem;
        letter-spacing: 1px;
        font-weight: 200;
        font-family: $font-2;
    }

    #buttons {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        grid-column-gap: 10px;

        a {
            //border: 1px solid $color-primary;
            background-color: $color-surface;
            padding: 7px 15px;
            border-radius: 3px;
            min-width: 200px;
            width: fit-content;
            text-align: center;
            font-weight: 200;
            transition: background-color .2s ease-out;
            letter-spacing: 1px;
            font-size: 1.05rem;

            &:hover {
                background-color: $color-primary;
            }
        }
    }
}
</style>