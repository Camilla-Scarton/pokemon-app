import { useEffect } from "react";
import useFetchPokemonOnScroll from "../hooks/useFetchPokemonOnScroll";

const CardList = (pokemon) => {
  const { name } = pokemon;
}

const List = () => {
  const { fetchPokemon, handleScroll, pokemonData, isLoading, error } = useFetchPokemonOnScroll();
  
  useEffect(() => {
    fetchPokemon();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  console.log(pokemonData)
  return (
    <div className="list-container">
      
      {pokemonData.map((poke,i) => <div key={i}>{poke.name}</div> )} 
      {pokemonData && <div>ho i dati</div>}
      {isLoading && <div>caricamento</div>}
      {error && <div>error</div>}
    </div>
  );
}

export default List;
