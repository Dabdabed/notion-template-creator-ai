import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, { apiVersion: "2023-08-16" });

export async function createCheckoutSession(data: any) {
  // Stripe ile ödeme başlangıcı ve oturum
  // Detaylı mantık daha sonra eklenebilir.
  return stripe.checkout.sessions.create(data);
}