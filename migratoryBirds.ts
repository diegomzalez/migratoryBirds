export function migratoryBirds(arr: number[]): number {
  let dict: { [nameOfType: number]: number } = {};
  let smallestType = 0;
  let moreRepeated: number[] = [];
  for (const type of arr) {
    if (type in dict) {
      dict[type]++;
    } else {
      dict[type] = 1;
    }
  }
  console.log(dict);
  return 0;
}
