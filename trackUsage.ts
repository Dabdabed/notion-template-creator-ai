export function trackUsage(userId: string, action: string) {
  // Kullanım, limiti ve audit süreçleri daha sonra eklenebilir.
  return { userId, action, used: true };
}