import { MoonIcon, Sun } from "lucide-react";

function ThemeToggleButton({ checked, onChange }) {
  return (
    <div
      onClick={() => onChange(!checked)}
      className={`relative w-20 h-10 flex items-center rounded-full cursor-pointer transition-colors duration-700 ${
        checked ? "bg-[#021828]" : "bg-[#E1EEF7]"
      }`}
    >
      {/* Moon on left */}
      <div
        className={`flex-1 flex justify-center ${
          checked ? " text-yellow-500" : "text-[#0A74B9]"
        }`}
      >
        <MoonIcon size={18} />
      </div>

      {/* Sun on right */}
      <div
        className={`flex-1 flex justify-center ${
          !checked ? " text-yellow-500" : "text-[#0A74B9]"
        }`}
      >
        <Sun size={18} />
      </div>

      {/* Knob */}
      <div
        className={`absolute w-8 h-8 rounded-full shadow-md flex items-center justify-center transform transition-transform duration-700 ${
          checked
            ? "translate-x-[2px] bg-[#0A74B9] text-yellow-500"
            : "translate-x-[42px] bg-[#0A74B9] text-yellow-300"
        }`}
      >
        {checked ? (
          <MoonIcon size={18} fill={checked ? "currentColor" : "transparent"} />
        ) : (
          <Sun size={18} fill={checked ? "transparent" : "currentColor"} />
        )}
      </div>
    </div>
  );
}

export default ThemeToggleButton;
