import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const StarField = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Create 5000 random points for stars
  const positions = useMemo(() => {
    const pos = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 100;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 100;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00f3ff"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const SpaceBackground = () => {
  return (
    <div className="fixed inset-0 bg-cyber-black -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <color attach="background" args={['#050505']} />
        <StarField />
        <fog attach="fog" args={['#050505', 0, 100]} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-tr from-neon-purple/5 via-transparent to-neon-blue/5 pointer-events-none" />
    </div>
  );
};

export default SpaceBackground;
