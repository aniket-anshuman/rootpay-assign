import { ReactNode } from "react";

interface RegistrationLayoutProps {
  children: ReactNode;
  illustrationSrc: string;
}

export default function RegistrationLayout({
  children,
  illustrationSrc,
}: RegistrationLayoutProps) {
  return (
    <div
      className="min-h-screen w-full flex"
      style={{ backgroundColor: "#F6F7F9", fontFamily: "Rubik, sans-serif" }}
    >
      {/* Left Panel */}
      <div className="hidden lg:flex flex-col justify-between w-[45%] xl:w-[47%] relative overflow-hidden px-10 xl:px-20 py-16">
        {/* Decorative background overlay */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/9052c2a6db992aa16393f47663036adba5312d9d?width=2880"
            alt=""
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        {/* Title section */}
        <div className="relative z-10">
          <p
            className="font-light text-2xl leading-8 mb-3"
            style={{ color: "#132C4A" }}
          >
            Let's get started
          </p>
          <h1
            className="font-bold text-5xl leading-tight mb-4"
            style={{ color: "#132C4A" }}
          >
            Create your account
          </h1>
          <p className="text-base font-normal" style={{ color: "#132C4A" }}>
            Follow the steps to create your account
          </p>
        </div>

        {/* Illustration */}
        <div className="relative z-10 mt-auto">
          <img
            src={illustrationSrc}
            alt="Registration illustration"
            className="w-full max-w-[600px] h-auto object-contain"
          />
        </div>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-8 lg:py-16">
        {/* Mobile title - visible on small screens */}
        <div className="lg:hidden w-full max-w-[708px] mb-6">
          <p
            className="font-light text-lg leading-7 mb-1"
            style={{ color: "#132C4A" }}
          >
            Let's get started
          </p>
          <h1
            className="font-bold text-3xl leading-tight"
            style={{ color: "#132C4A" }}
          >
            Create your account
          </h1>
          <p className="text-sm font-normal mt-2" style={{ color: "#132C4A" }}>
            Follow the steps to create your account
          </p>
        </div>

        {/* Form Card */}
        <div
          className="w-full max-w-[708px] rounded-2xl bg-white relative"
          style={{ boxShadow: "-16px 4px 35px 0 rgba(0, 0, 0, 0.03)" }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
