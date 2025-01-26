const getPokemonIdFromURL = (url) => {
    const auxArray = url.match(/\/(\d+)\/?$/);
    return auxArray ? auxArray[1] : null;
  };
  
console.log(getPokemonIdFromURL("https://pokeapi.co/api/v2/pokemon/12"));