import { describe, expect, test } from "vitest";
import * as utils from "../../../src";

describe("Coordinate", () => {
  const coordinate = new utils.Coordinate(116.404, 39.915);

  test("经度", () => {
    expect(coordinate.getLng()).toBe(116.404);
  });

  test("纬度", () => {
    expect(coordinate.getLat()).toBe(39.915);
  });

  test("设置", () => {
    coordinate.setLng(116.58);
    coordinate.setLat(39.2);
    const lonlat = coordinate.toArray();
    expect(lonlat).toStrictEqual([116.58, 39.2]);
  });
});
