<script setup>
const props = defineProps([
    "icon",
    "url",
    "text",
    "useRouter"
]);
</script>





<template>
    <a class="icon-btn" :href="props.url" v-if="useRouter!=='true'">
        <div class="icon-container" v-html="props.icon"></div>
        <p v-if="props.text">{{ props.text }}</p>
    </a>
    <RouterLink class="icon-btn" :to="props.url" v-else>
        <div class="icon-container" v-html="props.icon"></div>
        <p v-if="props.text">{{ props.text }}</p>
    </RouterLink>
</template>


<style lang="css" scoped>
    a.icon-btn{
        display: flex;
        align-items: center;
        border: 1px solid hsl(from var(--color-light-2) h s l / 0.75);
        padding: 5px 7px;
        opacity: 0.8;
        transition: opacity .09s ease-out;

        &:hover {
            opacity: 1;
        }


        div.icon-container {
            width: 25px;
            height: 25px;
            padding: 2px;
            color: var(--color-primary);

            & > * {
                height: 100%;
                width: auto;
            }
        }

        p {
            color: var(--color-light);
            font-weight: 200;
            font-size: 0.9rem;
            letter-spacing: 1px;
            margin-left: 5px;
            text-wrap: nowrap;
        }

    }
</style>