import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"
import { Staticrypt } from "./quartz/password"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
    configuration: {
        pageTitle: "~/ Lei Yu",
        enableSPA: true,
        enablePopovers: true,
        analytics: {
            provider: 'google', tagId: 'G-P8B588217V'
        },
        baseUrl: "leiyu.ca",
        ignorePatterns: ["100 daily", "private", "template", ".obsidian", "*.canvas", "Excalidraw", "Omnivore", "The Bible (ESV)"],
        defaultDateType: "created",
        theme: {
            fontOrigin: "googleFonts",
            cdnCaching: true,
            typography: {
                header: "Lora",
                body: "Inter",
                code: "Fira Code",
            },
            colors: {
                lightMode: {
                    light: "#eff1f5",
                    lightgray: "#dce0e8",
                    gray: "#8c8fa1",
                    darkgray: "#4c4f69",
                    dark: "#4f4f7f",
                    secondary: "#40a02b",
                    tertiary: "#209fb5",
                    highlight: "rgba(143, 159, 169, 0.15)",
                },
                darkMode: {
                    light: "#1a1b26", // bg
                    lightgray: "#414868", // fg
                    gray: "#7aa2f7", // date
                    darkgray: "#c0caf5", // text
                    dark: "#ff9e64", // headers
                    secondary: "#f7768e", // name, tittle
                    tertiary: "#73daca", // hover and visited nodes
                    highlight: "#414868",
                },
            },
        },
    },
    plugins: {
        transformers: [
            Plugin.FrontMatter(),
            Plugin.CreatedModifiedDate({
                priority: ["frontmatter", "filesystem"],
            }),
            Plugin.Latex({ renderEngine: "katex" }),
            Plugin.SyntaxHighlighting({
                theme: {
                    light: "github-light",
                    dark: "github-dark",
                },
                keepBackground: false,
            }),
            Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
            Plugin.GitHubFlavoredMarkdown(),
            Plugin.TableOfContents(),
            Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
            Plugin.Description(),
            Plugin.HardLineBreaks(),
            Plugin.Scripture(),
            Staticrypt(),
        ],
        filters: [Plugin.ExplicitPublish(), Plugin.RemoveDrafts()],
        emitters: [
            Plugin.AliasRedirects(),
            Plugin.ComponentResources(),
            Plugin.ContentPage(),
            Plugin.FolderPage(),
            Plugin.TagPage(),
            Plugin.ContentIndex({
                enableSiteMap: true,
                enableRSS: true,
            }),
            Plugin.Assets(),
            Plugin.Static(),
            Plugin.NotFoundPage(),
        ],
    },
}

export default config
