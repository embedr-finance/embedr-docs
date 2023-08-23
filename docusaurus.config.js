// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EMBEDr Finance',
  tagline: 'Documentation for EMBEDr Finance',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.embedr.finance',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'embedr', // Usually your GitHub org/user name.
  projectName: 'embedr-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        }
      },
      navbar: {
        title: 'EMBEDr Finance',
        logo: {
          alt: 'EMBEDr Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/embedr-for-individuals',
            label: "For Individuals",
            position: "left",
          },
          {
            to: '/embedr-for-companies',
            label: "For Companies",
            position: "left",
          },
          {
            to: '/embedr-protocol/overview',
            label: "EMBEDr Protocol",
            position: "left",
          },
          {
            to: '/how-to-use/embedr-guide',
            label: "How to use?",
            position: "left",
          },
          {
            href: 'https://example.com',
            label: 'Web Application',
            position: 'right',
          },
          {
            href: 'https://github.com/embedr-finance',
            label: 'GitHub',
            position: 'right',
          },
        ],
        // style: 'dark'
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/',
              },
              {
                label: 'EMBEDr Protocol',
                to: '/embedr-protocol/overview',
              },
              {
                label: 'How to use?',
                to: '/how-to-use/embedr-guide',
              },
            ]
          },
          {
            title: 'Social',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} EMBEDr Finance.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['rust']
      },
      colorMode: {
        defaultMode : 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      }
    }),
};

module.exports = config;
