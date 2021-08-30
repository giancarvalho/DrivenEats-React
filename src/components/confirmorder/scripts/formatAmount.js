//only shows the amount if it is greater than 1
export default function formatAmount(amount) {
  return amount > 1 ? `(${amount}x)` : "";
}
