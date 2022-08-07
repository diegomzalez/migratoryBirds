/**
 * This function will compute the smallest largest sighting in a group of sightings
 * @param arr Sightings
 * @returns The smallest largest sighting
 */
export function migratoryBirds(arr: number[]): number {
  const dict = setTypesAndValues(arr);
  const smallestSighting = getTheSmallestLargestSighting(dict);
  return smallestSighting;
}

/**
 * This function will compute how many times one sighting type is repeated
 * @param arr Sighting types
 * @returns The Sightings and how many time each is repeated
 */
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

/**
 * This function will find which sighting is the smallest largest
 * @param dict The Sightings and how many time each is repeated
 * @returns The smallest largest sighting
 */
function getTheSmallestLargestSighting(dict: object): number {
  let smallestSightingType = 0;
  let smallestSightingMount = 0;
  for (const [key, value] of Object.entries(dict)) {
    const kN = Number(key);
    if (smallestSightingType === 0 || value > smallestSightingMount) {
      smallestSightingType = kN;
      smallestSightingMount = value;
      continue;
    }
    if (value === smallestSightingMount && kN < smallestSightingType) {
      smallestSightingType = kN;
    }
  }
  return smallestSightingType;
}
