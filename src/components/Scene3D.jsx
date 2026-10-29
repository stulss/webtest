import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// 스크롤 진행도(0~1)
function scrollProgress() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  return max > 0 ? window.scrollY / max : 0;
}

function Rig({ reduced, children }) {
  const group = useRef();
  useFrame((state, dt) => {
    const p = scrollProgress();
    const { x, y } = state.pointer;
    // 마우스 패럴랙스 + 스크롤에 따라 카메라가 장면 속을 지나감
    // 터치 기기는 포인터가 없어서 천천히 좌우로 흔들리는 움직임을 더해 준다
    const sway = reduced ? 0 : Math.sin(state.clock.elapsedTime * 0.35) * 0.5;
    const tx = x * 0.8 + sway;
    const ty = y * 0.5 - p * 2.5;
    const tz = 6 - p * 7;
    state.camera.position.x += (tx - state.camera.position.x) * Math.min(1, dt * 2);
    state.camera.position.y += (ty - state.camera.position.y) * Math.min(1, dt * 2);
    state.camera.position.z += (tz - state.camera.position.z) * Math.min(1, dt * 2);
    state.camera.lookAt(0, -p * 2, 0);
    if (group.current && !reduced) group.current.rotation.y = p * Math.PI * 1.5;
    // 화면 오른쪽 가장자리로 치우치게 (모바일은 덜 치우침)
    if (group.current) group.current.position.x = state.size.width < 720 ? 0.6 : 2.6;
  });
  return <group ref={group} scale={0.5}>{children}</group>;
}

function Core({ reduced }) {
  const ico = useRef();
  const knot = useRef();
  useFrame((_, dt) => {
    if (reduced) return;
    const p = scrollProgress();
    ico.current.rotation.x += dt * 0.15;
    ico.current.rotation.y += dt * 0.2;
    ico.current.scale.setScalar(1 + p * 0.6);
    knot.current.rotation.x -= dt * 0.25;
    knot.current.rotation.z += dt * 0.18;
  });
  return (
    <>
      <mesh ref={ico}>
        <icosahedronGeometry args={[1.6, 1]} />
        <meshBasicMaterial color="#7fc8a9" wireframe transparent opacity={0.35} />
      </mesh>
      <mesh ref={knot}>
        <torusKnotGeometry args={[0.7, 0.18, 160, 20]} />
        <meshBasicMaterial color="#6fa3f2" wireframe transparent opacity={0.5} />
      </mesh>
    </>
  );
}

function Particles({ reduced }) {
  const ref = useRef();
  const positions = useMemo(() => {
    const n = 1800;
    const arr = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const r = 4 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      arr[i * 3] = Math.cos(theta) * r;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 18;
      arr[i * 3 + 2] = Math.sin(theta) * r - 4;
    }
    return arr;
  }, []);
  useFrame((_, dt) => {
    if (!reduced && ref.current) ref.current.rotation.y += dt * 0.03;
  });
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={positions.length / 3} array={positions} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#9fe3c3" transparent opacity={0.4} sizeAttenuation depthWrite={false} blending={THREE.AdditiveBlending} />
    </points>
  );
}

// 스크롤하며 하나씩 지나가는 떠다니는 링들
function Rings({ reduced }) {
  const refs = useRef([]);
  useFrame((state) => {
    if (reduced) return;
    const t = state.clock.elapsedTime;
    refs.current.forEach((m, i) => {
      if (!m) return;
      m.rotation.x = t * 0.2 + i;
      m.rotation.y = t * 0.15 * (i % 2 ? 1 : -1);
    });
  });
  return (
    <>
      {[0, 1, 2, 3, 4].map((i) => (
        <mesh key={i} ref={(el) => (refs.current[i] = el)} position={[Math.sin(i * 2) * 3, -i * 2.2, -i * 1.5]}>
          <torusGeometry args={[1 + i * 0.15, 0.015, 8, 80]} />
          <meshBasicMaterial color={i % 2 ? "#6fd3e0" : "#7fc8a9"} transparent opacity={0.35} />
        </mesh>
      ))}
    </>
  );
}

export default function Scene3D({ reduced }) {
  return (
    <div className="scene3d" aria-hidden="true">
      <Canvas camera={{ position: [0, 0, 6], fov: 55 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
        <Rig reduced={reduced}>
          <Core reduced={reduced} />
          <Rings reduced={reduced} />
        </Rig>
        <Particles reduced={reduced} />
      </Canvas>
    </div>
  );
}
