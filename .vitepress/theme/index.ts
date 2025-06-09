import DefaultTheme from "vitepress/theme";
import Main from "./main.vue";
import { NolebaseGitChangelogPlugin } from '@nolebase/vitepress-plugin-git-changelog/client'
import '@nolebase/vitepress-plugin-git-changelog/client/style.css'

export default {
    extends: DefaultTheme,
    Main,
    enhanceApp({ app }) {
        app.use(NolebaseGitChangelogPlugin);
    },
};