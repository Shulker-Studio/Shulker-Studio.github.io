module.exports = {
    title: "Shulker Server",
    description: "A Minecraft Server",
    head: [
        ["link", { rel: "icon", herf: "/img/logo.png" }],
        ["meta", { name: "viewport", content: "width=device-width,initial-scale=1,user-scalable=no" }]
    ],
    theme: 'gungnir',
    locales: {
        "/": {
            lang: "zh-CN"
        },
        "/en/": {
            lang: "en-US"
        }
    },
    themeConfig: {
        repo: "shulker-studio/shulker-studio.github.io",
        docsDir: "docs",
        editLinks: true,
        lastUpdated: true,
        hitokoto: false,
        searchIcon: "ri-search-2-line",
        languageIcon: "hi-translate",
        rss: {
            site_url: "http://shulker-studio.github.io",
            copyright: "Shulker Studio 2021-2023",
            count: 20
        },
        locales: {
            "/en/": {
                label: "English",
                selectText: "Languages",
                nav: require("./configs/nav/en"),
                sidebar: require("./configs/sidebar/en")
            },
            "/": {
                label: "简体中文",
                selectText: "选择语言",
                nav: require("./configs/nav/zh"),
                sidebar: require("./configs/sidebar/zh")
            }
        },
        //主题信息
        personalInfo: {
            name: "Shulker Server",
            avatar: "/img/Shulker_Studio_Logo.png",
            description: "一个普普通通的我的世界基岩版服务器",
            sns: {
                github: 'Shulker-Studio',
                email: 'liuyan@lwenk.com',
                customize: [{
                    icon: 'co-tencent-qq',
                    link: "https://qm.qq.com/cgi-bin/qm/qr?k=HN-IsMVgR16r2WWuRrEVOWrlLlYUKRvY&jump_from=webapi&authKey=mkvZQHTkgxczkDw+VD3OfWcrhIQfJYG+cB+Lv080HeFhi9hWPTj2e32SYyyx4+eO"
                }, {
                    icon: 'ri-bilibili-fill',
                    link: "https://space.bilibili.com/1674233182"
                }]
            }
        },
        //主题头图
        homeHeaderImages: {
            //api: "https://source.unsplash.com/1600x900/?wallpaper",
            local: [{
                    path: "/img/home-bg/1.jpg",
                    mask: "rgba(40, 57, 101, .4)"
                },
                {
                    path: "/img/home-bg/2.jpg",
                    mask: "rgb(251, 170, 152, .2)"
                },
                {
                    path: "/img/home-bg/3.png",
                    mask: "rgba(68, 74, 83, .1)"
                }
            ]
        },
        pages: {
            tags: {
                subtitle: "Test",
                bgImage: {
                    path: "/img/pages/tags.jpg",
                    mask: "rgba(211, 136, 37, .5)"
                }
            },
            links: {
                subtitle: "Test",
                bgImage: {
                    path: "/img/pages/links.jpg",
                    mask: "rgba(64, 118, 190, 0.5)"
                }
            }
        },
        //页脚自定义
        footer: `
            Copyright &copy; 2021-2023 <a href="#" target="_blank">Shulker Studio</a>
            <br>
        `
    }
}