import React from "react";
import image from "../../assets/book1.jpg";
import "./style.css";

export default function CardBook() {
  return (
    <div className="box-book-detail-container">
      <div className="box-book-detail">
        <img className="image-book-cover" src={image} alt="image_book_cover" />

        <div className="card-book-detail-container">
          <p className="Categories-name-book">computer</p>
          <h1> javaScript book in react project </h1>
          <p> kareem mohamed </p>
        </div>
      </div>
    </div>
  );
}
