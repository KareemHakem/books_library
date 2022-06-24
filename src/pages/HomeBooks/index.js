import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../../redux/books/action";

import CardBook from "../../components/CardBook";

import "./style.css";

export default function HomeBooks() {
  const { items, loading, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const data = items?.items;
  console.log(data);

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (loading) return "Loading.....";
  if (error) return "error..";
  return (
    <div className="home-books-container">
      <CardBook />
    </div>
  );
}
