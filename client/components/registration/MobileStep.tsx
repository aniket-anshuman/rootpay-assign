import { useState } from "react";
import ProgressBar from "./ProgressBar";
import NavigationButtons from "./NavigationButtons";

interface MobileStepProps {
  mobile: string;
  onMobileChange: (val: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

function ChevronDownIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M7.5 9.75L12 15L16.5 9.75" stroke="#8292A1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function MobileStep({
  mobile,
  onMobileChange,
  onBack,
  onContinue,
}: MobileStepProps) {
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const digitsOnlyMobile = mobile.replace(/\D/g, "");
  const mobileError =
    digitsOnlyMobile.length === 0
      ? "Mobile number is required"
      : digitsOnlyMobile.length !== 10
        ? "Mobile number must be exactly 10 digits"
        : "";

  const handleContinue = () => {
    setSubmitAttempted(true);
    if (!mobileError) {
      onContinue();
    }
  };

  return (
    <div>
      <div className="px-8 lg:px-16 pt-6">
        <ProgressBar progress={25} />
      </div>

      <div className="px-8 lg:px-16 pb-10 pt-8">
        <h2
          className="text-xl lg:text-2xl font-medium leading-snug mb-8"
          style={{ color: "#132C4A", letterSpacing: "-0.356px" }}
        >
          OTP Verification
        </h2>

        <p className="text-sm mb-6" style={{ color: "#8292A1" }}>
          Enter your mobile number to receive the OTP
        </p>

        <div className="mb-16">
          <div
            className="relative w-full rounded-xl"
            style={{ border: "1px solid #729CF0", background: "#FFF" }}
          >
            <label
              className="absolute top-3 left-4 text-xs font-normal"
              style={{ color: "#8292A1" }}
            >
              Mobile Number
              <span style={{ color: "#FF7C52" }}>*</span>
            </label>

            <div className="flex items-center h-[76px] px-4 pt-4">
              <button
                type="button"
                className="flex items-center gap-2 pr-4 border-r"
                style={{ borderColor: "#D9E0E6" }}
              >
                <span className="text-base">🇺🇸</span>
                <ChevronDownIcon />
              </button>

              <input
                type="tel"
                autoFocus
                value={mobile}
                onChange={(e) => onMobileChange(e.target.value.replace(/\D/g, "").slice(0, 10))}
                placeholder="Enter mobile number"
                className="flex-1 pl-4 text-base outline-none bg-transparent"
                style={{
                  color: "#132C4A",
                  fontFamily: "Rubik, sans-serif",
                }}
              />
            </div>
          </div>
          {submitAttempted && mobileError && (
            <p className="mt-2 text-sm" style={{ color: "#FF7C52" }}>
              {mobileError}
            </p>
          )}
        </div>

        <NavigationButtons
          onBack={onBack}
          onContinue={handleContinue}
        />
      </div>
    </div>
  );
}
