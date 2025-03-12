import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/rickAndMortyService";

export function useCharacters() {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadCharacters() {
            try {
                const data = await fetchCharacters();
                setCharacters(data.results);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        }
        loadCharacters();
    }, []);

    return { characters, loading, error };
}
