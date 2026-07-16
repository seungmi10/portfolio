'use client';

import { memo, Suspense, useEffect, useRef, useState, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Center, Float, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { PostProcessing } from './PostProcessing';
import { Environment as EnvWrapper } from './Environment';
import { scene as cfg, site } from '@/data/site';

// 모델 미리 로딩
useGLTF.preload(cfg.modelPath);

/** GLB 모델 — 메쉬가 여러 개라 전체 씬을 통째로 렌더 */
function Model() {
  const { scene: gltfScene } = useGLTF(cfg.modelPath) as any;

  // 그림자 설정
  useEffect(() => {
    gltfScene.traverse((child: any) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [gltfScene]);

  return (
    <primitive
      object={gltfScene}
      rotation={cfg.modelRotation}
    />
  );
}

const Effects = memo(() => <PostProcessing />);
Effects.displayName = 'Effects';

export default function Scene() {
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const [modelScale, setModelScale] = useState(cfg.modelScale);

  // 모바일에서 모델 축소
  const handleResize = useCallback(() => {
    const isSmall = window.innerWidth <= 768;
    setModelScale(isSmall ? cfg.modelScale * 0.7 : cfg.modelScale);
  }, []);

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  return (
    <Canvas
      shadows
      camera={{ position: cfg.cameraPosition, fov: cfg.cameraFov }}
      gl={{ alpha: false, antialias: true }}
      onCreated={({ gl }) => {
        rendererRef.current = gl;
        gl.setClearColor(new THREE.Color(site.bgColor));
      }}
      style={{ position: 'absolute', inset: 0 }}
    >
      <Suspense fallback={null}>
        <group position={cfg.modelPosition}>
          {cfg.floatEnabled ? (
            <Float floatIntensity={2} rotationIntensity={1} speed={2}>
              <Center scale={modelScale}>
                <Model />
              </Center>
            </Float>
          ) : (
            <Center scale={modelScale}>
              <Model />
            </Center>
          )}
        </group>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={cfg.autoRotate}
          autoRotateSpeed={cfg.autoRotateSpeed}
        />

        <EnvWrapper
          intensity={cfg.envIntensity}
          highlight={cfg.highlightColor}
        />

        <Effects />
      </Suspense>
    </Canvas>
  );
}
