import NavBar from "@/components/NavBar";
import PhoneMockup from "@/components/PhoneMockup";
import Reveal from "@/components/Reveal";
import ScrollFeature from "@/components/ScrollFeature";

const highlights = [
  {
    kicker: "Cámara",
    title: "Luz, detalle y profundidad.",
    text: "Un módulo visual pensado para presentar una característica clave con imagen protagonista y una frase muy breve.",
    className: "card-camera",
  },
  {
    kicker: "Autonomía",
    title: "Más horas. Menos interrupciones.",
    text: "Usa cifras grandes, contenido conciso y una jerarquía tipográfica que permita escanear la página de un vistazo.",
    className: "card-battery",
  },
  {
    kicker: "Materiales",
    title: "Precisión en cada borde.",
    text: "La estética premium se apoya en mucho aire, bordes suaves y un tratamiento editorial del producto.",
    className: "card-material",
  },
  {
    kicker: "Rendimiento",
    title: "Potencia sin ruido visual.",
    text: "Un bloque oscuro funciona bien para cambiar el ritmo y destacar especificaciones o tecnología.",
    className: "card-chip",
  },
];

export default function Home() {
  return (
    <main id="top">
      <NavBar />

      <section className="hero section-pad">
        <div className="hero-copy">
          <p className="product-name">Nova X Pro</p>
          <h1>Mucho más que Pro.</h1>
          <p className="hero-sub">
            Una plantilla visual premium para presentar tecnología, arquitectura, automoción o cualquier producto de alto valor.
          </p>
          <div className="hero-actions">
            <a className="pill" href="#highlights">Descubrir</a>
            <a className="text-link" href="#buy">Ver configuración →</a>
          </div>
        </div>
        <div className="hero-product">
          <div className="hero-halo" />
          <PhoneMockup />
        </div>
      </section>

      <section className="intro-statement">
        <Reveal>
          <p className="eyebrow">Nueva generación</p>
          <h2>Una landing que cuenta el producto como una historia.</h2>
        </Reveal>
      </section>

      <section className="highlights section-pad" id="highlights">
        <div className="section-heading">
          <Reveal>
            <p className="eyebrow">Lo principal</p>
            <h2>Todo lo importante, de un vistazo.</h2>
          </Reveal>
        </div>
        <div className="highlight-grid">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className={`feature-card ${item.className}`}>
                <p className="card-kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="feature-art" aria-hidden="true">
                  <span className="art-ring ring-a" />
                  <span className="art-ring ring-b" />
                  <span className="art-dot" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ScrollFeature />

      <section className="camera-zone section-pad" id="camera">
        <div className="section-heading light">
          <Reveal>
            <p className="eyebrow">Sistema visual</p>
            <h2>Acércate. Aléjate. Cambia el punto de vista.</h2>
          </Reveal>
        </div>
        <div className="camera-layout">
          <Reveal>
            <div className="lens-stage">
              <div className="lens lens-1"><span /></div>
              <div className="lens lens-2"><span /></div>
              <div className="lens lens-3"><span /></div>
            </div>
          </Reveal>
          <div className="camera-stats">
            <Reveal delay={0.08}>
              <div className="stat"><strong>48</strong><span>MP equivalentes de ejemplo</span></div>
            </Reveal>
            <Reveal delay={0.14}>
              <div className="stat"><strong>8×</strong><span>zoom óptico simulado</span></div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="stat"><strong>4K</strong><span>vídeo de demostración</span></div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="performance section-pad" id="performance">
        <div className="performance-grid">
          <Reveal>
            <div className="chip-visual">
              <div className="chip-core">NX</div>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="performance-copy">
              <p className="eyebrow">Rendimiento</p>
              <h2>Una sección técnica que sigue sintiéndose editorial.</h2>
              <p>
                Ideal para explicar procesadores, materiales, motores, sistemas constructivos o cualquier tecnología sin convertir la página en una ficha aburrida.
              </p>
              <div className="metric-row">
                <div><strong>+80%</strong><span>dato de ejemplo</span></div>
                <div><strong>2,5×</strong><span>dato de ejemplo</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="design-cards section-pad" id="design">
        <Reveal>
          <div className="section-heading">
            <p className="eyebrow">Más posibilidades</p>
            <h2>Bloques modulares para seguir contando la historia.</h2>
          </div>
        </Reveal>
        <div className="story-grid">
          <Reveal>
            <article className="story story-a">
              <p className="eyebrow">Detalle</p>
              <h3>Tipografía gigante y composición limpia.</h3>
            </article>
          </Reveal>
          <Reveal delay={0.1}>
            <article className="story story-b">
              <div className="mini-phone"><PhoneMockup compact /></div>
              <h3>Animaciones suaves, no decorativas.</h3>
            </article>
          </Reveal>
          <Reveal delay={0.2}>
            <article className="story story-c">
              <p className="eyebrow">Responsive</p>
              <h3>Funciona en móvil, tablet y escritorio.</h3>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="buy section-pad" id="buy">
        <Reveal>
          <div className="buy-panel">
            <p className="eyebrow">Listo para adaptar</p>
            <h2>Cambia el contenido. Mantén la experiencia.</h2>
            <p>
              Sustituye el nombre, colores, mockup y textos por tu proyecto y tendrás una base sólida para una landing premium.
            </p>
            <div className="hero-actions centered">
              <a className="pill dark" href="https://vercel.com/new" target="_blank" rel="noreferrer">Desplegar en Vercel</a>
              <a className="text-link dark-link" href="#top">Volver arriba ↑</a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <p>Demo de referencia visual. No contiene código, imágenes ni textos propietarios de Apple.</p>
      </footer>
    </main>
  );
}
