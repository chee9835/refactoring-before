// 예제 1
function getTotalOutstanding() {
  return customer.invoices.reduce((total, each) => each.amount + total, 0);
}

function sendBill() {
  // send bill
}

// 예제 2
export function alertForMiscreant(people, alarm) {
  const miscreant = findMiscreant(people);
  setOffAlarms(alarm, miscreant);
}

function findMiscreant(people) {
  const miscreant = ['Don', 'John'];
  return people.find(person => miscreant.includes(person));
}

function setOffAlarms(alarm, p) {
  alarm.setOff('Found Miscreant ' + p);
}

console.log(findMiscreant(['John', 'Don']));
