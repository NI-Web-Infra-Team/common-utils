import { defineConfig } from "vitepress";
import { SearchPlugin } from "vitepress-plugin-search";
import flexSearchIndexOptions from "flexsearch";

const searchOptions = {
  ...flexSearchIndexOptions,
  previewLength: 64,
  buttonLabel: "搜索",
  placeholder: "情输入关键词",
  allow: [],
  ignore: [],
  encode: false,
  tokenize: "full",
};

// https://vitepress.dev/reference/site-config

export default defineConfig({
  title: "common-utils 文档",
  description: "common-utils 文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      {
        text: "开始使用",
        items: [
          { text: "简介", link: "/guide/introduction" },
          { text: "快速上手", link: "/guide/quick-start" },
        ],
      },
      {
        text: "函数库",
        items: [
          { text: "ajax", link: "/lib/ajax" },
          { text: "AJAXError", link: "/lib/AJAXError" },
          { text: "animation", link: "/lib/animation" },
          { text: "browser", link: "/lib/browser" },
          { text: "common", link: "/lib/common" },
          { text: "computedTextWidth", link: "/lib/computedTextWidth" },
          { text: "cookie", link: "/lib/cookie" },
          { text: "Coordinate", link: "/lib/Coordinate" },
          { text: "CoordinateUtils", link: "/lib/CoordinateUtils" },
          { text: "date", link: "/lib/date" },
          { text: "dom", link: "/lib/dom" },
          { text: "flex", link: "/lib/flex" },
          { text: "getJson", link: "/lib/getJson" },
          { text: "load", link: "/lib/load" },
          { text: "url", link: "/lib/url" },
          { text: "uuid", link: "/lib/uuid" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/NI-Web-Infra-Team/common-utils" }],
    // search: {
    //   provider: "algolia",
    //   options: {
    //     appId: "1NLEM6MO7H",
    //     apiKey: "dd1ac3ef68fe2df8a4c07fa56e6a2563",
    //     indexName: "common-utils",
    //     locales: {
    //       zh: {
    //         placeholder: "搜索文档",
    //         translations: {
    //           button: {
    //             buttonText: "搜索文档",
    //             buttonAriaLabel: "搜索文档",
    //           },
    //           modal: {
    //             searchBox: {
    //               resetButtonTitle: "清除查询条件",
    //               resetButtonAriaLabel: "清除查询条件",
    //               cancelButtonText: "取消",
    //               cancelButtonAriaLabel: "取消",
    //             },
    //             startScreen: {
    //               recentSearchesTitle: "搜索历史",
    //               noRecentSearchesText: "没有搜索历史",
    //               saveRecentSearchButtonTitle: "保存至搜索历史",
    //               removeRecentSearchButtonTitle: "从搜索历史中移除",
    //               favoriteSearchesTitle: "收藏",
    //               removeFavoriteSearchButtonTitle: "从收藏中移除",
    //             },
    //             errorScreen: {
    //               titleText: "无法获取结果",
    //               helpText: "你可能需要检查你的网络连接",
    //             },
    //             footer: {
    //               selectText: "选择",
    //               navigateText: "切换",
    //               closeText: "关闭",
    //               searchByText: "搜索提供者",
    //             },
    //             noResultsScreen: {
    //               noResultsText: "无法找到相关结果",
    //               suggestedQueryText: "你可以尝试查询",
    //               reportMissingResultsText: "你认为该查询应该有结果？",
    //               reportMissingResultsLinkText: "点击反馈",
    //             },
    //           },
    //         },
    //       },
    //     },
    //   },
    // },
  },
  // @ts-ignore
  vite: { plugins: [SearchPlugin(searchOptions)] },
});
