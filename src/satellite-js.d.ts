// Minimal type declarations for the pure-JS parts of satellite.js we use.
// The library is untyped JS; these are intentionally loose.

declare module 'satellite.js/dist/io.js' {
  export interface SatelliteRecord {
    satnum: string
    [key: string]: unknown
  }
  export function twoline2satrec(line1: string, line2: string): SatelliteRecord
}

declare module 'satellite.js/dist/propagation.js' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function sgp4(satrec: any, tsince: number): any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function propagate(satrec: any, date: Date): any
  export function gstime(date: Date): number
}

declare module 'satellite.js/dist/transforms.js' {
  export interface Geodetic { longitude: number; latitude: number; height: number }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export function eciToGeodetic(eci: any, gmst: number): Geodetic
}
