import NavBar from "@/components/NavBar";
import CoffeePack from "@/components/CoffeePack";
import CoffeeCup from "@/components/CoffeeCup";
import CoffeeStory from "@/components/CoffeeStory";
import Reveal from "@/components/Reveal";

const highlights = [
  {
    kicker: "Origen único",
    title: "Huila en cada sorbo.",
    text: "Una historia de altura, clima y suelo convertida en una taza dulce y equilibrada.",
    className: "coffee-card-origin",
  },
  {
    kicker: "Perfil",
    title: "Cacao. Ciruela. Panela.",
    text: "Tres notas fáciles de reconocer y una textura sedosa que permanece en boca.",
    className: "coffee-card-notes",
  },
  {
    kicker: "Tueste medio",
    title: "Desarrollado para ser versátil.",
    text: "Equilibrado para espresso, filtro y bebidas con leche, sin perder dulzor ni definición.",
    className: "coffee-card-roast",
  },
  {
    kicker: "Fresco",
    title: "Menos almacén. Más aroma.",
    text: "Una presentación ideal para comunicar fecha de tueste, lote y trazabilidad de forma clara.",
    className: "coffee-card-fresh",
  },
];

export default function Home() {
  return (
    <main id="top">
      <NavBar />

      <section className="hero section-pad">
        <div className="hero-copy">
          <p className="product-name">BRUMA · CAFÉ DE ESPECIALIDAD</p>
          <h1>El café también puede contar una historia.</h1>
          <p className="hero-sub">
            Una landing premium para cafeterías y marcas de café, diseñada para presentar un producto como una experiencia.
          </p>
          <div className="hero-actions">
            <a className="pill" href="#story">Descubrir el origen</a>
            <a className="text-link" href="#buy">Ver el café →</a>
          </div>
        </div>

        <div className="hero-product coffee-hero-product">
          <div className="hero-orbit orbit-a" />
          <div className="hero-orbit orbit-b" />
          <div className="hero-bean hero-bean-a" />
          <div className="hero-bean hero-bean-b" />
          <CoffeePack />
        </div>
      </section>

      <section className="intro-statement">
        <Reveal>
          <p className="eyebrow">De la finca a la barra</p>
          <h2>Una página que se recorre como se descubre un buen café.</h2>
        </Reveal>
      </section>

      <section className="highlights section-pad" id="blend">
        <div className="section-heading">
          <Reveal>
            <p className="eyebrow">La esencia</p>
            <h2>Cuatro razones para recordar esta taza.</h2>
          </Reveal>
        </div>

        <div className="highlight-grid">
          {highlights.map((item, index) => (
            <Reveal key={item.title} delay={index * 0.05}>
              <article className={`feature-card ${item.className}`}>
                <p className="card-kicker">{item.kicker}</p>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <div className="coffee-card-art" aria-hidden="true">
                  <span className="bean bean-a" />
                  <span className="bean bean-b" />
                  <span className="bean bean-c" />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <CoffeeStory />

      <section className="ritual section-pad" id="ritual">
        <div className="ritual-grid">
          <Reveal>
            <div className="cup-stage">
              <div className="ritual-halo" />
              <CoffeeCup />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="ritual-copy">
              <p className="eyebrow">El ritual</p>
              <h2>Una receta sencilla. Una taza con intención.</h2>
              <p>
                Usa este bloque para explicar la preparación recomendada o convertir el producto en una pequeña experiencia de marca.
              </p>
              <div className="recipe-list">
                <div><strong>18 g</strong><span>de café</span></div>
                <div><strong>36 g</strong><span>en taza</span></div>
                <div><strong>28 s</strong><span>de extracción</span></div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="tasting section-pad" id="details">
        <Reveal>
          <div className="section-heading light">
            <p className="eyebrow">Notas de cata</p>
            <h2>Lo que ocurre cuando baja la temperatura.</h2>
          </div>
        </Reveal>

        <div className="taste-grid">
          <Reveal>
            <article className="taste-card taste-cocoa">
              <span className="taste-number">01</span>
              <h3>Cacao</h3>
              <p>Base profunda y dulce.</p>
            </article>
          </Reveal>
          <Reveal delay={0.08}>
            <article className="taste-card taste-plum">
              <span className="taste-number">02</span>
              <h3>Ciruela</h3>
              <p>Fruta madura y jugosa.</p>
            </article>
          </Reveal>
          <Reveal delay={0.16}>
            <article className="taste-card taste-panela">
              <span className="taste-number">03</span>
              <h3>Panela</h3>
              <p>Dulzor largo y redondo.</p>
            </article>
          </Reveal>
        </div>
      </section>

      <section className="editorial section-pad">
        <div className="editorial-grid">
          <Reveal>
            <article className="editorial-large">
              <div className="editorial-beans" aria-hidden="true">
                <span /><span /><span /><span /><span />
              </div>
              <p className="eyebrow">Diseño adaptable</p>
              <h3>Convierte una ficha de producto en una experiencia de marca.</h3>
            </article>
          </Reveal>

          <div className="editorial-stack">
            <Reveal delay={0.08}>
              <article className="editorial-small editorial-cream">
                <CoffeePack compact />
                <h3>Producto siempre protagonista.</h3>
              </article>
            </Reveal>
            <Reveal delay={0.14}>
              <article className="editorial-small editorial-brown">
                <p className="eyebrow">Responsive</p>
                <h3>De móvil a escritorio sin perder el ritmo.</h3>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="buy section-pad" id="buy">
        <Reveal>
          <div className="buy-panel">
            <p className="eyebrow">Bruma · Colombia Huila</p>
            <h2>Una bolsa. Muchas mañanas mejores.</h2>
            <p>
              Este bloque final puede conectarse después con Shopify, WooCommerce, Stripe o cualquier sistema de pedido.
            </p>
            <div className="hero-actions centered">
              <a className="pill dark" href="#top">Volver al inicio ↑</a>
              <a className="text-link dark-link" href="#story">Repetir historia</a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <p>Bruma Coffee — demo original de producto para reutilizar como base de una web de cafetería.</p>
      </footer>
    </main>
  );
}
