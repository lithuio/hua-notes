import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Hua Notes',
  description: 'Personal knowledge base for study, work, creativity, resources, and life',
  base: '/hua-notes/',
  srcDir: '.',

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'Hua Notes',

    nav: [
      { text: '学习', link: '/learning/discipline' },
      { text: '工作', link: '/work/project-docs' },
      { text: '思维', link: '/creative/ideas' },
      { text: '资料', link: '/resources/papers' },
      { text: '生活', link: '/life/health' }
    ],

    sidebar: {
      '/learning/': [
        {
          text: '学习类',
          collapsed: false,
          items: [
            { text: '学科笔记', link: '/learning/discipline' },
            { text: '课程/培训笔记', link: '/learning/course-notes' },
            { text: '实验/练习', link: '/learning/experiments' }
          ]
        }
      ],
      '/work/': [
        {
          text: '工作/项目类',
          collapsed: false,
          items: [
            { text: '项目文档', link: '/work/project-docs' },
            { text: '技术笔记', link: '/work/technical-notes' },
            { text: '会议记录', link: '/work/meeting-minutes' }
          ]
        }
      ],
      '/creative/': [
        {
          text: '思维/创意类',
          collapsed: false,
          items: [
            { text: '想法收集', link: '/creative/ideas' },
            { text: '总结/反思', link: '/creative/reflections' },
            { text: '写作/草稿', link: '/creative/drafts' }
          ]
        }
      ],
      '/resources/': [
        {
          text: '资料/资源类',
          collapsed: false,
          items: [
            { text: '文献/论文', link: '/resources/papers' },
            { text: '图像/多媒体资料', link: '/resources/media' },
            { text: '工具/参考', link: '/resources/tools' }
          ]
        }
      ],
      '/life/': [
        {
          text: '生活/兴趣类',
          collapsed: false,
          items: [
            { text: '健康/运动', link: '/life/health' },
            { text: '旅行/日志', link: '/life/travel' },
            { text: '兴趣爱好', link: '/life/hobbies' }
          ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lithuio/hua-notes' }
    ],

    footer: {
      message: 'Make notes beautiful, clear, and easy to navigate.',
      copyright: '© 2026 Hua Notes'
    },

    search: {
      provider: 'local'
    }
  }
})
