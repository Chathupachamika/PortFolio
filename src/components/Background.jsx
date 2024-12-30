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

    // Create multiple star fields with different colors
    const createStarField = (color, count, size, speed) => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const sizes = new Float32Array(count);
      const speeds = new Float32Array(count);

      for (let i = 0; i < count; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 2000;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 2000;
        sizes[i] = Math.random() * size ;
        speeds[i] = Math.random() * speed;
      }

      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
      geometry.setAttribute('speed', new THREE.BufferAttribute(speeds, 1));

      const material = new THREE.PointsMaterial({
        size: 2,
        color: color,
        transparent: true,
        opacity: 0.8,
        blending: THREE.AdditiveBlending,
        vertexColors: false,
      });

      return new THREE.Points(geometry, material);
    };

    // Create multiple star fields with neon colors
    const starFields = [
      createStarField(0xff00ff, 500, 2, 0.02),  // Neon pink
      createStarField(0x00ffff, 500, 2, 0.015), // Neon cyan
      createStarField(0xff3366, 500, 2, 0.025), // Neon red
      createStarField(0x33ff33, 500, 2, 0.018)  // Neon green
    ];

    starFields.forEach(stars => scene.add(stars));

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      starFields.forEach((stars, index) => {
        // Rotate each star field differently
        stars.rotation.y += 0.0003 * (index + 1);
        stars.rotation.x += 0.0002 * (index + 1);

        // Pulse effect for star sizes
        const positions = stars.geometry.attributes.position.array;
        const sizes = stars.geometry.attributes.size.array;
        const speeds = stars.geometry.attributes.speed.array;

        for (let i = 0; i < sizes.length; i++) {
          const pulseFactor = Math.sin(Date.now() * speeds[i] * 0.001) * 0.5 + 1;
          sizes[i] = (Math.random() * 2 + 0.5) * pulseFactor;
        }
        stars.geometry.attributes.size.needsUpdate = true;
      });

      // Camera movement
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

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeChild(renderer.domElement);
      starFields.forEach(stars => {
        stars.geometry.dispose();
        stars.material.dispose();
      });
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
        background: 'radial-gradient(circle, #120012, #000)', // Darker gradient for better contrast
      }}
    />
  );
}

export default Background;