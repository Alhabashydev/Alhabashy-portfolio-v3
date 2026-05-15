import { useMemo, useRef, Suspense } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Float, MeshDistortMaterial } from '@react-three/drei'
import * as THREE from 'three'

function createArtifactTexture() {
  const size = 512
  const canvas = document.createElement('canvas')
  canvas.width = size
  canvas.height = size

  const ctx = canvas.getContext('2d')
  if (!ctx) return null

  // Deep black crystal base
  const base = ctx.createRadialGradient(
    size * 0.28,
    size * 0.2,
    size * 0.04,
    size * 0.5,
    size * 0.5,
    size * 0.72
  )

  base.addColorStop(0, '#2b2b2b')
  base.addColorStop(0.28, '#171717')
  base.addColorStop(0.62, '#080808')
  base.addColorStop(1, '#010101')

  ctx.fillStyle = base
  ctx.fillRect(0, 0, size, size)

  // Fine premium grain
  for (let i = 0; i < 7500; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    const alpha = Math.random() * 0.045
    const shade = Math.random() > 0.55 ? 255 : 0

    ctx.fillStyle = `rgba(${shade},${shade},${shade},${alpha})`
    ctx.fillRect(x, y, 1, 1)
  }

  // Subtle marble / crystal veins
  for (let i = 0; i < 70; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    const length = 60 + Math.random() * 190
    const curve = (Math.random() - 0.5) * 70

    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.quadraticCurveTo(
      x + length * 0.45,
      y + curve,
      x + length,
      y + (Math.random() - 0.5) * 35
    )
    ctx.strokeStyle = `rgba(255,255,255,${0.02 + Math.random() * 0.055})`
    ctx.lineWidth = Math.random() > 0.78 ? 1.15 : 0.45
    ctx.stroke()
  }

  // Tiny polished highlights
  for (let i = 0; i < 90; i++) {
    const x = Math.random() * size
    const y = Math.random() * size
    const r = Math.random() * 1.4

    ctx.beginPath()
    ctx.arc(x, y, r, 0, Math.PI * 2)
    ctx.fillStyle = `rgba(255,255,255,${0.08 + Math.random() * 0.14})`
    ctx.fill()
  }

  const texture = new THREE.CanvasTexture(canvas)
  texture.colorSpace = THREE.SRGBColorSpace
  texture.wrapS = THREE.RepeatWrapping
  texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(1.15, 1.15)
  texture.needsUpdate = true

  return texture
}

