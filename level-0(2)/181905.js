// 문자열 my_string과 정수 s, e가 매개변수로 주어질 때, my_string에서 인덱스 s부터 인덱스 e까지를 뒤집은 문자열을 return 하는 solution 함수를 작성해 주세요.

// function solution(my_string, s, e) {
//   const firstString = my_string.slice(0, s);
//   const lastString = my_string.slice(e + 1, my_string.length);
//   console.log('last::', lastString);
//   const reverseString = my_string
//     .slice(s, e + 1)
//     .split('')
//     .reverse()
//     .join('');
//   return firstString + reverseString + lastString;
// }

function solution(my_string, s, e) {
  const arr = [...my_string];
  const reverseSection = arr.slice(s, e + 1).reverse();

  arr.splice(s, e - s + 1, ...reverseSection);
  return arr.join('');
}
