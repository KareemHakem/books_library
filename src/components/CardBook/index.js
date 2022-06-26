import React from "react";

import "./style.css";

export default function CardBook({ items, handleNavigation }) {
  return (
    <>
      {items.map((item) => (
        <div
          key={item.id}
          onClick={() => handleNavigation(item.id)}
          className="box-book-detail-container"
        >
          <div className="box-book-detail">
            <img
              className="image-book-cover"
              src={item.volumeInfo.imageLinks?.thumbnail}
              alt="image_book_cover"
            />

            <div className="card-book-detail-container">
              <p className="Categories-name-book">
                {item.volumeInfo?.categories}
              </p>
              <h3> {item.volumeInfo?.title}</h3>
              <p> {item.volumeInfo?.publisher}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
