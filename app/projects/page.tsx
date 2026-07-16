'use client';

import { useState } from 'react';
import Link from 'next/link';
import { projects, categories } from '@/data/projects';

export default function ProjectsPage() {
  const [active, setActive] = useState('all');

  const filtered =
    active === 'all' ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="page">
      <header className="page-header">
        <h1 className="page-title">Projects</h1>
        <Link href="/" className="back-link">
          ← Back
        </Link>
      </header>

      <div className="filters">
        {categories.map((c) => (
          <button
            key={c.id}
            className={`filter-btn ${active === c.id ? 'active' : ''}`}
            onClick={() => setActive(c.id)}
          >
            {c.label}
          </button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((p) => (
          <Link href={`/projects/${p.slug}`} key={p.slug} className="card">
            <div className="card-thumb">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={p.thumbnail} alt={p.title} />
            </div>
            <div className="card-title">{p.title}</div>
            <div className="card-meta">
              {p.category} · {p.year}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
