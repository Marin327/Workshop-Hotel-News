import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import Offers from '../Offers/Offers';
import HomePageForm from '../HomePageForm/HomePageForm';
import Uslugi from '../Uslugi/Uslugi';

import '../App.css';

const Home = () => {
  const homeAnimation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1000,
  });

  const [showOffers, setShowOffers] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showUslugi, setShowUslugi] = useState(false);  

  const toggleOffers = () => {
    setShowOffers(!showOffers);
    setShowForm(false);  
    setShowUslugi(false);
  };

  const toggleForm = () => {
    setShowForm(!showForm);
    setShowOffers(false);
    setShowUslugi(false); 
  };

  const toggleUslugi = () => {
    setShowUslugi(!showUslugi);
    setShowOffers(false); 
    setShowForm(false); 
  };

  return (
    <animated.div style={homeAnimation} className="home">
      <div className="stars-container">
        {Array.from({ length: 5 }, (_, index) => (
          <span key={index} className="star">★</span>
        ))}
      </div>
      <h1>Добре дошли в Хотел Парадайс</h1>
      <button onClick={toggleOffers}>Вижте текущи оферти</button>
      {showOffers && <Offers />}
      <p>Преживейте лукс и комфорт в сърцето в село Баня</p>
      <button onClick={toggleUslugi}>Нашите Услуги</button>
      {showUslugi && <Uslugi onClose={() => setShowUslugi(false)} />} 
    </animated.div>
  );
}

export default Home;
