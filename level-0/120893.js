// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let result = [];
  my_string.split('').map((value, index) => {
    if (value === my_string[index].toUpperCase()) {
      result.push(my_string[index].toLowerCase());
    } else {
      result.push(my_string[index].toUpperCase());
    }
  });
  return result.join('');
}
