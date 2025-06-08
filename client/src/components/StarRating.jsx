import React from 'react';
import { assets } from '../assets/assets'; // Make sure this path is correct

const StarRating = ({ rating = 5 }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <img
        key={i}
        src={i <= rating ? assets.starIconFilled : assets.starIconOutlined}
        alt="star"
        className="w-5 h-5"
      />
    );
  }

  return <div className="flex items-center gap-1">{stars}</div>;
};

export default StarRating;
