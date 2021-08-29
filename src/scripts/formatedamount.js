export default function formatedAmount(amount) {
  return amount > 1 ? `(${amount}x)` : "";
}
