---
title: "Hua Notes - 使用指南"
---

# Hua Notes 使用指南

## 快速开始

### 启动开发服务器

```bash
cd /home/lumi/notes
npm run docs:dev
```

服务器会启动在 `http://localhost:5173` 或其他可用端口（如 `http://localhost:5174`）。

**注意**：如果看到 `Port 5173 is in use`，说明该端口已被占用，VitePress 会自动选择下一个可用端口。请按照终端输出的地址访问。

### 构建生产版本

```bash
npm run docs:build
```

构建后的静态文件会生成在 `docs/.vitepress/dist/` 目录中。

## 网站结构

网站分为五个主题，每个主题包含三个子类别：

### 1. 学习类 📚
- **学科笔记** - 数学、物理、计算机、语言等学科内容
- **课程/培训笔记** - 在线课程、讲座、MOOC 笔记
- **实验/练习** - 实验报告、编程练习、习题解析

### 2. 工作/项目类 💼
- **项目文档** - 项目需求、设计、计划
- **技术笔记** - 算法、工具使用、框架学习
- **会议记录** - 会议纪要、行动计划、决策记录

### 3. 思维/创意类 🧠
- **想法收集** - 灵感、创意、脑图
- **总结/反思** - 读书笔记、经验总结、复盘
- **写作/草稿** - 文章、论文、报告初稿

### 4. 资料/资源类 📂
- **文献/论文** - PDF、文摘、笔记
- **图像/多媒体资料** - 截图、照片、设计素材
- **工具/参考** - 工具使用方法、快捷键、模板

### 5. 生活/兴趣类 🌿
- **健康/运动** - 饮食计划、健身记录
- **旅行/日志** - 行程、游记、日常记录
- **兴趣爱好** - 音乐、电影、手工、游戏

## 文件组织

```
docs/
├── index.md                    # 首页
├── learning/
│   ├── discipline.md          # 学科笔记
│   ├── course-notes.md        # 课程笔记
│   └── experiments.md         # 实验/练习
├── work/
│   ├── project-docs.md        # 项目文档
│   ├── technical-notes.md     # 技术笔记
│   └── meeting-minutes.md     # 会议记录
├── creative/
│   ├── ideas.md               # 想法收集
│   ├── reflections.md         # 总结/反思
│   └── drafts.md              # 写作/草稿
├── resources/
│   ├── papers.md              # 文献/论文
│   ├── media.md               # 图像/多媒体
│   └── tools.md               # 工具/参考
├── life/
│   ├── health.md              # 健康/运动
│   ├── travel.md              # 旅行/日志
│   └── hobbies.md             # 兴趣爱好
└── .vitepress/
    ├── config.mts             # VitePress 配置
    └── cache/                 # 构建缓存
```

## 常见问题

### Q: 访问时显示 404 NOT FOUND？

**A:** 确保你访问的是正确的端口。运行 `npm run docs:dev` 时，VitePress 会在终端显示实际的服务地址。如果 5173 已被占用，会自动使用其他端口如 5174。

### Q: 如何添加新的笔记页面？

**A:** 
1. 在对应的目录下创建新的 `.md` 文件
2. 文件名会自动成为路由路径的一部分
3. 更新 `docs/.vitepress/config.mts` 中的 `sidebar` 配置来添加导航链接

示例：创建 `docs/learning/calculus.md` 会生成路由 `/learning/calculus`

### Q: 如何自定义网站样式？

**A:** VitePress 使用默认主题。如需高级定制，可以：
- 修改 `docs/.vitepress/config.mts` 中的 `themeConfig` 部分
- 创建 `docs/.vitepress/theme/` 目录来实现自定义主题

## 技术栈

- **框架**: VitePress 1.6.4
- **构建工具**: Vite
- **语言**: TypeScript + Markdown

## 开发建议

1. **结构清晰** - 每个主题下的笔记应按照给定的三个子类别组织
2. **定期更新** - 建议定期回顾和更新笔记内容
3. **链接互联** - 可以在笔记间创建联系，形成知识网络
4. **版本控制** - 使用 Git 跟踪笔记的变更历史

## 获取帮助

- [VitePress 官方文档](https://vitepress.dev/)
- [Markdown 扩展语法](https://vitepress.dev/guide/markdown)
- [VitePress 主题配置](https://vitepress.dev/reference/site-config)

---

Happy note-taking! 📝
