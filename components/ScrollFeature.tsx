"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import PhoneMockup from "./PhoneMockup";

export default function ScrollFeature() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [-14, 14]);
  const scale = useTransform(scrollYProgress, [0, 0.55, 1], [0.88, 1.04, 0.95]);
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const copyY = useTransform(scrollYProgress, [0, 1], [80, -40]);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.35, 0.8, 0.45]);

  return (
    <section className="scroll-feature" ref={ref}>
      <div className="sticky-stage">
        <motion.div className="ambient" style={{ opacity: glow }} />
        <motion.div className="sticky-phone" style={{ rotate, scale, y }}>
          <PhoneMockup />
        </motion.div>
        <motion.div className="sticky-copy" style={{ y: copyY }}>
          <p className="eyebrow">Diseñado para destacar</p>
          <h2>Una sola pieza. Una presencia enorme.</h2>
          <p>
            Un ejemplo de sección sticky con animación progresiva. Sustituye el producto, los colores y el contenido por los de tu proyecto.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
