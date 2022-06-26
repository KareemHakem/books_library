import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getBooks } from "../../redux/books/action";

import CardBook from "../../components/CardBook";

import "./style.css";
import SearchBook from "../../components/SearchBook";

export default function HomeBooks() {
  const { data, loading, error } = useSelector((state) => state.books);

  const items = data?.items;
  const dispatch = useDispatch();
  const navigation = useNavigate();

  const handleNavigation = (id) => {
    navigation(`book/${id}`);
  };

  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  if (loading) return "Loading.....";
  if (error) return "error..";
  return (
    <div className="home-books-container">
      <CardBook items={items} handleNavigation={handleNavigation} />
    </div>
  );
}
