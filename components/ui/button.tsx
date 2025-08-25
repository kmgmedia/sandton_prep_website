
import React from "react";
import { ArrowRight } from "lucide-react";

interface ButtonProps {
  label: string;
  onClick?: () => void;
  showArrow?: boolean; // new prop
}

const Button: React.FC<ButtonProps> = ({ label, onClick, showArrow }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-2 px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg hover:bg-[#FFD43B] transition"
    >
      {label}
      {/* add arrows/icons here, if showArrow is true */}
      {showArrow && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default Button;
