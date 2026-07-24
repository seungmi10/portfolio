import Link from "next/link";

export const Header = () => (
  <header className="header">
    <Link href="/" className="header-logo">
      <img src="/images/main.svg" alt="Seungmi Yoon" />
    </Link>
    <nav className="header-nav">
      <Link href="/projects">Project</Link>
      <Link href="/about">About</Link>
      <a
        href="https://en.wikipedia.org/wiki/West_Highland_White_Terrier"
        target="_blank"
        rel="noopener noreferrer"
      >
        Very Important URL
      </a>
    </nav>
  </header>
);
