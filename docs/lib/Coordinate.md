# 坐标相关

## Coordinate

- **说明：**
  - 获取、设置坐标经度、纬度
- **参数：**
  - `number: lng`：经度  
  - `number: lat`：纬度 

- **示例：**

```js
const coordinate = new Coordinate(116.404, 39.915);
coordinate.getLng() //获取经度 116.104
coordinate.getLat() //获取纬度 39.915
coordinate.setLng(116.104) //设置经度
coordinate.setLat(39.915)  //设置纬度
coordinate.toArray() //转换为数组 [116.404, 39.915]
```