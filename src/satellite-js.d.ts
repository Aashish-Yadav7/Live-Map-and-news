declare module 'satellite.js' {
  export interface SatelliteRecord {
    satnum: number
    epochYear: number
    epochDay: number
    inclo: number
    nodeo: number
    ecco: number
    argpo: number
    mo: number
    no: number
  }

  export interface EcfVec3 {
    x: number
    y: number
    z: number
  }

  export interface EciVec3 {
    x: number
    y: number
    z: number
  }

  export interface GstimeResult {
    gmst: number
  }

  export interface PositionVelocity {
    position: EciVec3
    velocity: EciVec3
  }

  export function twoline2satrec(
    line1: string,
    line2: string
  ): SatelliteRecord

  export function sgp4(
    satrec: SatelliteRecord,
    date: Date
  ): PositionVelocity | false

  export function gstime(date: Date): number

  export function eciToEcf(eci: EciVec3, gmst: number): EcfVec3

  export function eciToGeodetic(eci: EciVec3, gmst: number): {
    longitude: number
    latitude: number
    height: number
  }
}
