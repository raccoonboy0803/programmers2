function solution(dots) {
  let Xarr = [];
  let Yarr = [];
  dots.forEach((item) => {
    Xarr.push(item[0]);
    Yarr.push(item[1]);
  });
  const width = Math.max(...Xarr) - Math.min(...Xarr);
  const height = Math.max(...Yarr) - Math.min(...Yarr);

  return width * height;
}