import { defineConfig } from 'vitepress'

const npmSvg = `<svg width="256px" height="256px" viewBox="0 0 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
<g>
    <polygon fill="#C12127" points="0 256 0 0 256 0 256 256"></polygon>
    <polygon fill="#FFFFFF" points="48 48 208 48 208 208 176 208 176 80 128 80 128 208 48 208"></polygon>
</g>
</svg>
`;

export default defineConfig({
  title: "eFriend Expert",
  description: "한국투자증권 Node.js 라이브러리",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: '시작하기', link: '/getting-start' },
      { text: '사용예제', link: '/example-rest-api' }
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
      { icon: { svg: npmSvg }, link: 'https://www.npmjs.com/package/efriend' },
      { icon: 'github', link: 'https://github.com/pnuskgh/EFriendExpert' }
    ]
  }
})
