export function migratoryBirds(arr: number[]): number {
  const dict = setTypesAndValues(arr);
  const smallestSighting = getTheSmallestSighting(dict);
  return smallestSighting;
}

function setTypesAndValues(arr: number[]): object {
  let dict: { [nameOfType: number]: number } = {};
  for (const type of arr) {
    if (type in dict) {
      dict[type]++;
    } else {
      dict[type] = 1;
    }
  }
  return dict;
}

function getTheSmallestSighting(dict: object): number {
  let smallestSightingType = 0;
  let smallestSightingMount = 0;
  for (const [key, value] of Object.entries(dict)) {
    const kN = Number(key);
    if (smallestSightingType === 0) {
      smallestSightingType = kN;
      smallestSightingMount = value;
      continue;
    }
    if (value > smallestSightingMount) {
      smallestSightingType = kN;
      smallestSightingMount = value;
      continue;
    }
    if (value === smallestSightingMount) {
      if (kN < smallestSightingType) {
        smallestSightingType = kN;
      }
    }
  }
  return smallestSightingType;
}
