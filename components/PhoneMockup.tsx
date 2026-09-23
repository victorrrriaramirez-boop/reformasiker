export default function PhoneMockup({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`phone-wrap ${compact ? "compact" : ""}`} aria-hidden="true">
      <div className="phone-shadow" />
      <div className="phone-body">
        <div className="camera-island">
          <span />
          <span />
          <span />
          <i />
        </div>
        <div className="logo-mark">N</div>
      </div>
    </div>
  );
}
