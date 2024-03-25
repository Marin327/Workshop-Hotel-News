import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import '../App.css';

const Offers = () => {
  const [showOffers, setShowOffers] = useState(true);

  const offersAnimation = useSpring({
    opacity: showOffers ? 1 : 0,
    from: { opacity: 0 },
    delay: 500,
  });

  const handleClose = () => {
    setShowOffers(false);
  };

  return (
    <>
      {showOffers && (
        <animated.div style={offersAnimation} className="offers">
          <h2>Текущи Оферти и Промоции</h2>
          <div className="offer-list">
            <div className="offer">
              <h3>Лятна Ваканция</h3>
              <p>Резервирайте сега и получете специална отстъпка за лятна ваканция. Валидно до 31 август.</p>
            </div>
            <div className="offer">
              <h3>Романтичен Уикенд</h3>
              <p>Изненадайте любимия човек с романтичен уикенд в Хотел Парадайс. Валидно през цялата година.</p>
          <button className="close-button" onClick={handleClose}>Затвори</button>
            </div>
            {/* Добавете още оферти по ваш избор */}
          </div>
        </animated.div>
      )}
    </>
  );
}

export default Offers;