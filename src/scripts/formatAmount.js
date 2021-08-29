export default function formatAmount(amount) {
  return amount > 1 ? `(${amount}x)` : "";
}
