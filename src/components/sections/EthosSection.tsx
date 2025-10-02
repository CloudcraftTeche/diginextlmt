"use client";
import React, { useEffect, useRef, useState } from "react";

// Extend Window interface for THREE.js
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    THREE: any;
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
    const container = containerRef.current;

    // Scene setup
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    // Create sphere geometry
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);

    const material = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      metalness: 0.9,
      roughness: 0.1,
      transparent: true,
      opacity: 0.6,
      envMapIntensity: 1,
      clearcoat: 1,
      clearcoatRoughness: 0.1,
    });

    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    // Create rings/torus shapes - subtle metallic rings
    interface Ring {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mesh: any;
      rotationSpeed: { x: number; y: number; z: number };
    }
    const rings: Ring[] = [];
    const ringCount = 6;

    for (let i = 0; i < ringCount; i++) {
      const torusGeometry = new THREE.TorusGeometry(
        1.5 + i * 0.05,
        0.008,
        16,
        100
      );

      const ringMaterial = new THREE.MeshPhysicalMaterial({
        color: 0xcccccc,
        metalness: 0.95,
        roughness: 0.2,
        transparent: true,
        opacity: 0.3 + i * 0.1,
        emissive: 0x444444,
        emissiveIntensity: 0.2,
      });

      const ring = new THREE.Mesh(torusGeometry, ringMaterial);

      ring.rotation.x = Math.random() * Math.PI;
      ring.rotation.y = Math.random() * Math.PI;
      ring.rotation.z = Math.random() * Math.PI;

      rings.push({
        mesh: ring,
        rotationSpeed: {
          x: (Math.random() - 0.5) * 0.005,
          y: (Math.random() - 0.5) * 0.005,
          z: (Math.random() - 0.5) * 0.005,
        },
      });

      scene.add(ring);
    }

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00d4ff, 1.2, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xff00aa, 1.2, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0xffdd00, 1, 100);
    pointLight3.position.set(0, 5, -5);
    scene.add(pointLight3);

    const pointLight4 = new THREE.PointLight(0x00ff88, 0.8, 100);
    pointLight4.position.set(-5, 0, -3);
    scene.add(pointLight4);

    // Animation
    let animationFrameId: number;
    let rotationAngle = 0;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      sphere.rotation.y += 0.0015;
      sphere.rotation.x += 0.0008;

      rings.forEach(({ mesh, rotationSpeed }) => {
        mesh.rotation.x += rotationSpeed.x;
        mesh.rotation.y += rotationSpeed.y;
        mesh.rotation.z += rotationSpeed.z;
      });

      const time = Date.now() * 0.001;
      pointLight1.position.x = Math.sin(time * 0.5) * 5;
      pointLight1.position.z = Math.cos(time * 0.5) * 5;

      pointLight2.position.x = Math.cos(time * 0.3) * 5;
      pointLight2.position.z = Math.sin(time * 0.3) * 5;

      pointLight3.position.y = Math.sin(time * 0.4) * 3 + 5;

      rotationAngle += 0.003;
      setRotation(rotationAngle);

      renderer.render(scene, camera);
    };
    animate();

    // Handle resize
    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener("resize", handleResize);

    // Intersection Observer
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    observer.observe(container);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      rings.forEach(({ mesh }) => {
        mesh.geometry.dispose();
        mesh.material.dispose();
      });
      renderer.dispose();
    };
  }, [threeLoaded]);

  const stats = [
    { number: "300+", label: "Happy Clients", angle: 0 },
    { number: "1000+", label: "Projects Delivered", angle: Math.PI / 2 },
    { number: "65+", label: "Talented Professionals", angle: Math.PI },
    { number: "5+", label: "Countries Served", angle: (3 * Math.PI) / 2 },
  ];

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10 bg-white">
      <div className="w-full bg-black rounded-xl sm:rounded-2xl p-8 sm:p-10 md:p-12 lg:p-16 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center relative z-10">
          {/* Left Side - Text Content */}
          <div className="text-left order-2 lg:order-1">
            <h2
              className={`text-3xl sm:text-2xl md:text-3xl lg:text-4xl font-normal mb-8 text-white leading-tight transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              {title}
            </h2>

            <div
              className={`text-gray-300 font-light text-base sm:text-md md:text-lg leading-relaxed mb-8 transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "400ms" }}
            >
              <p className="mb-6">
                {description.split(".")[0]}.{" "}
                <span className="font-light text-white">We</span>{" "}
                {description.split(".").slice(1, 3).join(". ")}.
              </p>
              <p>{description.split(".").slice(3).join(". ")}</p>
            </div>

            <p
              className={`text-gray-300 text-base font-light sm:text-md md:text-lg leading-relaxed transition-all duration-1000 ease-out ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              {subtitle}
            </p>
          </div>

          {/* Right Side - 3D Sphere with Rotating Stats */}
          <div
            className={`relative order-1 lg:order-2 transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px]">
              {/* 3D Canvas */}
              <div
                ref={containerRef}
                className="absolute inset-0 w-full h-full"
              />

              {/* Loading State */}
              {!threeLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-lg">Loading...</div>
                </div>
              )}

              {/* Rotating Stats */}
              {threeLoaded &&
                stats.map((stat, index) => {
                  const angle = stat.angle + rotation;
                  const radius = 180;
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
                      <div className="bg-gray-800/90 backdrop-blur-sm rounded-lg px-5 py-3 border border-gray-600/40 shadow-2xl min-w-[140px] text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-white mb-1">
                          {stat.number}
                        </div>
                        <div className="text-xs sm:text-sm text-gray-300 whitespace-nowrap">
                          {stat.label}
                        </div>
                      </div>
                    </div>
                  );
                })}

              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent blur-3xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-gradient-radial {
          background: radial-gradient(circle, var(--tw-gradient-stops));
        }
      `}</style>
    </section>
  );
};

export default EthosSection3D;
