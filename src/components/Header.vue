<script setup>

</script>

<template>
    <header>
        <h2>Ryn Stewart</h2>
    
        <nav>
            <ul>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/tech">Tech</router-link></li>
                <li><router-link to="/art">Art</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '@/css/constants' as *;


header {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: $color-surface-2;
    padding: 10px 15px;

    h2 {
        font-size: 1.7rem;
        font-weight: 400;
        color: $color-primary;
        letter-spacing: 1px;
        font-family: $font-2;
    }

    nav {
        ul {
            display: flex;
            //align-items: center;

            li {
                list-style: none;

                &:not(:first-of-type) {
                    margin-left: 10px;
                }

                a {
                    letter-spacing: 1px;
                    font-weight: 200;
                    color: $color-light-2;
                    border-bottom-color: transparent;
                    border-bottom-width: 1px;
                    border-bottom-style: solid;
                    transition: border-bottom-color .1s ease-out;

                    &.router-link-active, &:hover {
                        border-bottom-color: $color-primary;
                    }
                }
            }
        }
    }
}
</style>