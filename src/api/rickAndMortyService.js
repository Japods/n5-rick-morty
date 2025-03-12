import { apiClient } from "./apiClient";

const BASE_URL = "https://rickandmortyapi.com/api";

export const getCharacters = async () => {
    return await apiClient(`${BASE_URL}/character`);
};