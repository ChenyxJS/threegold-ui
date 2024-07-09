import type { PluginOption, UserConfig } from "vite";

function createViteConfig({
    plugins = [],
}: {
    plugins?: PluginOption[];
}): UserConfig {
    return {
        plugins: [...plugins],
        build: {
            target: "es2015",
            //打包文件目录
            outDir: "dist",
            //压缩
            minify: true,
            rollupOptions: {
                //忽略打包vue
                external: ["vue"],
                output: [
                    {
                        format: "es",
                        // 打包成.mjs
                        entryFileNames: "[name].mjs",
                        dir: "dist/es",
                    },
                    {
                        format: "umd",
                        entryFileNames: "[name].js",
                        name: "ThreegoldUI",
                        dir: "dist/umd",
                        globals: {
                            vue: "Vue",
                        },
                    },
                ],
            },
            lib: {
                entry: "./index.ts",
                name: "ThreegoldUI",
            },
        },
    };
}

export { createViteConfig };
