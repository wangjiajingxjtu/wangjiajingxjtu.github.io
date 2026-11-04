# 主页维护说明

日常更新可以直接在 GitHub 网页里完成，不需要先学会 HTML。仓库：[wangjiajingxjtu.github.io](https://github.com/wangjiajingxjtu/wangjiajingxjtu.github.io)。

## 修改介绍、研究方向或项目

1. 在仓库中打开对应文件：`aboutme.md`、`research.md`、`projects.md` 或 `education.md`。
2. 点击铅笔按钮编辑。保留文件开头两行 `---` 之间的设置，在下方修改正文。
3. 点击 **Commit changes**，写一句修改说明，再提交到 `main` 分支。
4. 打开仓库 **Actions**，等 Pages 部署成功后检查[线上主页](https://wangjiajingxjtu.github.io/)。

这些文件同时生成独立页面，并被首页引用。修改一次，两处都会更新。常用 Markdown 写法：

```markdown
**加粗文字**

[链接名称](https://example.com/)

- 第一项
- 第二项
```

正文中的中文段落可以沿用现有写法，让浏览器应用中文字体设置：

```markdown
这里填写中文介绍。
{: lang="zh-CN"}
```

## 添加一条动态

在 `_posts/` 文件夹中选择 **Add file → Create new file**。文件名必须遵循 `YYYY-MM-DD-英文短标题.md`，例如 `2026-11-04-research-update.md`。日期请填写事情实际发生的日期，再按下面的格式写内容：

```markdown
---
title: "填写真实的动态标题"
date: "2026-11-04 12:00:00 +0800"
lang: en
summary: "用一句话概括，首页会显示这段话。"
---

在这里填写正文，可以加入链接和图片。
```

示例只是格式，不要原样发布占位文字。标题含冒号时保留引号；日期也用引号包起来。文件名日期与 `date` 保持一致。中文整篇文章可将 `lang` 改为 `zh-CN`。晚于当前时间的文章不会立即发布。

提交后，动态自动出现在 `/news/`，首页显示最近 3 条。每篇文章都有单独的地址，格式为 `/news/年/月/日/英文短标题/`。

## 调整导航与首页顺序

导航在 `_data/navigation.yml` 中，例如：

```yaml
- title: Research
  url: /research/
```

`title` 是显示文字，`url` 是站内路径。站内路径以 `/` 开头，模板会通过 `relative_url` 处理；不要手动拼接本地域名。CCF 项目属于独立网站，继续使用完整地址 `https://wangjiajingxjtu.github.io/ccf-submission-guide/`。

首页顺序在 `_data/home.yml` 中。移动条目的顺序即可调整首页，不必改 HTML。普通内容条目填写对应 Markdown 文件名；动态条目保留 `kind: news`。

## 更换封面、修改姓名等信息

- 换封面：上传有权使用的图片到 `assets/img/`，然后修改 `_config.yml` 中的 `hero_image`，例如 `/assets/img/my-cover.jpg`。横向、约 3:1 的图片更适合现在的封面区域。检查标题是否仍能看清。
- 改身份信息：修改 `_config.yml` 中的 `title`、`author`、`subtitle`、`subtitle_zh` 和 `description`，再检查相关 Markdown 正文是否也要更新。
- 改样式：编辑 `assets/css/main.css`。菜单交互在 `assets/js/main.js`。

当前封面为 AI 生成的虚构山水。换成自己的照片后，可同步调整 `_includes/footer.html` 和 README 中的素材说明。

## 以后有论文了，怎样添加 Publications

确认论文信息后，再创建根目录文件 `publications.md`：

```markdown
---
title: Publications
permalink: /publications/
anchor: publications
home_heading: Publications
---

在这里填写真实论文的标题、作者、发表场所和链接。
```

接着在 `_data/navigation.yml` 添加：

```yaml
- title: Publications
  url: /publications/
```

若要同时展示在首页，在 `_data/home.yml` 的合适位置添加：

```yaml
- path: publications.md
```

`title` 控制独立页面标题；`home_heading` 可单独指定首页标题，不填时使用 `title`；`anchor` 为首页这一部分提供锚点。通常不必修改 `_layouts/` 或 `_includes/`。

## 本地预览与部署排查

安装 Ruby 和 Bundler 后，在仓库目录执行：

```sh
bundle install
bundle exec jekyll serve
```

访问终端显示的地址。修改 `_config.yml` 后重启命令。只检查能否构建时运行 `bundle exec jekyll build`；输出在 `_site/`，不要把它提交进仓库。

GitHub 仓库 **Settings → Pages → Build and deployment** 应使用 **Deploy from a branch**，选择 `main` 和 `/(root)`。由 GitHub Pages 自带流程构建，无需另建工作流。

如果修改后页面没有更新，先看 **Actions** 中最近一次 Pages 部署是否成功。构建失败时，优先检查 YAML 缩进、开头的 `---`、日期和引号。部署成功但仍显示旧页面时，再刷新浏览器缓存。请勿添加 `.nojekyll`，也不要把构建产物 `index.html` 放到根目录覆盖 `index.md`。
