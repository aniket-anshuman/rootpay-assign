import { useRef } from "react";
import ProgressBar from "./ProgressBar";
import NavigationButtons from "./NavigationButtons";

interface OtpStepProps {
  otp: string[];
  onOtpChange: (otp: string[]) => void;
  onBack: () => void;
  onContinue: () => void;
}

export default function OtpStep({
  otp,
  onOtpChange,
  onBack,
  onContinue,
}: OtpStepProps) {
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (index: number, value: string) => {
    if (value.length > 1) value = value.slice(-1);
    if (!/^\d*$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    onOtpChange(newOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    const newOtp = [...otp];
    pasteData.split("").forEach((char, i) => {
      newOtp[i] = char;
    });
    onOtpChange(newOtp);
    const lastFilledIndex = Math.min(pasteData.length, 5);
    inputRefs.current[lastFilledIndex]?.focus();
  };

  return (
    <div>
      {/* Progress Bar */}
      <div className="px-8 lg:px-16 pt-6">
        <ProgressBar progress={50} />
      </div>

      <div className="px-8 lg:px-16 pb-10 pt-8">
        <h2
          className="text-xl lg:text-2xl font-medium leading-snug mb-4"
          style={{ color: "#132C4A", letterSpacing: "-0.356px" }}
        >
          OTP Verification
        </h2>

        <p className="text-xs mb-8" style={{ color: "#8292A1" }}>
          An OTP has been sent to your mobile number
        </p>

        {/* OTP Boxes */}
        <div className="flex gap-3 sm:gap-4 mb-4">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => { inputRefs.current[index] = el; }}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className="flex-1 max-w-[70px] h-[70px] rounded-xl text-center text-2xl font-medium outline-none transition-colors"
              style={{
                border: digit ? "1px solid #0054FD" : "1px solid #729CF0",
                color: "#132C4A",
                fontFamily: "Rubik, sans-serif",
              }}
            />
          ))}
        </div>

        {/* Resend */}
        <div className="flex justify-end mb-16">
          <p className="text-sm" style={{ color: "#132C4A" }}>
            Did not receive OTP?{" "}
            <button
              className="font-medium"
              style={{ color: "#0054FD" }}
            >
              Resend OTP
            </button>
          </p>
        </div>

        <NavigationButtons onBack={onBack} onContinue={onContinue} />
      </div>
    </div>
  );
}
