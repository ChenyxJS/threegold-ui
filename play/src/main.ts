import { createApp } from "vue";
import ThreegoldUI from "threegold-ui";
import App from "./App.vue";

const app = createApp(App);

app.use(ThreegoldUI);

app.mount("#app");
