import { create } from "zustand";  // Corregido: Usar import nombrado
import { getCharacters } from '../api/rickAndMortyService';

export const useCharacterStore = create((set) => ({
    characters: [],
    fetchCharacters: async () => {
        try {
            const data = await getCharacters();
            set({ characters: data.results });
        } catch (error) {
            console.error("Error fetching characters:", error);
        }
    },
}));