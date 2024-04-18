// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

// function solution(my_string, num1, num2) {
//   const firstValue = my_string[num1];
//   const secondValue = my_string[num2];

//   const array = my_string.split('');
//   array.map((a, index) => {
//     if (index === num1) {
//       array.splice(index, 1, secondValue);
//     } else if (index === num2) {
//       array.splice(index, 1, firstValue);
//     }
//   });
//   return array.join('');
// }

function solution(my_string, num1, num2) {
  const firstValue = my_string[num1];
  const secondValue = my_string[num2];

  return [...my_string]
    .map((val, index) => {
      if (index === num1) return secondValue;
      if (index === num2) return firstValue;
      return val; // 현재 index가 num1 or num2가 아니라면 원래값 반환
    })
    .join('');
}

console.log(solution('hello', 1, 2));
console.log(solution('I love you', 3, 6));
