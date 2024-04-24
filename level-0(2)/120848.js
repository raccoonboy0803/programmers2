// i팩토리얼 (i!)은 1부터 i까지 정수의 곱을 의미합니다. 예를들어 5! = 5 * 4 * 3 * 2 * 1 = 120 입니다. 정수 n이 주어질 때 다음 조건을 만족하는 가장 큰 정수 i를 return 하도록 solution 함수를 완성해주세요.

// i! ≤ n
// 0 < n ≤ 3,628,800

function solution(n) {
  function factorial(num) {
    if (num < 0) return -1;
    else if (num === 0) return 1;
    else return num * factorial(num - 1);
  }
  let result = 0;
  for (let i = 1; i < 3628800; i++) {
    if (factorial(i) > n) {
      result = i - 1;
      break;
    } else if (factorial(i) === n) {
      result = i;
      break;
    }
  }
  return result;
}
