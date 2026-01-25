import React from "react";
import { PayUButton } from "@/components/PayUButton";

export const PricingButtons: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <PayUButton
        label="Buy Now for 399"
        href="https://u.payu.in/BrUiQYLkFlAq"
      />

      <PayUButton
        label="Pay Now 999"
        href="https://u.payu.in/HJh89xerzBHD"
      />

      <PayUButton
        label="Pay Now 1999"
        href="https://u.payu.in/HJh89xerzBHD"
      />
    </div>
  );
};
