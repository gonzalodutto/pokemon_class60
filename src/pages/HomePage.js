import { useEffect, useState } from "react";
import axios from "axios";
import PokemonCar from "../components/PokemonCard";

const HomePage = () => {
  const [pokeList, setPokeList] = useState(null);
  const pokemonApi = "https://pokeapi.co/api/v2/pokemon?limit=151";

  useEffect(() => {
    async function getPokemons() {
      const pokeResponse = await axios.get(pokemonApi);
      setPokeList(pokeResponse.data.results);
    }
    getPokemons();
  }, []);

  return (
    <div>
      {pokeList ? (
        pokeList.map((pokeObj) => <PokemonCar name={pokeObj.name} />)
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HomePage;
