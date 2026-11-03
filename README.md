# Jiajing Wang 的个人主页

[Jiajing Wang（wangjiajingxjtu）](https://github.com/wangjiajingxjtu) 的个人学术主页源码，介绍研究兴趣、教育经历和项目。

- 发布地址：[wangjiajingxjtu.github.io](https://wangjiajingxjtu.github.io/)。
- 仓库：[wangjiajingxjtu/wangjiajingxjtu.github.io](https://github.com/wangjiajingxjtu/wangjiajingxjtu.github.io)。
- 项目：[CCF Submission Guide](https://wangjiajingxjtu.github.io/ccf-submission-guide/)，由独立仓库 `ccf-submission-guide` 发布。

## 维护

页面内容和样式均在根目录 `index.html`，可直接编辑并用浏览器打开预览，无需安装依赖或运行构建命令。更新个人信息后，也应同步检查页面描述和页脚日期。

GitHub Pages 使用 `main` 分支的 `/(root)` 作为发布来源，根目录保留 `.nojekyll`。提交更新后，在仓库 Actions 中确认部署成功，再打开发布地址检查页面。

页面中的 `../ccf-submission-guide/` 链接会指向同一账号下的项目网站。若要在本地同时预览两站，保持 `academic-homepage` 与 `ccf-submission-guide` 两个目录相邻。

## 视觉与素材

2026-11-03 改版参考 [Zhuoran Song 的主页](https://songzhuoran.github.io/)：杏桃色导航、居中圆形标记、风景封面、白底单栏与衬线正文。HTML、CSS 和菜单交互独立实现；未复制对方的主题代码、照片或个人内容。页脚保留风格参考链接。

圆形标记暂用姓名缩写 JW。介绍、研究方向、教育与项目均基于本人提供的信息，没有添加论文、导师或邮箱。

封面通过内置 image_gen 生成，压缩为 JPEG 后内嵌在 HTML 中，打开单个文件即可看到完整主页，无需请求外部图片或字体。封面为虚构山水场景，不代表学校实景。生成提示词：

> Use case: photorealistic-natural. Wide 3:1 academic homepage hero background. Calm mountain lake at dawn, layers of misty blue-green mountains, subtle warm peach sky. Natural editorial landscape photography. Center uncluttered and medium-dark for a white overlaid name. Quiet and restrained, soft natural dawn light. No people, no buildings, no text, no logos, no watermark. Do not depict a specific real university.
