import React from "react";

const rating = ({ count = 1, onRate = () => {} }) => {
  let tab = [];
  for (let i = 0; i < 5; i++) {
    if (i < count) {
      tab = [
        ...tab,
        <i
          onClick={() => {
            onRate(i + 1);
          }}
          className="fas fa-star text-danger mr-2"
        />
      ];
    } else {
      tab = [
        ...tab,
        <i
          onClick={() => {
            onRate(i + 1);
          }}
          className="fas fa-star text-dark mr-2"
        />
      ];
    }
  }
  return tab;
};

export default rating;
