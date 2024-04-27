// 문제 설명
// 알파벳 대소문자로만 이루어진 문자열 my_string이 주어질 때, my_string에서 'A'의 개수, my_string에서 'B'의 개수,..., my_string에서 'Z'의 개수, my_string에서 'a'의 개수, my_string에서 'b'의 개수,..., my_string에서 'z'의 개수를 순서대로 담은 길이 52의 정수 배열을 return 하는 solution 함수를 작성해 주세요.

// 제한사항
// 1 ≤ my_string의 길이 ≤ 1,000

function solution(my_string) {
  const LowerAlphabet = Array(26)
    .fill()
    .map((_, i) => String.fromCharCode(i + 97));
  const UpperAlphabet = Array(26)
    .fill()
    .map((_, i) => String.fromCharCode(i + 65));
  let result = Array(52).fill(0);
  my_string.split('').map((v) => {
    if (UpperAlphabet.includes(v)) {
      result[UpperAlphabet.indexOf(v)] += 1;
    } else {
      result[LowerAlphabet.indexOf(v) + 26] += 1;
    }
  });
  return result;
}
