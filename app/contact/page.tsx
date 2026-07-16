import Link from 'next/link';
import { site } from '@/data/site';

export default function ContactPage() {
  return (
    <div className="page">
      <header className="page-header">
        <h1 className="page-title">Contact</h1>
        <Link href="/" className="back-link">
          ← Back
        </Link>
      </header>

      <div className="contact-list">
        <a href={`mailto:${site.email}`}>{site.email}</a>
        <a href={site.instagram} target="_blank" rel="noopener noreferrer">
          Instagram ↗
        </a>
      </div>
    </div>
  );
}
