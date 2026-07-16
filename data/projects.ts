// ============================================================
//  작업물 목록
//  새 프로젝트를 추가하려면 아래 배열에 { } 블록을 하나 더
//  복사해서 붙여넣고 내용만 바꾸면 됩니다.
// ============================================================

export type Project = {
  slug: string;          // URL 주소 (영문/숫자/하이픈만. 중복 금지)
  title: string;         // 프로젝트 제목
  category: string;      // 'graphic' | 'web' | 'video'  (자유롭게 추가 가능)
  year: string;          // 연도
  description: string;   // 설명
  thumbnail: string;     // 썸네일 이미지 → public/images/works/ 에 넣고 경로 적기
  images?: string[];     // 상세 이미지 여러 장 (선택)
  videoUrl?: string;     // 유튜브/비메오 embed 주소 (선택)
  link?: string;         // 실제 사이트 링크 (선택)
};

export const projects: Project[] = [
  {
    slug: "sample-graphic",
    title: "샘플 그래픽 프로젝트",
    category: "graphic",
    year: "2025",
    description:
      "여기에 프로젝트 설명을 적습니다. 이 항목은 예시이므로 실제 작업물로 교체하세요.",
    thumbnail: "/images/works/sample-1.jpg",
    images: ["/images/works/sample-1.jpg", "/images/works/sample-2.jpg"],
  },
  {
    slug: "sample-web",
    title: "샘플 웹사이트",
    category: "web",
    year: "2025",
    description: "웹사이트 작업물 예시입니다.",
    thumbnail: "/images/works/sample-3.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID",
    link: "https://example.com",
  },
];

// ---- 카테고리 필터 버튼 목록 ----
export const categories = [
  { id: "all", label: "All" },
  { id: "graphic", label: "Graphic" },
  { id: "web", label: "Web" },
];
