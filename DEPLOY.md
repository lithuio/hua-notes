# GitHub Pages 部署指南

## 前提条件

- 已在 GitHub 创建仓库（例如：`username/hua-notes` 或 `username/notes`）
- 本地已初始化 Git 仓库
- 已配置 GitHub SSH 密钥或 HTTPS 凭证

## 部署步骤

### 1. 添加远程仓库

将本地仓库连接到 GitHub：

```bash
cd /home/lumi/notes
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

**替换说明**：
- `YOUR_USERNAME` 改为你的 GitHub 用户名
- `YOUR_REPO_NAME` 改为你的仓库名（例如：`hua-notes` 或 `notes`）

### 2. 配置 VitePress 的 base 路径

根据你的仓库类型，修改 `docs/.vitepress/config.mts` 中的 `base` 配置：

**如果使用用户站点仓库**（`username.github.io`）：
```typescript
base: '/',
```

**如果使用项目仓库**（`hua-notes`）：
```typescript
base: '/hua-notes/',
```

### 3. 启用 GitHub Pages

在仓库设置中：

1. 进入 GitHub 仓库的 **Settings** 页面
2. 左侧菜单选择 **Pages**
3. 在 **Source** 下拉菜单中选择：
   - **Deploy from a branch**
   - 选择分支：`gh-pages`
   - 选择目录：`/ (root)`
4. 点击 **Save**

### 4. 自动部署配置

已提供 GitHub Actions 工作流文件 (`.github/workflows/deploy.yml`)：

- 当你 push 到 `main` 或 `master` 分支时，自动触发构建
- 构建成功后，自动部署到 `gh-pages` 分支
- GitHub Pages 会自动从 `gh-pages` 分支发布网站

**要求**：
- 确保 GitHub 仓库的 **Settings → Actions** 中已启用 GitHub Actions
- 工作流文件中使用 `${{ secrets.GITHUB_TOKEN }}`，无需额外配置

### 5. 首次推送

```bash
cd /home/lumi/notes
git add .
git commit -m "Configure GitHub Pages deployment"
git push origin main
```

第一次 push 后：
- GitHub Actions 会自动运行工作流
- 查看 **Actions** 标签查看构建进度
- 构建成功后，你的网站会在以下地址发布：

| 仓库类型 | 发布地址 |
|--------|--------|
| 用户站点 (username.github.io) | `https://username.github.io/` |
| 项目仓库 (hua-notes) | `https://username.github.io/hua-notes/` |

### 6. 使用自定义域名（可选）

如果要使用自定义域名（例如 `note.example.com`）：

1. 在 `.github/workflows/deploy.yml` 中取消 `cname:` 行的注释
2. 填入你的自定义域名：
   ```yaml
   cname: your-custom-domain.com
   ```
3. 在你的域名 DNS 设置中添加 CNAME 记录指向 GitHub Pages
4. 在仓库 Settings → Pages 中验证自定义域名

## 常见问题

### Q: 构建失败？

**A**: 
- 检查 GitHub Actions 的构建日志
- 确保所有依赖已正确安装：`npm install`
- 验证 `docs/.vitepress/config.mts` 配置正确
- 确保文件使用 UTF-8 编码

### Q: 网站未出现？

**A**:
- 检查 GitHub Pages 是否已启用（Settings → Pages）
- 确认 base 路径配置正确
- 等待 1-2 分钟，GitHub 需要时间处理
- 清除浏览器缓存后重新访问

### Q: 如何更新网站内容？

**A**:
只需在本地修改文件，然后推送到 GitHub：
```bash
git add .
git commit -m "Update notes content"
git push origin main
```
GitHub Actions 会自动重新构建和部署。

### Q: 如何仅部署特定分支？

**A**:
编辑 `.github/workflows/deploy.yml` 的 `on.push.branches` 部分，指定你想要的分支。

## 工作流概览

```
你的本地修改
    ↓
git push origin main
    ↓
GitHub Actions 触发
    ↓
npm install (安装依赖)
    ↓
npm run docs:build (构建静态网站)
    ↓
部署到 gh-pages 分支
    ↓
GitHub Pages 发布
    ↓
网站可在线访问 🎉
```

## 下一步

部署成功后：

1. **监控部署**：访问仓库的 **Actions** 标签，查看每次构建的状态
2. **添加内容**：继续在本地编辑笔记，push 后自动更新
3. **自定义主题**：如需修改样式，编辑 `docs/.vitepress/config.mts`
4. **分享网站**：发布你的网站链接给其他人

---

**提示**：如有问题，查看 [VitePress 官方部署指南](https://vitepress.dev/guide/deploy)
