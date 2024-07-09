import { defineConfig } from "vitepress";

export default defineConfig({
    title: "threegold-ui",
    description: "threegold-ui",
    head: [["link", { rel: "icon", type: "image/svg+xml", href: "logo.png" }]],
    base: "/threegold-ui/",
    themeConfig: {
        logo: "/logo.png",
        siteTitle: "Threegold-UI", // 网站左上角标题
        socialLinks: [
            { icon: "github", link: "https://github.com/vuejs/vitepress" },
            {
                icon: {
                    svg: `<svg t="1690871772610" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="987" width="256" height="256">
                    <path d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z" fill="#C71D23" p-id="988"></path>
                  </svg>`,
                },
                link: "https://gitee.com/muyaCode/program-learn-notes",
            },
        ],
        search: {
            provider: "local",
        },
        footer: {
            message: "Relcased under the Mit Lincense.",
            copyright: "Copyright © 2024 Chenyx",
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
