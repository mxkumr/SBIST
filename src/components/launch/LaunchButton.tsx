type LaunchButtonProps = {
  busy: boolean;
  disabled: boolean;
  onDeploy: () => void;
};

export function LaunchButton({ busy, disabled, onDeploy }: LaunchButtonProps) {
  return (
    <div className="launch-button-wrap">
      <button
        type="button"
        className={`launch-btn${busy ? " launch-btn--busy" : ""}`}
        onClick={onDeploy}
        disabled={disabled}
        aria-label={busy ? "Launching the SBIST website" : "Deploy and launch the SBIST website"}
        aria-busy={busy}
      >
        {busy ? "Launching..." : "Deploy"}
      </button>
    </div>
  );
}
