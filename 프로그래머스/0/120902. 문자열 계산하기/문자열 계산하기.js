function solution(my_string) {
  const arr = my_string.split(' ');
  let result = parseInt(arr[0]);
  arr.map((v, i) => {
    if (v === '+') {
      result += parseInt(arr[i + 1]);
    } else if (v === '-') {
      result -= parseInt(arr[i + 1]);
    }
  });
  return result;
}