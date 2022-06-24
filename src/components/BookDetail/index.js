import React from "react";
import image from "../../assets/book1.jpg";
import "./style.css";
export default function BookDetail() {
  return (
    <div className="card-detail-book-container">
      <div className="img-card-book">
        <img className="image_cover_book" src={image} alt="image_cover_book" />
      </div>
      <div className="box-detail-book-container">
        <p>Art/general</p>
        <h1>While loading books, it is worth showing some kind of indicator</h1>
        <p>kareem mohamed</p>
        <div className="box-description-book">
          <h3>
            While loading books, it is worth showing some kind of indicator
          </h3>
        </div>
      </div>
    </div>
  );
}
