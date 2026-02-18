export interface PricingTier {
  name: string;
  price: string;
  originalPrice: string;
  features: string[];
  cta: string;
  payuLink: string;
  highlight?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
}
