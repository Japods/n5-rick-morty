import React, { useEffect } from "react";
import { useCharacterStore } from "../store/charactersStore";
import CharacterCard from "n5-remote-commons/CardCharacter";

const CharacterList = () => {
  const { characters, fetchCharacters } = useCharacterStore();

  useEffect(() => {
    fetchCharacters();
  }, [fetchCharacters]);

  return (
    <div className="grid grid-cols-5 gap-4 ">
      {characters.map((character) => (
        <CharacterCard
          key={character.id}
          name={character.name}
          gender={character.gender}
          species={character.species}
          movie="Rick y Morty"
          link={character.url}
          image={character.image}
        />
      ))}
    </div>
  );
};

export default CharacterList;
