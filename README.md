# 个人工具箱

这是一个基于 Next.js 的可扩展个人工具箱项目，可以轻松部署到 Vercel。

## 功能

- 可扩展的工具集
- 响应式设计
- 性能优化

## 如何添加新工具

1. 在 `pages/tools/` 目录下创建新的工具组件文件（例如 `NewTool.tsx`）
2. 在 `lib/tools.ts` 文件中添加新工具的配置：
typescript
{
id: 'newTool',
name: '新工具',
component: dynamic(() => import('../pages/tools/NewTool'))
}

3. 实现新工具的功能

## 部署

本项目可以直接部署到 Vercel 平台。请按照以下步骤进行部署：

1. 将代码推送到 GitHub 仓库。
2. 登录 [Vercel](https://vercel.com/) 并点击 "New Project"。
3. 选择导入 GitHub 仓库。
4. 选择您的项目仓库并点击 "Import"。
5. 在 "Configure Project" 页面，保持默认设置并点击 "Deploy"。
6. 部署完成后，您将获得一个 Vercel 提供的域名，您可以使用该域名访问您的工具箱。

## 开发

1. 克隆仓库
2. 运行 `npm install` 安装依赖
3. 运行 `npm run dev` 启动开发服务器
4. 在浏览器中打开 `http://localhost:3000`

## 构建

运行 `npm run build` 来构建生产版本

## 依赖

- Next.js
- React
- Tailwind CSS
- React Toastify
- TypeScript