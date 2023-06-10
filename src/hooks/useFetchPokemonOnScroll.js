import { useEffect, useState } from "react";
import axios from "axios";

const useFetchPokemonOnScroll = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [pageNumber, setPageNumber] = useState(0);

  async function fetchPokemon() {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?limit=20&offset=${pageNumber * 20}`
      );
      const urls = response.data.results.map((result) => result.url);
      const details = await fetchPokemonDetails(urls);

      setPokemonData((prevData) => [...prevData, ...details]);

      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }

    return pokemonData;
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
    if (isEndPage) {
        setPageNumber((prevNumber) => prevNumber + 1);
        fetchPokemon();
    }
  }

  return { fetchPokemon, handleScroll, pokemonData, isLoading, error };
};

export default useFetchPokemonOnScroll;
