// ts-node test.ts

const intervals = [
  [4, 7],
  [1, 4],
];
// const res = intervals.sort((a: number[], b: number[]) => a[0] - b[0]);
const res = intervals.sort((a: number[], b: number[]) => {
  return a[0] - b[0];
});
console.log(res);
