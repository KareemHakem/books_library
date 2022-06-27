import React from "react";
import "./style.css";

export default function CardBook({ items, handleNavigation }) {
  return (
    <>
      <div
        key={items.id}
        onClick={() => handleNavigation(items.id)}
        className="box-book-detail-container"
      >
        <div className="box-book-detail">
          <img
            className="image-book-cover"
            src={items.volumeInfo.imageLinks?.thumbnail}
            alt="image_book_cover"
          />

          <div className="card-book-detail-container">
            <p className="Categories-name-book">
              {items.volumeInfo?.categories}
            </p>

            <h3>
              {items.volumeInfo?.title.length > 20
                ? items.volumeInfo?.title.substring(0, 20 - 3) + "..."
                : items.volumeInfo?.title}
            </h3>
            <p className="book_publisher"> {items.volumeInfo?.publisher}</p>
          </div>
        </div>
      </div>
    </>
  );
}
