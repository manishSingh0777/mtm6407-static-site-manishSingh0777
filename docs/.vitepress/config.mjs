import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Manish Singh Portfolio",
  description: "This is going to be a portfolio website for Manish",

  base: '/mtm6407-static-site-manishSingh0777/',

  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css'
      }
    ]
  ],

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about' },
      { text: 'Projects', link: '/projects' },
      { text: 'Resume', link: '/resume' },
      { text: 'Contact', link: '/contact' }
    ]
  }
})