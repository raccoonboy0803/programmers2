// 정수 n이 매개변수로 주어질 때, n의 약수를 오름차순으로 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  let result = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      result.push(i);
      if (i * i !== n) {
        result.push(n / i);
      }
    }
  }
  return result.sort((a, b) => a - b);
}
