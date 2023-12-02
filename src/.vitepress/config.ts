import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Abrifq's Sponsors Wiki",
    description: "Get more than just throwing money at Abrifq, learn how you can benefit for yourself and other open source projects here.",
    appearance: { initialValue: "dark" },
    lastUpdated: true,
    themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
        darkModeSwitchLabel: "Dark Mode",
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
        { icon: 'github', link: 'https://github.com/abrifq' },
        { icon: 'twitter', link: 'https://x.com/saribezligurme', ariaLabel: "Abrifq's Twitter account" }
    ]
    },
    titleTemplate: ":title | Abrifq's Sponsor Wiki",
    base: "/sponsoring-rules-and-tos/",
    mpa: true
})
