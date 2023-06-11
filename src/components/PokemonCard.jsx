const Card = (pokemon) => {
    const {
      abilities,
      base_experience,
      height,
      id,
      name,
      sprites,
      types,
      weight,
    } = pokemon.pokemon;
  
    let formattedTypes = types.map((el) => {
      let word = el.type.name;
      return word[0].toUpperCase() + word.slice(1);
    });
  
    let formattedAbilities = abilities.map((el) => {
      let word = el.ability.name;
      return word[0].toUpperCase() + word.slice(1);
    });
  
    return (
      <div className="card">
        <h3>
          #{id} {name[0].toUpperCase() + name.slice(1)}
        </h3>
        <img src={sprites.front_default} alt="front-pokemon" />
        <div className="text">
          <div>
            Height: <strong>{height}</strong> | Weight: <strong>{weight}</strong>
          </div>
          <div>
            Base experience: <strong>{base_experience}</strong>
          </div>
          <div className="types">
            Types:{" "}
            {formattedTypes.map((el, i) => (
              <span key={i}>
                {el + `${i + 1 != formattedTypes.length ? "," : "."}`}
              </span>
            ))}
          </div>
          <div className="abilities">
            Abilities:{" "}
            {formattedAbilities.map((el, i) => (
              <span key={i}>
                {el + `${i + 1 != formattedAbilities.length ? "," : "."}`}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  export default Card;
