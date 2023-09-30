export function printOwing(invoice) {
  printBanner();

  const outstanding = calculateOutstanding(invoice);

  const dueDate = calculateDueDate();

  printDetails({ invoice, outstanding, dueDate });
}

function printBanner() {
  console.log('***********************');
  console.log('**** Customer Owes ****');
  console.log('***********************');
}

function calculateOutstanding(invoice) {
  return invoice.orders.reduce((sum, order) => (sum += order.amount), 0);
}

function calculateDueDate() {
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails({ invoice, outstanding, dueDate }) {
  console.log(`name: ${invoice.customer}`);
  console.log(`amount: ${outstanding}`);
  console.log(`due: ${dueDate.toLocaleDateString()}`);
}

const invoice = {
  orders: [{ amount: 2 }, { amount: 5 }],
  customer: '엘리'
};
printOwing(invoice);
