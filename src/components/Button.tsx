import { FaArrowUp } from "react-icons/fa6";

interface ButtonProps {
  text: string;
  href?: string;
  className?: string;
  variant?: "light" | "dark";
}

export default function Button({
  text,
  href = "#",
  className = "",
  variant = "light",
}: ButtonProps) {
  const borderColor =
    variant === "dark" ? "border-white" : "border-black";

  const textColor =
    variant === "dark" ? "text-white" : "text-black";

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 ${className}`}
    >
      <div
        className={`border ${borderColor} px-6 py-2 overflow-hidden relative`}
      >
        <span className="absolute inset-0 bg-[#ed3238] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

        <span
          className={`relative z-10 tracking-wide transition-colors duration-500 group-hover:text-white ${textColor}`}
        >
          {text}
        </span>
      </div>

      <div
        className={`border ${borderColor} p-3 overflow-hidden relative`}
      >
        <span className="absolute inset-0 bg-[#ed3238] scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

        <FaArrowUp
          className={`relative z-10 rotate-45 transition-all duration-500 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 ${textColor}`}
        />
      </div>
    </a>
  );
}