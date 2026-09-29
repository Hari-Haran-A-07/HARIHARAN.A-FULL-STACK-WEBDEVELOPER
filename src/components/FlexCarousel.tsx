"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import { Renderer, Camera, Transform, Program, Mesh, Plane, Texture } from "ogl";
import { VisualLabItem } from "@/types";
import {
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Maximize2,
  Layers,
  RotateCw,
  Waves,
  Eye,
} from "lucide-react";

export type CarouselPreset = "ribbon" | "liquid" | "vortex" | "arch";

interface FlexCarouselProps {
  items: VisualLabItem[];
  onSelectItem?: (item: VisualLabItem) => void;
}

export default function FlexCarousel({ items, onSelectItem }: FlexCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [preset, setPreset] = useState<CarouselPreset>("ribbon");
  const [lensAberration, setLensAberration] = useState(true);
  const [webglSupported, setWebglSupported] = useState(true);
  const [isInteracting, setIsInteracting] = useState(false);

  // Physics & Animation refs
  const stateRef = useRef({
    targetOffset: 0,
    currentOffset: 0,
    velocity: 0,
    isDragging: false,
    startX: 0,
    lastX: 0,
    preset: "ribbon" as CarouselPreset,
    lensAberration: true,
    itemCount: items.length,
    aspect: 1,
    time: 0,
  });

  // Keep stateRef synced with React state
  useEffect(() => {
    stateRef.current.preset = preset;
    stateRef.current.lensAberration = lensAberration;
    stateRef.current.itemCount = items.length;
  }, [preset, lensAberration, items.length]);

  // Helper to generate dynamic procedural canvas texture for an item
  const createItemTexture = useCallback((gl: any, item: VisualLabItem, index: number) => {
    const canvas = document.createElement("canvas");
    canvas.width = 1024;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d");

    if (!ctx) return new Texture(gl);

    // Background base
    const grad = ctx.createLinearGradient(0, 0, 1024, 1024);
    grad.addColorStop(0, "#0E0E12");
    grad.addColorStop(0.5, "#15151F");
    grad.addColorStop(1, "#07070A");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 1024, 1024);

    // Accent Glow Orb
    const radial = ctx.createRadialGradient(512, 380, 50, 512, 380, 480);
    radial.addColorStop(0, `${item.color}88`);
    radial.addColorStop(0.5, `${item.accent}33`);
    radial.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = radial;
    ctx.fillRect(0, 0, 1024, 1024);

    // Grid lines
    ctx.strokeStyle = "rgba(255, 255, 255, 0.05)";
    ctx.lineWidth = 1;
    for (let x = 0; x <= 1024; x += 64) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, 1024);
      ctx.stroke();
    }
    for (let y = 0; y <= 1024; y += 64) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(1024, y);
      ctx.stroke();
    }

    // Border Frame
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctx.lineWidth = 4;
    ctx.strokeRect(32, 32, 960, 960);

    // Corner crosshairs
    const drawCross = (cx: number, cy: number) => {
      ctx.strokeStyle = item.color;
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(cx - 16, cy);
      ctx.lineTo(cx + 16, cy);
      ctx.moveTo(cx, cy - 16);
      ctx.lineTo(cx, cy + 16);
      ctx.stroke();
    };
    drawCross(64, 64);
    drawCross(960, 64);
    drawCross(64, 960);
    drawCross(960, 960);

    // Central Visual Geometry / Iconography
    ctx.save();
    ctx.translate(512, 420);

    // Geometric rings
    ctx.strokeStyle = item.color;
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(0, 0, 140, 0, Math.PI * 2);
    ctx.stroke();

    ctx.strokeStyle = `${item.accent}99`;
    ctx.lineWidth = 1;
    ctx.setLineDash([8, 8]);
    ctx.beginPath();
    ctx.arc(0, 0, 180, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // Central Monogram / Emblem
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "900 84px 'Space Grotesk', sans-serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(`0${index + 1}`, 0, -10);

    ctx.fillStyle = item.color;
    ctx.font = "700 18px 'JetBrains Mono', monospace";
    ctx.fillText("HHA // LAB CORE", 0, 48);

    ctx.restore();

    // Top Header Badge
    ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
    ctx.beginPath();
    ctx.roundRect(80, 70, 320, 48, 24);
    ctx.fill();

    ctx.fillStyle = item.color;
    ctx.font = "700 20px 'JetBrains Mono', monospace";
    ctx.textAlign = "left";
    ctx.textBaseline = "middle";
    ctx.fillText(`● ${item.category}`, 100, 94);

    // Index Counter
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.font = "600 22px 'JetBrains Mono', monospace";
    ctx.textAlign = "right";
    ctx.fillText(`INDEX: 0${index + 1} / 0${items.length}`, 944, 94);

    // Title
    ctx.fillStyle = "#FFFFFF";
    ctx.font = "800 42px 'Space Grotesk', sans-serif";
    ctx.textAlign = "left";
    ctx.fillText(item.title, 80, 740);

    // Subtitle
    ctx.fillStyle = "rgba(255, 255, 255, 0.7)";
    ctx.font = "500 24px 'Inter', sans-serif";
    ctx.fillText(item.subtitle, 80, 790);

    // Spec pills at bottom
    if (item.specDetails) {
      const pillText = `TOOL: ${item.specDetails.tool}  |  RATIO: ${item.specDetails.aspect}  |  ENGINE: ${item.specDetails.type}`;
      ctx.fillStyle = "rgba(255, 255, 255, 0.06)";
      ctx.beginPath();
      ctx.roundRect(80, 840, 864, 52, 12);
      ctx.fill();

      ctx.fillStyle = "#A7A7A7";
      ctx.font = "600 18px 'JetBrains Mono', monospace";
      ctx.fillText(pillText, 108, 868);
    }

    const texture = new Texture(gl, {
      generateMipmaps: true,
    });
    texture.image = canvas;
    return texture;
  }, [items.length]);

  // Main WebGL Initializer
  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let renderer: any;
    let gl: any;

    try {
      renderer = new Renderer({
        canvas,
        alpha: true,
        antialias: true,
        powerPreference: "high-performance",
      });
      gl = renderer.gl;
      gl.clearColor(0, 0, 0, 0);
    } catch (e) {
      console.warn("WebGL not supported, falling back to CSS carousel", e);
      setWebglSupported(false);
      return;
    }

    const camera = new Camera(gl, { fov: 45 });
    camera.position.set(0, 0, 5);

    const scene = new Transform();

    // Shaders
    const vertexShader = /* glsl */ `
      attribute vec3 position;
      attribute vec2 uv;
      uniform mat4 modelViewMatrix;
      uniform mat4 projectionMatrix;
      uniform float uTime;
      uniform float uOffset;
      uniform float uIndex;
      uniform float uTotal;
      uniform float uVelocity;
      uniform int uPreset;

      varying vec2 vUv;
      varying float vDistortion;
      varying float vDepth;

      void main() {
        vUv = uv;
        vec3 pos = position;

        // Calculate continuous relative angle/offset
        float spacing = 2.4;
        float xOffset = (uIndex - uOffset);
        
        // Wrap around loop
        float halfTotal = uTotal * 0.5;
        xOffset = mod(xOffset + halfTotal, uTotal) - halfTotal;

        float x = xOffset * spacing;
        float y = 0.0;
        float z = 0.0;
        float rotY = 0.0;
        float rotZ = 0.0;

        // Preset 0: Ribbon
        if (uPreset == 0) {
          z = -abs(x) * 0.6 + cos(x * 0.8 + uTime * 0.8) * 0.2;
          y = sin(x * 0.6 + uTime) * 0.25;
          rotY = -x * 0.18;
          rotZ = -x * 0.03;
        }
        // Preset 1: Liquid
        else if (uPreset == 1) {
          float wave = sin(x * 1.2 + uTime * 1.5) * 0.35;
          z = -abs(x) * 0.7 + wave;
          y = cos(x * 1.0 + uTime) * 0.3;
          pos.z += sin(uv.x * 6.0 + uTime * 2.0) * (0.08 + abs(uVelocity) * 0.15);
          rotY = -x * 0.22;
        }
        // Preset 2: Vortex
        else if (uPreset == 2) {
          float radius = 3.2;
          float angle = (xOffset / uTotal) * 3.14159265 * 2.0;
          x = sin(angle) * radius;
          z = cos(angle) * radius - radius;
          y = xOffset * 0.3 + sin(uTime + angle) * 0.1;
          rotY = -angle;
        }
        // Preset 3: Arch
        else if (uPreset == 3) {
          z = - (x * x) * 0.16;
          y = - abs(x) * 0.12;
          rotY = -x * 0.24;
        }

        // Inertia tilt on drag velocity
        rotZ += uVelocity * 0.08;

        // Apply rotation matrices around Y and Z
        float cy = cos(rotY);
        float sy = sin(rotY);
        vec3 rotated = vec3(
          pos.x * cy + pos.z * sy,
          pos.y,
          -pos.x * sy + pos.z * cy
        );

        float cz = cos(rotZ);
        float sz = sin(rotZ);
        rotated = vec3(
          rotated.x * cz - rotated.y * sz,
          rotated.x * sz + rotated.y * cz,
          rotated.z
        );

        vec3 worldPos = rotated + vec3(x, y, z);
        vDepth = worldPos.z;
        vDistortion = abs(uVelocity) * 0.5;

        gl_Position = projectionMatrix * modelViewMatrix * vec4(worldPos, 1.0);
      }
    `;

    const fragmentShader = /* glsl */ `
      precision highp float;

      uniform sampler2D uTexture;
      uniform float uVelocity;
      uniform bool uAberration;
      uniform float uTime;
      uniform float uActive;

      varying vec2 vUv;
      varying float vDistortion;
      varying float vDepth;

      void main() {
        vec2 uv = vUv;
        vec4 color = vec4(0.0);

        if (uAberration && abs(uVelocity) > 0.002) {
          float shift = uVelocity * 0.035;
          float r = texture2D(uTexture, uv + vec2(shift, 0.0)).r;
          float g = texture2D(uTexture, uv).g;
          float b = texture2D(uTexture, uv - vec2(shift, 0.0)).b;
          float a = texture2D(uTexture, uv).a;
          color = vec4(r, g, b, a);
        } else {
          color = texture2D(uTexture, uv);
        }

        // Depth fog / darkening for background cards
        float depthFactor = clamp((vDepth + 4.0) / 4.0, 0.25, 1.0);
        color.rgb *= depthFactor;

        // Subtle specular glow on active center card
        if (uActive > 0.5) {
          float edgeGlow = smoothstep(0.0, 0.05, uv.x) * smoothstep(1.0, 0.95, uv.x) *
                           smoothstep(0.0, 0.05, uv.y) * smoothstep(1.0, 0.95, uv.y);
          color.rgb += vec3(0.12, 0.05, 0.2) * (1.0 - edgeGlow);
        }

        gl_FragColor = color;
      }
    `;

    // Create planes and meshes for each item
    const geometry = new Plane(gl, { width: 2.0, height: 2.0, widthSegments: 24, heightSegments: 24 });
    const meshes: Mesh[] = [];
    const textures: Texture[] = [];

    items.forEach((item, index) => {
      const texture = createItemTexture(gl, item, index);
      textures.push(texture);

      const program = new Program(gl, {
        vertex: vertexShader,
        fragment: fragmentShader,
        uniforms: {
          uTexture: { value: texture },
          uTime: { value: 0 },
          uOffset: { value: 0 },
          uIndex: { value: index },
          uTotal: { value: items.length },
          uVelocity: { value: 0 },
          uPreset: { value: 0 },
          uAberration: { value: true },
          uActive: { value: 0 },
        },
        transparent: true,
        cullFace: false,
      });

      const mesh = new Mesh(gl, { geometry, program });
      mesh.setParent(scene);
      meshes.push(mesh);
    });

    // Resize Handler
    const handleResize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight || 560;
      renderer.setSize(width, height);
      camera.perspective({ aspect: width / height });
      stateRef.current.aspect = width / height;
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    // Touch & Pointer handlers
    const onPointerDown = (e: MouseEvent | TouchEvent) => {
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      stateRef.current.isDragging = true;
      stateRef.current.startX = clientX;
      stateRef.current.lastX = clientX;
      setIsInteracting(true);
    };

    const onPointerMove = (e: MouseEvent | TouchEvent) => {
      if (!stateRef.current.isDragging) return;
      const clientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const deltaX = clientX - stateRef.current.lastX;
      stateRef.current.lastX = clientX;

      // Sensitivity factor
      const sensitivity = 0.0035;
      stateRef.current.targetOffset -= deltaX * sensitivity;
      stateRef.current.velocity = -deltaX * sensitivity * 2.0;
    };

    const onPointerUp = () => {
      stateRef.current.isDragging = false;
      setIsInteracting(false);
      // Snap to nearest integer item
      stateRef.current.targetOffset = Math.round(stateRef.current.targetOffset);
    };

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      stateRef.current.targetOffset += delta * 0.0018;
      stateRef.current.velocity += delta * 0.001;
    };

    const canvasEl = canvas;
    canvasEl.addEventListener("mousedown", onPointerDown);
    window.addEventListener("mousemove", onPointerMove);
    window.addEventListener("mouseup", onPointerUp);

    canvasEl.addEventListener("touchstart", onPointerDown, { passive: true });
    window.addEventListener("touchmove", onPointerMove, { passive: true });
    window.addEventListener("touchend", onPointerUp);
    canvasEl.addEventListener("wheel", onWheel, { passive: false });

    // Animation Loop
    let animationFrameId: number;
    let lastTime = performance.now();

    const presetMap: Record<CarouselPreset, number> = {
      ribbon: 0,
      liquid: 1,
      vortex: 2,
      arch: 3,
    };

    const render = (now: number) => {
      const delta = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;
      stateRef.current.time += delta;

      // Spring physics toward targetOffset
      const spring = 0.12;
      const friction = 0.86;
      const offsetDiff = stateRef.current.targetOffset - stateRef.current.currentOffset;
      stateRef.current.velocity += offsetDiff * spring;
      stateRef.current.velocity *= friction;
      stateRef.current.currentOffset += stateRef.current.velocity;

      // Wrap currentOffset into [0, items.length)
      const count = items.length;
      let normalizedOffset = ((stateRef.current.currentOffset % count) + count) % count;
      const centerIdx = Math.round(normalizedOffset) % count;

      setActiveIndex(centerIdx);

      const pVal = presetMap[stateRef.current.preset] ?? 0;

      // Update Mesh Uniforms
      meshes.forEach((mesh, idx) => {
        mesh.program.uniforms.uTime.value = stateRef.current.time;
        mesh.program.uniforms.uOffset.value = stateRef.current.currentOffset;
        mesh.program.uniforms.uVelocity.value = stateRef.current.velocity;
        mesh.program.uniforms.uPreset.value = pVal;
        mesh.program.uniforms.uAberration.value = stateRef.current.lensAberration;
        mesh.program.uniforms.uActive.value = idx === centerIdx ? 1 : 0;
      });

      renderer.render({ scene, camera });
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvasEl.removeEventListener("mousedown", onPointerDown);
      window.removeEventListener("mousemove", onPointerMove);
      window.removeEventListener("mouseup", onPointerUp);
      canvasEl.removeEventListener("touchstart", onPointerDown);
      window.removeEventListener("touchmove", onPointerMove);
      window.removeEventListener("touchend", onPointerUp);
      canvasEl.removeEventListener("wheel", onWheel);
    };
  }, [items, createItemTexture]);

  // Navigate functions
  const nextSlide = () => {
    stateRef.current.targetOffset = Math.round(stateRef.current.targetOffset) + 1;
  };

  const prevSlide = () => {
    stateRef.current.targetOffset = Math.round(stateRef.current.targetOffset) - 1;
  };

  const jumpToSlide = (idx: number) => {
    const current = stateRef.current.currentOffset;
    const count = items.length;
    const currentNorm = ((current % count) + count) % count;
    let diff = idx - currentNorm;
    if (diff > count / 2) diff -= count;
    if (diff < -count / 2) diff += count;
    stateRef.current.targetOffset = current + diff;
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === "INPUT" || document.activeElement?.tagName === "TEXTAREA") return;
      if (e.key === "ArrowLeft") prevSlide();
      if (e.key === "ArrowRight") nextSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const activeItem = items[activeIndex] || items[0];

  return (
    <div
      ref={containerRef}
      className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-b from-[#0F0F14] via-[#09090C] to-[#040406] border border-white/10 shadow-[0_20px_80px_rgba(0,0,0,0.8)] select-none"
    >
      {/* Top HUD Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-5 md:p-6 border-b border-white/10 bg-white/[0.02] backdrop-blur-md z-20 relative">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#A100FF] animate-pulse shadow-[0_0_12px_#A100FF]" />
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-white">
            {"WEBGL FLEXCAROUSEL // OGL 3D ENGINE"}
          </span>
          <span className="hidden sm:inline-block px-2 py-0.5 rounded bg-white/5 font-mono text-[10px] text-neutral-400 border border-white/5">
            60 FPS GLSL
          </span>
        </div>

        {/* Preset Selector */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-black/60 border border-white/10">
          {(["ribbon", "liquid", "vortex", "arch"] as CarouselPreset[]).map((p) => (
            <button
              key={p}
              onClick={() => setPreset(p)}
              className={`px-3 py-1.5 rounded-lg font-mono text-[11px] uppercase tracking-wider transition-all ${
                preset === p
                  ? "bg-[#A100FF] text-white font-bold shadow-[0_0_15px_rgba(161,0,255,0.4)]"
                  : "text-neutral-400 hover:text-white hover:bg-white/5"
              }`}
            >
              {p}
            </button>
          ))}
        </div>

        {/* Dispersion & Interactive Options */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLensAberration(!lensAberration)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-[11px] uppercase tracking-wider border transition-all ${
              lensAberration
                ? "border-[#A100FF]/50 bg-[#A100FF]/15 text-[#D8B4FE]"
                : "border-white/10 bg-black/40 text-neutral-400 hover:text-white"
            }`}
            title="Toggle velocity-induced RGB chromatic dispersion"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#A100FF]" />
            <span>DISPERSION {lensAberration ? "ON" : "OFF"}</span>
          </button>
        </div>
      </div>

      {/* WebGL Canvas Viewport */}
      <div className="relative w-full h-[420px] sm:h-[480px] md:h-[540px] cursor-grab active:cursor-grabbing flex items-center justify-center">
        {webglSupported ? (
          <canvas ref={canvasRef} className="w-full h-full block" />
        ) : (
          /* Accessible Fallback Carousel if WebGL is unavailable */
          <div className="w-full h-full flex items-center justify-center p-8">
            <div className="max-w-md p-8 rounded-2xl bg-neutral-900 border border-white/10 text-center space-y-4">
              <span className="font-mono text-xs text-[#A100FF] uppercase tracking-wider">
                ● ACCESSIBLE FALLBACK MODE
              </span>
              <h3 className="text-2xl font-bold text-white uppercase">{activeItem.title}</h3>
              <p className="text-sm text-neutral-400">{activeItem.description}</p>
            </div>
          </div>
        )}

        {/* Drag Hint overlay on initial load */}
        {!isInteracting && (
          <div className="absolute top-4 pointer-events-none px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-sm text-[10px] font-mono text-neutral-400 tracking-wider flex items-center gap-1.5">
            <Waves className="w-3 h-3 text-[#A100FF]" />
            <span>DRAG, FLING OR SCROLL HORIZONTALLY</span>
          </div>
        )}

        {/* Left & Right Chevron Overlays */}
        <button
          onClick={prevSlide}
          aria-label="Previous experiment"
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-[#A100FF] border border-white/20 hover:border-[#A100FF] text-white flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 z-20 group"
        >
          <ChevronLeft className="w-6 h-6 transition-transform group-hover:-translate-x-0.5" />
        </button>

        <button
          onClick={nextSlide}
          aria-label="Next experiment"
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/70 hover:bg-[#A100FF] border border-white/20 hover:border-[#A100FF] text-white flex items-center justify-center transition-all shadow-xl hover:scale-110 active:scale-95 z-20 group"
        >
          <ChevronRight className="w-6 h-6 transition-transform group-hover:translate-x-0.5" />
        </button>
      </div>

      {/* Bottom Interactive Spec & Details Card */}
      <div className="p-6 md:p-8 bg-[#09090D] border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 z-20 relative">
        <div className="space-y-2 max-w-2xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#A100FF]/20 text-[#D8B4FE] border border-[#A100FF]/40 font-mono text-[10px] font-bold uppercase tracking-wider">
              {activeItem.category}
            </span>
            <span className="font-mono text-xs text-neutral-400">
              EXP 0{activeIndex + 1} OF 0{items.length}
            </span>
          </div>
          <h3 className="font-heading text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
            {activeItem.title}
          </h3>
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
            {activeItem.description}
          </p>

          <div className="flex flex-wrap gap-1.5 pt-2">
            {activeItem.tags.map((t) => (
              <span
                key={t}
                className="px-2 py-0.5 rounded bg-white/5 font-mono text-[10px] text-neutral-400 border border-white/5"
              >
                #{t}
              </span>
            ))}
          </div>
        </div>

        {/* Action Button */}
        {onSelectItem && (
          <button
            onClick={() => onSelectItem(activeItem)}
            className="flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black hover:bg-[#A100FF] hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-all shadow-lg hover:shadow-[0_0_25px_rgba(161,0,255,0.5)] shrink-0 self-stretch md:self-auto justify-center group"
          >
            <Eye className="w-4 h-4" />
            <span>INSPECT SPECIFICATIONS</span>
            <Maximize2 className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
          </button>
        )}
      </div>

      {/* Slide Thumb Indicator Dots */}
      <div className="flex items-center justify-center gap-2 py-3 bg-[#060608] border-t border-white/5">
        {items.map((item, idx) => (
          <button
            key={item.id}
            onClick={() => jumpToSlide(idx)}
            aria-label={`Jump to slide ${idx + 1}`}
            className={`transition-all rounded-full ${
              idx === activeIndex
                ? "w-8 h-1.5 bg-[#A100FF] shadow-[0_0_8px_#A100FF]"
                : "w-2 h-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
