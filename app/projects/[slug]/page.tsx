import Link from 'next/link';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';

// 정적 페이지 생성
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  return (
    <div className="page">
      <header className="page-header">
        <h1 className="page-title">{project.title}</h1>
        <Link href="/projects" className="back-link">
          ← Projects
        </Link>
      </header>

      <p className="detail-desc">{project.description}</p>

      {project.videoUrl && (
        <div className="video-wrap">
          <iframe
            src={project.videoUrl}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope"
            allowFullScreen
            title={project.title}
          />
        </div>
      )}

      <div className="detail-images">
        {project.images?.map((src, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={i} src={src} alt={`${project.title} ${i + 1}`} />
        ))}
      </div>

      {project.link && (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="ext-link"
        >
          Visit site ↗
        </a>
      )}
    </div>
  );
}
