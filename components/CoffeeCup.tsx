export default function CoffeeCup() {
  return (
    <div className="cup-wrap" aria-hidden="true">
      <div className="cup-steam steam-a" />
      <div className="cup-steam steam-b" />
      <div className="cup">
        <div className="cup-coffee"><span className="latte-line" /></div>
        <div className="cup-logo">B</div>
      </div>
      <div className="saucer" />
    </div>
  );
}
