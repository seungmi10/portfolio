"use client";

import { useState } from "react";

const IMAGES = [
  "/images/about1.jpg",
  "/images/about2.jpg",
  "/images/about3.jpg",
];

export default function AboutPage() {
  const [idx, setIdx] = useState(0);

  return (
    <main className="about">
      <div className="about-grid">
        <p className="about-en">
          Designer based in Seoul. I design interfaces,
          <br />
          make graphics, shape brand language,
          <br />
          and build it all in code. Wherever I land,
          <br />I make a place that fits the ground.
        </p>

        <div className="about-side">
          <p className="about-ko">
            서울을 기반으로 활동하는 디자이너입니다.
            <br />
            화면을 설계하고, 그래픽을 만들고, 브랜드의 언어를 정하고,
            <br />
            그것을 직접 코드로 옮깁니다.
            <br />
            어디에 놓이든 그곳의 형태에 맞는 자리를 만듭니다.
          </p>

          <ul className="about-links">
            <li>
              <a href="mailto:seungmi.y10@gmail.com">
                seungmi.y10@gmail.com
                <i className="arrow" />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/nitratekiss"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram
                <i className="arrow" />
              </a>
            </li>
          </ul>
        </div>

        <div
          className="about-photo"
          onMouseEnter={() => setIdx((p) => (p + 1) % IMAGES.length)}
        >
          {IMAGES.map((src, i) => (
            <img
              key={src}
              src={src}
              alt=""
              style={{ opacity: i === idx ? 1 : 0 }}
            />
          ))}
        </div>
      </div>

      <div className="about-overlay">
        <div className="about-title" />
      </div>

      <div className="about-moka" />
    </main>
  );
}
