import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="home-container">
      <div className="hero">
        <h1>WELCOME</h1>
        <a className="cta" href="#guide">
          Guide
        </a>
        <div id="pikachu">
          <a
            href="https://freepngimg.com/png/37462-pikachu-photos"
            title="Pikachu Photos from FreePNGImg.com"
          >
            <img
              src="https://freepngimg.com/thumb/pokemon/37462-2-pikachu-photos.png"
              width="400"
              alt="Pikachu Photos"
            />
          </a>
        </div>
      </div>
      <div className="info">A Pokémon theme web app!</div>
      <h2 id="guide">Navigate two sections</h2>
      <div className="card-container">
        <div className="card-text">
          <h3>Pokémon list</h3>
          <p>
            In the <strong>List section</strong>, you can see the first 20
            pokémon loaded from the PokéAPI. <br /> The order is based on the
            stage they appear in the game. <br /> If you want to see more
            Pokémon, scroll down!
          </p>
          <Link className="cta" to={`list`}>
            See all
          </Link>
        </div>
        <div className="gif-container">
          <img
            src="https://tenor.com/it/view/ash-may-max-brock-pokémon-ag-pokemon-ash-may-pokémon-pokemon-max-gif-21959516.gif"
            alt="interest-git"
          />
        </div>
      </div>
      <div className="card-container">
        <div className="card-text">
          <h3>Search form</h3>
          <p>
            In the <strong>Search section</strong>, you can use a form to look
            for your favorite Pokèmon. Type its name to found it!
          </p>
          <Link className="cta" to={`search-form`}>
            Find one
          </Link>
        </div>
        <div className="gif-container">
          <img
            src="https://tenor.com/it/view/pokemon-gif-21699432.gif"
            alt="surprise-gif"
          />
        </div>
      </div>
      <div className="info">Have fun!</div>
    </div>
  );
};

export default Welcome;
