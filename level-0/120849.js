// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

// function solution(my_string) {
//   let array = [...my_string];
//   let result = [];
//   for (let i = 0; i < array.length; i++) {
//     if (
//       array[i] !== 'a' &&
//       array[i] !== 'e' &&
//       array[i] !== 'i' &&
//       array[i] !== 'o' &&
//       array[i] !== 'u'
//     ) {
//       result.push(array[i]);
//     }
//   }
//   return result.join('');
// }
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, '');
}

console.log(solution('nice to meet you'));
