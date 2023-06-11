import { useState } from 'react';
import axios from 'axios';

const useFetchPokemon = () => {
  const [pokemon, setPokemon] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPokemon = async (info) => {
    setError(false);
    setIsLoading(true);
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${info}`);
      setPokemon(response.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { pokemon, isLoading, error, fetchPokemon };
};

export default useFetchPokemon;