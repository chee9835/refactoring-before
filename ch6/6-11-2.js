import fs from 'fs';

run(process.argv);

function run(args) {
  countOrders(parseCommand(args));
}

function parseCommand(args) {
  if (!args[2]) {
    throw new Error('파일 이름을 입력하세요');
  }

  const fileName = `./${args[2]}.json`;
  if (!fs.existsSync(fileName)) {
    throw new Error('파일이 존재하지 않습니다');
  }

  const countReadOnly = args.includes('-r');

  return { fileName, countReadOnly };
}

function countOrders({ fileName, countReadOnly }) {
  const rawData = fs.readFileSync(fileName);
  const orders = JSON.parse(rawData);
  const filtered = countReadOnly
    ? orders.filter(order => order.status === 'ready')
    : orders;
  console.log(filtered.length);
}
