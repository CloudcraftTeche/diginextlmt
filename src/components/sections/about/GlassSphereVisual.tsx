"use client";

import { useEffect, useRef, useState } from "react";
import type { MotionValue } from "framer-motion";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ThreeJS = any;

declare global {
  interface Window {
    THREE: ThreeJS;
  }
}

interface GlassSphereVisualProps {
  className?: string;
  progress?: MotionValue<number>;
}

export default function GlassSphereVisual({
  className,
  progress,
}: GlassSphereVisualProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const [threeLoaded, setThreeLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.THREE) {
      setThreeLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js";
    script.async = true;
    script.onload = () => setThreeLoaded(true);
    document.body.appendChild(script);
    return () => {
      if (script.parentNode) document.body.removeChild(script);
    };
  }, []);

  useEffect(() => {
    if (!threeLoaded || !hostRef.current || !window.THREE) return;

    const THREE = window.THREE;
    const el = hostRef.current;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      el.clientWidth / el.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 10;
    camera.position.y = 0.5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // Create glass sphere with flowing ribbons
    const group = new THREE.Group();
    scene.add(group);

    // Central glass sphere
    const sphereGeo = new THREE.SphereGeometry(1.2, 64, 64);
    const sphereMat = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.1,
      roughness: 0.05,
      transparent: true,
      opacity: 0.15,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
      reflectivity: 0.9,
      transmission: 0.95,
      side: THREE.DoubleSide,
    });
    const sphere = new THREE.Mesh(sphereGeo, sphereMat);
    group.add(sphere);

    // Create multiple glass ribbon rings around sphere
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ribbons: any[] = [];
    const ribbonCount = 5;

    for (let i = 0; i < ribbonCount; i++) {
      const angle = (i / ribbonCount) * Math.PI;
      const curve = new THREE.EllipseCurve(
        0,
        0,
        2.5,
        2.5,
        0,
        2 * Math.PI,
        false,
        0
      );

      const points = curve.getPoints(100);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const points3d = points.map((p: any) => new THREE.Vector3(p.x, p.y, 0));
      const curvePath = new THREE.CatmullRomCurve3(points3d, true);

      const tubeGeo = new THREE.TubeGeometry(curvePath, 100, 0.08, 8, true);
      const tubeMat = new THREE.MeshPhysicalMaterial({
        color: new THREE.Color().setHSL(0.5 + i * 0.1, 0.8, 0.6),
        metalness: 0.8,
        roughness: 0.1,
        transparent: true,
        opacity: 0.7,
        clearcoat: 1,
        clearcoatRoughness: 0.05,
        side: THREE.DoubleSide,
      });

      const ribbon = new THREE.Mesh(tubeGeo, tubeMat);
      ribbon.rotation.x = angle;
      ribbon.rotation.z = i * 0.3;
      group.add(ribbon);
      ribbons.push(ribbon);
    }

    // Subtle wireframe on sphere
    const wireGeo = new THREE.EdgesGeometry(sphereGeo);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x4dd0e1,
      transparent: true,
      opacity: 0.15,
    });
    const wireframe = new THREE.LineSegments(wireGeo, wireMat);
    group.add(wireframe);

    // Lighting
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));

    const light1 = new THREE.PointLight(0x00d4ff, 1.5, 100);
    light1.position.set(5, 3, 6);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x8b5cf6, 1.2, 100);
    light2.position.set(-5, -3, 5);
    scene.add(light2);

    const light3 = new THREE.PointLight(0xff4acc, 0.8, 100);
    light3.position.set(0, 5, -4);
    scene.add(light3);

    let targetY = 0;
    let targetX = 0;

    let unsub: (() => void) | undefined;
    if (progress && typeof progress.on === "function") {
      unsub = progress.on("change", (v: number) => {
        const clamped = Math.min(1, Math.max(0, v ?? 0));
        targetY = clamped * Math.PI * 2;
        targetX = clamped * Math.PI * 0.3;
      });
    }

    let raf = 0;
    const damp = (a: number, b: number, lambda: number) =>
      a + (b - a) * (1 - Math.exp(-lambda));

    const animate = () => {
      raf = requestAnimationFrame(animate);

      group.rotation.y = damp(group.rotation.y, targetY, 0.05);
      group.rotation.x = damp(group.rotation.x, targetX, 0.05);

      const t = performance.now() * 0.0003;

      // Gentle ribbon rotation
      ribbons.forEach((ribbon, i) => {
        ribbon.rotation.z += 0.001 * (i % 2 === 0 ? 1 : -1);
      });

      // Animate lights
      light1.position.x = Math.sin(t * 2) * 5;
      light1.position.z = Math.cos(t * 2) * 6;
      light2.position.x = Math.cos(t * 1.5) * 5;
      light2.position.z = Math.sin(t * 1.5) * 5;
      light3.position.y = Math.sin(t * 2.5) * 3 + 5;

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      if (unsub) unsub();
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(raf);
      if (el && renderer.domElement) el.removeChild(renderer.domElement);
      sphereGeo.dispose();
      sphereMat.dispose();
      wireGeo.dispose();
      wireMat.dispose();
      ribbons.forEach((r) => {
        r.geometry.dispose();
        r.material.dispose();
      });
      renderer.dispose();
    };
  }, [threeLoaded, progress]);

  return (
    <div
      className={["relative block h-full w-full", className ?? ""]
        .join(" ")
        .trim()}
    >
      <div ref={hostRef} className="absolute inset-0 h-full w-full" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.12),rgba(139,92,246,0.08),transparent_65%)]" />
    </div>
  );
}
