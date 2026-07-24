// ============================================================
//  사이트 전역 설정
//  색상, 연락처, 3D 모델 설정을 여기서 바꿉니다.
// ============================================================

export const site = {
  name: "Seungmi Yoon",
  description: "Portfolio of Seungmi Yoon — UX/UI Designer",

  // ---- 색상 ----
  bgColor: "#F3EFEB", // 배경색
  accentColor: "#F3174E", // 로고 빨강
  textColor: "#252525", // 본문 텍스트

  // ---- 연락처 ----
  email: "seungmi.y10@gmail.com",
  instagram: "https://instagram.com/nitratekiss",
};

// ---- 3D 씬 설정 ----
export const scene = {
  modelPath: "/models/tent-opt.glb",

  // 모델 위치·크기 (화면 보면서 숫자 조절)
  modelScale: 0.8,
  modelPosition: [0, 0, 0] as [number, number, number],
  modelRotation: [0, -0.3, 0] as [number, number, number],

  // 카메라
  cameraPosition: [0, 0, 8] as [number, number, number],
  cameraFov: 45,

  // ---- 디더링 효과 ----
  dithering: {
    gridSize: 4, // 점 크기 (1~20) — 클수록 거칠어짐
    pixelSizeRatio: 1, // 픽셀화 강도 (1~10)
    grayscaleOnly: true, // 흑백 여부
  },

  // ---- 조명 ----
  envIntensity: 0.3,
  highlightColor: "#066aff",

  // ---- 인터랙션 ----
  autoRotate: true, // 자동 회전
  autoRotateSpeed: 0.5,
  floatEnabled: true, // 둥둥 떠다니는 효과
};
