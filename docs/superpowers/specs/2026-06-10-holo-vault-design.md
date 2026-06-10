# Holo-Vault: Immersive 3D Featured Arsenal Design Spec

**Date:** 2026-06-10
**Topic:** Redesigning the "Featured Arsenal" section into a cinematic 3D weapon-select experience.

## 1. Overview
The goal is to replace the current 2D project grid with a "Holo-Vault" – an immersive, 3D cinematic experience where projects are represented as interactive "Tactical Artifacts." This aligns with the "Tactical OS" theme of the portfolio and provides a "world-class" interactive feel.

## 2. Architecture & Scene Design
- **Engine:** React Three Fiber (R3F) with Three.js.
- **Environment:** An "Infinite Void" with a dark background (`#020617`), a glowing cyan grid floor, and atmospheric particles (sparkles).
- **Camera Path:** A 3D Spline path that the camera follows based on the user's scroll position.
- **Project Anchors:** 3D objects (artifacts) positioned at intervals along the spline.

## 3. Visual Components
- **Tactical Artifacts:** Unique 3D models for each project.
  - Examples: A floating data shard for security tools, a mechanical case for full-stack apps, a futuristic terminal for game dev.
- **Floating 3D HUD:** Holographic data overlays that float next to each artifact.
  - Includes: Project Title, Category, Description, and Tech Stack.
  - Stylized with "JetBrains Mono" font and cyan glowing effects.
  - Responsive to camera rotation (tilting and facing the camera).

## 4. Interaction Model
- **Scroll-to-Fly:** Scrolling moving the camera forward/backward along the spline.
- **Auto-Inspection:** As an object enters the "focus range" (center of view), the camera slows down and rotates slightly to frame the object.
- **Manual Rotation:** Users can click-and-drag to inspect the artifact from any angle.
- **Tactical Override:** A persistent UI toggle to switch back to a standard 2D view for accessibility.

## 5. Technical Details & Performance
- **Frustum Culling:** Only rendering objects within the camera's field of view.
- **LOD (Level of Detail):** Swapping models based on distance to the camera.
- **Text Rendering:** Using `troika-three-text` for high-performance 3D text.
- **Animation:** GSAP or Framer Motion 3D for smooth camera transitions and HUD "scanning" effects.

## 6. Success Criteria
- Smooth 60fps performance on modern desktop browsers.
- Immersive "AAA game" feel for the weapon-select screen.
- Clear readability of project information within the 3D HUD.
