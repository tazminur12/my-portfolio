import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float, Sparkles } from '@react-three/drei';
import * as THREE from 'three';
import { useRef, useState } from 'react';

const FloatingShapes = () => {
  const shapes = [
    { type: 'box', color: '#FF6B6B', position: [-3, 1, 0], speed: 2 },
    { type: 'sphere', color: '#4ECDC4', position: [3, -1, 0], speed: 3 },
    { type: 'torus', color: '#FFE66D', position: [0, 2, -2], speed: 1.5 },
    { type: 'cone', color: '#A78BFA', position: [2, 0, -3], speed: 2.5 },
    { type: 'octahedron', color: '#F687B3', position: [-2, -2, -1], speed: 2 }
  ];

  return (
    <>
      {shapes.map((shape, idx) => (
        <Float
          key={idx}
          speed={shape.speed}
          rotationIntensity={1}
          floatIntensity={2}
        >
          <mesh position={shape.position}>
            {shape.type === 'box' && <boxGeometry args={[1, 1, 1]} />}
            {shape.type === 'sphere' && <sphereGeometry args={[0.8, 32, 32]} />}
            {shape.type === 'torus' && <torusGeometry args={[0.6, 0.2, 16, 32]} />}
            {shape.type === 'cone' && <coneGeometry args={[0.7, 1.2, 32]} />}
            {shape.type === 'octahedron' && <octahedronGeometry args={[0.9]} />}
            <meshStandardMaterial 
              color={shape.color} 
              emissive={shape.color} 
              emissiveIntensity={0.2}
            />
          </mesh>
        </Float>
      ))}
    </>
  );
};

const ParticleField = ({ count = 1000 }) => {
  const particles = useRef();
  const [particleData] = useState(() => {
    const data = [];
    for (let i = 0; i < count; i++) {
      data.push({
        position: [
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20,
          (Math.random() - 0.5) * 20
        ],
        size: Math.random() * 0.2 + 0.05,
        color: new THREE.Color().setHSL(
          Math.random() * 0.2 + 0.5,
          0.8,
          Math.random() * 0.2 + 0.5
        )
      });
    }
    return data;
  });

  useFrame((state) => {
    if (particles.current) {
      particles.current.rotation.y += 0.001;
    }
  });

  return (
    <points ref={particles}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleData.length}
          array={new Float32Array(particleData.flatMap(p => p.position))}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleData.length}
          array={new Float32Array(particleData.flatMap(p => p.color.toArray()))}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={particleData.length}
          array={new Float32Array(particleData.map(p => p.size))}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        vertexColors
        transparent
        alphaTest={0.01}
        sizeAttenuation={true}
      />
    </points>
  );
};

const ThreeDBackground = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 15], fov: 60 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: 'linear-gradient(to bottom, #0f0c29, #302b63, #24243e)'
      }}
    >
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#FF6B6B" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#4ECDC4" />
      
      <OrbitControls 
        enableZoom={false}
        autoRotate
        autoRotateSpeed={0.5}
        enablePan={false}
      />
      
      <FloatingShapes />
      <ParticleField count={2000} />
      
      <Sparkles
        count={100}
        size={2}
        speed={0.4}
        opacity={1}
        color="#FFFFFF"
        scale={20}
      />
      
      <color attach="background" args={['#0f0c29']} />
    </Canvas>
  );
};

export default ThreeDBackground;