/**
 * Coordinate class
 * @class Coordinate
 * @classdesc Coordinate class
 *
 * @param {number} lng - longitude
 * @param {number} lat - latitude
 * @example
 * const coordinate = new Coordinate(116.404, 39.915);
 */

export class Coordinate {
  lng: number;
  lat: number;

  constructor(lng: number, lat: number) {
    this.lng = lng;
    this.lat = lat;
  }

  getLng() {
    return this.lng;
  }

  getLat() {
    return this.lat;
  }

  setLng(lng: number) {
    this.lng = lng;
  }

  setLat(lat: number) {
    this.lat = lat;
  }

  toArray() {
    return [this.lng, this.lat];
  }
}
