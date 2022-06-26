import React from "react";

import "./style.css";

export default function BookDetail({ volumeInfo }) {
  return (
    <div className="card-detail-book-container">
      <div className="img-card-book">
        <img
          className="image_cover_book"
          src={volumeInfo.imageLinks?.large}
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
          <h3>{volumeInfo?.title}</h3>
        </div>
      </div>
    </div>
  );
}
