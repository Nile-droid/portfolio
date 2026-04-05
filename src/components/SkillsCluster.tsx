import { useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float, Text, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

interface OrbProps {
  position: [number, number, number];
  name: string;
  color: string;
}

const SkillOrb = ({ position, name, color }: OrbProps) => {
  const [hovered, setHovered] = useState(false);
  const meshRef = useRef<THREE.Mesh>(null);

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => console.log(name)}
        ref={meshRef}
      >
        <sphereGeometry args={[0.5, 32, 32]} />
        <MeshDistortMaterial
          color={hovered ? "#00f3ff" : color}
          speed={hovered ? 5 : 2}
          distort={hovered ? 0.4 : 0.2}
          radius={0.5}
          emissive={hovered ? "#00f3ff" : color}
          emissiveIntensity={hovered ? 2 : 0.5}
        />
        <Text
          position={[0, 0, 0.6]}
          fontSize={0.2}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {name}
        </Text>
      </mesh>
    </Float>
  );
};

const SkillsCluster = () => {
  const skills = [
    { name: "Python", color: "#3776ab", pos: [-2, 1, 0] },
    { name: "Java", color: "#f8981d", pos: [2, 1.5, -1] },
    { name: "DevOps", color: "#00f3ff", pos: [0, -1, 1] },
    { name: "AWS", color: "#ff9900", pos: [-3, -1.5, -2] },
    { name: "Docker", color: "#2496ed", pos: [3, -1, 1.5] },
    { name: "Spring", color: "#6db33f", pos: [1, 0, 2] },
    { name: "Linux", color: "#fcc624", pos: [-1, 2, -2] },
  ];

  return (
    <section className="h-[800px] py-32 relative overflow-hidden" id="skills">
      <div className="absolute top-10 left-1/2 -translate-x-1/2 text-center z-10 space-y-2">
        <h2 className="text-4xl font-black text-white uppercase tracking-widest">
          Cognitive Core
        </h2>
        <div className="text-neon-blue font-orbitron text-xs tracking-[0.5em] uppercase">
          Interacting with neural skill clusters
        </div>
      </div>

      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00f3ff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#bc13fe" />
        
        <group>
          {skills.map((skill, i) => (
            <SkillOrb 
              key={i} 
              position={skill.pos as [number, number, number]} 
              name={skill.name} 
              color={skill.color} 
            />
          ))}
        </group>
      </Canvas>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500 text-[10px] font-orbitron tracking-widest pointer-events-none">
        DRAG TO EXPLORE ORRERY
      </div>
    </section>
  );
};

export default SkillsCluster;
