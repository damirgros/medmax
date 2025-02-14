"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
// Import the font data as a JSON object:
import fontData from "@/public/fonts/helvetiker_regular.typeface.json";

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Create a group for all objects so that they rotate together
    const group = new THREE.Group();

    // 1️⃣ Scene, Camera, and Renderer
    const scene = new THREE.Scene();
    scene.add(group);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);
    camera.lookAt(new THREE.Vector3(0, 0, 0));

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0xd3d3d3, 0);
    mountRef.current.appendChild(renderer.domElement);

    // 2️⃣ Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(2, 2, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.8);
    light2.position.set(-2, -2, 5);
    scene.add(light2);

    // 3️⃣ Load Heart Model into the Group
    const gltfLoader = new GLTFLoader();
    let heart: THREE.Group | null = null;
    const baseScale = 8; // Adjust to change heart size

    gltfLoader.load("/models/robotic_heart.glb", (gltf: GLTF) => {
      heart = gltf.scene as THREE.Group;
      heart.scale.set(baseScale, baseScale, baseScale);
      heart.position.set(0, -2, 0);
      group.add(heart);
      console.log("Heart loaded:", heart);
    });

    // 4️⃣ Create 3D Text Objects using the imported font data
    const font = new FontLoader().parse(fontData);

    // "MedMax" text at the top
    const medMaxGeo = new TextGeometry("MedMax", {
      font: font,
      size: 0.3,
      height: 0.05,
      curveSegments: 12,
      bevelEnabled: false,
    });
    medMaxGeo.center();
    const medMaxMesh = new THREE.Mesh(
      medMaxGeo,
      new THREE.MeshBasicMaterial({ color: 0xd8bfd8 })
    );
    medMaxMesh.position.set(0, 3, 0);
    group.add(medMaxMesh);

    // "Revolutionizing" text behind the heart
    const revGeo = new TextGeometry("Revolutionizing", {
      font: font,
      size: 0.5,
      height: 0.05,
      curveSegments: 12,
      bevelEnabled: false,
    });
    revGeo.center();
    const revMesh = new THREE.Mesh(
      revGeo,
      new THREE.MeshBasicMaterial({ color: 0xd8bfd8 })
    );
    revMesh.position.set(0, 0, -1);
    group.add(revMesh);

    // "Medicine" text in front of the heart
    const medGeo = new TextGeometry("Medicine", {
      font: font,
      size: 0.6,
      height: 0.05,
      curveSegments: 12,
      bevelEnabled: false,
    });
    medGeo.center();
    const medMesh = new THREE.Mesh(
      medGeo,
      new THREE.MeshBasicMaterial({ color: 0xd8bfd8 })
    );
    medMesh.position.set(0, 0, 1);
    group.add(medMesh);

    // 5️⃣ Animate the Scene (Pulsating Heart & Mouse-Based Rotation)
    let pulsateScale = 1;
    let growing = true;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 0.5;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 0.5;
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);

      if (heart) {
        if (growing) {
          pulsateScale += 0.0015;
          if (pulsateScale >= 1.1) growing = false;
        } else {
          pulsateScale -= 0.0015;
          if (pulsateScale <= 1) growing = true;
        }
        heart.scale.set(
          pulsateScale * baseScale,
          pulsateScale * baseScale,
          pulsateScale * baseScale
        );
      }

      // Rotate the entire group based on mouse movement
      group.rotation.y = mouseX * Math.PI * 0.2;
      group.rotation.x = mouseY * Math.PI * 0.2;

      renderer.render(scene, camera);
    };
    animate();

    // 6️⃣ Resize Handling
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative w-full h-screen bg-gray-200" ref={mountRef} />
  );
};

export default ThreeScene;
