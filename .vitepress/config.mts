import { defineConfig, HeadConfig } from 'vitepress';
import { generateSidebar } from 'vitepress-sidebar';
import { withPwa } from '@vite-pwa/vitepress'
import lightbox from "vitepress-plugin-lightbox"
import { GitChangelog, GitChangelogMarkdownSection } from '@nolebase/vitepress-plugin-git-changelog';

let desc = "My research documentation of the Xeo3 emulator";
let title = "Xeo3 research";
let link = "https://alebello7276.github.io/xbox-emu-docs";

export default withPwa(defineConfig({
    vite: {
        plugins: [
            GitChangelog({
                repoURL: () => 'https://alebello7276.github.io/xbox-emu-docs'
            }),
            GitChangelogMarkdownSection(),
        ],
        server: {
            host: '0.0.0.0',
            port: 80,
        }
    },
    title: title,
    description: desc,
    lastUpdated: true,
    outDir: "dist",
    srcDir: "docs",
    base: "/xbox-emu-docs/",
    sitemap: {
        hostname: link
    },
    markdown: {
        config: (md) => {
            md.use(lightbox, {});
        },
    },
    themeConfig: {
        siteTitle: "Xeo3 Docs",
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Emu.exe', link: '/emu-exe' },
            { text: 'xeo3-dlls', link: '/dlls' },
        ],

        search: {
            provider: 'local'
        },

        sidebar: generateSidebar({
            sortFolderTo: "top",
            documentRootPath: "/docs",
            collapsed: true,
            capitalizeEachWords: true,
            rootGroupText: 'Main',
            hyphenToSpace: true,
            includeEmptyFolder: false
        }),

       
    },
    head: [
   
        ['meta', { property: 'og:type', content: 'website' }],
        ['meta', { property: 'theme-color', content: '#3c963c' }],
        ['meta', { name: 'description', content: desc }],
        ['meta', { name: 'keywords', content: 'xbox 360, xbox, backwards compatible, emulator, xbox emulator' }],
        ['meta', { name: 'application-name', content: title }],
    ],
    transformHead: ({ pageData }) => {
        const head: HeadConfig[] = []

        head.push(['meta', { property: 'og:title', content: `${pageData.title} ${pageData.title != "" ? "|" : ""} ${title}` }]);
        head.push(['meta', { property: 'og:description', content: desc }])
        head.push(['meta', { property: 'og:url', content: link + pageData.relativePath }]);
        head.push(['meta', { property: 'og:locale', content: 'en_US' }]);
        head.push(['meta', { httpEquiv: 'Content-Language', content: 'en' }]);
        head.push(['meta', { property: 'og:site_name', content: title }]);
        head.push(['meta', { name: 'author', content: 'Aleblbl' }]);
        head.push(['link', { rel: 'prefetch', href: link + pageData.relativePath }]);
        head.push(['link', { rel: 'canonical', href: link + pageData.relativePath }]);
        head.push(['meta', { name: 'robots', content: 'index, follow' }]);
        head.push(['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }]);
        head.push(['meta', { name: 'twitter:title', content: `${pageData.title} ${pageData.title != "" ? "|" : ""} ${title}` }]);
        head.push(['meta', { name: 'twitter:description', content: desc }]);
        head.push(['meta', { name: 'twitter:url', content: link + pageData.relativePath }]);

        return head
    },
    ignoreDeadLinks: true,
    pwa: {
        registerType: 'autoUpdate',
        manifest: {
            name: title,
            description: '',
            theme_color: '#3c963c',
            icons: [
                {
                    //src: '/Documentation/assets/WinDurango.png',
                    //sizes: '1024x1024',
                    //type: 'image/png',
                },
            ],
        },
    },

}));
