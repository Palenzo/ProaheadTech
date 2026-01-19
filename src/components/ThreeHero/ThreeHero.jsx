import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeHero = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    // Scene Setup
    const scene = new THREE.Scene();
    // No background color set here to allow CSS background to show through
    // scene.background = new THREE.Color('#0a192f'); 

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 30;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const count = 300;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 80;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // Using a color that works on both light and dark backgrounds (a medium blue/teal)
    // Or we could check system theme, but a pleasing blue works generally.
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.3,
      color: 0x00a8e8, // ProAhead blue/cyan
      transparent: true,
      opacity: 0.8,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Connecting Lines (optional, but requested "network" look usually implies lines)
    // The previous code didn't actually implement lines geometry, just a material.
    // Implementing a true network (lines between close particles) is expensive in JS loop.
    // For performance, let's stick to just cool particles or a simple connection if needed.
    // For now, let's stick to the rotating particles which look "professional" and clean.
    
    // Animation Loop
    let mouseX = 0;
    let mouseY = 0;

    const animate = () => {
      requestAnimationFrame(animate);

      particlesMesh.rotation.y += 0.001;
      particlesMesh.rotation.x += 0.0005;

      particlesMesh.rotation.x += (mouseY * 0.05 - particlesMesh.rotation.x) * 0.05;
      particlesMesh.rotation.y += (mouseX * 0.05 - particlesMesh.rotation.y) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const handleMouseMove = (event) => {
      mouseX = event.clientX / window.innerWidth - 0.5;
      mouseY = event.clientY / window.innerHeight - 0.5;
    };

    window.addEventListener('resize', handleResize);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('mousemove', handleMouseMove);
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
        ref={mountRef} 
        style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            width: '100%', 
            height: '100%', 
            zIndex: 0, 
            opacity: 0.6, // Slight transparency to blend with background
            pointerEvents: 'none' // Allow clicks to pass through
        }} 
    />
  );
};

export default ThreeHero;
