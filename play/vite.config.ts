import type { UserConfig } from "vite";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }): UserConfig => {
    // const env = loadEnv(mode, process.cwd(), "");

    return {
        server: {
            host: true,
            port: 3000,
            open: true,
        },
        plugins: [vue()],
    };
});
