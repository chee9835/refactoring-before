// 예제 1
const pricingPlan = retrievePricingPlan();
const chargePerUnit = pricingPlan.unit;
const order = retrieveOrder();
let charge;

// 예제 2
function someFunc() {
  const result =
    availableResources.length === 0
      ? createResource()
      : availableResources.pop();
  allocatedResources.push(result);
  return result;
}
