// 1~100까지 up&down 게임

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
console.log(
  '1~100 중 랜덤 숫자 하나를 정하였습니다. 과연 당신이 맞출 수 있을까요?!'
);
const number = Math.floor(Math.random() * 100) + 1;
let count = 0;

rl.on('line', function (line) {
  console.log('숫자 입력:', line);
  if (number < Number(line)) {
    console.log('DOWN');
    count++;
  } else if (number > Number(line)) {
    console.log('UP');
    count++;
  } else {
    console.log(`입력횟수: ${count}`);
    console.log('CORRECT');
    rl.close();
  }
});
