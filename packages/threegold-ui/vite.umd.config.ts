import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
    plugins: [vue()],
    build: {
        //打包文件目录
        outDir: "dist/umd",
        lib: {
            name: "threegold-ui",
            fileName: "index",
            entry: resolve(__dirname, "./index.ts"),
            formats: ["umd"],
        },
        rollupOptions: {
            //忽略打包vue文件
            external: ["vue"],
            output: {
                exports: "named",
                globals: {
                    vue: "Vue",
                },
            },
        },
    },
});
