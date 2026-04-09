interface ProgressBarProps {
  progress: number; // 0-100
}

export default function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div
      className="w-full h-[5px] rounded-xl relative overflow-hidden"
      style={{ border: "0.5px solid #0054FD" }}
    >
      <div
        className="h-full rounded-xl transition-all duration-500"
        style={{ width: `${progress}%`, backgroundColor: "#0054FD" }}
      />
    </div>
  );
}
