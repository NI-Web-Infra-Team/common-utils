import { defineConfig } from "vitepress";

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

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
