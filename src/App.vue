<script setup>
const headerHeight = "60px";
</script>


<template>
    <header>
        <h4>Ryn.</h4>

        <nav>
            <ul>
                <li><a href=#>Home</a></li>
                <li><a href=#>About</a></li>
                <li><a href=#>Skills</a></li>
                <li><a href=#>Work</a></li>
                <li><a href=#>Contact</a></li>
            </ul>
        </nav>
    </header>

    <div id="landing" class="section full">
        <div id="landing-content">
            <h1>Hi, I'm Ryn. Web developer from Dallas, TX.</h1>
            <button>Learn More</button>
        </div>
    </div>
</template>


<style scoped>
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 20px;
    min-height: v-bind(headerHeight);
    background-color: green;
    position: absolute;
    top: 0;
    right: 0;
    left: 0;

    h4 {
        font-size: 2rem;
    }

    nav {
        ul {
            display: flex;
            align-items: center;
            list-style: none;

            li {
                a {
                    font-family: inherit;
                    font-weight: inherit;
                    text-decoration: none;
                    color: inherit;
                }

                &:not(:first-of-type) {
                    margin-left: 10px;
                }
            }
        }
    }
}


.section {
    padding: 20px;

    &.full {
        height: 100dvh;
    }

    &#landing {
        /* max-height: 100vh; */
        /* height: 100%; */
        /* height: calc(100dvh - v-bind(headerHeight)); */
        /* padding-top: v-bind(headerHeight); */
        display: flex;
        flex-direction: column;
        /* justify-content: center;
        align-items: center; */
        place-content: center;

        #landing-content {
            /* background-color: red; */
            /* height: 100%; */
        }

        h1 {
            font-size: 4rem;
            /* line-height: 98%; */
        }
    }
}
</style>
