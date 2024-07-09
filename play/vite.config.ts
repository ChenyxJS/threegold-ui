import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig(() => {
    return {
        server: {
            host: true,
            port: 3000,
            open: true,
        },
        plugins: [vue()],
    };
});
