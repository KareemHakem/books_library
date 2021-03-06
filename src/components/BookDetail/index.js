import React from "react";

import "./style.css";

export default function BookDetail({ volumeInfo }) {
  return (
    <div className="card-detail-book-container">
      <div className="img-card-book">
        <img
          className="image_cover_book"
          src={
            volumeInfo.imageLinks?.large ||
            volumeInfo.imageLinks?.thumbnail ||
            volumeInfo.imageLinks?.smallThumbnail
          }
          alt="image_cover_book"
        />
      </div>
      <div className="box-detail-book-container">
        <p>
          {volumeInfo.printType}/{volumeInfo.language}
        </p>
        <h1>{volumeInfo?.title}</h1>
        <p>{volumeInfo?.publisher}</p>
        <div className="box-description-book">
          <h3>
            {volumeInfo.description?.length > 190
              ? volumeInfo.description?.substring(0, 190 - 3) + "..."
              : volumeInfo.description}
          </h3>
        </div>
      </div>
    </div>
  );
}
