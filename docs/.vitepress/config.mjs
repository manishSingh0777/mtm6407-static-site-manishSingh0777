import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Manish Singh Portfolio",
  description: "This is going to be a portfolio website for Manish",

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
      }
    ],
    [
      'style',
      {},
      `
     
      .VPNavBarMenuLink {
        font-size: 18px !important;
        font-weight: 600;
      }

     
      .VPNavBarTitle {
        font-size: 22px !important;
        font-weight: 700;
      }
      `
    ]
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Projects', link: '/projects' },
      { text: 'Resume', link: '/resume' },
      { text: 'Contact', link: '/contact' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/manishSingh0777' }
    ]
  }
})