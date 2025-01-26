export const getPokemonIdFromURL = (url: string) => {
  if (url) {
    const auxArray = url.match(/\/(\d+)\/?$/);
    return auxArray ? auxArray[1] : null;
  }
  return null;
};
