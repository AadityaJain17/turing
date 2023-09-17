import React from "react";
import MultiActionAreaCard from "../PCard";
import Row from '../Row.js';
import Column from '../Column.js';

export const Pr = () => {
  return (
    <>
    <h1>Projects & Resources</h1>
    <Row sx={{alignItems:'flex'}}>
    <MultiActionAreaCard
        image="/assets/netflix.png"
        title="Super Hero App"
        description="Given the large number of movies and series available on the platform, it is a perfect opportunity to flex our data manipulation skills and dive into the entertainment industry.An exploratory analysis of some entertainment data is performed."
        links={[
              { text: 'Source Code', url: 'https://github.com/AadityaJain17/Datacamp-Datascience-projects/tree/main/Investigating%20Netflix%20Movies%20and%20Guest%20Stars%20in%20The%20Office' },
              ]}
      />

      <MultiActionAreaCard
        image="/assets/productivity.png"
        title="Productivity Website"
        description="Single Platform with To-Do List, Pomodoro Timer and Spotify Support for 100% focus while working."
        links={[
              { text: 'Source Code', url: 'https://github.com/AadityaJain17/WEB-DEV-Project' },
              ]}
      />

      <MultiActionAreaCard
        image="/assets/retro.png"
        title="Retro Fighting Game"
        description="K.O. - Game Over"
        links={[
              { text: 'Source Code', url: 'https://github.com/AadityaJain17/RETRO-FIGHTING-GAME' },
              ]}
      />

      <MultiActionAreaCard
        image="/assets/weather.png"
        title="Weather App"
        description="A simple weather app using Api"
        links={[
              { text: 'Source Code', url: 'https://github.com/AadityaJain17/WEATHER-API-APP' },
              ]}
      />

      <MultiActionAreaCard
        image="/assets/imdb.png"
        title="IMDB Movies WebScraper"
        description="Web scraping of top 250 IMDB movies and saving into csv file. GUI also available with streamlit"
        links={[
              { text: 'Source Code', url: 'https://github.com/AadityaJain17/IMDBwebscraper' },
              ]}
      />

    </Row>
    <Row sx={{alignItems:'flex'}}>
    <MultiActionAreaCard
        image="/assets/netflix.png"
        title="Super Hero App"
        description="Given the large number of movies and series available on the platform, it is a perfect opportunity to flex our data manipulation skills and dive into the entertainment industry.An exploratory analysis of some entertainment data is performed."
        links={[
              { text: 'Source Code', url: 'https://github.com/AadityaJain17/Datacamp-Datascience-projects/tree/main/Investigating%20Netflix%20Movies%20and%20Guest%20Stars%20in%20The%20Office' },
              ]}
      />

      <MultiActionAreaCard
        image="/assets/productivity.png"
        title="Productivity Website"
        description="Single Platform with To-Do List, Pomodoro Timer and Spotify Support for 100% focus while working."
        links={[
              { text: 'Source Code', url: 'https://github.com/AadityaJain17/WEB-DEV-Project' },
              ]}
      />

      <MultiActionAreaCard
        image="/assets/retro.png"
        title="Retro Fighting Game"
        description="K.O. - Game Over"
        links={[
              { text: 'Source Code', url: 'https://github.com/AadityaJain17/RETRO-FIGHTING-GAME' },
              ]}
      />

      <MultiActionAreaCard
        image="/assets/weather.png"
        title="Weather App"
        description="A simple weather app using Api"
        links={[
              { text: 'Source Code', url: 'https://github.com/AadityaJain17/WEATHER-API-APP' },
              ]}
      />

      <MultiActionAreaCard
        image="/assets/imdb.png"
        title="IMDB Movies WebScraper"
        description="Web scraping of top 250 IMDB movies and saving into csv file. GUI also available with streamlit"
        links={[
              { text: 'Source Code', url: 'https://github.com/AadityaJain17/IMDBwebscraper' },
              ]}
      />

    </Row>
    </>
  );
};
