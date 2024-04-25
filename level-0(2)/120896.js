// 문제 설명
// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

// 제한사항
// 0 < s의 길이 < 1,000
// s는 소문자로만 이루어져 있습니다.

function solution(s) {
  const frequency = {};
  let result = '';
  for (let char of s) {
    if (frequency[char]) {
      frequency[char]++;
    } else {
      frequency[char] = 1;
    }
  }

  for (let char of s) {
    if (frequency[char] === 1) {
      result += char;
    }
  }

  return result.split('').sort().join('');
}
