// 정수가 담긴 리스트 num_list가 주어질 때, 모든 원소들의 곱이 모든 원소들의 합의 제곱보다 작으면 1을 크면 0을 return하도록 solution 함수를 완성해주세요.

function solution(num_list) {
  const mulNum = num_list.reduce((mul, v) => (mul *= v), 1);
  const sumNum = num_list.reduce((sum, v) => (sum += v), 0) ** 2;
  return mulNum < sumNum ? 1 : 0;
}
