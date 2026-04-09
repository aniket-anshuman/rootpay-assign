import { useState } from "react";
import ProgressBar from "./ProgressBar";
import NavigationButtons from "./NavigationButtons";

interface PasswordStepProps {
  password: string;
  confirmPassword: string;
  onPasswordChange: (val: string) => void;
  onConfirmChange: (val: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

function EyeOffIcon() {
  return (
    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 0.955078C5.80683 0.955078 1.6014 3.94113 0.0350939 8.38575C-0.011698 8.51935 -0.011698 8.66353 0.0350939 8.79714C1.6014 13.2417 5.80683 16.2278 10.5 16.2278C15.1932 16.2278 19.3986 13.2417 20.9649 8.79714C21.0117 8.66353 21.0117 8.51935 20.9649 8.38575C19.3986 3.94113 15.1931 0.955078 10.5 0.955078ZM10.5 14.9551C6.4407 14.9551 2.79215 12.4065 1.35209 8.59144C2.79215 4.77636 6.44066 2.22782 10.5 2.22782C14.5593 2.22782 18.2078 4.77636 19.6479 8.59144C18.2078 12.4065 14.5593 14.9551 10.5 14.9551Z" fill="#0054FD"/>
      <path d="M10.5079 4.77344C8.33659 4.77344 6.57031 6.48617 6.57031 8.59163C6.57031 10.6971 8.33659 12.4098 10.5079 12.4098C12.6792 12.4098 14.4455 10.6971 14.4455 8.59163C14.4455 6.48613 12.6792 4.77344 10.5079 4.77344ZM10.5079 11.1371C9.06012 11.1371 7.88285 9.99547 7.88285 8.59163C7.88285 7.18775 9.06015 6.04618 10.5079 6.04618C11.9557 6.04618 13.1329 7.18779 13.1329 8.59163C13.1329 9.99547 11.9556 11.1371 10.5079 11.1371Z" fill="#0054FD"/>
      <line x1="1.30668" y1="-0.353553" x2="18.4885" y2="16.8283" stroke="#0054FD"/>
    </svg>
  );
}

function EyeIcon() {
  return (
    <svg width="21" height="18" viewBox="0 0 21 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.5 0.955078C5.80683 0.955078 1.6014 3.94113 0.0350939 8.38575C-0.011698 8.51935 -0.011698 8.66353 0.0350939 8.79714C1.6014 13.2417 5.80683 16.2278 10.5 16.2278C15.1932 16.2278 19.3986 13.2417 20.9649 8.79714C21.0117 8.66353 21.0117 8.51935 20.9649 8.38575C19.3986 3.94113 15.1931 0.955078 10.5 0.955078ZM10.5 14.9551C6.4407 14.9551 2.79215 12.4065 1.35209 8.59144C2.79215 4.77636 6.44066 2.22782 10.5 2.22782C14.5593 2.22782 18.2078 4.77636 19.6479 8.59144C18.2078 12.4065 14.5593 14.9551 10.5 14.9551Z" fill="#0054FD"/>
      <path d="M10.5079 4.77344C8.33659 4.77344 6.57031 6.48617 6.57031 8.59163C6.57031 10.6971 8.33659 12.4098 10.5079 12.4098C12.6792 12.4098 14.4455 10.6971 14.4455 8.59163C14.4455 6.48613 12.6792 4.77344 10.5079 4.77344ZM10.5079 11.1371C9.06012 11.1371 7.88285 9.99547 7.88285 8.59163C7.88285 7.18775 9.06015 6.04618 10.5079 6.04618C11.9557 6.04618 13.1329 7.18779 13.1329 8.59163C13.1329 9.99547 11.9556 11.1371 10.5079 11.1371Z" fill="#0054FD"/>
    </svg>
  );
}

interface PasswordFieldProps {
  label: string;
  hint: string;
  value: string;
  onChange: (val: string) => void;
  show: boolean;
  onToggleShow: () => void;
}

function PasswordField({ label, hint, value, onChange, show, onToggleShow }: PasswordFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-base" style={{ color: "#8292A1", fontFamily: "Rubik, sans-serif" }}>
        {label}
      </label>
      <div
        className="relative w-full rounded-xl h-[76px] flex items-center px-4"
        style={{
          border: "1px solid #729CF0",
          background: "#FFF",
        }}
      >
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={`Enter ${label.toLowerCase()}`}
          className="flex-1 text-base outline-none bg-transparent"
          style={{
            color: value ? "#132C4A" : "#D9E0E6",
            fontFamily: "Rubik, sans-serif",
          }}
        />
        <button
          type="button"
          onClick={onToggleShow}
          className="ml-2 flex items-center justify-center"
        >
          {show ? <EyeIcon /> : <EyeOffIcon />}
        </button>
      </div>
      <p className="text-sm" style={{ color: "#8292A1" }}>
        {hint}
      </p>
    </div>
  );
}

export default function PasswordStep({
  password,
  confirmPassword,
  onPasswordChange,
  onConfirmChange,
  onBack,
  onContinue,
}: PasswordStepProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div>
      {/* Progress Bar */}
      <div className="px-8 lg:px-16 pt-6">
        <ProgressBar progress={100} />
      </div>

      <div className="px-8 lg:px-16 pb-10 pt-8">
        <h2
          className="text-xl lg:text-2xl font-medium leading-snug mb-8"
          style={{ color: "#132C4A", letterSpacing: "-0.356px" }}
        >
          Create Password for your account
        </h2>

        <div className="flex flex-col gap-6 mb-16">
          <PasswordField
            label="Enter new password"
            hint="Must be atleast 6 characters"
            value={password}
            onChange={onPasswordChange}
            show={showPassword}
            onToggleShow={() => setShowPassword((v) => !v)}
          />
          <PasswordField
            label="Confirm password"
            hint="Both passwords must match"
            value={confirmPassword}
            onChange={onConfirmChange}
            show={showConfirm}
            onToggleShow={() => setShowConfirm((v) => !v)}
          />
        </div>

        <NavigationButtons onBack={onBack} onContinue={onContinue} continueLabel="Submit" />
      </div>
    </div>
  );
}
