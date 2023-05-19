# NI Web Infra Team 项目贡献指南

NI Web Infra Team 的成长离不开大家的支持，如果你愿意为 NI Web Infra Team 项目贡献代码或提供建议，请阅读以下内容。

## Issue 规范

- issue 仅用于提交 Bug 或 Feature 以及设计相关的内容，其它内容可能会被直接关闭。如果你在使用时产生了疑问，请到 [飞书技术支持群](https://applink.feishu.cn/client/chat/chatter/add_by_link?link_token=287pd8a9-6a19-4b36-93c5-4b25b2d3860f) 里咨询。

- 在提交 issue 之前，请搜索相关内容是否已被提出。

- 请提供操作系统和浏览器信息。推荐截图或录屏，这能够更直观地重现问题。

## Pull Request 规范

- 如果您是团队外用户请先 fork 一份到自己的项目下，不要直接在仓库下建分支。

- commit 信息要以 `type(scope): 描述信息` 的形式填写，例如 `fix(components): [scrollbar] fix xxx bug`（推荐使用 `git-cz` 生成）。

    1. type: 必须是 'build', 'chore', 'ci', 'conflict', 'delete', 'docs', 'downgrade', 'feat', 'fix', 'font', 'lint', 'perf', 'refactor', 'release', 'revert', 'stash', 'style', 'test', 'upgrade', 'wip' 其中的一个。

    2. scope: 必须是 components, directives, element-plus, hooks, locale, test-utils, theme-chalk, tokens, utils, project, core, style, docs, ci, dev, build, deploy, other, typography, color, border, var 其中的一个。

    3. header: 描述信息不要超过 128 个字符并且不要少于 3 个字符。

- **不要提交** `.gitignore` 里面忽略的文件。

- 执行 `npm run build` 后可以正确打包文件。

- 提交 PR 前请 rebase，确保 commit 记录的整洁。

- 确保 PR 是提交到 `development` 分支，而不是 `main` 分支。

- 如果是修复 bug，请在 PR 中给出描述信息。

- 合并代码需要两名维护人员参与：一人进行 review 后 approve，另一人再次 review，通过后即可合并。
