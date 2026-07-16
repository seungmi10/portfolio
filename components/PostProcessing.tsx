'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { useFrame } from '@react-three/fiber';
import { EffectComposer, RenderPass, EffectPass } from 'postprocessing';
import { DitheringEffect } from '@/lib/dithering-shader/DitheringEffect';
import { scene as cfg } from '@/data/site';

/**
 * 디더링 후처리 파이프라인
 * 원본 데모의 leva 컨트롤을 제거하고 data/site.ts 값을 사용
 */
export const PostProcessing = () => {
  const composerRef = useRef<EffectComposer | null>(null);
  const [scene, setScene] = useState<THREE.Scene | null>(null);
  const [camera, setCamera] = useState<THREE.Camera | null>(null);

  const handleResize = useCallback(() => {
    composerRef.current?.setSize(window.innerWidth, window.innerHeight);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (!scene || !camera || !composerRef.current) return;

    const composer = composerRef.current;
    composer.removeAllPasses();
    composer.addPass(new RenderPass(scene, camera));
    composer.addPass(
      new EffectPass(
        camera,
        new DitheringEffect({
          gridSize: cfg.dithering.gridSize,
          pixelSizeRatio: cfg.dithering.pixelSizeRatio,
          grayscaleOnly: cfg.dithering.grayscaleOnly,
        })
      )
    );
  }, [scene, camera]);

  useFrame(({ gl, scene: currentScene, camera: currentCamera }) => {
    if (!composerRef.current) {
      composerRef.current = new EffectComposer(gl);
      handleResize();
    }
    if (scene !== currentScene) setScene(currentScene);
    if (camera !== currentCamera) setCamera(currentCamera);
    composerRef.current?.render();
  }, 1);

  return null;
};
