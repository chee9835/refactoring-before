function disabilityAmount(employee) {
  return isNotEligibleDisability(employee) ? 0 : 1;
}

function isNotEligibleDisability(employee) {
  return (
    employee.seniority < 2 ||
    employee.monthsDisabled > 12 ||
    employee.isPartTime
  );
}
