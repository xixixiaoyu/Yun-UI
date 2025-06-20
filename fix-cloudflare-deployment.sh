#!/bin/bash

# Cloudflare Pages 部署修复脚本
# 解决静态资源 MIME 类型错误问题

echo "🔧 开始修复 Cloudflare Pages 部署问题..."

# 检查是否安装了必要的依赖
echo "📦 检查依赖..."
if ! command -v pnpm &> /dev/null; then
    echo "❌ pnpm 未安装，请先安装 pnpm"
    exit 1
fi

# 安装依赖（如果需要）
echo "📥 安装依赖..."
pnpm install

# 清理之前的构建
echo "🧹 清理构建目录..."
rm -rf dist

# 使用正确的环境变量重新构建
echo "🏗️ 重新构建项目（使用 Cloudflare Pages 配置）..."
CLOUDFLARE_PAGES=true NODE_ENV=production pnpm run build:demo

# 检查构建结果
if [ -d "dist" ]; then
    echo "✅ 构建成功！"
    echo "📁 构建文件位于 dist/ 目录"
    
    # 检查关键文件
    if [ -f "dist/index.html" ]; then
        echo "✅ index.html 存在"
    else
        echo "❌ index.html 不存在"
    fi
    
    if [ -f "dist/_redirects" ]; then
        echo "✅ _redirects 文件存在"
    else
        echo "❌ _redirects 文件不存在"
    fi
    
    # 显示资源文件
    echo "📄 静态资源文件："
    find dist -name "*.css" -o -name "*.js" | head -5
    
else
    echo "❌ 构建失败！"
    exit 1
fi

# 提供部署选项
echo ""
echo "🚀 接下来你可以："
echo "1. 手动部署到 Cloudflare Pages Dashboard"
echo "2. 使用 Wrangler CLI 部署：pnpm run deploy:cf"
echo "3. 推送到 GitHub 触发自动部署"
echo ""
echo "💡 提示：确保在 Cloudflare Pages 项目设置中配置了以下环境变量："
echo "   NODE_ENV=production"
echo "   CLOUDFLARE_PAGES=true"
echo ""
echo "🎉 修复完成！"