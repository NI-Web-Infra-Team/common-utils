import { describe, expect, test } from "vitest";
import * as utils from "../../../src";

describe("CoordinateUtils", () => {
  const coordinateUtils = new utils.CoordinateUtils();
  const coordinate = new utils.Coordinate(116.404, 39.915);
  test("09转02", () => {
    const lonlat = utils.CoordinateUtils.transformBD09ToGCJ02(coordinate);
    expect(lonlat).toEqual({ lng: 116.39762729119315, lat: 39.90865673957631 });
  });
  test("02转09", () => {
    const lonlat = utils.CoordinateUtils.transformGCJ02ToBD09(coordinate);
    expect(lonlat).toEqual({ lng: 116.41036949371029, lat: 39.92133699351022 });
  });
  test("简单02转84", () => {
    const lonlat = utils.CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate);
    expect(lonlat).toEqual({ lng: 116.39775550083061, lat: 39.91359571849836 });
  });
  test("02转84", () => {
    const lonlat = utils.CoordinateUtils.transformGCJ02ToWGS84(coordinate);
    expect(lonlat).toEqual({ lng: 116.3977557546871, lat: 39.91359623568433 });
  });
  test("84转02", () => {
    const lonlat = utils.CoordinateUtils.transformWGS84ToGCJ02(coordinate);
    expect(lonlat).toEqual({ lng: 116.41024449916938, lat: 39.91640428150164 });
  });
  test("09转84", () => {
    const lonlat = utils.CoordinateUtils.transformBD09ToWGS84(coordinate);
    expect(lonlat).toEqual({ lng: 116.39138609744414, lat: 39.907255434216694 });
  });
  test("84转09", () => {
    const lonlat = utils.CoordinateUtils.transformWGS84ToBD09(coordinate);
    expect(lonlat).toEqual({ lng: 116.41662724378733, lat: 39.922699552216216 });
  });
});
describe("CoordinateUtils-国外坐标", () => {
  const coordinate = new utils.Coordinate(-77.02, -38.54);
  test("02转84", () => {
    const lonlat = utils.CoordinateUtils.simpleTransformGCJ02ToWGS84(coordinate);
    expect(lonlat).toEqual({ lng: -77.02, lat: -38.54 });
  });
  test("84转02", () => {
    const lonlat = utils.CoordinateUtils.transformWGS84ToGCJ02(coordinate);
    expect(lonlat).toEqual({ lng: -77.02, lat: -38.54 });
  });
});
