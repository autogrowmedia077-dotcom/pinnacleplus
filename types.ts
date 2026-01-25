export interface NicheData {
  id: string;
  label: string;
  ideas: string[];
  hooks: string[];
  captions: string[];
}

export interface PricingTier {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
  cta: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}