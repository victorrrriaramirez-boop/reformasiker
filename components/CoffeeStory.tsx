"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useRef } from "react";
import CoffeePack from "./CoffeePack";

const chapters = [
  {
    step: "01 — Origen",
    title: "Nace a 1.800 metros.",
    text: "Café de altura cultivado en Huila, Colombia. Un origen pensado para una taza dulce, limpia y con mucha profundidad.",
  },
  {
    step: "02 — Tueste",
    title: "Calor, tiempo y precisión.",
    text: "Un tueste medio desarrolla notas de cacao, ciruela madura y panela sin ocultar la identidad del grano.",
  },
  {
    step: "03 — Molienda",
    title: "Cada receta empieza aquí.",
    text: "Ajusta la molienda al método: más fina para espresso, media para filtro y algo más gruesa para prensa francesa.",
  },
  {
    step: "04 — Taza",
    title: "El final de la historia es beberla.",
    text: "Una taza redonda y sedosa que funciona sola, con leche o como base de una receta de cafetería.",
  },
];

function Chapter({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const starts = [0, 0.22, 0.48, 0.74];
  const ends = [0.30, 0.56, 0.82, 1];
  const s = starts[index];
  const e = ends[index];
  const midA = Math.min(s + 0.08, e);
  const midB = Math.max(e - 0.08, s);
  const opacity = useTransform(progress, [s, midA, midB, e], [0, 1, 1, index === 3 ? 1 : 0]);
  const y = useTransform(progress, [s, midA, e], [52, 0, -36]);

  return (
    <motion.article className={`story-copy story-copy-${index + 1}`} style={{ opacity, y }}>
      <p className="story-step">{chapters[index].step}</p>
      <h2>{chapters[index].title}</h2>
      <p>{chapters[index].text}</p>
    </motion.article>
  );
}

export default function CoffeeStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // A lightly damped progress value keeps the scroll-linked motion fluid on
  // touch devices without making the story feel disconnected from the finger.
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 105,
    damping: 28,
    mass: 0.22,
  });

  const packRotate = useTransform(smoothProgress, [0, 0.35, 0.68, 1], [-10, 6, -4, 0]);
  const packScale = useTransform(smoothProgress, [0, 0.33, 0.7, 1], [0.9, 1.03, 0.96, 0.78]);
  const packY = useTransform(smoothProgress, [0, 0.4, 0.75, 1], [60, 0, -26, 18]);
  const glowScale = useTransform(smoothProgress, [0, 0.5, 1], [0.7, 1.1, 0.86]);
  const beanOneY = useTransform(smoothProgress, [0, 1], [120, -180]);
  const beanTwoY = useTransform(smoothProgress, [0, 1], [-80, 170]);
  const pour = useTransform(smoothProgress, [0.66, 0.9], [0, 1]);
  const cupOpacity = useTransform(smoothProgress, [0.72, 0.88], [0, 1]);
  const cupY = useTransform(smoothProgress, [0.72, 0.9], [70, 0]);

  return (
    <section className="coffee-story" id="story" ref={ref}>
      <div className="coffee-story-sticky">
        <div className="story-visual">
          <motion.div className="story-glow" style={{ scale: glowScale }} />
          <motion.div className="floating-bean bean-one" style={{ y: beanOneY, rotate: 24 }} />
          <motion.div className="floating-bean bean-two" style={{ y: beanTwoY, rotate: -36 }} />
          <motion.div className="story-pack" style={{ rotate: packRotate, scale: packScale, y: packY }}>
            <CoffeePack />
          </motion.div>
          <motion.div className="pour-line" style={{ scaleY: pour }} />
          <motion.div className="story-cup" style={{ opacity: cupOpacity, y: cupY }}>
            <div className="mini-cup"><span /></div>
          </motion.div>
        </div>

        <div className="story-copy-stack">
          {chapters.map((_, index) => (
            <Chapter key={index} index={index} progress={smoothProgress} />
          ))}
          <div className="story-progress" aria-hidden="true">
            <motion.span style={{ scaleX: scrollYProgress }} />
          </div>
        </div>
      </div>
    </section>
  );
}
