import React from "react";

interface PayUButtonProps {
  label: string;
  href: string;
}

export const PayUButton: React.FC<PayUButtonProps> = ({ label, href }) => {
  return (
    <a
      href={href}
      className="
        inline-flex items-center justify-center
        w-[150px] h-[38px]
        bg-[#1065b7]
        text-white text-xs font-extrabold
        rounded
        hover:bg-[#0d56a0]
        transition-colors
      "
    >
      {label}
    </a>
  );
};
