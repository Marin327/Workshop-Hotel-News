import React, { useState } from 'react';
import '../App.css';

const roomsData = [
  {
    id: 1,
    name: 'Стая Поляни',
    images: ['images30.jpg', 'images28.jpg'],
    price: '120 лв. на нощ',
  },
  {
    id: 2,
    name: 'Стая Синя Лагуна',
    images: ['images19.jpg', 'images23.jpeg'],
    price: '150 лв. на нощ',
  },
  {
    id: 3,
    name: 'Стая планини',
    images: ['images12.jpg', 'images31.jpg'],
    price: '130 лв. на нощ',
  },
  {
    id: 4,
    name: 'Стая Оранжев оазис',
    images: ['images24.jpg', 'images33.jpg',],
    price: '140 лв. на нощ',
  },
  {
    id: 5,
    name: 'Стая Лилаво',
    images: ['images34.jpg', 'images35.jpg'],
    price: '160 лв. на нощ',
  },
  {
    id: 6,
    name: 'Стая Дърво',
    images: ['images36.jpg', 'images37.jpg'],
    price: '180 лв. на нощ',
  },
  {
    id: 7,
    name: 'Стая Магически лес',
    images: ['images39.jpg', 'images40.jpg'],
    price: '170 лв. на нощ',
  },
  {
    id: 8,
    name: 'Стая Уединение',
    images: ['images41.jpg', 'images42.jpg'],
    price: '200 лв. на нощ',
  },
  {
    id: 9,
    name: 'Стая Осъденени',
    images: ['images45.jpg', 'images44.jpg'],
    price: '160 лв. на нощ',
  },
  {
    id: 10,
    name: 'Стая Екзотичен рай',
    images: ['images46.jpg', 'images47.jpg'],
    price: '190 лв. на нощ',
  },
  {
    id: 11,
    name: 'Стая Скалите',
    images: ['images49.jpg', 'images50.jpg'],
    price: '150 лв. на нощ',
  },
  {
    id: 12,
    name: 'Стая Лилава мечта',
    images: ['images51.jpg', 'images52.png'],
    price: '180 лв. на нощ',
  },
  {
    id: 13,
    name: 'Стая Воден рай',
    images: ['images53.jpg', 'images54.jpg'],
    price: '200 лв. на нощ',
  },
  {
    id: 14,
    name: 'Стая Ловна',
    images: ['images55.jpg', 'images56.jpg'],
    price: '190 лв. на нощ',
  },
  {
    id: 15,
    name: 'Стая Магичен връх',
    images: ['images58.jpg', 'images57.jpg'],
    price: '210 лв. на нощ',
  },
] 
const Room = ({ room }) => {
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleReservation = () => {
    setShowSuccessMessage(true);
    setTimeout(() => {
      setShowSuccessMessage(false);
    }, 5000);
  };

  return (
    <div className="room">
      <h3>{room.name}</h3>
      <img src={`/images/${room.images[0]}`} alt={room.name} />
      <p>{room.price}</p>
      <button onClick={handleReservation}>Резервирай</button>

      {/* Форма за успешно направена резервация */}
      {showSuccessMessage && (
        <div className="success-form">
          <div className="success-message">
            <p>Успешно направена резервация за {room.name}!</p>
          </div>
        </div>
      )}
    </div>
  );
};

const Rooms = () => {
  return (
    <div className="rooms">
      <h2>Преживейте Изключителното Удоволствие в Нашите Стаи</h2>
      <p>Те са проектирани за вашето удоволствие и уют!</p>

      <div className="rooms-container">
        {roomsData.map((room) => (
          <Room key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;