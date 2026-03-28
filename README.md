---
title: "Hua Notes - 使用指南"
---

# Hua Notes 使用指南

[![Build Status](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/workflows/Deploy%20to%20GitHub%20Pages/badge.svg)](https://github.com/YOUR_USERNAME/YOUR_REPO_NAME/actions)

个人知识库网站，包含学习、工作、思维、资料和生活五个主题的笔记整理平台。

- 📖 **在线访问**：[https://YOUR_USERNAME.github.io/YOUR_REPO_NAME](https://YOUR_USERNAME.github.io/YOUR_REPO_NAME)
- 🚀 **一键部署**：支持自动部署到 GitHub Pages
- 📝 **易于维护**：基于 VitePress，Markdown 格式

> **注意**：请将上方 URL 和 badge 中的 `YOUR_USERNAME` 和 `YOUR_REPO_NAME` 替换为你的 GitHub 用户名和仓库名。

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

## 部署到 GitHub Pages

详见 [DEPLOY.md](./DEPLOY.md) 获取完整的部署指南。

### 快速部署

```bash
# 1. 初始化 Git 仓库（如未初始化）
git init
git add .
git commit -m "Initial commit"

# 2. 添加远程仓库
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main

# 3. 在 GitHub 仓库 Settings → Pages 中启用 GitHub Pages
#    - Source: Deploy from a branch
#    - Branch: gh-pages / (root)
```

首次 push 后，GitHub Actions 会自动构建并发布你的网站。

### 部署更新

每当你 push 代码到 main 分支时：

```bash
git add .
git commit -m "Update: Your change description"
git push origin main
```

GitHub Actions 会自动：
1. 安装依赖
2. 构建网站
3. 部署到 GitHub Pages

**无需任何手动操作！** ✨

## 项目更新日志

### v1.0.0 (2026-03-29)

#### 新增功能
- ✨ 五主题分类架构：学习 · 工作 · 思维 · 资料 · 生活
- 📚 15 个预配置的笔记页面框架
- 🎨 优雅的首页布局和卡片设计
- 🔍 本地搜索功能
- 🚀 GitHub Pages 自动部署工作流

#### 文件结构优化
- `docs/learning/` - 学习类笔记（3 个子类）
- `docs/work/` - 工作/项目类笔记（3 个子类）
- `docs/creative/` - 思维/创意类笔记（3 个子类）
- `docs/resources/` - 资料/资源类笔记（3 个子类）
- `docs/life/` - 生活/兴趣类笔记（3 个子类）

#### 配置改进
- 完善的 VitePress 配置，支持 GitHub Pages
- 清晰的导航栏和侧边栏
- 响应式设计，支持移动设备

#### 文档完善
- 📖 详细的使用指南 (README.md)
- 🚀 完整的部署指南 (DEPLOY.md)
- 📝 GitHub Actions 自动部署工作流

### 更新说明

#### 对于新用户
1. Clone 本仓库或从模板创建
2. 按照 [快速部署](#快速部署) 步骤推送到 GitHub
3. 在 GitHub Settings 中启用 GitHub Pages
4. 等待自动部署完成

#### 对于现有用户
- 无需更新，现有功能保持不变
- 如需启用自动部署，将 `.github/workflows/deploy.yml` 推送到仓库
- GitHub Pages 配置保持不变

## 项目特点

### 设计理念
- **分类清晰**：五个主题涵盖人生各个重要领域
- **易于扩展**：每个主题下有明确的子分类框架
- **美观优雅**：使用 VitePress 默认主题，专注内容
- **自动化部署**：一键推送，自动发布

### 技术栈
- **VitePress 1.6.4** - 快速轻量的静态网站生成器
- **Vite** - 现代化构建工具
- **GitHub Pages** - 免费托管
- **GitHub Actions** - 自动化 CI/CD

### 性能指标
- 🚀 秒级构建速度
- 📱 移动端响应式
- 🔍 全文搜索支持
- 🌐 无需数据库

## 常见场景

### 场景 1：快速开始学笔记
```
1. 克隆或 fork 本仓库
2. 编辑 docs/learning/discipline.md 添加学科笔记
3. 推送到 main 分支
4. 自动发布到 GitHub Pages
```

### 场景 2：团队共享知识
```
1. 创建仓库并邀请团队成员
2. 各成员在不同主题下贡献笔记
3. 通过 Pull Request 审核
4. 自动发布汇总的知识库
```

### 场景 3：个人成长记录
```
1. 记录学习进度（学习类）
2. 总结工作经验（工作类）
3. 收集创意想法（思维类）
4. 整理参考资料（资料类）
5. 记录生活足迹（生活类）
→ 形成完整的个人知识图谱
```

## 贡献指南

如果你想改进这个项目：

1. Fork 本仓库
2. 创建新分支 (`git checkout -b feature/amazing-feature`)
3. 提交更改 (`git commit -m 'Add amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 开启 Pull Request

## 许可证

MIT License - 详见 [LICENSE](./LICENSE) 文件

## 致谢

- [VitePress](https://vitepress.dev/) - 强大的静态网站生成器
- [GitHub Pages](https://pages.github.com/) - 免费网站托管
- [GitHub Actions](https://github.com/features/actions) - 自动化工具

---

**祝你使用愉快！** 

有问题或建议？欢迎提交 Issue 或 Pull Request。

**Happy note-taking! 📝✨**
