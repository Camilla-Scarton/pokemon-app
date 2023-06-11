import { useState } from "react";
import axios from "axios";

const useFetchPokemonOnScroll = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  let pageNumber = -1;

  async function fetchPokemon() {
    setError(false);
    setIsLoading(true);
    try {
      pageNumber++;
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pageNumber * 20}`
      );
      const urls = response.data.results.map((result) => result.url);
      const details = await fetchPokemonDetails(urls);

      setPokemonData((prevData) => [...prevData, ...details]);

    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  function fetchPokemonDetails(urls) {
    const details = Promise.all(
      urls.map(async (url) => {
        const result = await axios.get(url);
        return result.data;
      })
    );
    return details;
  }

  function handleScroll() {
    let isEndPage =
      window.innerHeight + window.scrollY >=
      document.documentElement.offsetHeight;
    if (isEndPage) fetchPokemon();
  }

  return { fetchPokemon, handleScroll, pokemonData, isLoading, error };
};

export default useFetchPokemonOnScroll;
