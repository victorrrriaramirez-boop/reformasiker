export default function CoffeePack({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`coffee-pack ${compact ? "coffee-pack-compact" : ""}`} aria-hidden="true">
      <div className="pack-seal" />
      <div className="pack-face">
        <span className="pack-overline">SPECIALTY COFFEE</span>
        <strong>BRUMA</strong>
        <span className="pack-origin">Colombia · Huila</span>
        <div className="pack-mark"><i /><i /><i /></div>
        <span className="pack-notes">CACAO · CIRUELA · PANELA</span>
        <span className="pack-weight">250 g</span>
      </div>
    </div>
  );
}
