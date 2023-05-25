import { Coordinate } from "./Coordinate";

const PI = Math.PI;
const x_PI = (PI * 3000.0) / 180.0;
const R = 6378245.0;
// const ee = 0.00669342162296594323;
const ee = 0.006693421622965943;

// 精度：小数点后5位代表精度为米
const G2W_PRECISION = 0.00000001;

// 迭代次数
const MAX_ITERATIONS = 1;

/**
 * @ignore
 * @private
 * 判断坐标是否不在国内
 *
 * @param {Coordinate} coordinate 经纬度
 * @return {Boolean} 坐标是否在国内
 */
function outOfChina(coordinate: Coordinate) {
  return coordinate.lng < 72.004 || coordinate.lng > 137.8347 || coordinate.lat < 0.8293 || coordinate.lat > 55.8271;
}

function diffCoordinate(coord1: Coordinate, coord2: Coordinate) {
  return new Coordinate(coord1.lng - coord2.lng, coord1.lat - coord2.lat);
}

function transformLat(lng: number, lat: number) {
  let ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
  ret += ((20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0) / 3.0;
  ret += ((20.0 * Math.sin(lat * PI) + 40.0 * Math.sin((lat / 3.0) * PI)) * 2.0) / 3.0;
  ret += ((160.0 * Math.sin((lat / 12.0) * PI) + 320 * Math.sin((lat * PI) / 30.0)) * 2.0) / 3.0;
  return ret;
}

function transformLng(lng: number, lat: number) {
  let ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
  ret += ((20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0) / 3.0;
  ret += ((20.0 * Math.sin(lng * PI) + 40.0 * Math.sin((lng / 3.0) * PI)) * 2.0) / 3.0;
  ret += ((150.0 * Math.sin((lng / 12.0) * PI) + 300.0 * Math.sin((lng / 30.0) * PI)) * 2.0) / 3.0;
  return ret;
}

/**
 * @class CoordinateUtils
 * @classdesc 提供了百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系之间的转换，GCJ02 可以通过反复迭代的形式降低精度损失，精度基本可以精确到米，迭代1次，可以达到 0.1  米的精度
 */

export class CoordinateUtils {
  constructor() {
    // do nothing
  }

  /**
   * 百度坐标（BD09）转 火星坐标（GCJ02）
   * @memberof CoordinateUtils
   *
   * @param {Coordinate} coordinate 百度经纬度
   * @returns {Coordinate} 坐标：[经度，纬度]
   *
   * @example
   * cnUtils.CoordinateUtils.transformBD09ToGCJ02(coordinate);
   */
  static transformBD09ToGCJ02(coordinate: Coordinate) {
    const x = coordinate.lng - 0.0065;
    const y = coordinate.lat - 0.006;
    const z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_PI);
    const theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_PI);
    const gcj_lng = z * Math.cos(theta);
    const gcj_lat = z * Math.sin(theta);
    return new Coordinate(gcj_lng, gcj_lat);
  }

  /**
   * GCJ02 转百度坐标
   * @memberof CoordinateUtils
   *
   * @param {Coordinate} coordinate GCJ02 经纬度
   * @return {Coordinate} 百度坐标：[经度，纬度]
   *
   * @example
   * cnUtils.CoordinateUtils.transformGCJ02ToBD09(coordinate);
   */
  static transformGCJ02ToBD09(coordinate: Coordinate) {
    const z =
      Math.sqrt(coordinate.lng * coordinate.lng + coordinate.lat * coordinate.lat) +
      0.00002 * Math.sin(coordinate.lat * x_PI);
    const theta = Math.atan2(coordinate.lat, coordinate.lng) + 0.000003 * Math.cos(coordinate.lng * x_PI);
    const bd_lng = z * Math.cos(theta) + 0.0065;
    const bd_lat = z * Math.sin(theta) + 0.006;
    return new Coordinate(bd_lng, bd_lat);
  }

  /**
   * 简单的GCJ02 转 WGS84
   * @memberof CoordinateUtils
   *
   * @param {Coordinate} coordinate GCJ02经纬度
   * @return {Coordinate} WGS84坐标：[经度，纬度]
   *
   * @example
   * cnUtils.CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate);
   */
  static simpleTransformGCJ02ToWGS84(coordinate: Coordinate) {
    if (outOfChina(coordinate)) {
      return coordinate;
    } else {
      let dLat = transformLat(coordinate.lng - 105.0, coordinate.lat - 35.0);
      let dLng = transformLng(coordinate.lng - 105.0, coordinate.lat - 35.0);
      const radLat = (coordinate.lat / 180.0) * PI;
      let magic = Math.sin(radLat);
      magic = 1 - ee * magic * magic;
      const sqrtMagic = Math.sqrt(magic);
      dLat = (dLat * 180.0) / (((R * (1 - ee)) / (magic * sqrtMagic)) * PI);
      dLng = (dLng * 180.0) / ((R / sqrtMagic) * Math.cos(radLat) * PI);
      const mgLat = coordinate.lat + dLat;
      const mgLng = coordinate.lng + dLng;
      return new Coordinate(coordinate.lng * 2 - mgLng, coordinate.lat * 2 - mgLat);
    }
  }

  /**
   * GCJ02 转 WGS84
   * @memberof CoordinateUtils
   *
   * @param {Coordinate} gcj GCJ02经纬度
   * @return {Coordinate} WGS84坐标：[经度，纬度]
   * @example
   * cnUtils.CoordinateUtils.transformGCJ02ToWGS84(coordinate);
   */
  static transformGCJ02ToWGS84(gcj: Coordinate) {
    // 计算输入 gcj 坐标与将其计算为84坐标的偏差
    // 用当前的 gcj 坐标减去这个偏差，其近似于 gcj 对应的 84 坐标
    // 使用这个近似坐标去计算火星坐标，与输入的 gcj 进行比较，看是否符合精度
    // 如果不符合精度，则将近似坐标加上上面得到的偏差，再进行计算一次
    const wgs = diffCoordinate(gcj, diffCoordinate(CoordinateUtils.transformWGS84ToGCJ02(gcj), gcj));
    const d = diffCoordinate(gcj, CoordinateUtils.transformWGS84ToGCJ02(wgs));
    for (let i = 0; i < MAX_ITERATIONS; i++) {
      // 计算误差,高于误差则不合格，继续迭代
      if (Math.abs(d.lng) > G2W_PRECISION || Math.abs(d.lat) > G2W_PRECISION) {
        wgs.lng += d.lng;
        wgs.lat += d.lat;
      }
    }
    return wgs;
  }

  /**
   * WGS84 坐标 转 GCJ02
   * @memberof CoordinateUtils
   *
   * @param {Coordinate} coordinate WGS84经纬度
   * @return {Coordinate} GCJ02 坐标：[经度，纬度]
   *
   * @example
   * cnUtils.CoordinateUtils.transformWGS84ToGCJ02(coordinate);
   */
  static transformWGS84ToGCJ02(coordinate: Coordinate) {
    if (outOfChina(coordinate)) {
      return coordinate;
    } else {
      let dLat = transformLat(coordinate.lng - 105.0, coordinate.lat - 35.0);
      let dLng = transformLng(coordinate.lng - 105.0, coordinate.lat - 35.0);
      const redLat = (coordinate.lat / 180.0) * PI;
      let magic = Math.sin(redLat);
      magic = 1 - ee * magic * magic;
      const sqrtMagic = Math.sqrt(magic);
      dLat = (dLat * 180.0) / (((R * (1 - ee)) / (magic * sqrtMagic)) * PI);
      dLng = (dLng * 180.0) / ((R / sqrtMagic) * Math.cos(redLat) * PI);
      const mgLat = coordinate.lat + dLat;
      const mgLng = coordinate.lng + dLng;
      return new Coordinate(mgLng, mgLat);
    }
  }

  /**
   * 百度坐标BD09 转 WGS84
   * @memberof CoordinateUtils
   *
   * @param {Coordinate} coordinate 经纬度
   * @return {Coordinate} WGS84 坐标：[经度，纬度]
   *
   * @example
   * cnUtils.CoordinateUtils.transformBD09ToWGS84(coordinate);
   */
  static transformBD09ToWGS84(coordinate: Coordinate) {
    const gcj02 = CoordinateUtils.transformBD09ToGCJ02(coordinate);

    return CoordinateUtils.transformGCJ02ToWGS84(gcj02);
  }

  /**
   * WGS84 转 百度坐标BD09
   * @memberof CoordinateUtils
   *
   * @param {Coordinate} coordinate 经纬度
   * @return {Coordinate} BD09 坐标：[经度，纬度]
   *
   * @example
   * cnUtils.CoordinateUtils.transformWGS84ToBD09(coordinate);
   */
  static transformWGS84ToBD09(coordinate: Coordinate) {
    const gcj02 = CoordinateUtils.transformWGS84ToGCJ02(coordinate);
    return CoordinateUtils.transformGCJ02ToBD09(gcj02);
  }
}