function LuxuryArtifact() {
  const artifactRef = useRef<THREE.Mesh>(null)
  const detailRef = useRef<THREE.Mesh>(null)
  const wireRef = useRef<THREE.Mesh>(null)
  const auraRef = useRef<THREE.Mesh>(null)
  const { mouse } = useThree()

  const artifactTexture = useMemo(() => createArtifactTexture(), [])

  useFrame(state => {
    if (!artifactRef.current || !detailRef.current || !wireRef.current || !auraRef.current) return

    const time = state.clock.getElapsedTime()

    const rotationX = Math.sin(time * 0.24) * 0.12 + mouse.y * 0.06
    const rotationY = time * 0.15 + mouse.x * 0.1
    const rotationZ = Math.sin(time * 0.18) * 0.045

    artifactRef.current.rotation.set(rotationX, rotationY, rotationZ)
    detailRef.current.rotation.copy(artifactRef.current.rotation)
    wireRef.current.rotation.copy(artifactRef.current.rotation)
    auraRef.current.rotation.copy(artifactRef.current.rotation)

    const breathe = 1 + Math.sin(time * 0.7) * 0.018

    artifactRef.current.scale.setScalar(breathe)
    detailRef.current.scale.setScalar(breathe + 0.006)
    wireRef.current.scale.setScalar(breathe + 0.026)
    auraRef.current.scale.setScalar(breathe + 0.11)
  })

  return (
    <Float speed={0.95} rotationIntensity={0.08} floatIntensity={0.32}>
      <group>
        {/* Soft glow behind artifact */}
        <mesh position={[0, 0, -0.08]} scale={1.35}>
          <sphereGeometry args={[1.42, 48, 48]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.018}
            depthWrite={false}
          />
        </mesh>

        {/* Main black luxury artifact */}
        <mesh ref={artifactRef}>
          <icosahedronGeometry args={[1.42, 3]} />
          <MeshDistortMaterial
            map={artifactTexture ?? undefined}
            color="#090909"
            distort={0.04}
            speed={0.8}
            roughness={0.46}
            metalness={0.88}
          />
        </mesh>

        {/* Extra polished surface layer */}
        <mesh ref={detailRef}>
          <icosahedronGeometry args={[1.425, 3]} />
          <meshStandardMaterial
            map={artifactTexture ?? undefined}
            color="#161616"
            roughness={0.8}
            metalness={0.35}
            transparent
            opacity={0.18}
            depthWrite={false}
          />
        </mesh>

        {/* Thin premium wire edges */}
        <mesh ref={wireRef}>
          <icosahedronGeometry args={[1.455, 2]} />
          <meshBasicMaterial
            color="#ffffff"
            wireframe
            transparent
            opacity={0.07}
            depthWrite={false}
          />
        </mesh>

        {/* Outer atmosphere */}
        <mesh ref={auraRef}>
          <icosahedronGeometry args={[1.42, 2]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.022}
            side={THREE.BackSide}
            depthWrite={false}
          />
        </mesh>

        {/* Small luxury core glow */}
        <mesh>
          <sphereGeometry args={[0.52, 32, 32]} />
          <meshBasicMaterial
            color="#ffffff"
            transparent
            opacity={0.028}
            depthWrite={false}
          />
        </mesh>
      </group>
    </Float>
  )
}

function OrbitRings() {
  const ringRef = useRef<THREE.Group>(null)

  useFrame(state => {
    if (!ringRef.current) return

    const time = state.clock.getElapsedTime()
    ringRef.current.rotation.x = time * 0.09
    ringRef.current.rotation.z = time * 0.055
  })

  return (
    <group ref={ringRef}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2.25, 0.006, 8, 140]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.045} />
      </mesh>

      <mesh rotation={[Math.PI / 3, Math.PI / 5, 0]}>
        <torusGeometry args={[2.78, 0.004, 8, 140]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.028} />
      </mesh>

      <mesh rotation={[Math.PI / 2.35, Math.PI / 7, 0.38]}>
        <torusGeometry args={[1.88, 0.0035, 8, 140]} />
        <meshBasicMaterial color="#ffffff" transparent opacity={0.028} />
      </mesh>
    </group>
  )
}

function ArtifactDust() {
  const ref = useRef<THREE.Points>(null)

  const geometry = useMemo(() => {
    const count = 120
    const positions = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 7.8
      positions[i * 3 + 1] = (Math.random() - 0.5) * 7.8
      positions[i * 3 + 2] = (Math.random() - 0.5) * 7.8
    }

    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    return geo
  }, [])

  useFrame(state => {
    if (!ref.current) return

    const time = state.clock.getElapsedTime()
    ref.current.rotation.y = time * 0.028
    ref.current.rotation.x = Math.sin(time * 0.18) * 0.035
  })

  return (
    <points ref={ref} geometry={geometry}>
      <pointsMaterial
        color="#ffffff"
        size={0.017}
        transparent
        opacity={0.2}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  )
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full" style={{ minHeight: 420 }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.24} />

          {/* Strong premium rim light */}
          <pointLight position={[4, 4, 4]} intensity={1.65} color="#ffffff" />

          {/* Soft dark-side detail light */}
          <pointLight position={[-4, -4, -4]} intensity={0.42} color="#aaaaaa" />

          {/* Front micro highlight */}
          <pointLight position={[0, 0, 3]} intensity={0.28} color="#ffffff" />

          <LuxuryArtifact />
          <OrbitRings />
          <ArtifactDust />
        </Suspense>
      </Canvas>
    </div>
  )
}
