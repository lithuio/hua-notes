# 🚀 快速参考

## 命令速查表

### 开发阶段

```bash
# 安装依赖
npm install

# 启动开发服务器 (http://localhost:5173 或 5174)
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

### 部署阶段

```bash
# 初始化 Git（如未初始化）
git init

# 配置 Git 用户信息
git config user.name "Your Name"
git config user.email "your.email@example.com"

# 添加所有文件
git add .

# 提交更改
git commit -m "Your commit message"

# 添加远程仓库
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# 修改默认分支为 main
git branch -M main

# 推送到 GitHub
git push -u origin main
```

### 日常更新

```bash
# 编辑后推送（自动构建和部署）
git add .
git commit -m "Update: description"
git push origin main
```

## 文件导航

```
hua-notes/
├── docs/                 # 网站内容
│   ├── index.md         # 首页
│   ├── learning/        # 📚 学习类
│   │   ├── discipline.md        # 学科笔记
│   │   ├── course-notes.md      # 课程笔记
│   │   └── experiments.md       # 实验/练习
│   ├── work/            # 💼 工作类
│   │   ├── project-docs.md      # 项目文档
│   │   ├── technical-notes.md   # 技术笔记
│   │   └── meeting-minutes.md   # 会议记录
│   ├── creative/        # 🧠 思维类
│   │   ├── ideas.md             # 想法收集
│   │   ├── reflections.md       # 总结/反思
│   │   └── drafts.md            # 写作/草稿
│   ├── resources/       # 📂 资料类
│   │   ├── papers.md            # 文献/论文
│   │   ├── media.md             # 图像/多媒体
│   │   └── tools.md             # 工具/参考
│   ├── life/            # 🌿 生活类
│   │   ├── health.md            # 健康/运动
│   │   ├── travel.md            # 旅行/日志
│   │   └── hobbies.md           # 兴趣爱好
│   └── .vitepress/      # VitePress 配置
│       ├── config.mts           # 站点配置
│       └── cache/               # 构建缓存
├── .github/workflows/   # GitHub Actions
│   └── deploy.yml               # 自动部署工作流
├── README.md            # 项目文档
├── DEPLOY.md            # 部署指南
├── QUICKSTART.md        # 本文件
├── package.json         # NPM 配置
└── LICENSE              # MIT 许可证
```

## 常见快捷操作

### 添加新笔记

1. **在现有主题下添加页面**
   ```bash
   # 例如在学习类下添加算法笔记
   touch docs/learning/algorithms.md
   ```

2. **编辑文件内容**
   ```markdown
   ---
   title: "Algorithms"
   ---

   # Algorithms

   你的笔记内容...
   ```

3. **更新导航（可选）**
   编辑 `docs/.vitepress/config.mts` 的 `sidebar` 部分

4. **推送更新**
   ```bash
   git add .
   git commit -m "Add: algorithms notes"
   git push origin main
   ```

### 修改网站标题和描述

编辑 `docs/.vitepress/config.mts`：

```typescript
export default defineConfig({
  title: '你的网站标题',
  description: '你的网站描述',
  // ...
})
```

### 启用自定义域名

1. 编辑 `.github/workflows/deploy.yml`，取消注释 `cname:` 行
2. 填入你的域名
3. 在域名 DNS 设置中添加 CNAME 记录

### 管理多人编辑

```bash
# 拉取最新更改
git pull origin main

# 创建特性分支
git checkout -b feature/new-notes

# 编辑后提交
git add .
git commit -m "Add: new content"

# 推送分支
git push origin feature/new-notes

# 在 GitHub 创建 Pull Request
```

## 故障排除

### 问题：网站显示 404

**解决**：
- 检查 base 路径配置是否正确（用户站点用 `/`，项目站点用 `/<repo-name>/`）
- 确保 GitHub Pages 已启用（Settings → Pages）
- 检查构建日志（Actions 标签）

### 问题：修改后网站未更新

**解决**：
- 检查 push 是否成功（运行 `git log` 查看提交历史）
- 等待 GitHub Actions 完成构建（Actions 标签）
- 清除浏览器缓存（Ctrl+Shift+Delete）

### 问题：npm install 失败

**解决**：
```bash
rm -rf node_modules package-lock.json
npm install
```

### 问题：VitePress dev 服务器崩溃

**解决**：
```bash
rm -rf docs/.vitepress/cache
npm run docs:dev
```

## 性能优化建议

1. **定期清理缓存**
   ```bash
   rm -rf docs/.vitepress/cache node_modules
   npm install
   ```

2. **压缩图片**：在添加图片前压缩，减轻网站体积

3. **使用相对路径**：各笔记间可以互相链接
   ```markdown
   [查看相关笔记](/learning/course-notes)
   ```

4. **定期提交**：保持 Git 历史清晰，方便版本管理

## 资源链接

- 📖 [VitePress 文档](https://vitepress.dev/)
- 🎨 [Markdown 语法参考](https://vitepress.dev/guide/markdown)
- 🚀 [GitHub Pages 文档](https://docs.github.com/en/pages)
- ⚡ [GitHub Actions 文档](https://docs.github.com/en/actions)

---

**需要帮助？** 查看 [README.md](./README.md) 获取详细说明或 [DEPLOY.md](./DEPLOY.md) 了解部署细节。
