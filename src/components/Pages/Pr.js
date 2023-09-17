import React from "react";
import MultiActionAreaCard from "../PCard";
import Row from '../Row.js';

export const Pr = () => {
  return (
    <>
    <h1>Projects Over Procrastination</h1>
    <Row sx={{alignItems:'flex'}}>
    <MultiActionAreaCard
        image="/assets/netflix.png"
        title="EDA on Netflix Movies"
        description="Given the large number of movies and series available on the platform, it is a perfect opportunity to flex our data manipulation skills and dive into the entertainment industry.An exploratory analysis of some entertainment data is performed."
        links={[
              { text: 'Source Code', url: 'https://github.com/AadityaJain17/Datacamp-Datascience-projects/tree/main/Investigating%20Netflix%20Movies%20and%20Guest%20Stars%20in%20The%20Office' },
              ]}
      />

      <MultiActionAreaCard
        image="/assets/productivity.png"
        title="Productivity Website"
        description="Single Platform with To-Do List, Pomodoro Timer and embedded Spotify playlists for better productivity."
        links={[
              { text: 'Source Code', url: 'https://github.com/AadityaJain17/WEB-DEV-Project' },
              ]}
      />

      <MultiActionAreaCard
        image="/assets/retro.png"
        title="Retro Fighting Game"
        description="A 2P fighting game with attack and heal moves."
        links={[
              { text: 'Source Code', url: 'https://github.com/AadityaJain17/RETRO-FIGHTING-GAME' },
              ]}
      />

      <MultiActionAreaCard
        image="/assets/weather.png"
        title="Weather App"
        description="A simple weather app using APIs"
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
        image="/assets/amazon.png"
        title="Amazon Reviews WebScraper"
        description="EDA of customer reviews on a particular iPhone model. "
        links={[
              { text: 'Source Code', url: 'https://github.com/AadityaJain17/Amazon-Review-Web-Scraper' },
              ]}
      />

      <MultiActionAreaCard
        image="/assets/superhero.png"
        title="Super Hero Game"
        description="Know your Hero, find insights about your favourite hero or generate a random one."
        links={[
              { text: 'Source Code', url: 'https://github.com/AadityaJain17/Super-Hero-App' },
              ]}
      />

      <MultiActionAreaCard
        image="/assets/rps.png"
        title="Rock-Paper-Scissor-Game"
        description="The OG project for practicing your skills."
        links={[
              { text: 'Source Code', url: 'https://github.com/AadityaJain17/ROCK-PAPER-SCISSORS-GAME ' },
              ]}
      />

      <MultiActionAreaCard
        image="/assets/tip.png"
        title="Tip Calculator"
        description="An advanced tip calculator which even splits the bill."
        links={[
              { text: 'Source Code', url: 'https://github.com/AadityaJain17/Tip-Calculator' },
              ]}
      />

      <MultiActionAreaCard
        image="/assets/resources.png"
        title="Other Resources"
        description="Find most of the required resources here."
        links={[
              { text: 'Source Code', url: 'https://github.com/AadityaJain17/Resources' },
              ]}
      />

    </Row>
    </>
  );
};
