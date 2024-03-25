import React from 'react';
import '../App.css';

const News = () => {
  const newsList = [
    {
      title: 'Специална оферта',
      content: 'Резервирайте престой от 3 нощувки и вземете безплатен масаж в спа центъра.',
    },
    {
      title: 'Изискано меню',
      content: 'Насладете се на новото изискано меню в нашия ресторант.',
    },
  ];

  return (
    <div className="news-container"> 
      <ul className="news-list">
        {newsList.map((news, index) => (
          <li key={index} className="news-item">
            <h3>{news.title}</h3>
            <p>{news.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;