export default {
    props: ["url"],

    methods: {
        onClick() {
            if (this.url)
                return window.open(this.url, "_blank");
        }
    },

    template: `
        <button class="icon-button" @click="onClick">
            <slot />
        </button>`
}