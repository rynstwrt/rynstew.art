<template>
    <RouterView />
</template>



<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    @include default-font("content");
    font-style: normal;
    //font-size: 14px;
    font-size: 16px;
    font-weight: normal;
}


html, body, #app {
    height: 100%;
}

#app {
    width: 100%;
    height: 100%;
}


body {
    background-color: $color-background;
    color: $color-light;
}


a {
    color: inherit;
    text-decoration: none;
}
</style>