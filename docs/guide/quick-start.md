# 如何使用

```shell
$ npm install -S @ni-web-infra/common-utils
```

## webpack/vite

```javascript
// 全量引入
import cnUtils from "@ni-web-infra/common-utils";
cnUtils.getBrowserInfo();

// 按需引入
import { getBrowserInfo } from "@ni-web-infra/common-utils";
getBrowserInfo();

import getBrowserInfo from "@ni-web-infra/common-utils/dist/browser";
getBrowserInfo();
```

## 在浏览器中直接使用

```html
<script src="https://unpkg.com/@ni-web-infra/common-utils/dist/index.js"></script>

<script>
  cnUtils.getBrowserInfo();
</script>
```
