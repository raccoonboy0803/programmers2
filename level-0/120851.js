// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  return [...my_string]
    .filter((x) => parseInt(x))
    .map((val) => Number(val))
    .reduce((sum, value) => (sum += value), 0);
}
