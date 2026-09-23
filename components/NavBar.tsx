"use client";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="brand" href="#top" aria-label="Bruma Coffee inicio">
          B
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#blend">El café</a>
          <a href="#story">Origen</a>
          <a href="#ritual">Ritual</a>
          <a href="#details">Notas</a>
        </nav>
        <a className="pill small" href="#buy">Probarlo</a>
      </div>
    </header>
  );
}
