export function priceOrder(product, quantity, shippingMethod) {
  const basePrice = product.basePrice * quantity;
  const discount = calculateDiscountedPrice(product, quantity);
  const shippingCost =
    quantity * calculateShippingPerCase(basePrice, shippingMethod);
  return basePrice - discount + shippingCost;
}

function calculateDiscountedPrice(product, quantity) {
  Math.max(quantity - product.discountThreshold, 0) *
    product.basePrice *
    product.discountRate;
}

function calculateShippingPerCase(basePrice, shippingMethod) {
  return basePrice > shippingMethod.discountThreshold
    ? shippingMethod.discountedFee
    : shippingMethod.feePerCase;
}

// 사용 예:
const product = {
  basePrice: 10,
  discountRate: 0.1,
  discountThreshold: 10,
};

const shippingMethod = {
  discountThreshold: 20,
  feePerCase: 5,
  discountedFee: 3,
};

const price = priceOrder(product, 5, shippingMethod);
console.log(price);
