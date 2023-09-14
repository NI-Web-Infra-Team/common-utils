# 坐标转换相关

## outOfChina

- **说明：**
  - 判断坐标是否不在国内
- **参数：**
  - `Object: Coordinate`：经度、纬度 
- **返回：** 
  - `Boolean` -坐标是否在国内

- **示例：**

```js

outOfChina({lng:116.15,lat:45.26})
```
# 坐标转换

## CoordinateUtils

- **说明：**
  - 百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系之间的转换，GCJ02 可以通过反复迭代的形式降低精度损失，精度基本可以精确到米，迭代1次，可以达到 0.1  米的精度

### transformBD09ToGCJ02()
- **说明：**
  - 百度坐标（BD09）转 火星坐标（GCJ02）
- **参数：**
  - `Object: Coordinate`：coordinate 百度经纬度
- **返回：** 
  - `Coordinate` -坐标：[经度，纬度]

- **示例：**

```js
let cnUtils = new CoordinateUtils()
let coordinate = {lng:116.15,lat:45.26}
cnUtils.transformBD09ToGCJ02(coordinate);
```

### transformGCJ02ToBD09()
- **说明：**
  - GCJ02 转百度坐标
- **参数：**
  - `Object: Coordinate`：coordinate GCJ02 经纬度
- **返回：** 
  - `Coordinate` -百度坐标：[经度，纬度]

- **示例：**

```js
let cnUtils = new CoordinateUtils()
let coordinate = {lng:116.15,lat:45.26}
cnUtils.transformGCJ02ToBD09(coordinate);
```

### simpleTransformGCJ02ToWGS84()
- **说明：**
  - 简单的GCJ02 转 WGS84
- **参数：**
  - `Object: Coordinate`：coordinate GCJ02 经纬度
- **返回：** 
  - `Coordinate` -WGS84坐标：[经度，纬度]

- **示例：**

```js
let cnUtils = new CoordinateUtils()
let coordinate = {lng:116.15,lat:45.26}
cnUtils.transformGCJ02ToBD09(coordinate);
```

### transformGCJ02ToWGS84()
- **说明：**
  - GCJ02 转 WGS84
- **参数：**
  - `Object: Coordinate`：coordinate gcj GCJ02经纬度
- **返回：** 
  - `Coordinate` -WGS84坐标：[经度，纬度]

- **示例：**

```js
let cnUtils = new CoordinateUtils()
let coordinate = {lng:116.15,lat:45.26}
cnUtils.transformGCJ02ToWGS84(coordinate);
```

### transformWGS84ToGCJ02()
- **说明：**
  - WGS84 坐标 转 GCJ02
- **参数：**
  - `Object: Coordinate`：WGS84经纬度
- **返回：** 
  - `Coordinate` -GCJ02 坐标：[经度，纬度]

- **示例：**

```js
let cnUtils = new CoordinateUtils()
let coordinate = {lng:116.15,lat:45.26}
cnUtils.transformWGS84ToGCJ02(coordinate);
```

### transformBD09ToWGS84()
- **说明：**
  - 百度坐标BD09 转 WGS84
- **参数：**
  - `Object: Coordinate`：经纬度
- **返回：** 
  - `Coordinate` -WGS84 坐标：[经度，纬度]

- **示例：**

```js
let cnUtils = new CoordinateUtils()
let coordinate = {lng:116.15,lat:45.26}
cnUtils.transformBD09ToWGS84(coordinate);
```

### transformWGS84ToBD09()
- **说明：**
  - WGS84 转 百度坐标BD09
- **参数：**
  - `Object: Coordinate`：经纬度
- **返回：** 
  - `Coordinate` -BD09 坐标：[经度，纬度]

- **示例：**

```js
let cnUtils = new CoordinateUtils()
let coordinate = {lng:116.15,lat:45.26}
cnUtils.transformWGS84ToBD09(coordinate);
```