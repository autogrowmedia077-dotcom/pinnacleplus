export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  cta: string;
  payuLink: string;
  highlight?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
