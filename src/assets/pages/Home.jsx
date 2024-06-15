import { useState, useEffect } from "react";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const Home = () => {
  const [equipes, setEquipes] = useState([]);

  const api_key = process.env.REACT_APP_API_KEY;

  useEffect(() => {
    const fetchEquipes = async () => {
      try {
        const response = await axios.get(
          "http://api.sportradar.com/wnba/trial/v8/en/league/teams.json",
          {
            headers: {
              Authorization: `Bearer ${api_key}`,
            },
          }
        );
        setEquipes(response.data.teams);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des équipes WNBA:",
          error
        );
      }
    };

    fetchEquipes();
  }, [api_key]);

  return (
    <div>
      <h1>Logos des équipes WNBA :</h1>
      <div className="equipes-list">
        {equipes.map((equipe) => (
          <div key={equipe.id} className="equipe-item">
            <img src={equipe.logo} alt={equipe.name} />
            <p>{equipe.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
