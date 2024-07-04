import { defineConfig } from "vitepress";

export default defineConfig({
    title: "threegold-ui",
    description: "threegold-ui",
    head: [["link", { rel: "icon", type: "image/svg+xml", href: "logo.png" }]],
    themeConfig: {
        // logo: "/logo.png",
        // socialLinks: [
        //     { icon: "github", link: "https://github.com/vuejs/vitepress" },
        // ],
        search: {
            provider: "local",
        },
        footer: {
            message: "Relcased under the Mit Lincense.",
            copyright: "© 2022 - 2024 Chenyx 版权所有",
        },
        nav: [
            {
                text: "指南",
                link: "/guild/installation",
                activeMatch: "/guide/",
            },
            {
                text: "组件",
                link: "/component/icon/",
                activeMatch: "/component/",
            },
        ],
        sidebar: {
            "/guild/": [
                {
                    text: "基础",
                    items: [
                        {
                            text: "安装",
                            link: "/guild/installation",
                        },
                        {
                            text: "快速开始",
                            link: "/guild/quickstart",
                        },
                    ],
                },
                {
                    text: "进阶",
                    items: [
                        {
                            text: "xx",
                            link: "/xx",
                        },
                    ],
                },
            ],
            "/component/": [
                {
                    text: "基础组件",
                    items: [{ text: "Icon", link: "/component/icon" }],
                },
            ],
        },
    },
});
