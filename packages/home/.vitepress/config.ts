import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "eFriend Expert",
  description: "한국투자증권 Node.js 라이브러리",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '시작하기', link: '/getting-start' },
      { text: '사용예제', link: '/examples' }
    ],
    sidebar: [
      {
        text: '시작하기',
        items: [
          { text: 'eFriendExpert가 무엇인가요?', link: '/about' },
          { text: '시작하기', link: '/getting-start' },
        ]
      },
      {
        text: '사용예제',
        items: [
          { text: 'REST API', link: '/example-rest-api' },
          { text: 'Web Socket', link: '/example-web-socket' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/pnuskgh/EFriendExpert' }
    ]
  }
})
