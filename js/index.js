import { createApp } from "./lib/vue/vue.esm-browser.js";
import IconButton from "./components/IconButton.js";


const app = createApp({ setup() {} });
app.component("IconButton", IconButton);


app.mount("#app");


