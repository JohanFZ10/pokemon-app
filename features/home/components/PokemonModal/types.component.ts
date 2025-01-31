import { PokemonDetails } from "../../models";

export type Props = {
    visible: boolean;
    modalData: PokemonDetails;
    onClose: () => void;
}
