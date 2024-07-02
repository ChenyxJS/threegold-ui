import { createApp } from "vue";
import App from "./App.vue";
import ThreegoldUI from "threegold-ui";

const app = createApp(App);

app.use(ThreegoldUI);

app.mount("#app");
