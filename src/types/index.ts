/* ─── Auth ────────────────────────────────────────────────────── */
export interface IUser {
  _id: string;
  name: string;
  email: string;
  role: "admin" | "user";
  hasShop: boolean;
  isActive: boolean;
}

export interface IAuthState {
  user: IUser | null;
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface ILoginPayload {
  email: string;
  password: string;
}

export interface IRegisterPayload {
  name: string;
  email: string;
  password: string;
}

/* ─── Category ────────────────────────────────────────────────── */
export interface ICategory {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  parent?: string | null;
  icon?: string;
  imageUrl?: string;
  isActive: boolean;
  createdAt: string;
}

/* ─── Product ─────────────────────────────────────────────────── */
export interface IProduct {
  _id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  offerPrice?: number;
  stock: number;
  weight?: number;
  category: ICategory | string;
  imageUrls: string[];
  videoUrl?: string;
  availableColors?: string[];
  keyFeatures?: string[];
  occasions?: string[];
  recipients?: string[];
  isPersonalizable?: boolean;
  averageRating: number;
  ratingCount: number;
  isActive: boolean;
  createdAt: string;
}

/* ─── Cart ────────────────────────────────────────────────────── */
export interface ICartItem {
  productId: string;
  name: string;
  price: number;
  offerPrice?: number;
  image: string;
  quantity: number;
  color?: string;
  personalizationNote?: string;
}

export interface ICartState {
  items: ICartItem[];
  totalAmount: number;
  deliveryCharge: number;
}

/* ─── Wishlist ────────────────────────────────────────────────── */
export interface IWishlistItem {
  productId: string;
  name: string;
  price: number;
  image: string;
}

export interface IWishlistState {
  items: IWishlistItem[];
}

/* ─── Order ───────────────────────────────────────────────────── */
export type OrderStatus = "Pending" | "Processing" | "Completed" | "Cancelled";
export type PaymentMethod = "Cash" | "Card" | "Online";
export type PaymentStatus = "Pending" | "Paid" | "Failed";

export interface IOrder {
  _id: string;
  user: string;
  products: {
    product: IProduct | string;
    quantity: number;
    unitPrice: number;
    color?: string;
    personalizationNote?: string;
  }[];
  totalAmount: number;
  discount: number;
  deliveryCharge: number;
  finalAmount: number;
  status: OrderStatus;
  shippingAddress: string;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  createdAt: string;
}

/* ─── API Response ────────────────────────────────────────────── */
export interface IApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface IPaginatedResponse<T> {
  success: boolean;
  message: string;
  data: {
    result: T[];
    meta: {
      page: number;
      limit: number;
      total: number;
      totalPage: number;
    };
  };
}
