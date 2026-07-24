"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

// 3D 씬은 브라우저에서만 로드 (서버 렌더링 제외)
const Scene = dynamic(() => import("@/components/Scene"), { ssr: false });

export default function Home() {
  return (
    <main className="main">
      {/* 뒤: 3D 디더링 씬 */}
      <div className="canvas-layer">
        <Scene />
      </div>

      {/* 앞: 로고 + 메뉴 */}
      <div className="overlay">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/title.svg" alt="Seungmi Yoon" className="title" />
      </div>
    </main>
  );
}
