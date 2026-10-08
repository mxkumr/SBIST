type CurtainRevealProps = {
  open: boolean;
};

export function CurtainReveal({ open }: CurtainRevealProps) {
  return (
    <div
      className={`launch-curtains${open ? " launch-curtains--open" : ""}`}
      aria-hidden
    >
      <div className="launch-valance" />
      <div className="launch-curtain launch-curtain--left" />
      <div className="launch-curtain launch-curtain--right" />
    </div>
  );
}
