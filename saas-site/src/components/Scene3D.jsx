import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

function ChromeShape({ scrollProgress }) {
  const meshRef = useRef()

  useFrame((state) => {
    if (!meshRef.current) return
    const p = scrollProgress?.get?.() ?? 0
    // Scroll-driven rotation + slight zoom out
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.2 + p * Math.PI * 2
    meshRef.current.rotation.x = p * Math.PI * 0.5
    meshRef.current.position.y = -p * 1.2
    meshRef.current.scale.setScalar(1 - p * 0.15)
  })

  return (
    <Float speed={1.2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.32, 220, 32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          metalness={1}
          roughness={0.15}
          clearcoat={1}
          clearcoatRoughness={0.05}
          envMapIntensity={1.2}
        />
      </mesh>
    </Float>
  )
}

function Scene3D({ scrollProgress }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 45 }}
      gl={{ antialias: true, alpha: true }}
      dpr={[1, 2]}
    >
      <color attach="background" args={['#0a0a0f']} />
      <fog attach="fog" args={['#0a0a0f', 6, 12]} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#a78bfa" />
      <directionalLight position={[-5, -3, -5]} intensity={0.8} color="#22d3ee" />
      <Environment preset="city" />
      <ChromeShape scrollProgress={scrollProgress} />
    </Canvas>
  )
}

export default Scene3D
