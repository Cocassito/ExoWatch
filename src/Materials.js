import { MeshStandardMaterial } from "three";

const Materials = {
  platine: new MeshStandardMaterial({
    color: 0x808080,
    metalness: 1,
    roughness: 0.35,
  }),
  cache: new MeshStandardMaterial({
    color: 0x262626,
    metalness: 1,
    roughness: 0.35,
  }),
  barrels: new MeshStandardMaterial({
    color: 0xc0cbce,
    metalness: 1,
    roughness: 0.4,
  }),
  wheels: new MeshStandardMaterial({
    color: 0xc0cbce,
    metalness: 1,
    roughness: 0.2,
  }),

  vis: new MeshStandardMaterial({
    color: 0x8a9193,
    emissive: 0x000000,
    metalness: 1,
    roughness: 0.237,
  }),

  pink: new MeshStandardMaterial({
    color: 0xd814ff,
    emissive: 0x000000,
    metalness: 0,
    roughness: 0.135,
    transparent: true,
    opacity: 0.5,
  }),
};

export default Materials;
