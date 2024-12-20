import * as React from 'react';

import "./BookCard.css";

// Define the props interface for BookCard
interface BookCardProps {
  image?: string;
  title: string;
  author: string;
  description?: string; 
}

const BookCard: React.FC<BookCardProps> = ({ title, author, description }) => {
  return (
    <div className="book-card">
      {/* <img src={image} alt={`${title} cover`} className="book-image" /> */}
      <div className="book-details">
        <h3 className="book-title">{title}</h3>
        <p className="book-author">by {author}</p>
        <p className="book-description">{description}</p>
        <button className="trade-button">Request Trade</button>
      </div>
    </div>
  );
};

export default BookCard;


// src/components/BookCard.jsx
// import React from 'react';
// import './Bookcard.css';

// const BookCard = ({ image, title, author, description }) => {
//   return (
//     <div className="book-card">
//       <img src={image} alt={`${title} cover`} className="book-image" />
//       <div className="book-details">
//         <h3 className="book-title">{title}</h3>
//         <p className="book-author">by {author}</p>
//         <p className="book-description">{description}</p>
//         <button className="trade-button">Trade Book</button>
//       </div>
//     </div>
//   );
// };

// export default BookCard;
