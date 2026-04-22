"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCart } from "@/hooks/useCart";

const checkoutSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone must be at least 10 digits"),
  country: z.string().min(1, "Country is required"),
  address: z.string().min(5, "Address is required"),
  apartment: z.string().optional(),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  pinCode: z.string().regex(/^\d{6}$/, "PIN code must be 6 digits"),
  shippingMethod: z.string().optional(),
  paymentMethod: z.enum(["razorpay", "cod"], { message: "Select a payment method" }),
  billingAddress: z.enum(["same", "different"]).default("same"),
  newsOptIn: z.boolean().optional(),
});

type CheckoutFormData = z.infer<typeof checkoutSchema>;

export default function CheckoutPage() {
  const { items, totalAmount } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      paymentMethod: "razorpay",
      billingAddress: "same",
    },
  });

  const billingAddressType = watch("billingAddress");

  const onSubmit = async (data: CheckoutFormData) => {
    setIsSubmitting(true);
    try {
      console.log("Checkout data:", data);
      alert("Order submitted! (Check console for details)");
      // TODO: Call actual checkout API
    } finally {
      setIsSubmitting(false);
    }
  };

  const subtotal = totalAmount;
  const shipping = 0;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-bg">
      {/* Header */}
      <div className="bg-white border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="text-primary hover:underline text-sm font-semibold">
            ← As-Sunnah Store
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Contact */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="font-bold text-heading mb-4">Contact</h2>
                <input
                  {...register("email")}
                  type="email"
                  placeholder="Email"
                  className="w-full border border-border rounded-lg px-4 py-3 mb-3 text-heading focus:outline-none focus:border-primary"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
              </div>

              {/* Shipping Address */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="font-bold text-heading mb-4">Shipping address</h2>

                <div className="mb-4">
                  <select
                    {...register("country")}
                    className="w-full border border-border rounded-lg px-4 py-3 text-heading focus:outline-none focus:border-primary"
                  >
                    <option value="">Country/Region</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                  </select>
                  {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
                </div>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  <input
                    {...register("firstName")}
                    type="text"
                    placeholder="First name"
                    className="border border-border rounded-lg px-4 py-3 text-heading focus:outline-none focus:border-primary"
                  />
                  <input
                    {...register("lastName")}
                    type="text"
                    placeholder="Last name"
                    className="border border-border rounded-lg px-4 py-3 text-heading focus:outline-none focus:border-primary"
                  />
                </div>

                <input
                  {...register("address")}
                  type="text"
                  placeholder="Address"
                  className="w-full border border-border rounded-lg px-4 py-3 mb-3 text-heading focus:outline-none focus:border-primary"
                />

                <input
                  {...register("apartment")}
                  type="text"
                  placeholder="Apartment, suite, etc. (optional)"
                  className="w-full border border-border rounded-lg px-4 py-3 mb-4 text-heading focus:outline-none focus:border-primary"
                />

                <div className="grid grid-cols-3 gap-3 mb-4">
                  <input
                    {...register("city")}
                    type="text"
                    placeholder="City"
                    className="border border-border rounded-lg px-4 py-3 text-heading focus:outline-none focus:border-primary"
                  />
                  <select
                    {...register("state")}
                    className="border border-border rounded-lg px-4 py-3 text-heading focus:outline-none focus:border-primary"
                  >
                    <option value="">State</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Maharashtra">Maharashtra</option>
                    <option value="Karnataka">Karnataka</option>
                  </select>
                  <input
                    {...register("pinCode")}
                    type="text"
                    placeholder="PIN code"
                    className="border border-border rounded-lg px-4 py-3 text-heading focus:outline-none focus:border-primary"
                  />
                </div>

                <input
                  {...register("phone")}
                  type="tel"
                  placeholder="Phone"
                  className="w-full border border-border rounded-lg px-4 py-3 text-heading focus:outline-none focus:border-primary"
                />

                <label className="flex items-center gap-2 mt-4 cursor-pointer">
                  <input type="checkbox" className="w-4 h-4 border border-border rounded cursor-pointer" />
                  <span className="text-sm text-heading">Text me with news and offers</span>
                </label>
              </div>

              {/* Shipping Method */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="font-bold text-heading mb-4">Shipping method</h2>
                <div className="border border-border rounded-lg p-4 bg-surface text-center text-sm text-body">
                  Enter your shipping address to view available shipping methods.
                </div>
              </div>

              {/* Payment */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="font-bold text-heading mb-4">Payment</h2>
                <p className="text-xs text-body mb-3">All transactions are secure and encrypted.</p>

                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-surface">
                    <input type="radio" value="razorpay" {...register("paymentMethod")} className="w-4 h-4" />
                    <div>
                      <p className="font-semibold text-heading text-sm">Razorpay Secure (UPI, Cards, Int'l Cards, Wallets)</p>
                      <div className="flex gap-2 mt-1">
                        <span className="text-xs px-2 py-1 bg-white border border-border rounded">UPI</span>
                        <span className="text-xs px-2 py-1 bg-white border border-border rounded">Visa</span>
                        <span className="text-xs px-2 py-1 bg-white border border-border rounded">Mastercard</span>
                      </div>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-surface">
                    <input type="radio" value="cod" {...register("paymentMethod")} className="w-4 h-4" />
                    <p className="font-semibold text-heading text-sm">Cash on Delivery (COD)</p>
                  </label>
                </div>
              </div>

              {/* Billing Address */}
              <div className="bg-white rounded-lg p-6">
                <h2 className="font-bold text-heading mb-4">Billing address</h2>

                <label className="flex items-center gap-3 p-3 border border-primary rounded-lg cursor-pointer bg-[#fdf5e6] mb-3">
                  <input type="radio" value="same" {...register("billingAddress")} className="w-4 h-4" />
                  <span className="text-sm font-medium text-heading">Same as shipping address</span>
                </label>

                <label className="flex items-center gap-3 p-3 border border-border rounded-lg cursor-pointer hover:bg-surface">
                  <input type="radio" value="different" {...register("billingAddress")} className="w-4 h-4" />
                  <span className="text-sm font-medium text-heading">Use a different billing address</span>
                </label>

                {billingAddressType === "different" && (
                  <div className="mt-4 p-4 border border-border rounded-lg text-sm text-body">
                    Different billing address form would go here
                  </div>
                )}
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input {...register("newsOptIn")} type="checkbox" className="w-4 h-4 border border-border rounded cursor-pointer" />
                <span className="text-sm text-heading">Email me with news and offers</span>
              </label>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary hover:bg-[#8b5e24] disabled:opacity-50 text-white font-semibold py-3 px-4 rounded-lg transition-colors"
              >
                {isSubmitting ? "Processing..." : "Pay now"}
              </button>
            </form>

            {/* Footer Links */}
            <div className="mt-6 text-center space-x-4 text-xs text-primary">
              <Link href="/refund-policy" className="hover:underline">
                Refund policy
              </Link>
              <span>•</span>
              <Link href="/shipping" className="hover:underline">
                Shipping
              </Link>
              <span>•</span>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy policy
              </Link>
              <span>•</span>
              <Link href="/terms-of-service" className="hover:underline">
                Terms of service
              </Link>
              <span>•</span>
              <Link href="/contact" className="hover:underline">
                Contact
              </Link>
            </div>
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg p-6 sticky top-6">
              <h2 className="font-bold text-heading mb-4">Order summary</h2>

              {/* Products */}
              <div className="space-y-4 mb-6 pb-6 border-b border-border">
                {items.map((item, idx) => (
                  <div key={idx} className="flex gap-3">
                    <div className="relative w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 bg-surface">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                        sizes="48px"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-heading line-clamp-2">{item.name}</p>
                      <p className="text-xs text-body">Qty: {item.quantity}</p>
                    </div>
                    <p className="text-sm font-semibold text-heading">₹{(parseFloat(item.price.replace(/[^\d.-]/g, "")) * item.quantity).toFixed(2)}</p>
                  </div>
                ))}
              </div>

              {/* Discount */}
              <div className="mb-6 pb-6 border-b border-border">
                <input
                  type="text"
                  placeholder="Discount code"
                  className="w-full border border-border rounded-lg px-3 py-2 text-sm text-heading focus:outline-none focus:border-primary mb-2"
                />
                <button className="text-sm text-primary font-semibold">Apply</button>
              </div>

              {/* Totals */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-body">Subtotal</span>
                  <span className="text-heading">₹{subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-body">Shipping</span>
                  <span className="text-heading">₹{shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-body">Taxes (est.)</span>
                  <span className="text-heading">₹{tax.toFixed(2)}</span>
                </div>
              </div>

              {/* Grand Total */}
              <div className="border-t border-border pt-4">
                <div className="flex justify-between">
                  <span className="font-bold text-heading">Total</span>
                  <span className="text-xl font-bold text-primary">₹{total.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
