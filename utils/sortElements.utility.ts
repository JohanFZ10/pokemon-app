export function sortElements(array: any[], ascendant: boolean) {
  return ascendant
    ? array.sort((a, b) => a.height - b.height)
    : array.sort((a, b) => b.height - a.height);
}
