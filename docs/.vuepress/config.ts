import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  title: 'ahri\'s blog',
  description: '这是我的第一个 VuePress 站点',
  theme: defaultTheme({
    navbar:[
      {
        text:'home',
        link:'/',
      },
      {
        text:'record',
        link:"/record/",
      }
    ]
  })
})