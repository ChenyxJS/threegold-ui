import { defineConfig, loadEnv, UserConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig(({ mode }): UserConfig => {
    const env = loadEnv(mode, process.cwd(), "");

    return {
        server: {
            host: true,
            port: Number(env.VITE_APP_PORT),
            open: true,
        },
        plugins: [vue()],
    };
});
