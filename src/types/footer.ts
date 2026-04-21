export interface IFooterLink {
  label: string;
  href: string;
}

export interface IFooterColumn {
  heading: string;
  links: IFooterLink[];
}

export interface ISocialLink {
  label: string;
  href: string;
  platform: "facebook" | "instagram" | "youtube" | "pinterest" | "whatsapp";
}

export interface ITrustBadge {
  img: string;
  title: string;
  text: string;
}

export interface IPaymentMethod {
  name: string;
  src: string;
}

export interface IFooterContact {
  phone: string;
  email: string;
  address: string;
}

export interface IFooterAbout {
  tagline: string;
  quote: string;
}

export interface IFooterData {
  about: IFooterAbout;
  columns: IFooterColumn[];
  locateUs: string[];
  contact: IFooterContact;
  social: ISocialLink[];
  paymentMethods: IPaymentMethod[];
  trustBadges: ITrustBadge[];
  newsletter: {
    heading: string;
    placeholder: string;
  };
  copyright: string;
}
