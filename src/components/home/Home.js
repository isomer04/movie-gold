import React from "react";
import Hero from '../hero/Hero';

const Home = ({movies}) => {
  return (
    <div>
        <h2>Jellp</h2>
    <Hero movies = {movies} />

    </div>
  )
}

export default Home
