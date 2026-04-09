import NavigationButtons from "./NavigationButtons";

interface AccountTypeStepProps {
  selected: "personal" | "business" | null;
  onSelect: (type: "personal" | "business") => void;
  onBack: () => void;
  onContinue: () => void;
}

function PersonalIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BusinessIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="7" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function CheckCircle() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="14" cy="14" r="14" fill="#0054FD"/>
      <path d="M19.8333 9.33334L11.5 18.6667L8.16663 14.9333" stroke="white" strokeWidth="1.52" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function AccountTypeStep({
  selected,
  onSelect,
  onBack,
  onContinue,
}: AccountTypeStepProps) {
  return (
    <div className="p-8 lg:p-16">
      <h2
        className="text-xl lg:text-2xl font-medium leading-snug mb-8"
        style={{ color: "#132C4A", letterSpacing: "-0.356px" }}
      >
        To join us tell us{" "}
        <span className="font-medium">what type of account </span>
        you are opening
      </h2>

      <div className="flex flex-col gap-4 mb-16">
        {/* Personal Option */}
        <button
          onClick={() => onSelect("personal")}
          className="w-full h-[76px] rounded-2xl flex items-center px-8 transition-all text-left relative"
          style={{
            border: selected === "personal" ? "2px solid #0054FD" : "1px solid #D9E0E6",
            background: "#FFF",
            boxShadow: selected === "personal"
              ? "0 4px 8px 0 rgba(0, 84, 253, 0.15)"
              : "0 4px 8px 0 rgba(188, 203, 219, 0.30)",
          }}
        >
          <span
            className="flex items-center gap-6"
            style={{ color: selected === "personal" ? "#0054FD" : "#132C4A" }}
          >
            <PersonalIcon />
            <span
              className="font-medium text-base"
              style={{ color: selected === "personal" ? "#0054FD" : "#132C4A" }}
            >
              Personal
            </span>
          </span>
          {selected === "personal" && (
            <span className="absolute right-8">
              <CheckCircle />
            </span>
          )}
        </button>

        {/* Business Option */}
        <button
          onClick={() => onSelect("business")}
          className="w-full h-[76px] rounded-2xl flex items-center px-8 transition-all text-left relative"
          style={{
            border: selected === "business" ? "2px solid #0054FD" : "1px solid #D9E0E6",
            background: "#FFF",
            boxShadow: selected === "business"
              ? "0 4px 8px 0 rgba(0, 84, 253, 0.15)"
              : "0 4px 8px 0 rgba(188, 203, 219, 0.30)",
          }}
        >
          <span
            className="flex items-center gap-6"
            style={{ color: selected === "business" ? "#0054FD" : "#132C4A" }}
          >
            <BusinessIcon />
            <span
              className="font-medium text-base"
              style={{ color: selected === "business" ? "#0054FD" : "#132C4A" }}
            >
              Business
            </span>
          </span>
          {selected === "business" && (
            <span className="absolute right-8">
              <CheckCircle />
            </span>
          )}
        </button>
      </div>

      <NavigationButtons
        onBack={onBack}
        onContinue={onContinue}
        showBack={true}
      />
    </div>
  );
}
