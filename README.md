# Jiajing Wang 的个人主页

[个人主页](https://wangjiajingxjtu.github.io/) · [GitHub](https://github.com/wangjiajingxjtu) · [CCF Submission Guide](https://wangjiajingxjtu.github.io/ccf-submission-guide/)

西安交通大学博士生 Jiajing Wang 的个人学术主页，介绍研究兴趣、教育经历和项目。网站使用 **Jekyll 3.10 + GitHub Pages**：内容写在 Markdown 文件里，布局、样式和图片分别维护。

## 文件放在哪里

| 文件或目录 | 用途 |
| --- | --- |
| `_config.yml` | 姓名、网站描述、封面路径及常用链接 |
| `index.md` | 首页入口，使用 `home` 布局 |
| `aboutme.md`、`research.md`、`projects.md`、`education.md` | 个人介绍、研究兴趣、项目、教育经历；同一份内容同时用于首页和独立页面 |
| `news.md` | 动态列表页 |
| `_posts/` | 按日期保存动态，首页展示最近 3 条 |
| `_data/navigation.yml` | 导航名称和链接 |
| `_data/home.yml` | 首页各部分的顺序 |
| `_layouts/`、`_includes/` | 页面布局和共用的导航、封面、页脚等组件 |
| `assets/css/`、`assets/js/`、`assets/img/` | 样式、菜单交互和图片 |
| `docs/maintenance.md` | 日常维护步骤 |

平时更新介绍或项目，直接编辑对应的 `.md` 文件即可。添加动态、换封面、调整导航的具体操作见 [维护说明](docs/maintenance.md)。

## 预览与发布

本地已安装 Ruby 和 Bundler 时，在仓库目录运行：

```sh
bundle install
bundle exec jekyll serve
```

然后打开终端显示的本地地址，通常为 `http://127.0.0.1:4000/`。修改 `_config.yml` 后需重启预览。

GitHub Pages 的发布来源为 `main` 分支的 `/(root)`。提交更改后，GitHub 会构建并部署；在仓库 **Actions** 中查看结果，再打开线上页面检查。源码中不保留 `.nojekyll` 或根目录 `index.html`；`_site/` 由 Jekyll 生成，不提交。不能再通过双击源码文件预览完整主页。

CCF 检索站继续由[独立仓库](https://github.com/wangjiajingxjtu/ccf-submission-guide)维护和发布。

## 视觉与素材

风格参考 [Zhuoran Song 的主页](https://songzhuoran.github.io/)：杏桃色导航、居中圆形标记、风景封面、白底单栏与衬线正文。目录也按 Jekyll 的惯例组织。本站模板、CSS 和菜单交互独立实现，未复制对方的主题代码、照片或个人内容。

圆形标记暂用姓名缩写 **JW**。介绍、研究方向、教育与项目均基于本人提供的信息，没有添加论文、导师或邮箱。

中文采用与参考主页正文相同的字体栈：`"Lora", "Times New Roman", serif`，字距正常。Lora 不提供中文字形，中文由浏览器回退到本机衬线字体；本站不额外加载字体文件。

封面通过内置 image_gen 生成，压缩后的图片保存在 `assets/img/hero.jpg`。画面为虚构山水，不代表学校实景。生成提示词：

> Use case: photorealistic-natural. Wide 3:1 academic homepage hero background. Calm mountain lake at dawn, layers of misty blue-green mountains, subtle warm peach sky. Natural editorial landscape photography. Center uncluttered and medium-dark for a white overlaid name. Quiet and restrained, soft natural dawn light. No people, no buildings, no text, no logos, no watermark. Do not depict a specific real university.
