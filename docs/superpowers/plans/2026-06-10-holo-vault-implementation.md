# Holo-Vault 3D Arsenal Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the 2D "Featured Arsenal" grid with a cinematic 3D "Holo-Vault" using React Three Fiber.

**Architecture:** A Three.js scene integrated into the existing React application. It uses a Spline-based camera path controlled by scroll position, with 3D artifacts and floating holographic HUDs.

**Tech Stack:** React, Three.js, React Three Fiber (@react-three/fiber), Three Drei (@react-three/drei), Troika Three Text (for 3D text), GSAP (for animations).

---

### Task 1: Environment Setup & Dependencies

**Files:**
- Modify: `package.json` (add dependencies)
- Create: `docs/superpowers/plans/assets_check.md`

- [ ] **Step 1: Check and add Three.js dependencies**
Run `npm install three @types/three @react-three/fiber @react-three/drei troika-three-text gsap` (or verify if already present).
- [ ] **Step 2: Commit**
```bash
git add package.json
git commit -m "chore: add three.js and r3f dependencies"
```

### Task 2: Create the HoloVault Component Shell

**Files:**
- Create: `HoloVault.jsx` (New component)
- Modify: `App.jsx` or main layout (to include HoloVault)

- [ ] **Step 1: Define the basic Canvas and Scene**
```jsx
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Stars, OrbitControls } from '@react-three/drei';

export const HoloVault = () => {
  return (
    <section id="projects" className="h-[200vh] relative">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <color attach="background" args={['#020617']} />
        <ambientLight intensity={0.5} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <Suspense fallback={null}>
           {/* Objects go here */}
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>
    </section>
  );
};
```
- [ ] **Step 2: Integrate into main page** (Replace the old projects section)
- [ ] **Step 3: Commit**
```bash
git add HoloVault.jsx
git commit -m "feat: add HoloVault base component with R3F canvas"
```

### Task 3: Implement Scroll-based Spline Path

**Files:**
- Modify: `HoloVault.jsx`

- [ ] **Step 1: Define the CatmullRomCurve3 path**
```javascript
const curve = new THREE.CatmullRomCurve3([
  new THREE.Vector3(0, 0, 10),
  new THREE.Vector3(5, 2, 0),
  new THREE.Vector3(-5, -2, -10),
  new THREE.Vector3(0, 0, -20),
]);
```
- [ ] **Step 2: Hook scroll progress to camera position**
Use `useScroll` from `@react-three/drei` to update camera position along the curve.
- [ ] **Step 3: Commit**
```bash
git commit -m "feat: implement scroll-linked camera spline path"
```

### Task 4: Create Artifact Components with Floating HUDs

**Files:**
- Create: `Artifact.jsx`

- [ ] **Step 1: Define Artifact with Troika Text HUD**
```jsx
import { Text } from '@react-three/drei';

const Artifact = ({ position, title, tech }) => {
  return (
    <group position={position}>
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#22d3ee" wireframe />
      </mesh>
      <group position={[1.2, 0, 0]}>
        <Text font="/fonts/JetBrainsMono.woff" fontSize={0.2} color="white">
          {title}
        </Text>
        <Text position={[0, -0.3, 0]} fontSize={0.1} color="#22d3ee">
          {tech.join(' | ')}
        </Text>
      </group>
    </group>
  );
};
```
- [ ] **Step 2: Map projects to Artifacts along the path**
- [ ] **Step 3: Commit**
```bash
git add Artifact.jsx
git commit -m "feat: add 3D artifact component with holographic HUD"
```

### Task 5: Final Polish & Tactical Override

**Files:**
- Modify: `HoloVault.jsx`

- [ ] **Step 1: Add "Tactical Override" toggle for 2D fallback**
- [ ] **Step 2: Add post-processing (Bloom)** for that glowing cyan look.
- [ ] **Step 3: Final Verification & Commit**
```bash
git commit -m "feat: add polish and 2D fallback toggle"
```
