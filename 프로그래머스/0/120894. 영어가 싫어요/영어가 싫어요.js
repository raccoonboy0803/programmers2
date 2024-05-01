function solution(numbers) {
  const stringNumber = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  let result = numbers;
  for (let i = 0; i < stringNumber.length; i++) {
    result = result.split(stringNumber[i]).join(i);
  }
  return parseInt(result);
}