# Hua Notes

[![Deploy to GitHub Pages](https://github.com/lithuio/hua-notes/actions/workflows/deploy.yml/badge.svg)](https://github.com/lithuio/hua-notes/actions/workflows/deploy.yml)

个人知识库网站，基于 VitePress 构建，仓库与线上地址如下：

- 仓库地址: [https://github.com/lithuio/hua-notes](https://github.com/lithuio/hua-notes)
- 在线访问: [https://lithuio.github.io/hua-notes/](https://lithuio.github.io/hua-notes/)

## 功能概览

- 五个主题分类：学习、工作、思维、资料、生活
- Markdown 内容维护，适合长期记录
- 基于 GitHub Actions 自动部署到 GitHub Pages
- push 到主分支后网页自动更新

## 本地开发

```bash
npm install
npm run docs:dev
```

常用命令：

```bash
# 启动本地开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 项目结构

```text
docs/
├── index.md
├── learning/
├── work/
├── creative/
├── resources/
├── life/
└── .vitepress/
    └── config.mts
```

- `docs/`：站点内容
- `docs/.vitepress/config.mts`：站点标题、导航、侧边栏、GitHub Pages 路径等配置
- `.github/workflows/deploy.yml`：自动部署工作流

## 更新网页流程

日常更新只需要这几步：

```bash
git add .
git commit -m "update notes"
git push origin main
```

推送后会自动执行：

1. GitHub Actions 检出代码
2. 安装依赖
3. 执行 `npm run docs:build`
4. 发布到 GitHub Pages
5. 网站更新到 `https://lithuio.github.io/hua-notes/`

如果你想先本地确认效果，可以在推送前执行：

```bash
npm run docs:build
```

## 首次部署检查

请确认 GitHub 仓库页面已完成以下设置：

1. 打开 `Settings -> Pages`
2. `Source` 选择 `GitHub Actions`
3. 默认分支使用 `main`

当前项目使用的是项目页路径，因此 [`docs/.vitepress/config.mts`](./docs/.vitepress/config.mts) 中的配置应保持为：

```ts
base: '/hua-notes/'
```

## 内容维护说明

- 新增笔记：直接在 `docs/` 对应分类目录下创建 `.md` 文件
- 调整导航：修改 `docs/.vitepress/config.mts` 中的 `nav` 和 `sidebar`
- 修改站点信息：更新 `title`、`description`、`socialLinks`

例如新增一篇学习笔记：

```text
docs/learning/new-note.md
```

然后按需把它加入侧边栏配置。

## 常见问题

### 网页没有及时更新

- 先看 GitHub 仓库的 `Actions` 是否构建成功
- 再确认 `Settings -> Pages -> Source` 仍然是 `GitHub Actions`
- 最后刷新缓存后重新访问线上地址

### 页面资源 404

- 检查 `docs/.vitepress/config.mts` 中的 `base` 是否仍然是 `/hua-notes/`
- 仓库名如果发生变化，需要同步修改 `base`

## 技术栈

- VitePress 1.6.4
- Vite
- GitHub Actions
- GitHub Pages
