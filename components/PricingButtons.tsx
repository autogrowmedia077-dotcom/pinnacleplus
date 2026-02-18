import React from "react";
import { PayUButton } from "@/components/PayUButton";

export const PricingButtons: React.FC = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <PayUButton
        label="Buy Now for 399"
        href="https://payments.cashfree.com/forms/pinnaclepluspro"
      />

      <PayUButton
        label="Pay Now 999"
        href="https://payments.cashfree.com/forms/pinnaclepluspro"
      />

      <PayUButton
        label="Pay Now 1999"
        href="https://payments.cashfree.com/forms/pinnacleplusbusiness"
      />
    </div>
  );
};
