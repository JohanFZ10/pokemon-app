import { PokemonDetails } from "../models";

export const getPokemonDetails = (data: PokemonDetails ) => {
    return  {
        id: data.id,
        name: data.name,
        avatar: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${data.id}.png`,
        base_experience: data.base_experience,
        height: data.height,
        is_default: data.is_default,
        order: data.order,
        weight: data.weight,
        abilities: data.abilities,
      };
}