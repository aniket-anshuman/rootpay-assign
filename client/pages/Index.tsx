import { useState } from "react";
import RegistrationLayout from "@/components/registration/RegistrationLayout";
import AccountTypeStep from "@/components/registration/AccountTypeStep";
import MobileStep from "@/components/registration/MobileStep";
import OtpStep from "@/components/registration/OtpStep";
import NameStep from "@/components/registration/NameStep";
import PasswordStep from "@/components/registration/PasswordStep";
import SuccessModal from "@/components/registration/SuccessModal";

type Step = "account-type" | "mobile" | "otp" | "name" | "password" | "success";

const ILLUSTRATIONS: Record<Step, string> = {
  "account-type": "https://api.builder.io/api/v1/image/assets/TEMP/b9a31c313fc58cd5f29fd41d9060c015befe3c71?width=1200",
  mobile: "https://api.builder.io/api/v1/image/assets/TEMP/2e267973afd7fe972c13d30a223a710c986440bf?width=1200",
  otp: "https://api.builder.io/api/v1/image/assets/TEMP/b9a31c313fc58cd5f29fd41d9060c015befe3c71?width=1200",
  name: "https://api.builder.io/api/v1/image/assets/TEMP/b9a31c313fc58cd5f29fd41d9060c015befe3c71?width=1200",
  password: "https://api.builder.io/api/v1/image/assets/TEMP/436bc4aa450018a4f3fea875efe0e3f89b2f31e0?width=1200",
  success: "https://api.builder.io/api/v1/image/assets/TEMP/141d8c0e1c7eb3362cfc18c1e34c821c24b5ddb1?width=1200",
};

export default function Index() {
  const [step, setStep] = useState<Step>("account-type");
  const [accountType, setAccountType] = useState<"personal" | "business" | null>(null);
  const [mobile, setMobile] = useState("");
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [nameData, setNameData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const goBack = () => {
    const order: Step[] = ["account-type", "mobile", "otp", "name", "password"];
    const idx = order.indexOf(step as Step);
    if (idx > 0) setStep(order[idx - 1]);
  };

  const goNext = () => {
    const order: Step[] = ["account-type", "mobile", "otp", "name", "password", "success"];
    const idx = order.indexOf(step);
    if (idx < order.length - 1) setStep(order[idx + 1]);
  };

  const handleNameChange = (field: keyof typeof nameData, value: string) => {
    setNameData((prev) => ({ ...prev, [field]: value }));
  };

  const accountLabel =
    accountType === "personal" ? "Personal" : accountType === "business" ? "Business" : "";
  const fullName = [nameData.firstName, nameData.lastName].filter(Boolean).join(" ") || "—";

  return (
    <>
      <RegistrationLayout illustrationSrc={ILLUSTRATIONS[step]}>
        {step === "account-type" && (
          <AccountTypeStep
            selected={accountType}
            onSelect={setAccountType}
            onBack={goBack}
            onContinue={goNext}
          />
        )}

        {step === "mobile" && (
          <MobileStep
            mobile={mobile}
            onMobileChange={setMobile}
            onBack={goBack}
            onContinue={goNext}
          />
        )}

        {step === "otp" && (
          <OtpStep
            otp={otp}
            onOtpChange={setOtp}
            onBack={goBack}
            onContinue={goNext}
          />
        )}

        {step === "name" && (
          <NameStep
            data={nameData}
            onChange={handleNameChange}
            onBack={goBack}
            onContinue={goNext}
          />
        )}

        {step === "password" && (
          <PasswordStep
            password={password}
            confirmPassword={confirmPassword}
            onPasswordChange={setPassword}
            onConfirmChange={setConfirmPassword}
            onBack={goBack}
            onContinue={goNext}
          />
        )}

        {step === "success" && null}
      </RegistrationLayout>

      {step === "success" && (
        <SuccessModal
          summary={{
            type: accountLabel,
            name: fullName,
            email: nameData.email || "—",
            phone: mobile || nameData.phone || "—",
          }}
          onDashboard={() => {
            // Reset flow
            setStep("account-type");
            setAccountType(null);
            setMobile("");
            setOtp(["", "", "", "", "", ""]);
            setNameData({ firstName: "", lastName: "", email: "", phone: "" });
            setPassword("");
            setConfirmPassword("");
          }}
        />
      )}
    </>
  );
}
