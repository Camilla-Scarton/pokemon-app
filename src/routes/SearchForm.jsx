import { useState } from "react";
import useFetchPokemon from "../hooks/useFetchPokemon";
import Card from "../components/PokemonCard";

const SearchForm = () => {
  const { pokemon, isLoading, error, fetchPokemon } = useFetchPokemon();

  const [form, setForm] = useState({
    info: "",
  });

  function handleChange(evt) {
    const { name, value } = evt.target;
    setForm((form) => ({ ...form, [name]: value }));
  }

  function onSubmit(evt) {
    evt.preventDefault();
    fetchPokemon(form.info);
    setForm({
      info: "",
    });
  }

  return (
    <div className="search-form-container">
      <h2>Search form</h2>
      <form onSubmit={onSubmit}>
        <label htmlFor="info">
          <span>Pokémon number or name:</span>
          <input
            id="info"
            name="info"
            placeholder="1, 2 or picachu..."
            value={form.info}
            type="text"
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Search</button>
      </form>
      {error && <h2>Error! Number or name is not correct or existing!</h2>}
      {isLoading && <h2>Loading...</h2>}
      {!error && !isLoading && pokemon && (
        <div>
          <h2>Pokémon found</h2>
          <div className="list">{pokemon && <Card pokemon={pokemon} />}</div>
        </div>
      )}
    </div>
  );
};

export default SearchForm;
