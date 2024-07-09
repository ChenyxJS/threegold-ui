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
            outDir: "dist/types",
            tsconfigPath: "../../tsconfig.build.json",
        }),
    ],
    build: {
        target: "modules",
        //打包文件目录
        outDir: "dist",
        //压缩
        minify: false,
        //css分离
        // cssCodeSplit: true,
        lib: {
            name: "threegold-ui",
            entry: resolve(__dirname, "./index.ts"),
            formats: ["es", "umd"],
        },
        rollupOptions: {
            //忽略打包vue文件
            external: ["vue"],
            output: [
                {
                    format: "es",
                    //不用打包成.es.js,这里我们想把它打包成.js
                    entryFileNames: "[name].js",
                    //让打包目录和我们目录对应
                    preserveModules: true,
                    //配置打包根目录
                    dir: "dist/es",
                    preserveModulesRoot: "src",
                },
                // {
                // format: "cjs",
                // entryFileNames: "[name].js",
                //     //让打包目录和我们目录对应
                //     preserveModules: true,
                //     //配置打包根目录
                //     dir: "dist/lib",
                //     preserveModulesRoot: "src",
                // },
                {
                    format: "umd",
                    dir: "dist/umd",
                    name: "threegold-ui",
                    entryFileNames: "[name].js",
                    // //让打包目录和我们目录对应
                    // preserveModules: true,
                    // //配置打包根目录
                    // preserveModulesRoot: "src",
                    inlineDynamicImports: false,
                    globals: {
                        vue: "Vue",
                    },
                },
            ],
        },
    },
});
