interface NavigationButtonsProps {
  onBack: () => void;
  onContinue: () => void;
  continueLabel?: string;
  backLabel?: string;
  showBack?: boolean;
  continueDisabled?: boolean;
}

export default function NavigationButtons({
  onBack,
  onContinue,
  continueLabel = "Continue",
  backLabel = "Back",
  showBack = true,
  continueDisabled = false,
}: NavigationButtonsProps) {
  return (
    <div className="flex gap-4 flex-wrap">
      {showBack && (
        <button
          onClick={onBack}
          className="flex-1 min-w-[140px] h-[49px] rounded-[38px] font-medium text-sm transition-colors"
          style={{
            border: "2px solid #D9E0E6",
            color: "#0054FD",
            fontFamily: "Rubik, sans-serif",
          }}
        >
          {backLabel}
        </button>
      )}
      <button
        onClick={onContinue}
        disabled={continueDisabled}
        className="flex-1 min-w-[140px] h-[49px] rounded-[38px] font-medium text-sm text-white transition-opacity hover:opacity-90"
        style={{
          backgroundColor: "#0054FD",
          fontFamily: "Rubik, sans-serif",
          opacity: continueDisabled ? 0.6 : 1,
          cursor: continueDisabled ? "not-allowed" : "pointer",
        }}
      >
        {continueLabel}
      </button>
    </div>
  );
}
