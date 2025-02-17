"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader, GLTF } from "three/examples/jsm/loaders/GLTFLoader";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";

const ThreeScene = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene, Camera, and Renderer
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const light1 = new THREE.DirectionalLight(0xffffff, 1);
    light1.position.set(2, 2, 5);
    scene.add(light1);

    const light2 = new THREE.DirectionalLight(0xffffff, 0.8);
    light2.position.set(-2, -2, 5);
    scene.add(light2);

    // Add text

    const loader = new FontLoader();

    loader.load("/fonts/helvetiker_regular.typeface.json", function (font) {
      const geometry = new TextGeometry("MedMax.", {
        font: font,
        size: 0.2,
        height: 0.001,
      });

      geometry.computeBoundingBox();

      const positions = geometry.attributes.position;
      const scaleFactor = 0.001;

      for (let i = 0; i < positions.count; i++) {
        const z = positions.getZ(i);
        positions.setZ(i, z * scaleFactor);
      }
      positions.needsUpdate = true;

      geometry.computeBoundingBox();
      geometry.computeVertexNormals();

      const material = new THREE.MeshPhongMaterial({ color: 0xffffff });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(-0.7, 3, 0);

      scene.add(mesh);
    });

    loader.load("/fonts/helvetiker_regular.typeface.json", function (font) {
      const geometry = new TextGeometry("Revolutionizing", {
        font: font,
        size: 1,
        height: 0.001,
      });

      geometry.computeBoundingBox();

      const positions = geometry.attributes.position;
      const scaleFactor = 0.001;

      for (let i = 0; i < positions.count; i++) {
        const z = positions.getZ(i);
        positions.setZ(i, z * scaleFactor);
      }
      positions.needsUpdate = true;

      geometry.computeBoundingBox();
      geometry.computeVertexNormals();

      const material = new THREE.MeshPhongMaterial({ color: 0xffffff });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(-6, 1, 0);

      scene.add(mesh);
    });

    loader.load("/fonts/helvetiker_regular.typeface.json", function (font) {
      const geometry = new TextGeometry("Medicine", {
        font: font,
        size: 0.8,
        height: 0.001,
      });

      geometry.computeBoundingBox();

      const positions = geometry.attributes.position;
      const scaleFactor = 0.001;

      for (let i = 0; i < positions.count; i++) {
        const z = positions.getZ(i);
        positions.setZ(i, z * scaleFactor);
      }
      positions.needsUpdate = true;

      geometry.computeBoundingBox();
      geometry.computeVertexNormals();

      const material = new THREE.MeshPhongMaterial({ color: 0xffffff });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(0, -1.5, 1.5);

      scene.add(mesh);
    });

    loader.load("/fonts/helvetiker_regular.typeface.json", function (font) {
      const geometry = new TextGeometry("Pioneering Breakthroughs", {
        font: font,
        size: 0.1,
        height: 0.001,
      });

      geometry.computeBoundingBox();

      const positions = geometry.attributes.position;
      const scaleFactor = 0.0001;

      for (let i = 0; i < positions.count; i++) {
        const z = positions.getZ(i);
        positions.setZ(i, z * scaleFactor);
      }
      positions.needsUpdate = true;

      geometry.computeBoundingBox();
      geometry.computeVertexNormals();

      const material = new THREE.MeshPhongMaterial({ color: 0xffffff });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(-6, -3, 0);

      scene.add(mesh);
    });

    loader.load("/fonts/helvetiker_regular.typeface.json", function (font) {
      const geometry = new TextGeometry("Reimagining Patient Care", {
        font: font,
        size: 0.1,
        height: 0.001,
      });

      geometry.computeBoundingBox();

      const positions = geometry.attributes.position;
      const scaleFactor = 0.0001;

      for (let i = 0; i < positions.count; i++) {
        const z = positions.getZ(i);
        positions.setZ(i, z * scaleFactor);
      }
      positions.needsUpdate = true;

      geometry.computeBoundingBox();
      geometry.computeVertexNormals();

      const material = new THREE.MeshPhongMaterial({ color: 0xffffff });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(-3.5, -1, 0);

      scene.add(mesh);
    });

    loader.load("/fonts/helvetiker_regular.typeface.json", function (font) {
      const geometry = new TextGeometry("Transforming Lives", {
        font: font,
        size: 0.1,
        height: 0.001,
      });

      geometry.computeBoundingBox();

      const positions = geometry.attributes.position;
      const scaleFactor = 0.0001;

      for (let i = 0; i < positions.count; i++) {
        const z = positions.getZ(i);
        positions.setZ(i, z * scaleFactor);
      }
      positions.needsUpdate = true;

      geometry.computeBoundingBox();
      geometry.computeVertexNormals();

      const material = new THREE.MeshPhongMaterial({ color: 0xffffff });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(-7, -1.5, 0);

      scene.add(mesh);
    });

    loader.load("/fonts/helvetiker_regular.typeface.json", function (font) {
      const geometry = new TextGeometry("NextGen Therapy", {
        font: font,
        size: 0.1,
        height: 0.001,
      });

      geometry.computeBoundingBox();

      const positions = geometry.attributes.position;
      const scaleFactor = 0.0001;

      for (let i = 0; i < positions.count; i++) {
        const z = positions.getZ(i);
        positions.setZ(i, z * scaleFactor);
      }
      positions.needsUpdate = true;

      geometry.computeBoundingBox();
      geometry.computeVertexNormals();

      const material = new THREE.MeshPhongMaterial({ color: 0xffffff });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(4, 3, 0);

      scene.add(mesh);
    });

    loader.load("/fonts/helvetiker_regular.typeface.json", function (font) {
      const geometry = new TextGeometry("Future of Healthcare", {
        font: font,
        size: 0.1,
        height: 0.001,
      });

      geometry.computeBoundingBox();

      const positions = geometry.attributes.position;
      const scaleFactor = 0.0001;

      for (let i = 0; i < positions.count; i++) {
        const z = positions.getZ(i);
        positions.setZ(i, z * scaleFactor);
      }
      positions.needsUpdate = true;

      geometry.computeBoundingBox();
      geometry.computeVertexNormals();

      const material = new THREE.MeshPhongMaterial({ color: 0xffffff });

      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(5, 1, 0);

      scene.add(mesh);
    });

    // Load Heart Model into the Group
    const gltfLoader = new GLTFLoader();
    let heart: THREE.Group | null = null;
    const baseScale = 8;

    gltfLoader.load("/models/robotic_heart.glb", (gltf: GLTF) => {
      heart = gltf.scene as THREE.Group;
      heart.scale.set(baseScale, baseScale, baseScale);
      heart.position.set(0, -2, 0);

      // Traverse the heart model and update its material
      heart.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          child.material = new THREE.MeshStandardMaterial({
            color: 0x3b82f6,
            transparent: true,
            opacity: 0.8,
            metalness: 0.3,
            roughness: 0.4,
          });
        }
      });

      scene.add(heart);
    });

    // Animate the Scene (Pulsating Heart & Mouse-Based Rotation)
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
      scene.rotation.y = mouseX * Math.PI * 0.2;
      scene.rotation.x = mouseY * Math.PI * 0.2;

      renderer.render(scene, camera);
    };
    animate();

    // Resize Handling
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
    <div
      className="relative w-full h-screen bg-gradient-to-t from-blue-400 to-blue-500"
      ref={mountRef}
    ></div>
  );
};

export default ThreeScene;
