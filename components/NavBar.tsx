"use client";

import { useEffect, useState } from "react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav-shell ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner">
        <a className="brand" href="#top" aria-label="Nova home">
          N
        </a>
        <nav className="desktop-nav" aria-label="Principal">
          <a href="#highlights">Lo principal</a>
          <a href="#design">Diseño</a>
          <a href="#camera">Cámara</a>
          <a href="#performance">Rendimiento</a>
        </nav>
        <a className="pill small" href="#buy">Comprar</a>
      </div>
    </header>
  );
}
