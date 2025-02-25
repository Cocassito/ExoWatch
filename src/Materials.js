import { MeshStandardMaterial } from "three";

const Materials = {

  pink: new MeshStandardMaterial({
    color: 0xd814ff,
    emissive: 0x000000,
    metalness: 0,
    roughness: 0.135,
  }),
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
    color: 0x553322,
    metalness: 1,
    roughness: 0.4,
  }),
  wheels: new MeshStandardMaterial({
    color: 0xffcc00,
    metalness: 1,
    roughness: 0.2,
  }),
  defaultMaterial: new MeshStandardMaterial({
    color: 0xaaaaaa,
    metalness: 1,
    roughness: 0.4,
  }),
};

export default Materials;
