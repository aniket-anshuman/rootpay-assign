import ProgressBar from "./ProgressBar";
import NavigationButtons from "./NavigationButtons";

interface NameData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

interface NameStepProps {
  data: NameData;
  onChange: (field: keyof NameData, value: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}

function InputField({ label, value, onChange, placeholder, type = "text", required }: InputFieldProps) {
  return (
    <div className="relative w-full">
      <div
        className="relative w-full rounded-xl h-[76px]"
        style={{
          border: value ? "1px solid #729CF0" : "1px solid #D9E0E6",
          background: "#FFF",
          boxShadow: "0 4px 8px 0 rgba(188, 203, 219, 0.30)",
        }}
      >
        <label
          className="absolute top-3 left-4 text-xs"
          style={{ color: "#8292A1" }}
        >
          {label}
          {required && <span style={{ color: "#FF7C52" }}>*</span>}
        </label>
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="absolute bottom-3 left-4 right-4 text-base outline-none bg-transparent w-[calc(100%-2rem)]"
          style={{
            color: "#132C4A",
            fontFamily: "Rubik, sans-serif",
          }}
        />
      </div>
    </div>
  );
}

export default function NameStep({ data, onChange, onBack, onContinue }: NameStepProps) {
  return (
    <div>
      {/* Progress Bar */}
      <div className="px-8 lg:px-16 pt-6">
        <ProgressBar progress={75} />
      </div>

      <div className="px-8 lg:px-16 pb-10 pt-8">
        <h2
          className="text-xl lg:text-2xl font-medium leading-snug mb-8"
          style={{ color: "#132C4A", letterSpacing: "-0.356px" }}
        >
          What is your name?
        </h2>

        <div className="flex flex-col gap-4 mb-16">
          <InputField
            label="First Name"
            value={data.firstName}
            onChange={(v) => onChange("firstName", v)}
            required
          />
          <InputField
            label="Last Name"
            value={data.lastName}
            onChange={(v) => onChange("lastName", v)}
            required
          />
          <InputField
            label="Email"
            type="email"
            value={data.email}
            onChange={(v) => onChange("email", v)}
            required
          />
          <InputField
            label="Phone"
            type="tel"
            value={data.phone}
            onChange={(v) => onChange("phone", v)}
            required
          />
        </div>

        <NavigationButtons onBack={onBack} onContinue={onContinue} />
      </div>
    </div>
  );
}
