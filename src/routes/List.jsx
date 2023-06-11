import { useEffect } from "react";
import useFetchPokemonOnScroll from "../hooks/useFetchPokemonOnScroll";
import Card from "../components/PokemonCard";

const List = () => {
  const { fetchPokemon, handleScroll, pokemonData, isLoading, error } =
    useFetchPokemonOnScroll();

  useEffect(() => {
    fetchPokemon();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="list-container">
      <h2>Pokémon list</h2>
      {isLoading && <h2>Loading...</h2>}
      {error && <h2>Error!</h2>}
      <div className="list">
        {pokemonData.length !== 0 &&
          pokemonData.map((el, i) => <Card key={i} pokemon={el} />)}
      </div>
    </div>
  );
};

export default List;

