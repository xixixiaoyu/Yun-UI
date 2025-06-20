# Cloudflare Pages 部署指南

本项目已配置支持 Cloudflare Pages 部署。以下是详细的部署步骤和配置说明。

## 🚀 快速部署

### 方法一：通过 Cloudflare Dashboard（推荐）

1. **登录 Cloudflare Dashboard**
   - 访问 [Cloudflare Dashboard](https://dash.cloudflare.com/)
   - 选择你的账户

2. **创建 Pages 项目**
   - 点击 "Pages" → "Create a project"
   - 选择 "Connect to Git"
   - 连接你的 GitHub 仓库

3. **配置构建设置**
   ```
   Framework preset: Vue
   Build command: npm run build:demo
   Build output directory: dist
   Root directory: /
   ```

4. **环境变量设置**
   ```
   NODE_ENV=production
   CLOUDFLARE_PAGES=true
   ```

5. **部署**
   - 点击 "Save and Deploy"
   - 等待构建完成

### 方法二：通过 Wrangler CLI

1. **安装依赖**
   ```bash
   pnpm install
   ```

2. **登录 Cloudflare**
   ```bash
   npx wrangler login
   ```

3. **部署到生产环境**
   ```bash
   pnpm run deploy:cf
   ```

4. **部署预览版本**
   ```bash
   pnpm run deploy:cf:preview
   ```

### 方法三：通过 GitHub Actions（自动化）

项目已配置 GitHub Actions 工作流，当代码推送到 `main` 或 `master` 分支时会自动部署。

**设置步骤：**

1. **获取 Cloudflare API Token**
   - 访问 [Cloudflare API Tokens](https://dash.cloudflare.com/profile/api-tokens)
   - 创建自定义 Token，权限设置为：
     - `Cloudflare Pages:Edit`
     - `Account:Read`
     - `Zone:Read`

2. **获取 Account ID**
   - 在 Cloudflare Dashboard 右侧边栏找到 Account ID

3. **配置 GitHub Secrets**
   在 GitHub 仓库设置中添加以下 Secrets：
   ```
   CLOUDFLARE_API_TOKEN=your_api_token_here
   CLOUDFLARE_ACCOUNT_ID=your_account_id_here
   ```

4. **推送代码**
   ```bash
   git push origin main
   ```

## 📁 项目文件说明

### 新增文件

- `wrangler.toml` - Cloudflare Workers/Pages 配置文件
- `public/_redirects` - SPA 路由重定向规则
- `.github/workflows/cloudflare-pages.yml` - GitHub Actions 工作流
- `CLOUDFLARE_DEPLOYMENT.md` - 本部署指南

### 修改文件

- `package.json` - 添加了部署脚本和 wrangler 依赖
- `vite.config.ts` - 优化了 Cloudflare Pages 的构建配置

## 🔧 配置详解

### wrangler.toml
```toml
name = "yun-ui"
compatibility_date = "2024-01-01"

[env.production]
name = "yun-ui"

[env.production.pages]
build_command = "npm run build:demo"
build_output_dir = "dist"

[env.production.vars]
NODE_ENV = "production"
```

### _redirects
```
# SPA 路由重定向
/*    /index.html   200
```

### 环境变量
- `NODE_ENV=production` - 生产环境标识
- `CLOUDFLARE_PAGES=true` - Cloudflare Pages 部署标识

## 🎯 部署脚本

```bash
# 部署到生产环境
pnpm run deploy:cf

# 部署预览版本
pnpm run deploy:cf:preview
```

## 🔍 故障排除

### 常见问题

1. **构建失败**
   - 检查 Node.js 版本（推荐 18+）
   - 确保所有依赖已正确安装
   - 检查构建命令是否正确

2. **路由 404 错误**
   - 确保 `public/_redirects` 文件存在
   - 检查 SPA 路由配置

3. **静态资源加载失败**
   - 检查 `base` 路径配置
   - 确保 `CLOUDFLARE_PAGES` 环境变量设置正确

### 调试技巧

1. **本地预览**
   ```bash
   pnpm run build:demo
   pnpm run preview
   ```

2. **检查构建输出**
   ```bash
   ls -la dist/
   ```

3. **查看部署日志**
   - 在 Cloudflare Dashboard 的 Pages 项目中查看部署日志
   - 在 GitHub Actions 中查看工作流日志

## 📚 相关文档

- [Cloudflare Pages 官方文档](https://developers.cloudflare.com/pages/)
- [Wrangler CLI 文档](https://developers.cloudflare.com/workers/wrangler/)
- [Vue.js 部署指南](https://vitejs.dev/guide/static-deploy.html)

## 🎉 部署成功

部署成功后，你的 Yun-UI 组件库演示站点将可以通过 Cloudflare Pages 提供的域名访问。你也可以配置自定义域名。

享受快速、可靠的全球 CDN 加速！ 🚀