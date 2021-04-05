/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "GraphingQL",
  tagline: "Reference project to learn and understand GraphQL",
  url: "https://chmiiller.github.io",
  baseUrl: "/graphing/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "chmiiller",
  projectName: "graphing",
  themeConfig: {
    navbar: {
      title: "GraphingQL",
      logo: {
        alt: "GraphingQL Logo",
        src: "img/me_2019_circle.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        {
          href: "https://github.com/chmiiller/graphing",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      
      copyright: `Copyright © ${new Date().getFullYear()} Carlos Zinato. Docs built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
