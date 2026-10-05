// Wrapper that imports only the pure-JS parts of satellite.js via absolute path,
// bypassing the package's restrictive exports field and the WASM build that
// Vite can't bundle (top-level await / iife format conflict).
import { twoline2satrec } from '../node_modules/satellite.js/dist/io.js'
import { propagate, gstime } from '../node_modules/satellite.js/dist/propagation.js'
import { eciToGeodetic } from '../node_modules/satellite.js/dist/transforms.js'

export { twoline2satrec, propagate, gstime, eciToGeodetic }
