declare module "three/examples/jsm/loaders/GLTFLoader" {
  export class GLTFLoader {
    load(
      url: string,
      onLoad: (gltf: GLTF) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
  }
  export interface GLTF {
    scene: THREE.Object3D;
    scenes: THREE.Object3D[];
    animations: THREE.AnimationClip[];
    cameras: THREE.Camera[];
  }
}
declare module "three/examples/jsm/loaders/FontLoader" {
  import { Font } from "three";
  export class FontLoader {
    load(
      url: string,
      onLoad: (font: Font) => void,
      onProgress?: (event: ProgressEvent) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    parse(json: any): Font;
  }
}

declare module "three/examples/jsm/geometries/TextGeometry" {
  import { BufferGeometry } from "three";
  import { Font } from "three/examples/jsm/loaders/FontLoader";
  export class TextGeometry extends BufferGeometry {
    constructor(
      text: string,
      parameters: {
        font: Font;
        size?: number;
        height?: number;
        curveSegments?: number;
        bevelEnabled?: boolean;
        bevelThickness?: number;
        bevelSize?: number;
        bevelOffset?: number;
        bevelSegments?: number;
      }
    );
  }
}

// global.d.ts
declare module "three/examples/jsm/controls/OrbitControls" {
  import { EventDispatcher, Camera } from "three";

  export interface OrbitControlsParameters {
    object?: Camera;
    domElement?: HTMLElement;
    // Add other parameters as needed
  }

  export class OrbitControls extends EventDispatcher {
    constructor(object: Camera, domElement?: HTMLElement);

    // Add method declarations
    enableDamping: boolean;
    dampingFactor: number;
    rotateSpeed: number;
    update: () => void;
    dispose: () => void;
    // Add other methods/properties as needed
  }
}
