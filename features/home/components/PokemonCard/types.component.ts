import { Pokemon } from "../../models";

export type Props = {
    name: string;
    url: string;
    isFavorite: boolean;
    onPokemonSelect: (url: string) => void;
    onFavoriteToggle: () => void;
}
