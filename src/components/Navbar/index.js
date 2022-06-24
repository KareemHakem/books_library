import React from "react";
import image from "../../assets/bookImage2.jpg";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";

export default function Navbar({ sortingBy, Categories, ...props }) {
  return (
    <div className="search-book-navbar-reducer">
      <img src={image} alt="image_book" className="navbar-image" />
      <div className="search-book-navbar">
        <h1 className="search-book-p"> Search for books </h1>
        <div className="search-bar-components">
          <input className="form-input" placeholder="search for book" />

          <SearchIcon style={{ color: "#000", zIndex: 100 }} />
        </div>

        <div className="form-select-input-container">
          <form>
            <label for="lang" style={{ color: "#fff", marginRight: 10 }}>
              Categories
            </label>
            <select className="form-select" name="languages" id="lang">
              <option value="javascript">{Categories}</option>
            </select>
          </form>

          <form>
            <label for="lang" style={{ color: "#fff", marginRight: 10 }}>
              sorting by
            </label>
            <select className="form-select" name="languages" id="lang">
              <option value="javascript">{sortingBy}</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
}
