interface AccountSummary {
  type: string;
  name: string;
  email: string;
  phone: string;
}

interface SuccessModalProps {
  summary: AccountSummary;
  onDashboard: () => void;
}

function CircleCheckIcon() {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="28" cy="28" r="27" stroke="#4B59D5" strokeWidth="2" fill="none"/>
      <path d="M18 28L24 34L38 20" stroke="#4B59D5" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ShieldCheckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 3L5 6V11C5 16.55 8.84 21.74 12 23C15.16 21.74 19 16.55 19 11V6L12 3Z"
        stroke="#047647"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 12.5L11 14.5L15.5 10"
        stroke="#047647"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between items-center py-1">
      <span className="text-sm" style={{ color: "#8292A1", fontFamily: "Rubik, sans-serif" }}>
        {label}
      </span>
      <span className="text-sm font-medium" style={{ color: "#132C4A", fontFamily: "Rubik, sans-serif" }}>
        {value}
      </span>
    </div>
  );
}

export default function SuccessModal({ summary, onDashboard }: SuccessModalProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 px-4"
      style={{ backgroundColor: "rgba(48, 48, 48, 0.7)" }}
    >
      <div
        className="w-full max-w-[479px] max-h-[493px] rounded-2xl bg-white px-6 py-[35px] flex flex-col items-center gap-8"
      >
        <div className="flex flex-col items-center gap-2 max-h-[114px]">
          <CircleCheckIcon />
          <div className="flex flex-col items-center gap-2 mt-2">
            <h2
              className="text-2xl font-semibold text-center"
              style={{ color: "#3F3E3F", fontFamily: "Open Sans, sans-serif" }}
            >
              You're all set!
            </h2>
            <p
              className="text-sm text-center"
              style={{ color: "#8292A1", fontFamily: "Rubik, sans-serif" }}
            >
              Here&apos;s a quick summary of your account details
            </p>
          </div>
        </div>

        <div
          className="w-full rounded-xl p-6 flex flex-col gap-2 max-h-[164px]"
          style={{ background: "#F6F7F9" }}
        >
          <SummaryRow label="Account Type" value={summary.type} />
          <SummaryRow label="Name" value={summary.name} />
          <SummaryRow label="Email" value={summary.email} />
          <SummaryRow label="Phone" value={summary.phone} />
        </div>

        <div className="w-full rounded-xl p-2 flex items-center gap-3" style={{ background: "#F0FDF4" }}>
          <ShieldCheckIcon />
          <p className="text-sm font-medium" style={{ color: "#047647", fontFamily: "Rubik, sans-serif" }}>
            Your account is secured with bank-grade security
          </p>
        </div>

        <button
          onClick={onDashboard}
          className="w-[250px] h-[49px] rounded-[38px] font-medium text-sm text-white transition-opacity hover:opacity-90 p-4"
          style={{
            backgroundColor: "#0054FD",
            fontFamily: "Rubik, sans-serif",
          }}
        >
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
