import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

function Background() {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const container = backgroundRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      container.offsetWidth / container.offsetHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    container.appendChild(renderer.domElement);

    // Star field geometry
    const starGeometry = new THREE.BufferGeometry();
    const starCount = 1500; // Increased number of stars
    const starPositions = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 2000; // X position
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 2000; // Y position
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 2000; // Z position
      starSizes[i] = Math.random() * 2 + 0.5; // Randomized star sizes
    }

    starGeometry.setAttribute(
      'position',
      new THREE.BufferAttribute(starPositions, 3)
    );
    starGeometry.setAttribute(
      'size',
      new THREE.BufferAttribute(starSizes, 1)
    );

    // Star material with glow effect
    const starMaterial = new THREE.PointsMaterial({
      color: 0xaaaaee,
      size: 1.5,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.8,
    });

    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the stars and add a subtle parallax camera effect
      stars.rotation.y += 0.0005;
      camera.position.x = Math.sin(Date.now() * 0.0001) * 0.5;
      camera.position.y = Math.cos(Date.now() * 0.0001) * 0.5;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resizing
    const handleResize = () => {
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={backgroundRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
        background: 'radial-gradient(circle, #0a0a0a, #000)', // Gradient background
      }}
    />
  );
}

export default Background;
