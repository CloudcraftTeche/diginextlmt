"use client";
import React, { useEffect, useRef, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type ThreeJS = any;

declare global {
  interface Window {
    THREE: ThreeJS;
  }
}

interface EthosSectionProps {
  title?: string;
  description?: string;
  subtitle?: string;
}

const EthosSection3D: React.FC<EthosSectionProps> = ({
  title = "Our Vision",
  description = "Our vision is simple, to be more than just a service provider. We are a part of each business we partner with. For a leading IT solutions and services company, this means providing more than just marketing, it means becoming their trusted partner for strategic IT solutions consulting. We believe that the secret to building a successful digital ecosystem is true partnership.",
  subtitle = "We are proud of our research, analysis and innovation skills, offering essential IT solution services that support businesses in reaching their objectives and staying ahead of new trends. Our dedication to providing 24/7 support and open communication guarantees that our partners will always have the help they need to be successful.",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [threeLoaded, setThreeLoaded] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile screen size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Load Three.js from CDN
  useEffect(() => {
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
      if (script.parentNode) {
        document.body.removeChild(script);
      }
    };
  }, []);

  useEffect(() => {
    if (!containerRef.current || !threeLoaded || !window.THREE) return;

    const THREE = window.THREE;
    const el = containerRef.current;

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

    let raf = 0;
    let rotationAngle = 0;

    const animate = () => {
      raf = requestAnimationFrame(animate);

      // Gentle continuous rotation
      group.rotation.y += 0.002;
      group.rotation.x = Math.sin(Date.now() * 0.0005) * 0.1;

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

      // Update rotation for stats
      rotationAngle += 0.003;
      setRotation(rotationAngle);

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

    // Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (el) observer.observe(el);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(raf);
      observer.disconnect();
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
  }, [threeLoaded, isMobile]);

  const stats = [
    { number: "300+", label: "Happy Clients", angle: 0 },
    { number: "1000+", label: "Projects Delivered", angle: Math.PI / 2 },
    { number: "65+", label: "Talented Professionals", angle: Math.PI },
    { number: "5+", label: "Countries Served", angle: (3 * Math.PI) / 2 },
  ];

  return (
    <section className="px-3 xs:px-4 sm:px-6 lg:px-8 py-4 xs:py-6 sm:py-8 lg:py-10 bg-white">
      {/* Full-width black background */}
      <div className="w-full bg-black rounded-xl xs:rounded-2xl p-4 xs:p-5 sm:p-8 lg:p-12 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
        </div>

        {/* Constrained content wrapper */}
        <div className="max-w-[1750px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
            {/* Left Side - Text Content */}
            <div
              className={`text-left order-2 lg:order-1 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-8"
              }`}
            >
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-normal mb-6 sm:mb-8 text-white leading-tight"
                style={{ transitionDelay: "200ms" }}
              >
                {title}
              </h2>

              <div
                className="text-gray-300 font-light text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8"
                style={{ transitionDelay: "400ms" }}
              >
                <p className="mb-4 sm:mb-6">
                  {description.split(".")[0]}.{" "}
                  <span className="font-light text-white">We</span>{" "}
                  {description.split(".").slice(1, 3).join(". ")}.
                </p>
                <p>{description.split(".").slice(3).join(". ")}</p>
              </div>

              <p
                className="text-gray-300 text-sm sm:text-base md:text-lg font-light leading-relaxed"
                style={{ transitionDelay: "600ms" }}
              >
                {subtitle}
              </p>
            </div>

            {/* Right Side - Glass Sphere 3D Visual */}
            <div
              className={`relative order-1 lg:order-2 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="relative w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px]">
                {/* 3D Canvas */}
                <div
                  ref={containerRef}
                  className="absolute inset-0 w-full h-full"
                />

                {/* Rotating Stats */}
                {threeLoaded &&
                  stats.map((stat, index) => {
                    const angle = stat.angle + rotation;
                    const radius = isMobile ? 120 : 180;
                    const x = Math.cos(angle) * radius;
                    const y = Math.sin(angle) * radius;
                    const z = Math.sin(angle * 2) * 50;
                    const scale = 0.8 + (z + 50) / 200;
                    const opacity = 0.4 + (z + 50) / 100;
                    const blur = Math.max(0, 3 - (z + 50) / 25);

                    return (
                      <div
                        key={index}
                        className="absolute top-1/2 left-1/2 pointer-events-none"
                        style={{
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(${scale})`,
                          opacity: opacity,
                          filter: `blur(${blur}px)`,
                          transition: "all 0.1s linear",
                          zIndex: Math.round(z + 50),
                        }}
                      >
                        <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg px-3 py-2 sm:px-5 sm:py-3 border border-gray-600/40 shadow-2xl min-w-[110px] sm:min-w-[140px] text-center">
                          <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-0.5 sm:mb-1">
                            {stat.number}
                          </div>
                          <div className="text-[10px] sm:text-xs md:text-sm text-gray-300 whitespace-nowrap">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    );
                  })}

                {/* Radial gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.12),rgba(139,92,246,0.08),transparent_65%)]" />

                {/* Loading State */}
                {!threeLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-white text-sm sm:text-lg animate-pulse">
                      Loading 3D Visual...
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EthosSection3D;
