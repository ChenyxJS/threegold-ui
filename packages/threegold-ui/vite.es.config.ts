import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// import { createViteConfig } from "@laoriy/lg-build"

// export default defineConfig(createViteConfig({ plugins: [vue()] }))

export default defineConfig({
    plugins: [
        vue(),
        // 因为这个插件默认打包到es下，我们想让lib目录下也生成声明文件需要再配置一个
        dts({
            tsconfigPath: "../../tsconfig.build.json",
            outDir: "dist/types",
        }),
    ],
    build: {
        //打包文件目录
        outDir: "dist/es",
        lib: {
            name: "threegold-ui",
            fileName: "index",
            entry: resolve(__dirname, "./index.ts"),
            formats: ["es"],
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
