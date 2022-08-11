// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Battlesnake Docs',
  tagline: 'A multiplayer programming game where your code is the controller.',
  url: 'https://docs.battlesnake.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'BattlesnakeOfficial', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.
  trailingSlash: false,

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
          editUrl:
            'https://github.com/BattlesnakeOfficial/docs',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        id: 'announcement-bar-2',  // Increment on new announcement
        content: '⭐️ Enjoying Battlesnake? Follow us on <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/playbattlesnake">Twitter</a> and <a target="_blank" rel="noopener noreferrer" href="https://twitch.tv/BattlesnakeOfficial">Twitch</a> 💜',
        backgroundColor: '#3e338f',
        textColor: '#ffffff',
        isCloseable: true
      },
      navbar: {
        logo: {
          alt: 'Battlesnake Docs',
          src: 'img/logo-light.svg',
          srcDark: 'img/logo-dark.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'quickstart',
            label: 'Quickstart'
          },
          {
            type: 'doc',
            docId: 'starter-templates',
            label: 'Starter Templates'
          },
          {
            type: 'docSidebar',
            sidebarId: 'api',
            label: 'API',
          },
          {
            type: 'docSidebar',
            sidebarId: 'guides',
            label: 'Guides',
          },
          {
            type: 'doc',
            docId: 'faq',
            label: 'FAQ'
          },
          {
            href: 'https://github.com/BattlesnakeOfficial/docs',
            position: 'right',
            className: 'navbar-item-github',
          },
          {
            href: 'https://play.battlesnake.com/discord',
            className: 'navbar-item-discord',
            position: 'right',
          },
          {
            href: 'https://twitter.com/playbattlesnake',
            className: 'navbar-item-twitter',
            position: 'right',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Get Started',
            items: [
              {
                label: 'Quickstart',
                to: 'quickstart'
              },
              {
                label: 'Starter Templates',
                to: 'starter-templates'
              },
              {
                label: 'Developer FAQ',
                to: 'faq'
              }
            ]
          },
          {
            title: 'Docs',
            items: [
              {
                label: 'Guides',
                to: 'guides'
              },
              {
                label: 'API Reference',
                to: 'api'
              },
              {
                label: 'Move Request',
                to: 'api/example-move'
              }
            ]
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/BattlesnakeOfficial',
              },
              {
                label: 'Discord',
                href: 'https://play.battlesnake.com/discord',
              },
              
              {
                label: 'Twitter',
                href: 'https://twitter.com/playbattlesnake',
              }
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.battlesnake.com',
              },
              {
                label: 'Our Mission',
                href: 'https://play.battlesnake.com/mission',
              },
              {
                label: 'Player Feedback',
                href: 'https://play.battlesnake.com/feedback',
              }
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Battlesnake Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
